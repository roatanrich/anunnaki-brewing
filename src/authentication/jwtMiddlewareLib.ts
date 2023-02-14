import { NextFunction, Request, Response } from 'express';
import { decodeSession } from './jwtDecodeLib';
import { encodeSession } from './jwtEncodeLib';
import {
  DecodeResultType,
  ExpirationStatusType,
  IJwtSession,
} from './jwtInterfaces';
import { checkExpirationStatus } from './jwtVerifyLib';

/**
 *
 * Express middleware, checks for a valid JSON Web Token and returns 401 Unauthorized if one isn't found.
 * https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node
 *
 */
export function requireJwtMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const unauthorized = (message: string) =>
    response.status(401).json({
      ok: false,
      status: 401,
      message: message,
    });

  const requestHeader = 'X-JWT-Token';
  const responseHeader = 'X-Renewed-JWT-Token';
  const secret: string = String(process.env.JWT_SECRET_KEY);
  const header = request.header(requestHeader);

  if (!header) {
    unauthorized(`Required ${requestHeader} header not found.`);
    return;
  }

  const decodedSession: DecodeResultType = decodeSession(secret, header);

  if (
    decodedSession.type === 'integrity-error' ||
    decodedSession.type === 'invalid-token'
  ) {
    unauthorized(
      `Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`,
    );
    return;
  }

  const expiration: ExpirationStatusType = checkExpirationStatus(
    decodedSession.session,
  );

  if (expiration === 'expired') {
    unauthorized(
      `Authorization token has expired. Please create a new authorization token.`,
    );
    return;
  }

  let session: IJwtSession;

  if (expiration === 'grace') {
    // Automatically renew the session and send it back with the response
    const { token, expires, issued } = encodeSession(
      secret,
      decodedSession.session,
    );
    session = {
      ...decodedSession.session,
      expires: expires,
      issued: issued,
    };

    response.setHeader(responseHeader, token);
  } else {
    session = decodedSession.session;
  }

  // Set the session on response.locals object for routes to access
  response.locals = {
    ...response.locals,
    session: session,
  };

  // Request has a valid or renewed session. Call next to continue to the authenticated route handler
  next();
}

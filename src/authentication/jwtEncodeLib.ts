import { encode, TAlgorithm } from 'jwt-simple';
import { IEncodeResult, IJwtSession, PartialJwtSession } from './jwtInterfaces';

export function encodeSession(
  secretKey: string,
  partialSession: PartialJwtSession,
): IEncodeResult {
  // Always use HS512 to sign the token
  const algorithm: TAlgorithm = 'HS512';
  // Determine when the token should expire
  const issued = Date.now();
  const fifteenMinutesInMs = 15 * 60 * 1000;
  const expires = issued + fifteenMinutesInMs;
  const session: IJwtSession = {
    ...partialSession,
    issued: issued,
    expires: expires,
  };

  return {
    token: encode(session, secretKey, algorithm),
    issued: issued,
    expires: expires,
  };
}

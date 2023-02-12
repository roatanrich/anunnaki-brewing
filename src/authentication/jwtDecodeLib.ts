import { decode, TAlgorithm } from 'jwt-simple';
import { DecodeResultType } from './jwtInterfaces';

export function decodeSession(
  secretKey: string,
  tokenString: string,
): DecodeResultType {
  // Always use HS512 to decode the token
  const algorithm: TAlgorithm = 'HS512';

  let result: any;

  try {
    result = decode(tokenString, secretKey, false, algorithm);
  } catch (ex: any) {
    const e: Error = ex;

    // These error strings can be found here:
    // https://github.com/hokaccha/node-jwt-simple/blob/c58bfe5e5bb049015fcd55be5fc1b2d5c652dbcd/lib/jwt.js
    if (
      e.message === 'No token supplied' ||
      e.message === 'Not enough or too many segments'
    ) {
      return {
        type: 'invalid-token',
        session: result,
      };
    }

    if (
      e.message === 'Signature verification failed' ||
      e.message === 'Algorithm not supported'
    ) {
      return {
        type: 'integrity-error',
        session: result,
      };
    }

    // Handle json parse errors, thrown when the payload is nonsense
    if (e.message.indexOf('Unexpected token') === 0) {
      return {
        type: 'invalid-token',
        session: result,
      };
    }

    throw e;
  }

  return {
    type: 'valid',
    session: result,
  };
}

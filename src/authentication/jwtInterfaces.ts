export interface IJwtUser {
  id: number;
  dateCreated: number;
  username: string;
  password: string;
}

export interface IJwtSession {
  id: number;
  dateCreated: number;
  username: string;
  apiKey: string;
  roles: String[];

  // Timestamp indicating when the session was created, in Unix milliseconds.
  issued: number;

  // Timestamp indicating when the session should expire, in Unix milliseconds.
  expires: number;
}

/**
 * Identical to the Session type, but without the `issued` and `expires` properties.
 */
export type PartialJwtSession = Omit<IJwtSession, 'issued' | 'expires'>;

export interface IEncodeResult {
  token: string;
  expires: number;
  issued: number;
}

export type DecodeResultType =
  | {
      type: 'valid';
      session: IJwtSession;
    }
  | {
      type: 'integrity-error';
      session: IJwtSession;
    }
  | {
      type: 'invalid-token';
      session: IJwtSession;
    };

export type ExpirationStatusType = 'expired' | 'active' | 'grace';

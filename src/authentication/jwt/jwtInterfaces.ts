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

export interface IDisplayDate {
  createdDate: Date;
  remainingTime: Date;
  message: string;
}

//Identical to the IJwtSession type, but without the `issued` and `expires` properties.
export type PartialJwtSession = Omit<IJwtSession, 'issued' | 'expires'>;

//Identical to the IJwtSession type, but without the `issued` and including IDisplayDate properties
export type DisplayJwtSession = Omit<IJwtSession, 'issued'> & IDisplayDate;

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

import userData from '../../data/sample/userData';
import UserModel from '../../src/models/UserModel';
import { decodeSession } from '../authentication/jwtDecodeLib';
import { encodeSession } from '../authentication/jwtEncodeLib';
import {
  DecodeResultType,
  IEncodeResult,
  IJwtSession,
} from '../authentication/jwtInterfaces';
import dateDiff from '../lib/datetimeLib';
import log from '../lib/loggerLib';

const authService = {
  async verifyUser(req: any) {
    const username = req.body.username;
    const password = req.body.password;

    log.debug(`List of Users ${userData}`);

    let user: UserModel = userData.filter(
      (x) => x.username === username && x.password === password,
    )[0];

    if (user.id === undefined) {
      log.error(`Unknown User ${username}`);
      throw new Error(`Unknown User ${username}`);
    }

    const secret = String(process.env.JWT_SECRET_KEY);
    const session: IEncodeResult = encodeSession(secret, {
      id: user.id,
      username: user.username,
      dateCreated: Date.now(),
      apiKey: user.api_key,
      roles: user.roles,
    });

    log.debug(`Session Token: ${session.token}`);

    return session;
  },
  async inspectToken(token: string) {
    log.debug(`Inspecting token ${token}`);

    const secret: string = String(process.env.JWT_SECRET_KEY);
    const resultType: DecodeResultType = decodeSession(secret, token);

    let result: any;
    if (resultType.type !== 'valid') {
      result = `Invalid Token - ${resultType.type}`;
    } else {
      let session: IJwtSession = resultType.session;

      result = {
        id: session.id,
        dateCreated: 0,
        username: session.username,
        apiKey: session.apiKey,
        createdDate: new Date(session.dateCreated),
        expires: new Date(session.expires),
        remainingTime: dateDiff(new Date(session.dateCreated)),
        message: `Token good for ${process.env.JWT_EXPIRE_MINUTES} minutes`,
        roles: session.roles,
      };
    }

    return result;
  },
};

export default authService;

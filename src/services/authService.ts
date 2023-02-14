import userData from '../../data/sample/userData';
import UserModel from '../../src/models/UserModel';
import { decodeSession } from '../authentication/jwtDecodeLib';
import { encodeSession } from '../authentication/jwtEncodeLib';
import {
  DecodeResultType,
  IEncodeResult,
} from '../authentication/jwtInterfaces';
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
    const result = resultType.session;

    return result;
  },
};

export default authService;

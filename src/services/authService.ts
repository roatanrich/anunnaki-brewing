import userData from '../../data/sample/userData';
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

    if (username == undefined || password == undefined) {
      log.error('Invalid request');
      throw new Error('Invalid request');
    }

    const user: any = userData.filter((x) => {
      x.username == username && x.password == password;
    });

    if (user == undefined) {
      log.error('User not found');
      throw new Error('User not found');
    }

    log.debug(`Found user ${user.first_name} ${user.last_name}`);

    const secret = String(process.env.JWT_SECRET_KEY);
    const session: IEncodeResult = encodeSession(secret, {
      id: user.id,
      username: user.username,
      dateCreated: Date.now(),
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

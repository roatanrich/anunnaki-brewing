import { IEncodeResult } from '../authentication/jwt/jwtInterfaces';
import log from '../lib/loggerLib';
import authService from '../services/authService';

const authController = {
  async loginUser(req: any, res: any) {
    log.debug(`Executing route: ${req.route.path}`);

    try {
      let session: IEncodeResult = await authService.verifyUser(req);

      //const session: IJwtSession = res.locals.session;

      return res.status(200).json({ data: session.token });
    } catch (error) {
      return res.status(401).json({ data: 'Unauthorized' });
    }
  },
  async inspectToken(req: any, res: any) {
    log.debug(`Executing route: ${req.route.path}`);

    try {
      let session = await authService.inspectToken(req.params.token);

      return res.status(200).json({ data: session });
    } catch (error) {
      return res.status(401).json({ data: 'Unauthorized' });
    }
  },
};

export default authController;

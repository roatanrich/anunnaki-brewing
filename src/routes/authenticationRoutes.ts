import express from 'express';
import { encodeSession } from '../authentication/jwtEncodeLib';
import { IEncodeResult, IJwtSession } from '../authentication/jwtInterfaces';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/login/:
 *   post:
 *     tags:
 *     - Authorization
 *     summary: Login to the API server using Auth0
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.post('/v1/api/login', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  res.send('Login Successful');
});

/**
 * @openapi
 * /v1/api/access-token/:
 *   get:
 *     tags:
 *     - Authorization
 *     summary: Gets a JWT token to be used in subsequent API calls
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/access-token', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  const secret = String(process.env.JWT_SECRET_KEY);

  // This route is unprotected, anybody can call it
  // TODO: Validate username/password
  const session: IEncodeResult = encodeSession(secret, {
    id: 1,
    username: 'rhenry',
    dateCreated: Date.now(),
  });

  log.debug(`Session Token: ${session.token}`);

  res.status(201).json(session);
});

/**
 * @openapi
 * /v1/api/protected/:
 *   get:
 *     tags:
 *     - Authorization
 *     summary: The request can only be accessed with a valid JWT token
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/protected', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  // The auth middleware protects this route and sets res.locals.session which can be accessed here
  const session: IJwtSession = res.locals.session;
  log.debug(`Session Data: ${session}`);

  res.status(200).json({ message: `Your username is ${session.username}` });
});

export default router;

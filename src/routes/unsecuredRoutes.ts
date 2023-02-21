import express from 'express';
import authController from '../controllers/authController';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/login/:
 *  post:
 *    tags:
 *      - Unsecured
 *    summary: "Returns Authorization Token"
 *    description: "Authorizes default users with username and password set as root to use the endpoints"
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              username: "roatanrich@gmail.com"
 *              password: "Passw0rd"
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Authorization token
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *            example:
 *              data: token value
 *      401:
 *        description: Unauthorized
 *
 */
router.post('/v1/api/login', authController.loginUser);

/**
 * @openapi
 * /v1/api/verify/{token}:
 *  get:
 *     tags:
 *     - Unsecured
 *     summary: Verifies a users token
 *     description: "Once a user has been authenticated, they can inspect the contents of the token using this API call. NOTE: For DEV and TEST environments only"
 *     parameters:
 *      - name: token
 *        in: path
 *        description: The token received after a successful login
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: string
 *       400:
 *         description: Invalid Token
 */
router.get('/v1/api/verify/:token', (req, res) => {
  authController.inspectToken(req, res);
});

/**
 * @openapi
 * /v1/api/ping/:
 *   get:
 *     tags:
 *     - Unsecured
 *     summary: Pings the API server
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/ping', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  res.send('Ping Successful');
});

export default router;

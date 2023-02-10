import express from 'express';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/login/:
 *   post:
 *     tags:
 *     - Login
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

export default router;

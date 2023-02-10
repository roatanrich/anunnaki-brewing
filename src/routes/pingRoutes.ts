import express from 'express';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /v1/api/ping/:
 *   get:
 *     tags:
 *     - Ping
 *     summary: Pings the API server
 *     security:
 *     - BearerAuth: []
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

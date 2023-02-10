import express from 'express';
import log from '../lib/loggerLib';

const router = express.Router();

/**
 * @openapi
 * /ping/:
 *   get:
 *     tags:
 *     - Ping
 *     summary: Pings the API server
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/ping', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  res.send('Ping Successful');
});

export default router;

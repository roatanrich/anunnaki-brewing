import express from 'express'
import logger from '../lib/logger'

const router = express.Router()

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
router.get("/ping", (_, res) => {
  logger.debug("Ping API was executed");

  res.send("Ping Successful");
});

export default router
import express from 'express'
import logger from '../lib/loggerLib'

const router = express.Router()

/**
 * @openapi
 * /login/:
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
router.post("/login", (_, res) => {
  logger.debug("Login API was executed");

  res.send("Login Successful");
});

export default router
import express from 'express'
import cryptoPriceLib from '../lib/cryptoPriceLib'
import logger from '../lib/loggerLib'
const router = express.Router()

/**
 * @openapi
 * /crypto/:
 *   get:
 *     tags:
 *     - Crypto
 *     summary: Gets a list of crypto prices
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get("/crypto", (_, res) => {
  logger.debug("Crypto API was executed");

  const list = cryptoPriceLib()
  logger.info(list);

  res.send(list);
});

export default router
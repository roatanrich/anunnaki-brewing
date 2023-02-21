import express from 'express';
import fetch from 'node-fetch';
import jwtMiddleware from '../authentication/jwt/jwtMiddlewareLib';
import log from '../lib/loggerLib';
import format from '../lib/stringFormatterLib';

const router = express.Router();
router.use('/v1/api/crypto', jwtMiddleware);

//secured routes

/**
 * @openapi
 * /v1/api/crypto/:
 *   get:
 *     tags:
 *     - Crypto
 *     summary: Gets a list of crypto prices
 *     security:
 *     - bearerAuth: []
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/api/crypto', async (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  // The auth middleware protects this route and sets res.locals.session which can be accessed here
  //const session: IJwtSession = res.locals.session;
  //log.debug(`Session: ${session.username}`);

  //const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
  //const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,XRP,NEXO,NANO,DFI,ETH,SOL,DASH,AVAX,MATIC';

  const url =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,52,2694,1567,5804,1027,5426,131,5805,3890';

  // const circuitBreaker = new CircuitBreaker(url);

  // setInterval(() => {
  //   circuitBreaker.exec().then(console.log).catch(console.error);
  // }, 1000);

  try {
    const response: any = await fetch(url, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.API_KEY_CMC}`,
      },
    });
    const jsonData: any = await response.json();
    let priceList: string[] = [];
    priceList.push(format(jsonData, '1'));
    priceList.push(format(jsonData, '52'));
    priceList.push(format(jsonData, '2694'));
    priceList.push(format(jsonData, '1567'));
    priceList.push(format(jsonData, '5804'));
    priceList.push(format(jsonData, '1027'));
    priceList.push(format(jsonData, '5426'));
    priceList.push(format(jsonData, '131'));
    priceList.push(format(jsonData, '5805'));
    priceList.push(format(jsonData, '3890'));

    res.json(priceList);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;

import axios from 'axios'
import 'dotenv/config'
import cryptoData from '../../crypto-list.json'
import logger from '../lib/loggerLib'

 const symbolString :string = cryptoData['crypto-list'].map(function(x) {
   return x;
 }).join(',');

//https://pro-api.coinmarketcap.com/v1/cryptocurrency/map
//https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?id=1`

const cryptoList = function getCoinMarketCapData() {

    const options = {
        method: 'GET',
        url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`,
        params: { id: symbolString},
        headers: {
          'X-CMC_PRO_API_KEY': `${process.env.API_KEY_CMC}`
        },
    };
    axios
        .request(options)
      .then(function (response: any) {  
          logger.debug(response.data)
          return response.data 
        })
        .catch(function (error: Error) {
            logger.error(`ERROR FROM COINMARKETCAP\n${error}`);
        });
}

export default cryptoList

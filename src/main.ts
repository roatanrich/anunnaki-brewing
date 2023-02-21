import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morganMiddleware from './config/morganConfig';
import swaggerConfig from './config/swaggerConfig';
import log from './lib/loggerLib';
import brewingRoutes from './routes/brewingRoutes';
import cryptoRoutes from './routes/cryptoRoutes';
import unsecuredRoutes from './routes/unsecuredRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware);
app.use(unsecuredRoutes);
app.use(brewingRoutes);
app.use(cryptoRoutes);

swaggerConfig(app);

app.get('/', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);
  if (process.env.NODE_ENV === 'development') {
    res.redirect(`http://localhost:${process.env.PORT}/api-docs`);
  } else {
    res.redirect(`/api-docs`);
  }
});

app.listen(process.env.PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    log.debug(`${process.env.MESSAGE} http://localhost:${process.env.PORT}`);
  }
  log.debug(`Environment: ${process.env.NODE_ENV}`);
});

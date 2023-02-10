import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morganMiddleware from './config/morganConfig';
import swaggerConfig from './config/swaggerConfig';
import logger from './lib/loggerLib';
import authRoutes from './routes/authenticationRoutes';
import cryptoRoutes from './routes/cryptoRoutes';
import hopRouter from './routes/hopRoutes';
import pingRouter from './routes/pingRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware);
app.use(hopRouter);
app.use(pingRouter);
app.use(authRoutes);
app.use(cryptoRoutes);

swaggerConfig(app);

app.get('/', (_, res) => {
  res.redirect(`http://localhost:${process.env.PORT}/ping`);
});

app.listen(process.env.PORT, () => {
  logger.debug(`${process.env.MESSAGE} http://localhost:${process.env.PORT}`);
  logger.debug(`Environment: ${process.env.NODE_ENV}`);
});

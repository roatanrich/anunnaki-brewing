import cors from 'cors';
import 'dotenv/config';
import express from 'express';
//import { requireJwtMiddleware } from './authentication/jwtMiddlewareLib';
import morganMiddleware from './config/morganConfig';
import swaggerConfig from './config/swaggerConfig';
import log from './lib/loggerLib';
import authRoutes from './routes/authRoutes';
import categoryRouter from './routes/categoryRoutes';
import cryptoRoutes from './routes/cryptoRoutes';
import fermentableRouter from './routes/fermentableRoutes';
import hopRouter from './routes/hopRoutes';
import pingRouter from './routes/pingRoutes';
import recipeRouter from './routes/recipeRoutes';
import styleRouter from './routes/styleRoutes';
import yeastRouter from './routes/yeastRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware);
//app.use(authRoutes, requireJwtMiddleware);
app.use(authRoutes);
app.use(hopRouter);
app.use(pingRouter);
app.use(cryptoRoutes);
app.use(fermentableRouter);
app.use(categoryRouter);
app.use(styleRouter);
app.use(yeastRouter);
app.use(recipeRouter);

swaggerConfig(app);

app.get('/', (req, res) => {
  log.debug(`Executing route: ${req.route.path}`);

  res.redirect(`http://localhost:${process.env.PORT}/api-docs`);
});

app.listen(process.env.PORT, () => {
  log.debug(`${process.env.MESSAGE} http://localhost:${process.env.PORT}`);
  log.debug(`Environment: ${process.env.NODE_ENV}`);
});

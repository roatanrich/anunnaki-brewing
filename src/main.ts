import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morganMiddleware from './config/morganMiddleware'
import swaggerConfig from './config/swaggerConfig'
import Logger from "./lib/logger"
import hopRouter from './routes/hopRoutes'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware)
app.use(hopRouter)

swaggerConfig(app)

app.get("/", (_, res) => {  
  res.redirect(`http://localhost:${process.env.PORT}/ping`);
});


app.get("/ping", (_, res) => {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");

  res.send("Ping Successful");
});

app.listen(process.env.PORT, () => {
  Logger.debug(`${process.env.MESSAGE} http://localhost:${process.env.PORT}`);
  Logger.debug(`Environment: ${process.env.NODE_ENV}`);
});

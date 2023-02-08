import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import fs from 'fs'
import morganMiddleware from './config/morganMiddleware'
import Logger from "./lib/logger"
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const app = express()
const PORT = process.env.PORT

const customCss = fs.readFileSync((process.cwd() + "/swagger.css"), 'utf8');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));

app.get("/", (_, res) => {  
  res.redirect(`http://localhost:${PORT}/logger`);
});

app.get("/logger", (_, res) => {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");

  res.send("Hello world");
});

app.listen(PORT, () => {
  Logger.debug(`${process.env.MESSAGE} http://localhost:${PORT}`);
  Logger.debug(`Environment: ${process.env.NODE_ENV}`);
});

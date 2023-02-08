import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morganMiddleware from './config/morganMiddleware'
import Logger from "./lib/logger"

export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  await delayMillis(1000)
  console.log('done')
  return true
}

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morganMiddleware)

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

import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'


const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (x) => `${x.timestamp} ${x.level}: ${x.message}`,
  ),
)

const transport: DailyRotateFile = new DailyRotateFile({
    filename: 'logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

transport.on('rotate', function(oldFilename, newFilename) {
      logger.debug(`rotate logger function firing oldFilename: ${oldFilename} newFilename:${newFilename}`)
    });

const logger = winston.createLogger({
  level: level(),
  levels,
  format: format,
  transports: [
    transport
  ]
});

export default logger
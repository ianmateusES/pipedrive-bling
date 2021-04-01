import fs from 'fs';
import path from 'path';
import winston from 'winston';
import moment from 'moment-timezone';

const dir = path.join(__dirname, '../../logs');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

function timestamp() {
  return moment().tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss Z');
}

module.exports = {
  dir,
  winston: {
    transports: [
      new winston.transports.File({
        name: 'file.errors',
        level: 'error',
        filename: path.join(dir, 'errors.log'),
        handleExceptions: true,
        json: false,
        maxsize: 5242880, // 5MB
        maxFiles: 10,
        colorize: false,
        timestamp,
      }),
      new winston.transports.File({
        name: 'file.all',
        level: 'info',
        filename: path.join(dir, 'all.log'),
        handleExceptions: false,
        json: false,
        maxsize: 5242880,
        maxFiles: 10,
        colorize: false,
        timestamp,
      }),
      new winston.transports.Console({
        level: 'info',
        handleExceptions: true,
        colorize: true,
        humanReadableUnhandledException: true,
      }),
    ],
    exitOnError: false,
  },
};

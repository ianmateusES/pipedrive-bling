import 'dotenv/config';
import './database/connection';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import logger from './utils/logger';
import AppError from './errors/AppError';
import routes from './routes';
import './app/schedule/totalDayDeal';
import './app/schedule/automaticIntegration';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    logger.error(`An error has occurred in ${err.messege}`);
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.messege,
    });
  }

  logger.error(`An error has occurred in ${err}`);

  return res.status(500).json({
    status: 'error',
    message: 'Insternal server error',
  });
});

export default app;

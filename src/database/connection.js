import mongoose from 'mongoose';
import logger from '../utils/logger';

mongoose
  .connect(process.env.URL_CONNECT_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(data => {
    logger.info('Database connection successfull', data.connection.readyState);
  })
  .catch(err => {
    throw new AppError(`Database connection failed. Message: ${err}`);
  });

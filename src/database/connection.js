import mongoose from 'mongoose';

mongoose
  .connect(process.env.URL_CONNECT_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(data => {
    logger.info('Database connection successfull', data.connection.readyState);
  })
  .catch(err => logger.error('Database connection failed', err));

export default mongoose.connect;

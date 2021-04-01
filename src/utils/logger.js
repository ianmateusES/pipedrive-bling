import Winston from 'winston';
import logs from '../config/logs';

export default new Winston.createLogger(logs.winston);

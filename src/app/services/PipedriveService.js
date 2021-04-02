import axios from 'axios';
import logger from '../../utils/logger';
import bodyDeals from '../../utils/bodyDeals';
import AppError from '../../errors/AppError';

class PipedriveService {
  constructor() {
    this.pipedriveApi = 'https://api.pipedrive.com/api/v1/deals/';
  }

  async execute({ status }) {
    try {
      const wonDeals = await axios.get(this.pipedriveApi, {
        params: {
          api_token: process.env.PIPEDRIVE_API_KEY,
          status: status || 'won',
        },
      });

      const newBodyDeals = wonDeals.data.data.map(bodyDeals);

      return newBodyDeals;
    } catch (e) {
      logger.error('An error has occurred in Pipedrive Service:', e);
      throw new AppError(
        `An error has occurred in List Deal MongoDB Service: ${e.message}`,
      );
    }
  }
}

export default PipedriveService;

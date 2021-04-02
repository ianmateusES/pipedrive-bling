import logger from '../../utils/logger';
import Deal from '../models/Deal';
import AppError from '../../errors/AppError';

class CreateDealService {
  async execute({ status }) {
    try {
      const query = {};
      if (status) {
        Object.assign(query, { status });
      }
      const deals = await Deal.find(query);

      return deals;
    } catch (e) {
      logger.error('An error has occurred in List Deal MongoDB Service:', e);
      throw new AppError(
        `An error has occurred in List Deal MongoDB Service: ${e.message}`,
      );
    }
  }
}

export default CreateDealService;

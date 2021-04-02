import Deal from '../models/Deal';
import AppError from '../../errors/AppError';

class ListDealService {
  async execute({ status }) {
    const query = {};

    if (status) {
      Object.assign(query, { status });
    }

    const deals = await Deal.find(query).catch(err => {
      throw new AppError(`ListDealService, message: ${err.message}`);
    });

    return deals;
  }
}

export default ListDealService;

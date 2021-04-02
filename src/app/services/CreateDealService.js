import Deal from '../models/Deal';
import AppError from '../../errors/AppError';

class CreateDealService {
  async execute({ deals }) {
    const ultimoDeal = await Deal.findOne().sort({ field: 'asc', id: -1 });

    let filterCreateDeals = [];
    if (ultimoDeal) {
      filterCreateDeals = deals.filter(deal => deal.id > ultimoDeal.id);
    } else {
      filterCreateDeals = deals;
    }

    if (!filterCreateDeals.length) {
      throw new AppError('CreateDealService: There are no new deals');
    }

    const newDeals = await Deal.create(filterCreateDeals).catch(err => {
      throw new AppError(`CreateDealService, message:  ${err.message}`);
    });

    return newDeals;
  }
}

export default CreateDealService;

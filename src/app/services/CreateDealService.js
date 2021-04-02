import Deal from '../models/Deal';
import AppError from '../../errors/AppError';

class CreateDealService {
  async execute({ deal }) {
    // let idDealsDB = await Deal.find({}, { id: 1 });

    // let filterCreateDeals = [];
    // if (idDealsDB) {
    //   idDealsDB = idDealsDB.map(obj => obj.id);
    //   filterCreateDeals = deals.filter(deal => !idDealsDB.includes(deal.id));
    // } else {
    //   filterCreateDeals = deals;
    // }

    const newDeals = await Deal.create(deal).catch(err => {
      throw new AppError(`CreateDealService, message:  ${err.message}`);
    });

    return newDeals;
  }
}

export default CreateDealService;

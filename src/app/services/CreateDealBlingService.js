import AppError from '../../errors/AppError';
import BlingService from './BlingService';
import CreateDealService from './CreateDealService';
import createOrder from '../../utils/createOrder';
import Deal from '../models/Deal';

class CreateDealBlingService {
  constructor() {
    this.blingService = new BlingService();
    this.createDealService = new CreateDealService();
  }

  async execute({ deals }) {
    // Deal filter created
    let idDealsDB = await Deal.find({}, { id: 1 });

    let filterCreateDeals = [];
    if (idDealsDB.length) {
      idDealsDB = idDealsDB.map(obj => obj.id);
      filterCreateDeals = deals.filter(deal => !idDealsDB.includes(deal.id));
    } else {
      filterCreateDeals = deals;
    }

    if (!filterCreateDeals.length) {
      throw new AppError('CreateDealBlingService: You have no deals to create');
    }

    const dealBlingCreate = await filterCreateDeals.filter(async deal => {
      const dealXML = await createOrder(deal);
      const { status } = await this.blingService.execute({ dealXML });

      if (status === 201 || status === 200) {
        return true;
      }
      return false;
    });

    if (!dealBlingCreate.length) {
      throw new AppError('CreateDealBlingService: Error creating Orders');
    }

    const createDealDB = await this.createDealService.execute({
      deal: dealBlingCreate,
    });

    return createDealDB;
  }
}

export default CreateDealBlingService;

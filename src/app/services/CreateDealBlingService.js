import AppError from '../../errors/AppError';
import DealRepository from '../repositories/DealRepository';
import BlingService from './BlingService';
import createOrder from '../../utils/createOrder';
import validationOrder from '../../utils/validationOrder';

class CreateDealBlingService {
  constructor() {
    this.blingService = new BlingService();
    this.dealRepository = new DealRepository();
  }

  async execute({ deals }) {
    validationOrder(deals);

    const idDealArray = await this.dealRepository.findAllId();

    let filterCreateDeals = [];
    if (!idDealArray.length) {
      filterCreateDeals = deals;
    } else {
      filterCreateDeals = deals.filter(deal => !idDealArray.includes(deal.id));
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

    const createDealDB = await this.dealRepository.create(dealBlingCreate);

    return createDealDB;
  }
}

export default CreateDealBlingService;

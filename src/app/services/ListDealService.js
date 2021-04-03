import DealRepository from '../repositories/DealRepository';
// import AppError from '../../errors/AppError';

class ListDealService {
  constructor() {
    this.dealRepository = new DealRepository();
  }

  async execute() {
    const deals = await this.dealRepository.findAll();

    return deals;
  }
}

export default ListDealService;

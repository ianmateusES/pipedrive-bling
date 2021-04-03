import TotalRepository from '../repositories/TotalRepository';
import DealRepository from '../repositories/DealRepository';

class CreateTotalDayDealService {
  constructor() {
    this.totalRepository = new TotalRepository();
    this.dealRepository = new DealRepository();
  }

  async execute() {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = today.getUTCMonth();
    const day = today.getUTCDate();

    const dealDate = await this.dealRepository.findByDate({
      year,
      month: Number(month) + 1,
      day,
    });

    if (!dealDate.length) {
      return;
    }

    const id_deals = dealDate.map(deal => deal._id);
    const total_value = dealDate.reduce((acc, deal) => {
      return acc + deal.value;
    }, 0);
    const date = new Date(year, month, day);

    await this.totalRepository.create({
      id_deals,
      total_value,
      date,
    });
  }
}

export default CreateTotalDayDealService;

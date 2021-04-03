import Deal from '../models/Deal';

class DealRepository {
  async findById(id) {
    const deal = await Deal.findById(id);
    return deal;
  }

  async findByDate({ year, month, day }) {
    const dateStart = new Date(year, Number(month) - 1, day);
    const dateEnd = new Date(year, Number(month) - 1, Number(day) + 1);

    const dealsDate = await Deal.find({
      created_at: { $gte: dateStart, $lt: dateEnd },
    });

    return dealsDate;
  }

  async findAllId() {
    const idDeals = await Deal.find({}, { id: 1 });

    const idArray = idDeals.map(deal => deal.id);

    return idArray;
  }

  async findAll() {
    const deals = await Deal.find();

    return deals;
  }

  async create(deal) {
    const createDeal = await Deal.create(deal);

    return createDeal;
  }
}

export default DealRepository;

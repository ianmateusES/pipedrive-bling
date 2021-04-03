import TotalDayDeal from '../models/TotalDayDeal';

class TotalRepository {
  async findAll() {
    const totalAllDeal = await TotalDayDeal.find();
    return totalAllDeal;
  }

  async findByDate({ year, month, day }) {
    const dateFilter = new Date(year, Number(month) - 1, day);

    const totalDate = await TotalDayDeal.find({
      date: { $eq: dateFilter },
    }).populate({
      path: 'id_deals',
      select: ['id', 'org_name', 'owner_name', 'value'],
    });

    return totalDate;
  }

  async create({ id_deals, total_value, date }) {
    const totalDayDeal = await TotalDayDeal.create({
      id_deals,
      total_value,
      date,
    });

    return totalDayDeal;
  }
}

export default TotalRepository;

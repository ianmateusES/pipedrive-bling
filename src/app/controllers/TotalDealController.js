import TotalRepository from '../repositories/TotalRepository';
import CreateTotalDayDealService from '../services/CreateTotalDayDealService';

const totalRepository = new TotalRepository();

export default {
  async index(req, res) {
    const listTotal = await totalRepository.findAll();

    return res.json(listTotal);
  },

  async show(req, res) {
    const { year, month, day } = req.query;

    const dealDate = await totalRepository.findByDate({ year, month, day });

    return res.json(dealDate);
  },

  async store(req, res) {
    const createTotalDayDeal = new CreateTotalDayDealService();

    await createTotalDayDeal.execute();

    return res.status(200).send();
  },
};

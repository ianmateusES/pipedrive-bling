import ListDealService from '../services/ListDealService';

const listDeal = new ListDealService();

export default {
  async index(req, res) {
    const deals = await listDeal.execute();

    return res.json(deals);
  },
};

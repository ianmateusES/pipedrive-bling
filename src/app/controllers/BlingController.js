import ListOrderBlingService from '../services/ListOrderBlingService';

const listOrderBling = new ListOrderBlingService();

export default {
  async index(req, res) {
    const orders = await listOrderBling.execute();

    return res.json(orders);
  },
};

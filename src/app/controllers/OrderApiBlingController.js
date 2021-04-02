import ShowOrderBling from '../services/ShowOrderBling';

const showOrderBling = new ShowOrderBling();

export default {
  async show(req, res) {
    const { data: orders } = await showOrderBling.execute();

    return res.json(orders);
  },
};

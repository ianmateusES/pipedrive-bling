import ListOrderBlingService from '../services/ListOrderBlingService';

const listOrderBling = new ListOrderBlingService();

export default {
  async index(req, res) {
    const orders = await listOrderBling.execute();
    let pedidos;
    if (orders.retorno.pedidos) {
      pedidos = orders.retorno.pedidos;
    } else {
      pedidos = orders;
    }

    return res.json(pedidos);
  },
};

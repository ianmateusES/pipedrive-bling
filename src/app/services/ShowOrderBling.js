import axios from 'axios';
import AppError from '../../errors/AppError';

class ShowOrderBling {
  constructor() {
    this.bligApi = 'https://bling.com.br/Api/v2/pedidos/json/';
  }

  async execute() {
    const orders = await axios
      .get('https://bling.com.br/Api/v2/pedidos/json/', {
        params: {
          apikey: process.env.BLING_API_KEY,
        },
      })
      .catch(err => {
        throw new AppError(`ShowPedidosBling, message: ${err.message}`);
      });

    return { data: orders.data, status: orders.status };
  }
}

export default ShowOrderBling;

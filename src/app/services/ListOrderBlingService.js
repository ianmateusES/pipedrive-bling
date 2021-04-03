import axios from 'axios';
import AppError from '../../errors/AppError';

class ListOrderBlingService {
  constructor() {
    this.bligApi = 'https://bling.com.br/Api/v2/pedidos/json/';
  }

  async execute() {
    const response = await axios
      .get('https://bling.com.br/Api/v2/pedidos/json/', {
        params: {
          apikey: process.env.BLING_API_KEY,
        },
      })
      .catch(err => {
        throw new AppError(`ShowPedidosBling, message: ${err.message}`);
      });

    return response.data;
  }
}

export default ListOrderBlingService;

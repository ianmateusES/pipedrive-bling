import axios from 'axios';
import AppError from '../../errors/AppError';

class BlingService {
  constructor() {
    this.bligApi = 'https://bling.com.br/Api/v2/pedido/json/';
  }

  async execute({ dealXML }) {
    const orders = await axios
      .post(
        this.bligApi,
        {},
        {
          params: {
            apikey: process.env.BLING_API_KEY,
            xml: dealXML,
          },
        },
      )
      .catch(err => {
        throw new AppError(`BlingService, message:  ${err.message}`);
      });

    return { data: orders.data, status: orders.status };
  }
}

export default BlingService;

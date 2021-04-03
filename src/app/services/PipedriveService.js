import axios from 'axios';
import bodyDeals from '../../utils/bodyDeals';
import AppError from '../../errors/AppError';

class PipedriveService {
  constructor() {
    this.pipedriveApi = 'https://api.pipedrive.com/api/v1/deals/';
  }

  async execute({ status }) {
    const wonDeals = await axios
      .get(this.pipedriveApi, {
        params: {
          api_token: process.env.PIPEDRIVE_API_KEY,
          status: status || 'won',
        },
      })
      .catch(err => {
        throw new AppError(`PipedriveService, message:  ${err.message}`);
      });

    if (!wonDeals.data.data) {
      throw new AppError(`PipedriveService: There are no deals`);
    }

    const newBodyDeals = wonDeals.data.data.map(bodyDeals);

    return newBodyDeals;
  }
}

export default PipedriveService;

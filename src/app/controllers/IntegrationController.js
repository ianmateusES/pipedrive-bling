import PipedriveService from '../services/PipedriveService';
import CreateDealBlingService from '../services/CreateDealBlingService';

const pipedrive = new PipedriveService();
const createDealBling = new CreateDealBlingService();

export default {
  async store(req, res) {
    const deals = await pipedrive.execute({ status: null });

    const createDeal = await createDealBling.execute({ deals });

    return res.json(createDeal);
  },
};

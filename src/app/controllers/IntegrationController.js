import PipedriveService from '../services/PipedriveService';
import CreateDealBlingService from '../services/CreateDealBlingService';

const pipedrive = new PipedriveService();
const createDealBlingService = new CreateDealBlingService();

export default {
  async store(req, res) {
    const { status } = req.query;

    const deals = await pipedrive.execute({ status });

    const createDeal = await createDealBlingService.execute({ deals });

    return res.json(createDeal);
  },
};

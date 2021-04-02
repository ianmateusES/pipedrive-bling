// import PipedriveService from '../services/PipedriveService';
// import CreateDealService from '../services/CreateDealService';
import ListDealService from '../services/ListDealService';

export default {
  async index(req, res) {
    const { status } = req.query;

    const listDeal = new ListDealService();

    const deals = await listDeal.execute({ status });

    return res.json(deals);
  },

  // async store(req, res) {
  //   const pipedrive = new PipedriveService();
  //   const ordeWonDeals = await pipedrive.execute({});

  //   const createDeal = new CreateDealService();

  //   const newDeals = await createDeal.execute({ deals: ordeWonDeals });

  //   return res.json(newDeals);
  // },
};

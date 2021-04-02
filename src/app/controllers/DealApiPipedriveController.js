import PipedriveService from '../services/PipedriveService';

const pipedrive = new PipedriveService();

export default {
  async index(req, res) {
    const { status } = req.query;

    const ordeWonDeals = await pipedrive.execute({ status });

    return res.json(ordeWonDeals);
  },
};

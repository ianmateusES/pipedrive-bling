import { Router } from 'express';
import DealController from '../app/controllers/DealController';

// http://url_base/deals
const dealRouter = Router();

dealRouter.get('/', DealController.index);

export default dealRouter;

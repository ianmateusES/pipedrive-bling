import { Router } from 'express';
import BlingController from '../app/controllers/BlingController';

// http://url_base/bling
const blingRouter = Router();

blingRouter.get('/orders', BlingController.index);

export default blingRouter;

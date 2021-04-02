import { Router } from 'express';
import DealController from '../app/controllers/DealController';
import DealApiPipedriveController from '../app/controllers/DealApiPipedriveController';

const routes = Router();

routes.get('/deals', DealController.index);
routes.post('/deals', DealController.store);
routes.get('/deals-api', DealApiPipedriveController.index);

export default routes;

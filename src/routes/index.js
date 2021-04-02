import { Router } from 'express';
import DealController from '../app/controllers/DealController';
import IntegrationController from '../app/controllers/IntegrationController';
import DealApiPipedriveController from '../app/controllers/DealApiPipedriveController';
import OrderApiBlingController from '../app/controllers/OrderApiBlingController';

const routes = Router();

// routes.post('/deals', DealController.store);

routes.get('/deals', DealController.index);

routes.get('/orders-bling', OrderApiBlingController.show);

routes.get('/deals-pipedrive', DealApiPipedriveController.index);

routes.post('/integrations', IntegrationController.store);

export default routes;

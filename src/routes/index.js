import { Router } from 'express';

import DealApiPipedriveController from '../app/controllers/DealApiPipedriveController';

const routes = Router();

routes.get('/deals-api', DealApiPipedriveController.index);

export default routes;

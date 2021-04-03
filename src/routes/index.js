import { Router } from 'express';
import blingRouter from './bling.routes';
import pipedriveRouter from './pipedrive.routes';
import integrationsRouter from './integrations.routes';
import totalDealRouter from './totalDeal.routes';
import dealRouter from './deal.routes';

const routes = Router();

routes.use('/pipedrive', pipedriveRouter);
routes.use('/bling', blingRouter);
routes.use('/integrations', integrationsRouter);
routes.use('/total', totalDealRouter);
routes.use('/deals', dealRouter);

export default routes;

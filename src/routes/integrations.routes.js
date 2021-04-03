import { Router } from 'express';
import IntegrationController from '../app/controllers/IntegrationController';

// http://url_base/integrations
const integrationsRouter = Router();

integrationsRouter.post('/', IntegrationController.store);

export default integrationsRouter;

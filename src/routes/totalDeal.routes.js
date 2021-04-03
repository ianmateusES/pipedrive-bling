import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import TotalDealController from '../app/controllers/TotalDealController';

// http://url_base/total
const totalDealRouter = Router();

totalDealRouter.get('/deals', TotalDealController.index);

totalDealRouter.post('/simulacao', TotalDealController.store);

totalDealRouter.get(
  '/deals/date',
  celebrate({
    [Segments.QUERY]: {
      year: Joi.number().required(),
      month: Joi.number().required(),
      day: Joi.number().required(),
    },
  }),
  TotalDealController.show,
);

export default totalDealRouter;

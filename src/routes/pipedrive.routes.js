import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PipedriveController from '../app/controllers/PipedriveController';

// http://url_base/pipedrive
const pipedriveRouter = Router();

pipedriveRouter.get(
  '/deals',
  celebrate({
    [Segments.QUERY]: {
      status: Joi.string(),
    },
  }),
  PipedriveController.index,
);

export default pipedriveRouter;

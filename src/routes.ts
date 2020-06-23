import express, { response } from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';

import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import IntemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const intemsController = new IntemsController();

routes.get("/items", intemsController.index);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);


routes.post(
  '/points',
  upload.single('image') ,
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      item: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
   pointsController.create);

export default routes;
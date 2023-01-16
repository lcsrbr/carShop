import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).count(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default routes;

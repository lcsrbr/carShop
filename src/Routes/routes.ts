import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).count(),
);

export default routes;

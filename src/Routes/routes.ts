import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotoController from '../Controllers/MotoController';

const routes = Router();

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).count(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).findAll(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotoController(req, res, next).findById(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).create(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotoController(req, res, next).update(),
);

export default routes;

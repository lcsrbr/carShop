import { Router } from 'express';
import MotoController from '../Controllers/MotoController';

const routes = Router();

routes.get(
  '/',
  (req, res, next) => new MotoController(req, res, next).findAll(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).findById(),
);

routes.post(
  '/',
  (req, res, next) => new MotoController(req, res, next).create(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).update(),
);

routes.delete(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).delete(),
);

export default routes;

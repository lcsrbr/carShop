import { Router } from 'express';

import CarRoutes from './CarRoutes';
import MotoRoutes from './MotoRoutes';

const routes = Router();

routes.use('/cars', CarRoutes);
routes.use('/motorcycles', MotoRoutes);

export default routes;

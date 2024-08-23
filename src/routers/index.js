import { Router } from 'express';
import catalogRouter from './catalog.js';

const rootRouter = Router();

rootRouter.use('/catalog', catalogRouter);

export default rootRouter;

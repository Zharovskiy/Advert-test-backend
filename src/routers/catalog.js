import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getCatalogController } from '../controllers/catalog.js';

const catalogRouter = Router();

catalogRouter.get('/', (req, res) => {
  res.set('Cache-Control', 'no-store');
  ctrlWrapper(getCatalogController);
});

// catalogRouter.get('/', ctrlWrapper(getCatalogController));

export default catalogRouter;

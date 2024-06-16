import { Router } from 'express';
import * as locadoraController from '../controllers/locadora.controller';
import { validateLocadora, validateLocadoraId } from '../validations/locadora.validation';

const locadoraRouter = () => {
  const router = Router();

  router.get('/locadoras', locadoraController.getAllLocadoras);

  router.get('/locadoras/:id', locadoraController.getLocadoraById);

  router.post('/locadoras', validateLocadora, locadoraController.createLocadora);

  router.put('/locadoras/:id', validateLocadoraId, locadoraController.updateLocadora);

  router.delete('/locadoras/:id', validateLocadoraId, locadoraController.deleteLocadora);

  return router;
};

export default locadoraRouter;

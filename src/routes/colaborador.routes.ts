import { Router } from 'express';
import * as colaboradorController from '../controllers/colaborador.controller';

const colaboradorRouter = () => {
  const router = Router();

  router.get('/colaboradores', colaboradorController.getAllColaboradores);
  
  router.get('/colaboradores/:id', colaboradorController.getColaboradorById);

  router.post('/colaboradores', colaboradorController.validateCreateColaborador, colaboradorController.createColaborador);

  router.put('/colaboradores/:id', colaboradorController.validateUpdateColaborador, colaboradorController.updateColaborador);

  router.delete('/colaboradores/:id', colaboradorController.deleteColaborador);

  return router;
};

export default colaboradorRouter;

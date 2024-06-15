// src/routes/veiculo.router.ts

import { Router } from 'express';
import * as veiculoController from '../controllers/veiculo.controller';

const veiculoRouter = () => {
  const router = Router();

  router.get('/veiculos', veiculoController.getAllVeiculos);
  
  router.get('/veiculos/:id', veiculoController.getVeiculoById);

  router.post('/veiculos', veiculoController.createVeiculo);

  router.put('/veiculos/:id', veiculoController.updateVeiculo);

  router.delete('/veiculos/:id', veiculoController.deleteVeiculo);

  return router;
};

export default veiculoRouter;

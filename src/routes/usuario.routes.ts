// src/routes/usuario.routes.ts

import { Router } from 'express';
import * as usuarioController from '../controllers/usuario.controller';

const usuarioRoutes = () => {
  const router = Router();

  router.get('/usuarios', usuarioController.getAllUsuarios);
  router.get('/usuarios/:id', usuarioController.getUsuarioById);
  router.post('/usuarios', usuarioController.createUsuario);
  router.put('/usuarios/:id', usuarioController.updateUsuario);
  router.delete('/usuarios/:id', usuarioController.deleteUsuario);

  return router;
};

export default usuarioRoutes;

// src/routes/empresa.routes.ts

import { Router } from "express";
import * as empresaController from '../controllers/empresa.controller';

const empresaRoutes = () => {
  const router = Router();
  router.get('/empresas', empresaController.getAllEmpresas);
  router.get('/empresas/:id', empresaController.getEmpresaById);
  router.post('/empresas', empresaController.createEmpresa);
  router.put('/empresas/:id', empresaController.updateEmpresa);
  router.delete('/empresas/:id', empresaController.deleteEmpresa);
  return router;
};

export default empresaRoutes;

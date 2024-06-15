import { Application } from "express";
import authRoutes from "./auth.routes";
import empresaRoutes from './empresa.routes';

import usuarioRoutes from "./usuario.routes";
import colaboradorRouter from "./colaborador.routes";
import veiculoRouter from "./veiculo.router";

const routes = (app: Application) => {
  app.use('/api', empresaRoutes()); 
  app.use("/auth", authRoutes());
  app.use("/api",usuarioRoutes());
  app.use("/api", colaboradorRouter());
  app.use("/api", veiculoRouter());

};

export default routes;







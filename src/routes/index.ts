import { Application } from "express";
import authRoutes from "./auth.routes";
import empresaRoutes from './empresa.routes';
import usuarioRoutes from "./usuario.routes";
import colaboradorRouter from "./colaborador.routes";
import veiculoRouter from "./veiculo.router";
import locadoraRouter from "./locadora.routes";
import checklistRouter from "./checklist.routes";

const routes = (app: Application) => {
  app.use("/api",usuarioRoutes());
  app.use("/auth", authRoutes());
  app.use('/api', empresaRoutes());
  app.use("/api", colaboradorRouter());
  app.use("/api", veiculoRouter());
  app.use("/api", locadoraRouter());
  app.use("/api", checklistRouter())

};

export default routes;







import { Application } from "express";
import authRoutes from "./auth.routes";
import empresaRoutes from './empresa.routes';
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import usuarioRoutes from "./usuario.routes";

const routes = (app: Application) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.use('/api', empresaRoutes()); 
  app.use("/auth", authRoutes());
  app.use("/api",usuarioRoutes());

};

export default routes;







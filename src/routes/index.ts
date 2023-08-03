import { Application } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import agencyRoutes from "./agency.routes";
import clientRoutes from "./client.routes";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const routes = (app: Application) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.use("/users", userRoutes());
  app.use("/auth", authRoutes());
  app.use("/agencies", agencyRoutes());
  app.use("/clients", clientRoutes());
};

export default routes;

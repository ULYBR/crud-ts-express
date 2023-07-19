import { Application } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import agencyRoutes from "./agency.routes";
import clientRoutes from "./client.routes";

const routes = (app: Application) => {
  app.use("/users", userRoutes());
  app.use("/auth", authRoutes());
  app.use("/agencies", agencyRoutes());
  app.use("/clients", clientRoutes());
};

export default routes;

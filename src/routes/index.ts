import { Application } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import agencyRoutes from "./agency.routes";
import clientRoutes from "./client.routes";



const routes = (app: Application) => {
  userRoutes(app);
  authRoutes(app);
  agencyRoutes(app);
  clientRoutes(app);


};

export default routes;
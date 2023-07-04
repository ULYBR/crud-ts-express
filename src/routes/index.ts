import { Application } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";



const routes = (app: Application) => {
  userRoutes(app);
  authRoutes(app);
};

export default routes;
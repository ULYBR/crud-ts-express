import userRoutes from "./user.routes";
import { Application } from "express";


const routes = (app: Application) => {
  userRoutes(app);
};

export default routes;
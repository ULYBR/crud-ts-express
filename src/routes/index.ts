import { Application } from "express";
import userRoutes from "./user.routes";



const routes = (app: Application) => {
  userRoutes(app);
};

export default routes;
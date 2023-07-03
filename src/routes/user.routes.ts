import { Application } from "express";
import { create } from "../controllers/user.controller";

const userRoutes = (app: Application) => {
  app.post("/user", create);
}

export default userRoutes;
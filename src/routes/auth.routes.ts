import { Application } from "express";
import { authenticate } from "../controllers/auth.controller";

const authRoutes =async (app: Application) => {
  app.post("/login", authenticate);
  
}
export default authRoutes
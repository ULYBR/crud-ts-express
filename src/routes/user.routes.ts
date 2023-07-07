import { Application } from "express";
import { create, get, getId, remove, update } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const userRoutes = (app: Application) => {
  app.post("/user", create);
  app.get("/user", get);
  app.get("/user/:id", verifyToken, getId);
  app.put("/user/:id", verifyToken, update);
  app.delete("/user/:id", verifyToken, remove);
}

export default userRoutes;
import { Application } from "express";
import { create, get, getId, remove, update } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const userRoutes = (app: Application) => {
  app.post("/users", create);
  app.get("/users", get);
  app.get("/users/:id", verifyToken, getId);
  app.put("/users/:id",  update);
  app.delete("/users/:id", verifyToken, remove);
}

export default userRoutes;
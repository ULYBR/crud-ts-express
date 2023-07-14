import { Application } from "express";
import {
  addAgency,
  create,
  get,
  getId,
  remove,
  update,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";

const userRoutes = (app: Application) => {
  app.post("/users", create);
  app.get("/users", get);
  app.get("/users/:id", verifyToken, getId);
  app.put("/users/:id", verifyToken, update);
  app.put("/users/add-agency/:id", verifyToken, addAgency);
  app.delete("/users/:id", verifyToken, remove);
};

export default userRoutes;

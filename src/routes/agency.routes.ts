import { Application } from "express";
import { addUser, create, get, getId, remove, update } from "../controllers/agency.controller";
import { verifyToken } from "../middlewares/auth";

const agencyRoutes = (app: Application) => {
  app.post("/agencies", create);
  app.get("/agencies", verifyToken, get);
  app.get("/agencies/:id", verifyToken, getId);
  app.put("/agencies/:id", verifyToken, update);
  app.put("/agencies/add-user/:id", verifyToken, addUser);
  app.delete("/agencies/:id", verifyToken, remove);
}

export default agencyRoutes;
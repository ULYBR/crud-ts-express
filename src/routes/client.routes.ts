import { Application } from "express";
import { verifyToken } from "../middlewares/auth";
import { create, get, getId, update, remove } from "../controllers/client.controller";



const clientRoutes = (app: Application) => {
  app.post("/clients",verifyToken, create);
  app.get("/clients",verifyToken, get);
  app.get("/clients/:id",verifyToken, getId);
  app.put("/clients/:id",verifyToken, update);
  app.delete("/clients/:id",verifyToken, remove);
}

export default clientRoutes;
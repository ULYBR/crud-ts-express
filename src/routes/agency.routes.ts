import { Application } from "express";
import { create, get, getId, remove, update } from "../controllers/agency.controller";
import { verifyToken } from "../middlewares/auth";

const agencyRoutes = (app: Application) => {
  app.post("/agency", create);
  app.get("/agency", verifyToken, get);
  app.get("/agency/:id",verifyToken, getId);
  app.put("/agency/:id",verifyToken,  update);
  app.delete("/agency/:id",verifyToken, remove);
}

export default agencyRoutes;
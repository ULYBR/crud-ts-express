import { Application } from "express";
import { create, get, getId, remove, update } from "../controllers/agency.controller";
import { verifyToken } from "../middlewares/auth";

const agencyRoutes = (app: Application) => {
  app.post("/agencys", create);
  app.get("/agencys", verifyToken, get);
  app.get("/agencys/:id",verifyToken, getId);
  app.put("/agencys/:id",verifyToken,  update);
  app.delete("/agencys/:id",verifyToken, remove);
}

export default agencyRoutes;
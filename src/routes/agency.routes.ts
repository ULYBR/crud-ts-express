import { Router } from "express";
import {
  create,
  get,
  getId,
  getPublic,
  remove,
  update,
} from "../controllers/agency.controller";
import { verifyToken } from "../middlewares/auth";
import { adminMiddleware } from "../middlewares/admin";


const agencyRoutes = () => {
  const router = Router();
  router.get("/all", getPublic)
  router.use(verifyToken, adminMiddleware);

  router.post("/", create);
  router.get("/", get);
  router.get("/:id", getId);
  router.put("/:id", update);
  router.delete("/:id", remove);

  return router;
};

export default agencyRoutes;

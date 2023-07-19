import { Router } from "express";
import {
  addUser,
  create,
  get,
  getId,
  remove,
  update,
} from "../controllers/agency.controller";
import { verifyToken } from "../middlewares/auth";
import { adminMiddleware } from "../middlewares/admin";

const agencyRoutes = () => {
  const router = Router();
  router.use(verifyToken, adminMiddleware);

  router.post("/", create);
  router.get("/", get);
  router.get("/:id", getId);
  router.put("/:id", update);
  router.put("/add-user/:id", addUser);
  router.delete("/:id", remove);

  return router;
};

export default agencyRoutes;

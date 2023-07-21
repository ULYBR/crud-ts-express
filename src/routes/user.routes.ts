import { Router } from "express";
import {
  create,
  get,
  getId,
  remove,
  update,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";
import { adminMiddleware } from "../middlewares/admin";

const userRoutes = () => {
  const router = Router();

  router.post("/", create);

  router.use(verifyToken);

  router.put("/update", update);
  router.get("/me", getId);

  router.use(adminMiddleware);
  router.delete("/delete", remove);
  router.get("/", get);

  return router;
};

export default userRoutes;

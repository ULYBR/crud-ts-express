import { Router } from "express";
import {
  addAgency,
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

  router.use(verifyToken, adminMiddleware);
  router.get("/", get);
  router.get("/:id", getId);
  router.put("/:id", update);
  router.put("/add-agency/:id", addAgency);
  router.delete("/:id", remove);

  return router;
};

export default userRoutes;

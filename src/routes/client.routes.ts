import { Router } from "express";
import { verifyToken } from "../middlewares/auth";
import {
  create,
  get,
  getId,
  update,
  getAllCustomer,
  remove,
} from "../controllers/client.controller";
import { adminMiddleware } from "../middlewares/admin";

const clientRoutes = () => {
  const router = Router();
  router.get("/all", getAllCustomer);

  router.use(verifyToken, adminMiddleware);
  router.get("/", get);

  router.post("/clients", create);
  router.get("/clients/:id", getId);
  router.put("/clients/:id", update);
  router.delete("/clients/:id", remove);

  return router;
};

export default clientRoutes;

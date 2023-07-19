import { Router } from "express";
import { authenticate } from "../controllers/auth.controller";

const authRoutes = () => {
  const router = Router();
  router.use(authenticate);

  router.post("/");
  return router;
};
export default authRoutes;

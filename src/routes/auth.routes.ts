import { authenticate } from "../controllers/auth.controller";

const authRoutes =async (app: any) => {
  app.post("/login", authenticate);
  
}
export default authRoutes
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Required Token 🚨" });
  }
  try {
    const extractedToken = token.replace("Bearer ", "");
    const decoded: any = jwt.verify(
      extractedToken,
      String(process.env.TOKEN_KEY),
    );
    const { id, email, name, role } = decoded;
    (req as any).user = { id, email, name, role };
    next();
  } catch (e) {
    res.status(401).send({ message: "Invalid token ⛔" });
  }
};

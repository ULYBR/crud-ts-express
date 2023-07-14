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
    jwt.verify(extractedToken, String(process.env.TOKEN_KEY));
    next();
  } catch (e) {
    res.status(401).send({ message: "Invalid token ⛔" });
  }
};

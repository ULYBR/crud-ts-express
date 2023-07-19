import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = (req as any).user;

  if (!user || user.role !== "ADMIN") {
    return res
      .status(403)
      .json({
        message:
          "Access denied. You are not authorized to perform this action.",
      });
  }

  next();
};

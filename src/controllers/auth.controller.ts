import { Request, Response } from "express";
import { authenticateUser } from "../services/auth.services";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await authenticateUser(email, password);

    return res.status(200).json({ token });
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === "ValidationError") {
        return res.status(400).json({ message: e.message });
      }
      console.error("Error in authentication:", e);
      return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};

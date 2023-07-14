import { prisma } from "../services/services";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { authenticationSchema } from "../validations/auth.validation";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await authenticationSchema.validate({ email, password });

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password ⛔" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user.id,
          email,
          name: user.name,
        },
        String(process.env.TOKEN_KEY),
        {
          expiresIn: "6h",
        },
      );
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid email or password ⛔" });
    }
  } catch (e: unknown) {
    if (e instanceof Error && e.name === "ValidationError") {
      return res.status(400).json({ message: e.message });
    }
    console.error("Error in authentication:", e);
    return res.status(500).json({ message: "Internal server error" });
  }
};

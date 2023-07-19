import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../services/services";
import { authenticationSchema } from "../validations/auth.validation";

export const authenticateUser = async (email: string, password: string) => {
  await authenticationSchema.validate({ email, password });

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password ⛔");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password ⛔");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email,
      name: user.name,
      role: user.role,
    },
    String(process.env.TOKEN_KEY),
    {
      expiresIn: "6h",
    },
  );

  return token;
};

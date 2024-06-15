// src/services/auth.service.ts

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { authenticationSchema } from "../validations/auth.validation";

const prisma = new PrismaClient();

export const authenticateUser = async (email: string, password: string) => {
  await authenticationSchema.validate({ email, password });

  const usuario = await prisma.usuario.findUnique({
    where: {
      email,
    },
  });

  if (!usuario) {
    throw new Error("Invalid email or password ⛔");
  }

  const passwordMatch = await bcrypt.compare(password, usuario.senha);

  if (!passwordMatch) {
    throw new Error("Invalid email or password ⛔");
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome, // Ajuste conforme o seu modelo de usuário
      role: usuario.role, // Ajuste conforme o seu modelo de usuário
    },
    String(process.env.TOKEN_KEY),
    {
      expiresIn: "6h",
    }
  );

  return token;
};

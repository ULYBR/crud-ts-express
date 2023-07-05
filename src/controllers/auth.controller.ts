import { prisma } from "../services/services";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res
        .status(400)
        .send({ message: "User and password are required ⛔" });

    }
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    })
    if (!user) {
      return res
        .status(401)
        .send({ message: "Email and or password does not exist ⛔" });
    }
    if (user && bcrypt.compareSync(password, String(user.password))) {
      const token = jwt.sign(
        {
          id: user.id,
          email,
          name: user.name
        },
        String(process.env.TOKEN_KEY),
        {
          expiresIn: "6h"
        }
      )
      return res.status(200).send({ token });


    } else {
      return res.status(401).send({ message: "Email and or password does not exist ⛔" })
    }
  } catch (e) {

    res.status(400).send(e);
  }
}


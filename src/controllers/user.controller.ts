import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
} from "../repositories/user.repository";
import { Request, Response } from "express";
import { addAgencyToUser } from "../Use-Case/add-Agency-To-User";

export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const clientId = data.customers;

    await userValidation.validate(data);

    const hashPassword = await bcrypt.hash(data.password, 10);

    data.password = hashPassword;

    const user = await createUser(data, clientId);

    res.status(201).send(user);
  } catch (e) {
    console.error("Error in user creation:", e);
    res.status(400).json({ error: "Failed to create user" });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const result = await getAll(Number(page), Number(limit));

    res.status(200).json(result);
  } catch (e) {
    console.error("Error in fetching users:", e);
    res.status(400).json({ error: "Failed to fetch users" });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (e) {
    console.error("Error in fetching user by ID:", e);
    res.status(400).json({ error: "Failed to fetch user" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await updateUser(userId, userData);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (e) {
    console.error("Error in updating user:", e);
    res.status(400).json({ error: "Failed to update user" });
  }
};

export const addAgency = async (req: Request, res: Response) => {
  try {
    const agency = req.body.agencies.connect.id;
    const user = await addAgencyToUser(req.params.id, agency);
    res.status(200).send(user);
  } catch (e: any) {
    res.status(400).json({
      message: e.message,
    });
  }
};
export const remove = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);

    res.status(200).json({ message: "User removed successfully" });
  } catch (e) {
    console.error("Error in removing user:", e);
    res.status(400).json({ error: "Failed to remove user" });
  }
};

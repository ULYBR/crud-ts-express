import { Request, Response } from "express";
import * as userService from "../services/user.services";

export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const clientId = data.customers;

    const user = await userService.createUserWithClientId(data, clientId);

    res.status(201).send(user);
  } catch (e) {
    console.error("Error in user creation:", e);
    res.status(400).json({ error: "Failed to create user" });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const result = await userService.getAllUsers(Number(page), Number(limit));

    res.status(200).json(result);
  } catch (e) {
    console.error("Error in fetching users:", e);
    res.status(400).json({ error: "Failed to fetch users" });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const user = await userService.getUserById(userId);

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
    const userId = (req as any).user.id;
    const userData = req.body;
    
    console.log((req as any).user)

    const user = await userService.updateUserById(userId, userData);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (e) {
    console.error("Error in updating user:", e);
    res.status(400).json({ error: "Failed to update user" });
  }
};



export const remove = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user;
    await userService.removeUserById(userId);

    res.status(200).json({ message: "User removed successfully" });
  } catch (e) {
    console.error("Error in removing user:", e);
    res.status(400).json({ error: "Failed to remove user" });
  }
};

import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
} from "../repositories/user.repository";

export const createUserWithClientId = async (data: any, clientId: string) => {
  await userValidation.validate(data);

  const hashPassword = await bcrypt.hash(data.password, 10);
  data.password = hashPassword;

  return createUser(data, clientId);
};

export const getAllUsers = async (page: number, limit: number) => {
  return getAll(page, limit);
};

export const getUserById = async (userId: string) => {
  return getById(userId);
};
export const getUserCommon = async (userId: string) => {
  return getById(userId);
};

export const updateUserById = async (userId: string, userData: any) => {
  if (userData.password) {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;
  }
  if (userData.role){
    userData.role = "USER";
  }

  return updateUser(userId, userData);
};

export const removeUserById = async (userId: string) => {
  return deleteUser(userId);
};

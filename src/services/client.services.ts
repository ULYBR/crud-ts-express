import { clientValidation } from "../validations/client.validation";
import {
  createClient,
  getAll,
  getAllCustomer,
  getClientById,
  updateClient,
  deleteClient,
} from "../repositories/client.repository";

export const createClientWithUserId = async (data: any, userId: string) => {
  await clientValidation.validate(data);
  return createClient(data, userId);
};

export const getAllCustomers = async () => {
  return getAllCustomer();
};
export const getAllClients = async (page: number, limit: number) => {
  return getAll(page, limit);
};

export const getClientByIdService = async (clientId: string) => {
  return getClientById(clientId);
};

export const updateClientById = async (clientId: string, clientData: any) => {
  return updateClient(clientId, clientData);
};

export const removeClientById = async (clientId: string) => {
  return deleteClient(clientId);
};

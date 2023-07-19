import { agencyValidation } from "../validations/agency.validation";
import {
  createAgency,
  getAll,
  getAgencyById as getAgencyByIdRepository,
  updateAgency,
  deleteAgency,
} from "../repositories/agency.repository";
import { addUserToAgency as addUserToAgencyUseCase } from "../Use-Case/add-User-To-Agency";

export const createAgencyWithUserIdAndClientId = async (
  data: any,
  userId: string,
  clientId: string,
) => {
  await agencyValidation.validate(data);
  return createAgency(data, userId, clientId);
};

export const getAllAgencies = async (page: number, limit: number) => {
  return getAll(page, limit);
};

export const getAgencyById = async (agencyId: string): Promise<any> => {
  return getAgencyByIdRepository(agencyId);
};

export const addUserToAgency = async (
  userId: string,
  agencyId: string,
): Promise<any> => {
  return addUserToAgencyUseCase(userId, agencyId);
};

export const updateAgencyById = async (agencyId: string, agencyData: any) => {
  return updateAgency(agencyId, agencyData);
};

export const removeAgencyById = async (agencyId: string) => {
  return deleteAgency(agencyId);
};

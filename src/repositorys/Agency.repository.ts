import { prisma } from "../services/services";
import Agency from "../types/angency.types";
import { userValidation } from "../validations/user.validation";


export const createAgency = async (data: Agency) => {
  const agency = await prisma.agency.create({
    data,
    
  });
  return agency;

};

export const getAll = async () => {
  const agencys = await prisma.agency.findMany({
    
  })
  return agencys;
}


export const getById = async (id: string) => {
  const agency = await prisma.agency.findUnique({
    where: {
      id
    },
    
  });
  return agency;
}


export const updateAgency = async (id: string, data: Agency) => {
  const agency = await prisma.agency.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      name: true,
      cnpj:true,
    },
  });
  return agency;

}

export const deleteAgency = async (id: string) => {
  await prisma.agency.delete({
    where: {
      id
    }
  });
  return

}
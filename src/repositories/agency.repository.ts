import { prisma } from "../services/services";
import { Agency } from "@prisma/client";



export const createAgency = async (data: Agency) => {
  const agency = await prisma.agency.create({
    data,
    
  });
  return agency;

};

export const getAll = async () => {
  const agencies = await prisma.agency.findMany({
    select:{
      id:true,
      name:true,
      cnpj:true,
      users:true,
    }
    
  })
  return agencies;
}


export const getAgencyById = async (id: string) => {
  const agency = await prisma.agency.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      cnpj: true,
      users: true,
    }

    
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
      users:true
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
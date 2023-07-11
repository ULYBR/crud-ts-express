import { Client } from "@prisma/client";
import { prisma } from "../services/services";




export const createClient = async (data:Client) => {
  
  const client = await prisma.client.create({
    data,
    select:{
      id: true,
      name: true,
      agencyId: true
    }
    
  });

  return client;

};

export const getAll = async () => {

  const customers = await prisma.client.findMany()
  return customers;
}


export const getById = async (id: string) => {
  const client = await prisma.client.findUnique({
    where: {
      id
    },
    select: {
      name: true,
      agencyId: true,
    

    }
  });
  return client;
}



export const updateClient = async (id: string, data: Client) => {

  const client = await prisma.client.update({
    where: {
      id
    },
    data,
    select: {
      name: true,
      agency: true,
      agencyId: true,
  

    },
  });
  return client;

}

export const deleteClient = async (id: string) => {
  await prisma.client.delete({
    where: {
      id
    }
  });
  return

}
import { Client } from "@prisma/client";
import { prisma } from "../services/services";

export const createClient = async (data: Client, userId: string) => {
  const client = await prisma.client.create({
    data: {
      ...data,
      Users: {
        connect: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      agencyId: true,
    },
  });

  return client;
};

export const getAll = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;

  const customers = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      agency: false,
      Users: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
          agency: true,
        },
      },
    },
    skip: offset,
    take: limit,
  });
  const totalCustomersCount = await prisma.client.count();
  const totalPages = Math.ceil(totalCustomersCount / limit);

  return {
    customers,
    totalCustomersCount,
    totalPages,
  };
};

export const getClientById = async (id: string) => {
  const client = await prisma.client.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      agency: {
        select: {
          id: true,
          name: true,
          cnpj: true,
        },
      },
      Users: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
          agency: false,
        },
      },
    },
  });
  return client;
};

export const updateClient = async (id: string, data: Client) => {
  const client = await prisma.client.update({
    where: {
      id,
    },
    data,
    select: {
      name: true,
      agency: true,
      agencyId: true,
    },
  });
  return client;
};

export const deleteClient = async (id: string) => {
  await prisma.client.delete({
    where: {
      id,
    },
  });
  return;
};

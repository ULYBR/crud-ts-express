import { Agency } from "@prisma/client";
import { prisma } from "../services/services";

export const createAgency = async (
  data: Agency,
  userId: string,
  clientId: string,
) => {
  const agency = await prisma.agency.create({
    data: {
      ...data,
      users: {
        connect: {
          id: userId,
        },
      },
      Client: {
        connect: {
          id: clientId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      cnpj: true,
      Client: true,
      users: {
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
  });
  return agency;
};
export const getAllAgency = async () => {
  const agencies = await prisma.agency.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return agencies;
};

export const getAll = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;

  const agencies = await prisma.agency.findMany({
    select: {
      id: true,
      name: true,
      cnpj: true,
      Client: {
        select: {
          id: true,
          name: true,
        },
      },
      users: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    skip: offset,
    take: limit,
  });
  const totalAgenciesCount = await prisma.agency.count();
  const totalPages = Math.ceil(totalAgenciesCount / limit);
  return {
    agencies,
    totalAgenciesCount,
    totalPages,
  };
};

export const getAgencyById = async (id: string) => {
  const agency = await prisma.agency.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      cnpj: true,
      Client: true,
      users: {
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
  });
  return agency;
};

export const updateAgency = async (id: string, data: Agency) => {
  const agency = await prisma.agency.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      cnpj: true,
      Client: true,
      users: {
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
  });
  return agency;
};

export const deleteAgency = async (id: string) => {
  await prisma.agency.delete({
    where: {
      id,
    },
  });
  return;
};

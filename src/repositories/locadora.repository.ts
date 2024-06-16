import { Locadora } from '@prisma/client';

import { prisma } from '../services/services';

export const getAllLocadoras = async (): Promise<Locadora[]> => {
  return await prisma.locadora.findMany();
};

export const getLocadoraById = async (id: number): Promise<Locadora | null> => {
  return await prisma.locadora.findUnique({
    where: { id },
  });
};

export const createLocadora = async (data: any): Promise<Locadora> => {
  return await prisma.locadora.create({
    data,
  });
};

export const updateLocadora = async (id: number, data: Partial<Locadora>): Promise<Locadora | null> => {
  return await prisma.locadora.update({
    where: { id },
    data,
  });
};

export const deleteLocadora = async (id: number): Promise<void> => {
  await prisma.locadora.delete({
    where: { id },
  });
};

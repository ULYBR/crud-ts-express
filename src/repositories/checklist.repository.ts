import { Checklist } from '@prisma/client';

import{ prisma } from '../services/services';

export const getAllChecklists = async (): Promise<Checklist[]> => {
  return await prisma.checklist.findMany();
};

export const getChecklistById = async (id: number): Promise<Checklist | null> => {
  return await prisma.checklist.findUnique({
    where: { id },
  });
};

export const createChecklist = async (data: any): Promise<Checklist> => {
  return await prisma.checklist.create({
    data,
  });
};

export const updateChecklist = async (id: number, data: Partial<Checklist>): Promise<Checklist | null> => {
  return await prisma.checklist.update({
    where: { id },
    data,
  });
};

export const deleteChecklist = async (id: number): Promise<void> => {
  await prisma.checklist.delete({
    where: { id },
  });
};

import { Checklist } from '@prisma/client';
import * as checklistRepository from '../repositories/checklist.repository';

export const getAllChecklists = async (): Promise<Checklist[]> => {
  return await checklistRepository.getAllChecklists();
};

export const getChecklistById = async (id: number): Promise<Checklist | null> => {
  return await checklistRepository.getChecklistById(id);
};

export const createChecklist = async (data: any): Promise<Checklist> => {
  return await checklistRepository.createChecklist(data);
};

export const updateChecklist = async (id: number, data: Partial<Checklist>): Promise<Checklist | null> => {
  return await checklistRepository.updateChecklist(id, data);
};

export const deleteChecklist = async (id: number): Promise<void> => {
  return await checklistRepository.deleteChecklist(id);
};

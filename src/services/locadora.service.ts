import { Locadora } from '@prisma/client';
import * as locadoraRepository from '../repositories/locadora.repository';

export const getAllLocadoras = async (): Promise<Locadora[]> => {
  return await locadoraRepository.getAllLocadoras();
};

export const getLocadoraById = async (id: number): Promise<Locadora | null> => {
  return await locadoraRepository.getLocadoraById(id);
};

export const createLocadora = async (data: any): Promise<Locadora> => {
  return await locadoraRepository.createLocadora(data);
};

export const updateLocadora = async (id: number, data: Partial<Locadora>): Promise<Locadora | null> => {
  return await locadoraRepository.updateLocadora(id, data);
};

export const deleteLocadora = async (id: number): Promise<void> => {
  return await locadoraRepository.deleteLocadora(id);
};

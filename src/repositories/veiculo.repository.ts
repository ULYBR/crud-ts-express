// src/repositories/veiculo.repository.ts

import { Veiculo } from '@prisma/client';

import { prisma } from '../services/services';

export default {
  async findAll(): Promise<Veiculo[]> {
    return prisma.veiculo.findMany();
  },

  async findById(id: number): Promise<Veiculo | null> {
    return prisma.veiculo.findUnique({
      where: { id },
    });
  },

  async create(data: any): Promise<Veiculo> {
    return prisma.veiculo.create({
      data,
    });
  },

  async update(id: number, data: Partial<Veiculo>): Promise<Veiculo | null> {
    return prisma.veiculo.update({
      where: { id },
      data,
    });
  },

  async delete(id: number): Promise<void> {
    await prisma.veiculo.delete({
      where: { id },
    });
  },
};

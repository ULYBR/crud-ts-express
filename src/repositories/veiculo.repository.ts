// src/repositories/veiculo.repository.ts

import { PrismaClient, Veiculo } from '@prisma/client';

const prisma = new PrismaClient();

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

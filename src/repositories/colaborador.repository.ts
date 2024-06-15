import { PrismaClient, Colaborador } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllColaboradores(): Promise<Colaborador[]> {
  return prisma.colaborador.findMany();
}

export async function getColaboradorById(id: number): Promise<Colaborador | null> {
  return prisma.colaborador.findUnique({
    where: { id },
  });
}

export async function createColaborador(data: any): Promise<Colaborador> {
  return prisma.colaborador.create({
    data,
  });
}

export async function updateColaborador(id: number, data: any): Promise<Colaborador | null> {
  return prisma.colaborador.update({
    where: { id },
    data,
  });
}

export async function deleteColaborador(id: number): Promise<void> {
  await prisma.colaborador.delete({
    where: { id },
  });
}

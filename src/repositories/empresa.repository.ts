// src/repositories/empresaRepository.ts
import { Empresa } from '@prisma/client';

import { prisma } from '../services/services';

export async function getAllEmpresas(): Promise<Empresa[]> {
  return prisma.empresa.findMany();
}

export async function getEmpresaById(id: number): Promise<Empresa | null> {
  return prisma.empresa.findUnique({
    where: { id },
  });
}

export async function createEmpresa(data: Empresa): Promise<Empresa> {
  return prisma.empresa.create({
    data,
  });
}

export async function updateEmpresa(id: number, data: Partial<Empresa>): Promise<Empresa | null> {
  return prisma.empresa.update({
    where: { id },
    data,
  });
}

export async function deleteEmpresa(id: number): Promise<Empresa | null> {
  return prisma.empresa.delete({
    where: { id },
  });
}

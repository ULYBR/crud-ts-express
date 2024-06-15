// src/services/empresaService.ts
import * as empresaRepository from '../repositories/empresa.repository';
import { Empresa } from '@prisma/client';

export async function getAllEmpresas(): Promise<Empresa[]> {
  return empresaRepository.getAllEmpresas();
}

export async function getEmpresaById(id: number): Promise<Empresa | null> {
  return empresaRepository.getEmpresaById(id);
}

export async function createEmpresa(data: Empresa): Promise<Empresa> {
  return empresaRepository.createEmpresa(data);
}

export async function updateEmpresa(id: number, data: Partial<Empresa>): Promise<Empresa | null> {
  return empresaRepository.updateEmpresa(id, data);
}

export async function deleteEmpresa(id: number): Promise<Empresa | null> {
  return empresaRepository.deleteEmpresa(id);
}

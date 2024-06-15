// src/services/veiculo.service.ts

import VeiculoRepository from '../repositories/veiculo.repository';
import { Veiculo } from '@prisma/client';

export async function getAllVeiculos(): Promise<Veiculo[]> {
  return VeiculoRepository.findAll();
}

export async function getVeiculoById(id: number): Promise<Veiculo | null> {
  return VeiculoRepository.findById(id);
}

export async function createVeiculo(data: any): Promise<Veiculo> {
  return VeiculoRepository.create(data);
}

export async function updateVeiculo(id: number, data: Partial<Veiculo>): Promise<Veiculo | null> {
  return VeiculoRepository.update(id, data);
}

export async function deleteVeiculo(id: number): Promise<void> {
  return VeiculoRepository.delete(id);
}

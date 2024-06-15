import * as colaboradorRepository from '../repositories/colaborador.repository';

export async function getAllColaboradores() {
  return colaboradorRepository.getAllColaboradores();
}

export async function getColaboradorById(id: number) {
  return colaboradorRepository.getColaboradorById(id);
}

export async function createColaborador(data: any) {
  return colaboradorRepository.createColaborador(data);
}

export async function updateColaborador(id: number, data: any) {
  return colaboradorRepository.updateColaborador(id, data);
}

export async function deleteColaborador(id: number) {
  return colaboradorRepository.deleteColaborador(id);
}

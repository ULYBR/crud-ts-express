// src/services/usuario.service.ts

import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsuarios(): Promise<Usuario[]> {
  const usuarios = await prisma.usuario.findMany(); 
  console.log(usuarios);
  return usuarios;
}

export async function getUsuarioById(id: number): Promise<Usuario | null> {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
  });
  return usuario;
}

export async function createUsuario(data: any): Promise<Usuario> {
  const novoUsuario = await prisma.usuario.create({
    data,
  });
  return novoUsuario;
}

export async function updateUsuario(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
  const usuarioAtualizado = await prisma.usuario.update({
    where: { id },
    data,
  });
  return usuarioAtualizado;
}

export async function deleteUsuario(id: number): Promise<void> {
  await prisma.usuario.delete({
    where: { id },
  });
}

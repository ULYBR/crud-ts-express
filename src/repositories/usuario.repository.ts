import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

export async function findAll(): Promise<Usuario[]> {
  const usuarios = await prisma.usuario.findMany();
  return usuarios;
}

export async function findById(id: number): Promise<Usuario | null> {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
  });
  return usuario;
}

export async function create(data: any): Promise<Usuario> {
  const novoUsuario = await prisma.usuario.create({
    data,
  });
  return novoUsuario;
}

export async function update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
  const usuarioAtualizado = await prisma.usuario.update({
    where: { id },
    data,
  });
  return usuarioAtualizado;
}

export async function remove(id: number): Promise<void> {
  await prisma.usuario.delete({
    where: { id },
  });
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
};

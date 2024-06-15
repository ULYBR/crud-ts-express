// src/controllers/usuario.controller.ts

import { Request, Response } from 'express';
import * as usuarioService from '../services/usuario.service'; 

// Função para obter todos os usuários
export async function getAllUsuarios(req: Request, res: Response): Promise<void> {
  try {
    const usuarios = await usuarioService.getAllUsuarios(); // Chame o método correspondente do serviço
    res.status(200).json(usuarios);
  } catch (e) {
    res.status(500).send(e);
  }
}

// Função para obter um usuário por ID
export async function getUsuarioById(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  try {
    const usuario = await usuarioService.getUsuarioById(id); // Chame o método correspondente do serviço
    if (!usuario) {
      res.status(404).send('Usuário não encontrado');
      return;
    }
    res.status(200).json(usuario);
  } catch (e) {
    res.status(500).send(e);
  }
}

// Função para criar um novo usuário
export async function createUsuario(req: Request, res: Response): Promise<void> {
  const data = req.body;
  try {
    const novoUsuario = await usuarioService.createUsuario(data);
    console.log(data) // Chame o método correspondente do serviço
    res.status(201).json(novoUsuario);

  } catch (e) {
    res.status(500).send(e);
  }
}

// Função para atualizar um usuário
export async function updateUsuario(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const usuarioAtualizado = await usuarioService.updateUsuario(id, data); // Chame o método correspondente do serviço
    if (!usuarioAtualizado) {
      res.status(404).send('Usuário não encontrado');
      return;
    }
    res.status(200).json(usuarioAtualizado);
  } catch (e) {
    res.status(500).send(e);
  }
}

// Função para deletar um usuário
export async function deleteUsuario(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  try {
    await usuarioService.deleteUsuario(id); // Chame o método correspondente do serviço
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e);
  }
}

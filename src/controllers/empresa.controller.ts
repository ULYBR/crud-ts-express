// src/controllers/empresaController.ts

import { Request, Response } from 'express';
import * as empresaService from '../services/empresa.service';
import empresaSchema from '../validations/empresa.validation';
import { Empresa } from '@prisma/client';

// Listar todas as empresas
export async function getAllEmpresas(req: Request, res: Response): Promise<void> {
  try {
    const empresas = await empresaService.getAllEmpresas();
    res.status(200).json(empresas);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

// Obter uma empresa por ID
export async function getEmpresaById(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  try {
    const empresa = await empresaService.getEmpresaById(id);
    if (!empresa) {
      res.status(404).send('Empresa não encontrada');
      return;
    }
    res.status(200).json(empresa);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

// Criar uma nova empresa
export async function createEmpresa(req: Request, res: Response): Promise<void> {
  const data: Empresa = req.body;

  try {
    await empresaSchema.validate(data, { abortEarly: false });
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return;
  }

  try {
    const novaEmpresa = await empresaService.createEmpresa(data);
    res.status(201).json(novaEmpresa);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

// Atualizar uma empresa existente
export async function updateEmpresa(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  const data: Partial<Empresa> = req.body;

  try {
    await empresaSchema.validate(data, { abortEarly: false });
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return;
  }

  try {
    const empresaAtualizada = await empresaService.updateEmpresa(id, data);
    if (!empresaAtualizada) {
      res.status(404).send('Empresa não encontrada');
      return;
    }
    res.status(200).json(empresaAtualizada);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

// Excluir uma empresa
export async function deleteEmpresa(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  try {
    const empresaExcluida = await empresaService.deleteEmpresa(id);
    if (!empresaExcluida) {
      res.status(404).send('Empresa não encontrada');
      return;
    }
    res.status(204).end();
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

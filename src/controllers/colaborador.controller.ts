import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as colaboradorService from '../services/colaborador.service';

export const getAllColaboradores = async (req: Request, res: Response) => {
  try {
    const colaboradores = await colaboradorService.getAllColaboradores();
    res.status(200).json(colaboradores);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const getColaboradorById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const colaborador = await colaboradorService.getColaboradorById(id);
    if (!colaborador) {
      res.status(404).send('Colaborador não encontrado');
      return;
    }
    res.status(200).json(colaborador);
  } catch (error: any) { // Alteração aqui para capturar o erro como 'any'
    res.status(500).send(error.message || error);
  }
};

export const createColaborador = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const novoColaborador = await colaboradorService.createColaborador(data);
    res.status(201).json(novoColaborador);
  } catch (error: any) { // Alteração aqui para capturar o erro como 'any'
    res.status(500).send(error.message || error);
  }
};

export const updateColaborador = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const colaboradorAtualizado = await colaboradorService.updateColaborador(id, data);
    if (!colaboradorAtualizado) {
      res.status(404).send('Colaborador não encontrado');
      return;
    }
    res.status(200).json(colaboradorAtualizado);
  } catch (error: any) { // Alteração aqui para capturar o erro como 'any'
    res.status(500).send(error.message || error);
  }
};

export const deleteColaborador = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await colaboradorService.deleteColaborador(id);
    res.status(204).send();
  } catch (error: any) { // Alteração aqui para capturar o erro como 'any'
    res.status(500).send(error.message || error);
  }
};

export const validateCreateColaborador = async (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateUpdateColaborador = async (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

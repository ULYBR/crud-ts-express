import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as locadoraService from '../services/locadora.service';

export const getAllLocadoras = async (req: Request, res: Response): Promise<void> => {
  try {
    const locadoras = await locadoraService.getAllLocadoras();
    res.status(200).json(locadoras);
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

export const getLocadoraById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const locadora = await locadoraService.getLocadoraById(id);
    if (!locadora) {
      res.status(404).send('Locadora não encontrada');
      return;
    }
    res.status(200).json(locadora);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const createLocadora = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  try {
    const novaLocadora = await locadoraService.createLocadora(data);
    res.status(201).json(novaLocadora);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const updateLocadora = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const locadoraAtualizada = await locadoraService.updateLocadora(id, data);
    if (!locadoraAtualizada) {
      res.status(404).send('Locadora não encontrada');
      return;
    }
    res.status(200).json(locadoraAtualizada);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const deleteLocadora = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    await locadoraService.deleteLocadora(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

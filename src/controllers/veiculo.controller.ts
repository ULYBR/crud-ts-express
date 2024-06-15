// src/controllers/veiculo.controller.ts

import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as veiculoService from '../services/veiculo.service';
import { validateVeiculo, validateVeiculoId } from '../validations/veiculo.validation';

export const getAllVeiculos = async (req: Request, res: Response) => {
  try {
    const veiculos = await veiculoService.getAllVeiculos();
    res.status(200).json(veiculos);
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

export const getVeiculoById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const veiculo = await veiculoService.getVeiculoById(id);
    if (!veiculo) {
      res.status(404).send('Veículo não encontrado');
      return;
    }
    res.status(200).json(veiculo);
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

export const createVeiculo = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const novoVeiculo = await veiculoService.createVeiculo(data);
    res.status(201).json(novoVeiculo);
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

export const updateVeiculo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const veiculoAtualizado = await veiculoService.updateVeiculo(id, data);
    if (!veiculoAtualizado) {
      res.status(404).send('Veículo não encontrado');
      return;
    }
    res.status(200).json(veiculoAtualizado);
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

export const deleteVeiculo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await veiculoService.deleteVeiculo(id);
    res.status(204).send();
  } catch (error:any) {
    res.status(500).send(error.message || error);
  }
};

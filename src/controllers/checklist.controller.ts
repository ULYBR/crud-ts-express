import { Request, Response } from 'express';
import * as checklistService from '../services/checklist.service';

export const getAllChecklists = async (req: Request, res: Response): Promise<void> => {
  try {
    const checklists = await checklistService.getAllChecklists();
    res.status(200).json(checklists);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const getChecklistById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const checklist = await checklistService.getChecklistById(id);
    if (!checklist) {
      res.status(404).send('Checklist não encontrado');
      return;
    }
    res.status(200).json(checklist);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const createChecklist = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  try {
    const novoChecklist = await checklistService.createChecklist(data);
    res.status(201).json(novoChecklist);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const updateChecklist = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const checklistAtualizado = await checklistService.updateChecklist(id, data);
    if (!checklistAtualizado) {
      res.status(404).send('Checklist não encontrado');
      return;
    }
    res.status(200).json(checklistAtualizado);
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

export const deleteChecklist = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    await checklistService.deleteChecklist(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).send(error.message || error);
  }
};

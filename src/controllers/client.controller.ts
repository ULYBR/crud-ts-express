
import { clientValidation } from "../validations/client.validation"
import { createClient, getAll, getClientById, updateClient, deleteClient } from "../repositories/client.repository";
import { Request, Response } from "express";






export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userId = data.Users;
    await clientValidation.validate(data);
    const client = await createClient(data, userId);
    res.status(201).json(client);
  } catch (e) {
    console.error('Error in client creation:', e);
    res.status(400).json({ error: 'Failed to create client' });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const customers = await getAll(Number(page), Number(limit));
    res.status(200).json(customers);
  } catch (e) {
    console.error('Error in fetching clients:', e);
    res.status(400).json({ error: 'Failed to fetch clients' });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const client = await getClientById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (e) {
    console.error('Error in fetching client by ID:', e);
    res.status(400).json({ error: 'Failed to fetch client' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const client = await updateClient(req.params.id, req.body);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (e) {
    console.error('Error in updating client:', e);
    res.status(400).json({ error: 'Failed to update client' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteClient(req.params.id);
    res.status(200).json({ message: 'Client removed successfully' });
  } catch (e) {
    console.error('Error in removing client', e);
    res.status(400).json({ error: 'Failed to remove client' });
  }
};
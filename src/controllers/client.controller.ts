import { Request, Response } from "express";
import * as clientService from "../services/client.services";


export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userId = data.Users;

    const client = await clientService.createClientWithUserId(data, userId);

    res.status(201).json(client);
  } catch (e) {
    console.error("Error in client creation:", e);
    res.status(400).json({ error: "Failed to create client" });
  }
};

export const getAllCustomer = async (req:Request,res: Response) => {
  try {
    const customers = await clientService.getAllCustomers();
    res.status(200).json(customers);
  } catch (e) {
     console.error("Error in find customers",e);
    res.status(400).json({error: "Filed to find customers"});
    
  }
}

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const clients = await clientService.getAllClients(
      Number(page),
      Number(limit),
    );

    res.status(200).json(clients);
  } catch (e) {
    console.error("Error in fetching clients:", e);
    res.status(400).json({ error: "Failed to fetch clients" });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const client = await clientService.getClientByIdService(clientId);

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    res.status(200).json(client);
  } catch (e) {
    console.error("Error in fetching client by ID:", e);
    res.status(400).json({ error: "Failed to fetch client" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;

    const client = await clientService.updateClientById(clientId, clientData);

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    res.status(200).json(client);
  } catch (e) {
    console.error("Error in updating client:", e);
    res.status(400).json({ error: "Failed to update client" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    await clientService.removeClientById(clientId);

    res.status(200).json({ message: "Client removed successfully" });
  } catch (e) {
    console.error("Error in removing client:", e);
    res.status(400).json({ error: "Failed to remove client" });
  }
};

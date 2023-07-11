
import { clientValidation } from "../validations/client.validation"
import { createClient, getAll, getById, updateClient, deleteClient} from "../repositories/client.repository";
import { Request, Response } from "express";





export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body
    
    await clientValidation.validate(data);
    const client = await createClient(data);
    res.status(200).send(client);
  } catch (e) {
    res.status(400).send(e);
  }

};

export const get = async (req: Request, res: Response) => {
  try {
    
    const customers = await getAll();
    res.status(200).send(customers);
    

  } catch (e) {
    res.status(400).send(e);

  }
}

export const getId = async (req: Request, res: Response) => {
  try {
    const client = await getById(req.params.id);
    res.status(200).send(client);


  } catch (e) {
    res.status(400).send(e);

  }

}


export const update = async (req: Request, res: Response) => {

  try {
    const client = await updateClient(req.params.id, req.body);
    res.status(200).send(client);


  } catch (e) {
    res.status(400).send(e);

  }

}



export const remove = async (req: Request, res: Response) => {
  try {
    const client = await deleteClient(req.params.id);
    res.status(200).send();
  }
  catch (e) {
    res.status(400).send(e);

  }

}
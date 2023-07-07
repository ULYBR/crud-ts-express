
import { agencyValidation } from "../validations/agency.validation"
import { createAgency, getAll, getById, updateAgency, deleteAgency } from "../repositorys/Agency.repository";
import { Request, Response } from "express";



export const create = async (req: Request, res: Response) => {
  try {
    await agencyValidation.validate(req.body);
    const agency = await createAgency(req.body);
    res.status(200).send(agency);
  } catch (e) {
    res.status(400).send(e);
  }

};

export const get = async (req: Request, res: Response) => {
  try {
    const agencys = await getAll();
    res.status(200).send(agencys);

  } catch (e) {
    res.status(400).send(e);

  }
}

export const getId = async (req: Request, res: Response) => {
  try {
    const agency = await getById(req.params.id);
    res.status(200).send(agency);


  } catch (e) {
    res.status(400).send(e);

  }

}

export const update = async (req: Request, res: Response) => {

  try {
    const agency = await updateAgency(req.params.id, req.body);
    res.status(200).send(agency);


  } catch (e) {
    res.status(400).send(e);

  }

}

export const remove = async (req: Request, res: Response) => {
  try {
    const agency = await deleteAgency(req.params.id);
    res.status(200).send();
  }
  catch (e) {
    res.status(400).send(e);

  }

}
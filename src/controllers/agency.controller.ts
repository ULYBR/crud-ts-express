import { agencyValidation } from "../validations/agency.validation";
import {
  createAgency,
  getAll,
  getAgencyById,
  updateAgency,
  deleteAgency,
} from "../repositories/agency.repository";
import { Request, Response } from "express";
import { addUserToAgency } from "../Use-Case/add-User-To-Agency";

export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userId = data.users;
    const clientId = data.Client;
    console.log(data);
    await agencyValidation.validate(data);
    const agency = await createAgency(data, userId, clientId);
    res.status(201).json(agency);
  } catch (e) {
    console.error("Error in agency creation:", e);
    res.status(400).json({ error: "Failed to create agency" });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;

    const agencies = await getAll(Number(page), Number(limit));
    res.status(200).send(agencies);
  } catch (e) {
    console.error("Error in fetching agencies:", e);
    res.status(400).json({ error: "Failed to fetch agencies" });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const agency = await getAgencyById(req.params.id);

    if (!agency) {
      return res.status(404).json({ error: "Agency not found" });
    }

    res.status(200).send(agency);
  } catch (e) {
    console.error("Error in fetching agency by ID:", e);
    res.status(400).json({ error: "Failed to fetch agency" });
  }
};
export const addUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = data.users.connect.id;

    const agency = await addUserToAgency(user, req.params.id);
    res.status(200).send(agency);
  } catch (e: any) {
    res.status(400).json({
      message: e.message,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const agency = await updateAgency(req.params.id, req.body);

    if (!agency) {
      return res.status(404).json({ error: "Agency not found" });
    }

    res.status(200).send(agency);
  } catch (e) {
    console.error("Error in updating agency:", e);
    res.status(400).json({ error: "Failed to update agency" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const agency = await deleteAgency(req.params.id);

    res.status(200).json({ message: "Agency removed successfully" });
  } catch (e) {
    console.error("Error in removing agency", e);
    res.status(400).json({ error: "Failed to remove agency " });
  }
};

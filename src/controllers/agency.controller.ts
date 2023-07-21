import { Request, Response } from "express";
import * as agencyService from "../services/agency.services";

export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userId = data.users;
    const clientId = data.Client;

    const agency = await agencyService.createAgencyWithUserIdAndClientId(
      data,
      userId,
      clientId,
    );

    res.status(201).json(agency);
  } catch (e) {
    console.error("Error in agency creation:", e);
    res.status(400).json({ error: "Failed to create agency" });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const agencies = await agencyService.getAllAgencies(
      Number(page),
      Number(limit),
    );

    res.status(200).json(agencies);
  } catch (e) {
    console.error("Error in fetching agencies:", e);
    res.status(400).json({ error: "Failed to fetch agencies" });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const agencyId = req.params.id;
    const agency = await agencyService.getAgencyById(agencyId);

    if (!agency) {
      return res.status(404).json({ error: "Agency not found" });
    }

    res.status(200).json(agency);
  } catch (e) {
    console.error("Error in fetching agency by ID:", e);
    res.status(400).json({ error: "Failed to fetch agency" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const agencyId = req.params.id;
    const agencyData = req.body;

    const agency = await agencyService.updateAgencyById(agencyId, agencyData);

    if (!agency) {
      return res.status(404).json({ error: "Agency not found" });
    }

    res.status(200).json(agency);
  } catch (e) {
    console.error("Error in updating agency:", e);
    res.status(400).json({ error: "Failed to update agency" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const agencyId = req.params.id;
    await agencyService.removeAgencyById(agencyId);

    res.status(200).json({ message: "Agency removed successfully" });
  } catch (e) {
    console.error("Error in removing agency:", e);
    res.status(400).json({ error: "Failed to remove agency" });
  }
};


import { agencyValidation } from "../validations/agency.validation"
import { createAgency, getAll, getAgencyById, updateAgency, deleteAgency } from "../repositorys/Agency.repository";
import { Request, Response } from "express";
import { addUserToAgency } from "../UseCase/add-User-To-Agency";




export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body
    await agencyValidation.validate(data);
    const agency = await createAgency(data);
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
    const agency = await getAgencyById(req.params.id);
    res.status(200).send(agency);


  } catch (e) {
    res.status(400).send(e);

  }

}
export const addUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = data.users.connect.id;
   
    const agency = await addUserToAgency(user,req.params.id);
    res.status(200).send(agency);

  }catch(e:any){
    res.status(400).json({
      message:e.message
    })


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
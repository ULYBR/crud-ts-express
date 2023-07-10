import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import { createUser, getAll, getById, updateUser, deleteUser } from "../repositories/user.repository";
import { Request, Response } from "express";
import { addAgencyToUser } from "../Use-Case/add-Agency-To-User";






export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    await userValidation.validate(data);

    const hashPassword = await bcrypt.hash(data.password, 10)
    data.password = hashPassword;
    const user = await createUser(data);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {

    const users = await getAll();
    res.status(200).send(users);

  } catch (e) {
    res.status(400).send(e);

  }
}

export const getId = async (req: Request, res: Response) => {
  try {
    const user = await getById(req.params.id);
    res.status(200).send(user);


  } catch (e) {
    res.status(400).send(e);

  }

}



export const update = async (req: Request, res: Response) => {

  try {
    const data = req.body;
    const user = await updateUser(req.params.id, data);
  
    
   
    res.status(200).send(user);





  } catch (e: any) {
    
    res.status(400).send(e);

  
  }

}
export const addAgency = async (req: Request, res: Response) => {
  try {
    


    const agency = req.body.agencies.connect.id;
    const user = await addAgencyToUser(req.params.id, agency);
    res.status(200).send(user);


  } catch (e: any) {

    res.status(400).json({
      message: e.message
    });

  }
}
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteUser(id);
    res.status(200).send();
  }
  catch (e) {
    res.status(400).send({ message: "Deleted User", e });


  }

}




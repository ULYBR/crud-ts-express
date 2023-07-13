import { User } from "@prisma/client";
import { prisma } from "../services/services";




export const createUser = async (data: User,clientId: string) => {
  
  const user = await prisma.user.create({
    data:{
      ...data,
      customers:{
        connect: {
          id: clientId,
        }
      }
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      agency: true,
      customers:true

    }
  });
  
  return user;

};

export const getAll = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      role: true,
      agency: true,
      customers: true,
    },
    skip: offset,
    take: limit,
  });

  const totalUsersCount = await prisma.user.count();
  const totalPages = Math.ceil(totalUsersCount / limit);

  return {
    users,
    totalUsersCount,
    totalPages,
  };
};



export const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      agency: true,
      customers:true,

    }
  });
  return user;
}



export const updateUser = async (id: string, data: User) => {
 
  const user = await prisma.user.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      agency: true,
      customers:true,

    },
  });
  return user;

}

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id
    }
  });
  return

}
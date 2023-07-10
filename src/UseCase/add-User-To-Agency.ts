

import { Agency } from '@prisma/client';
import { getAgencyById } from '../repositorys/Agency.repository';
import { getById } from '../repositorys/user.repository';
import { prisma } from '../services/services';



export const addUserToAgency = async (userId: string, agencyId: string): Promise<Agency> => {

  const agency = await getAgencyById(agencyId);



  if (!agency) throw new Error('Agency not found⛔');

  const user = await getById(userId);

  if (!user) throw new Error('User not found⛔');
 

  const hasAgencyInUser = await agency.users.every((user) => user.id === userId);
  


  if (hasAgencyInUser) throw new Error('Agency already registered in the User⛔');

  const updatedAgency = await prisma.agency.update({
    where: {
      id: userId,
    },
    data: {
      users: {
        connect: { id: userId },
      },
    },

  });

  return updatedAgency;
};


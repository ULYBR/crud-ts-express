
import { Agency } from '@prisma/client';
import { getAgencyById } from '../repositories/agency.repository';
import { getById } from '../repositories/user.repository';
import { prisma } from '../services/services';



export const addUserToAgency = async (userId: string, agencyId: string): Promise<Agency> => {
  const user = await getById(userId);

  if (!user) throw new Error('User not found⛔');

  const agency = await getAgencyById(agencyId);



  if (!agency) throw new Error('Agency not found⛔');



  const hasUserInAgency = await agency.users.every((user) => user.id === userId);
  



  if (hasUserInAgency) throw new Error('Agency already registered in the User⛔');

  const updatedAgency = await prisma.agency.update({
    where: {
      id: agencyId,
    },
    data: {
      users: {
        connect: { id: userId },
      },
    },

  });

  return updatedAgency;
};



import { User } from '@prisma/client';
import { getAgencyById } from '../repositories/agency.repository';
import { getById } from '../repositories/user.repository';
import { prisma } from '../services/services';




export const addAgencyToUser = async (userId: string, agencyId: string): Promise<User> => {
  const user = await getById(userId);
 

 


  if (!user) throw new Error('User not found⛔');

  const agency = await getAgencyById(agencyId);





  if (!agency) throw new Error('Agency not found⛔');

  const hasAgencyInUser = await user.agencies.every((agency) => agency.id === agencyId);


  if (hasAgencyInUser) throw new Error('User already registered in the agency⛔');
 
 


  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      agencies: {
        connect: { id: agencyId },
      },
    },

  });

  return updatedUser;
};


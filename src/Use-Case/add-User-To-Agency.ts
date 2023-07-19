import { prisma } from "../services/services";

import { getAgencyById } from "../repositories/agency.repository";
import { getById } from "../repositories/user.repository";
import { Agency } from "@prisma/client";

export const addUserToAgency = async (
  userId: string,
  agencyId: string,
): Promise<Agency | undefined> => {
  const user = await getById(userId);

  if (!user) throw new Error("User not found⛔");

  const agency = await getAgencyById(agencyId);

  if (!agency) throw new Error("Agency not found⛔");

  const HasUserInAgency = agency.users.some((user) => user.id === userId);

  if (HasUserInAgency) {
    throw new Error("User already registered in the agency⛔");
  } else if (!HasUserInAgency) {
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
  }
};

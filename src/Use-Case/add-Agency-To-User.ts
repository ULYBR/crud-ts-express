import { User } from "@prisma/client";
import { getAgencyById } from "../repositories/agency.repository";
import { getById } from "../repositories/user.repository";
import { prisma } from "../services/services";

export const addAgencyToUser = async (
  userId: string,
  agencyId: string,
): Promise<User> => {
  const user = await getById(userId);

  if (!user) throw new Error("User not found⛔");

  const agency = await getAgencyById(agencyId);

  if (!agency) throw new Error("Agency not found⛔");

  const HasAgencyInUser = user.agency?.id === agencyId;

  if (HasAgencyInUser) {
    throw new Error("User already registered in the agency⛔");
  } else {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        agency: {
          connect: { id: agencyId },
        },
      },
    });

    return updatedUser;
  }
};

import { User } from '@prisma/client';
export declare const addAgencyToUser: (userId: string, agencyId: string) => Promise<User>;

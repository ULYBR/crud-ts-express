import { Role } from "@prisma/client";
export type User = {
    name: string;
    email: string;
    password: string;
    role: Role;
    agencyId: string;
};
export default User;

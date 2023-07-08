import { Role } from "@prisma/client";
export type User = {
    name: string;
    email: string;
    password: string;
    role: Role;
    Agencys: object;
};
export default User;

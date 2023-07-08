import { User } from "prisma/prisma-client";
export type Agency = {
    id: string;
    user: User;
    name: string;
    cnpj: string;
    Users: object;
};
export default Agency;

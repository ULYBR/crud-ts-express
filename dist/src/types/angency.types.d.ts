import { User } from "prisma/prisma-client";
export type Agency = {
    id: string;
    user: User;
    name: string;
    cnpj: string;
};
export default Agency;

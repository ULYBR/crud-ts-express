import Agency from "./angency.types";
import { Role } from "@prisma/client";
export type User = {
    name: string;
    email: string;
    password: string;
    role: Role;
    agency: Agency;
};
export default User;

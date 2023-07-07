import { Role } from "@prisma/client";

 export type User = {
  name: string;
  email: string;
  password: string;
  role: Role;
  relationship: any
};

export default User;
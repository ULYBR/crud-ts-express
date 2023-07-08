
import { User } from "prisma/prisma-client"

export type Agency = {
  id: string;
  user: User;
  name: string;
  cnpj: string;
  users: object;
}
export default Agency;
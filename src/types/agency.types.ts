
import User from "./user.types";

export type Agency = {
  id: string;
  name: string;
  cnpj: string;
  users: User;
}
export default Agency;
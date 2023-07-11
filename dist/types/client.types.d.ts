import User from "./user.types";
export type Client = {
    id: string;
    name: string;
    Users: User;
    agencyId: string;
};
export default Client;

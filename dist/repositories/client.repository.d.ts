import { Client } from "@prisma/client";
export declare const createClient: (
  data: Client,
  userId: string,
) => Promise<{
  id: string;
  name: string;
  agencyId: string;
}>;
export declare const getAll: (
  page: number,
  limit: number,
) => Promise<{
  customers: {
    id: string;
    name: string;
    Users: {
      id: string;
      name: string;
      email: string;
      role: import(".prisma/client").Role;
      createdAt: Date;
      updatedAt: Date;
      agency: import("@prisma/client/runtime").GetResult<
        {
          id: string;
          name: string;
          cnpj: string;
          createdAt: Date;
          updatedAt: Date;
        },
        unknown
      > & {};
    }[];
  }[];
  totalCustomersCount: number;
  totalPages: number;
}>;
export declare const getClientById: (id: string) => Promise<{
  id: string;
  name: string;
  agency: {
    id: string;
    name: string;
    cnpj: string;
  };
  Users: {
    id: string;
    name: string;
    email: string;
    role: import(".prisma/client").Role;
    createdAt: Date;
    updatedAt: Date;
  }[];
} | null>;
export declare const updateClient: (
  id: string,
  data: Client,
) => Promise<{
  name: string;
  agency: import("@prisma/client/runtime").GetResult<
    {
      id: string;
      name: string;
      cnpj: string;
      createdAt: Date;
      updatedAt: Date;
    },
    unknown
  > & {};
  agencyId: string;
}>;
export declare const deleteClient: (id: string) => Promise<void>;

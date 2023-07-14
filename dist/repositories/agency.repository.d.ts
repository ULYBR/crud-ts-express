import { Agency } from "@prisma/client";
export declare const createAgency: (
  data: Agency,
  userId: string,
  clientId: string,
) => Promise<{
  id: string;
  name: string;
  cnpj: string;
  Client: (import("@prisma/client/runtime").GetResult<
    {
      id: string;
      name: string;
      agencyId: string;
    },
    unknown
  > & {})[];
  users: {
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
}>;
export declare const getAll: (
  page: number,
  limit: number,
) => Promise<{
  agencies: {
    id: string;
    name: string;
    cnpj: string;
    Client: {
      id: string;
      name: string;
    }[];
    users: {
      id: string;
      name: string;
      email: string;
    }[];
  }[];
  totalAgenciesCount: number;
  totalPages: number;
}>;
export declare const getAgencyById: (id: string) => Promise<{
  id: string;
  name: string;
  cnpj: string;
  Client: (import("@prisma/client/runtime").GetResult<
    {
      id: string;
      name: string;
      agencyId: string;
    },
    unknown
  > & {})[];
  users: {
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
} | null>;
export declare const updateAgency: (
  id: string,
  data: Agency,
) => Promise<{
  id: string;
  name: string;
  cnpj: string;
  Client: (import("@prisma/client/runtime").GetResult<
    {
      id: string;
      name: string;
      agencyId: string;
    },
    unknown
  > & {})[];
  users: {
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
}>;
export declare const deleteAgency: (id: string) => Promise<void>;

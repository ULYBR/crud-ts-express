import { User } from "@prisma/client";
export declare const createUser: (data: User) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    agencies: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    role: import(".prisma/client").Role;
    agencies: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}[]>;
export declare const getById: (id: string) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    agencies: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
} | null>;
export declare const updateUser: (id: string, data: User) => Promise<{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    agencies: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}>;
export declare const deleteUser: (id: string) => Promise<void>;

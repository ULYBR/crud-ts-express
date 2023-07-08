import User from "../types/user.types";
export declare const createUser: (data: User) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    Agencys: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
    }, unknown> & {})[];
}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    role: import(".prisma/client").Role;
    Agencys: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
    }, unknown> & {})[];
}[]>;
export declare const getById: (id: string) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    Agencys: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
    }, unknown> & {})[];
} | null>;
export declare const updateUser: (id: string, data: User) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    Agencys: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
    }, unknown> & {})[];
}>;
export declare const deleteUser: (id: string) => Promise<void>;

import { Agency } from "@prisma/client";
export declare const createAgency: (data: Agency) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    name: string;
    cnpj: string;
    createdAt: Date;
    updatedAt: Date;
}, unknown> & {}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string;
    cnpj: string;
    users: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}[]>;
export declare const getAgencyById: (id: string) => Promise<{
    id: string;
    name: string;
    cnpj: string;
    users: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
} | null>;
export declare const updateAgency: (id: string, data: Agency) => Promise<{
    id: string;
    name: string;
    cnpj: string;
    users: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}>;
export declare const deleteAgency: (id: string) => Promise<void>;

import { Agency } from "@prisma/client";
export declare const createAgency: (data: Agency) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    name: string;
    cnpj: string;
    createdAt: Date;
    updatedAt: Date;
}, unknown> & {}>;
export declare const getAll: (page: number, limit: number) => Promise<{
    agencies: {
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
            agencyId: string | null;
        }, unknown> & {})[];
        Client: (import("@prisma/client/runtime").GetResult<{
            id: string;
            name: string;
            agencyId: string;
        }, unknown> & {})[];
    }[];
    totalAgenciesCount: number;
    totalPages: number;
}>;
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
        agencyId: string | null;
    }, unknown> & {})[];
    Client: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        agencyId: string;
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
        agencyId: string | null;
    }, unknown> & {})[];
    Client: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        agencyId: string;
    }, unknown> & {})[];
}>;
export declare const deleteAgency: (id: string) => Promise<void>;

import { Client } from "@prisma/client";
export declare const createClient: (data: Client) => Promise<{
    id: string;
    name: string;
    agencyId: string;
}>;
export declare const getAll: (page: number, limit: number) => Promise<{
    customers: {
        id: string;
        name: string;
        agency: import("@prisma/client/runtime").GetResult<{
            id: string;
            name: string;
            cnpj: string;
            createdAt: Date;
            updatedAt: Date;
        }, unknown> & {};
        Users: (import("@prisma/client/runtime").GetResult<{
            id: string;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").Role;
            createdAt: Date;
            updatedAt: Date;
            agencyId: string | null;
        }, unknown> & {})[];
    }[];
    totalCustomersCount: number;
    totalPages: number;
}>;
export declare const getClientById: (id: string) => Promise<{
    name: string;
    agencyId: string;
} | null>;
export declare const updateClient: (id: string, data: Client) => Promise<{
    name: string;
    agency: import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        cnpj: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {};
    agencyId: string;
}>;
export declare const deleteClient: (id: string) => Promise<void>;

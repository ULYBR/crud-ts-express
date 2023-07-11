import { Client } from "@prisma/client";
export declare const createClient: (data: Client) => Promise<{
    id: string;
    name: string;
    agencyId: string;
}>;
export declare const getAll: () => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    name: string;
    agencyId: string;
}, unknown> & {})[]>;
export declare const getById: (id: string) => Promise<{
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

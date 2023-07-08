import Agency from "../types/angency.types";
export declare const createAgency: (data: Agency) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    name: string;
    cnpj: string;
}, unknown> & {}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string;
    cnpj: string;
    Users: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string | null;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}[]>;
export declare const getById: (id: string) => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    name: string;
    cnpj: string;
}, unknown> & {}) | null>;
export declare const updateAgency: (id: string, data: Agency) => Promise<{
    id: string;
    name: string;
    cnpj: string;
    Users: (import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string | null;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[];
}>;
export declare const deleteAgency: (id: string) => Promise<void>;

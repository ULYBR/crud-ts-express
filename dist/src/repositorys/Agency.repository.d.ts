import Agency from "../types/angency.types";
export declare const createAgency: (data: Agency) => Promise<{
    id: string;
    name: string;
    cnpj: string;
}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string;
    cnpj: string;
    relationship: (import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        agencyId: string;
    }, unknown> & {})[];
}[]>;
export declare const getById: (id: string) => Promise<{
    id: string;
    name: string;
    cnpj: string;
    relationship: (import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        agencyId: string;
    }, unknown> & {})[];
} | null>;
export declare const updateAgency: (id: string, data: Agency) => Promise<{
    id: string;
    name: string;
    cnpj: string;
}>;
export declare const deleteAgency: (id: string) => Promise<void>;

import User from "../types/user.types";
export declare const createUser: (data: User) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    relationship: (import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        agencyId: string;
    }, unknown> & {})[];
}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    role: import(".prisma/client").Role;
    relationship: (import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        agencyId: string;
    }, unknown> & {})[];
}[]>;
export declare const getById: (id: string) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    relationship: (import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        agencyId: string;
    }, unknown> & {})[];
} | null>;
export declare const updateUser: (id: string, data: User) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteUser: (id: string) => Promise<void>;

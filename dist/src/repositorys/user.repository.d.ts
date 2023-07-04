export declare const createUser: (data: any) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getAll: () => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getById: (id: string) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const updateUser: (id: string, data: any) => Promise<{
    id: string;
    name: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteUser: (id: string) => Promise<void>;

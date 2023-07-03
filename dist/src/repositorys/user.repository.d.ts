export declare const createUser: (data: any) => Promise<import("@prisma/client/runtime").GetResult<{
    id: number;
    name: string | null;
    email: string;
    role: import(".prisma/client").Role;
    createdAt: Date;
    updatedAt: Date;
}, unknown> & {}>;

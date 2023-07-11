"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.getById = exports.getAll = exports.createClient = void 0;
const services_1 = require("../services/services");
const createClient = async (data) => {
    const client = await services_1.prisma.client.create({
        data,
        select: {
            id: true,
            name: true,
            agencyId: true
        }
    });
    return client;
};
exports.createClient = createClient;
const getAll = async () => {
    const customers = await services_1.prisma.client.findMany();
    return customers;
};
exports.getAll = getAll;
const getById = async (id) => {
    const client = await services_1.prisma.client.findUnique({
        where: {
            id
        },
        select: {
            name: true,
            agencyId: true,
        }
    });
    return client;
};
exports.getById = getById;
const updateClient = async (id, data) => {
    const client = await services_1.prisma.client.update({
        where: {
            id
        },
        data,
        select: {
            name: true,
            agency: true,
            agencyId: true,
        },
    });
    return client;
};
exports.updateClient = updateClient;
const deleteClient = async (id) => {
    await services_1.prisma.client.delete({
        where: {
            id
        }
    });
    return;
};
exports.deleteClient = deleteClient;
//# sourceMappingURL=client.repository.js.map
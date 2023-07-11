"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAgency = exports.updateAgency = exports.getAgencyById = exports.getAll = exports.createAgency = void 0;
const services_1 = require("../services/services");
const createAgency = async (data) => {
    const agency = await services_1.prisma.agency.create({
        data,
    });
    return agency;
};
exports.createAgency = createAgency;
const getAll = async () => {
    const agencies = await services_1.prisma.agency.findMany({
        select: {
            id: true,
            name: true,
            cnpj: true,
            users: true,
        }
    });
    return agencies;
};
exports.getAll = getAll;
const getAgencyById = async (id) => {
    const agency = await services_1.prisma.agency.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            cnpj: true,
            users: true,
        }
    });
    return agency;
};
exports.getAgencyById = getAgencyById;
const updateAgency = async (id, data) => {
    const agency = await services_1.prisma.agency.update({
        where: {
            id
        },
        data,
        select: {
            id: true,
            name: true,
            cnpj: true,
            users: true
        },
    });
    return agency;
};
exports.updateAgency = updateAgency;
const deleteAgency = async (id) => {
    await services_1.prisma.agency.delete({
        where: {
            id
        }
    });
    return;
};
exports.deleteAgency = deleteAgency;
//# sourceMappingURL=agency.repository.js.map
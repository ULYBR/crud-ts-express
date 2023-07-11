"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getById = exports.getAll = exports.createUser = void 0;
const services_1 = require("../services/services");
const createUser = async (data) => {
    const user = await services_1.prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            agency: true
        }
    });
    return user;
};
exports.createUser = createUser;
const getAll = async () => {
    const users = await services_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            role: true,
            agency: true
        }
    });
    return users;
};
exports.getAll = getAll;
const getById = async (id) => {
    const user = await services_1.prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            agency: true
        }
    });
    return user;
};
exports.getById = getById;
const updateUser = async (id, data) => {
    const user = await services_1.prisma.user.update({
        where: {
            id
        },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            agency: true
        },
    });
    return user;
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    await services_1.prisma.user.delete({
        where: {
            id
        }
    });
    return;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.repository.js.map
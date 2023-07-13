"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getById = exports.getAll = exports.createUser = void 0;
const services_1 = require("../services/services");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            agency: true,
            customers: true
        }
    });
    return user;
});
exports.createUser = createUser;
const getAll = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = (page - 1) * limit;
    const users = yield services_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            role: true,
            agency: true,
            customers: true,
        },
        skip: offset,
        take: limit,
    });
    const totalUsersCount = yield services_1.prisma.user.count();
    const totalPages = Math.ceil(totalUsersCount / limit);
    return {
        users,
        totalUsersCount,
        totalPages,
    };
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.prisma.user.findUnique({
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
            agency: true,
            customers: true,
        }
    });
    return user;
});
exports.getById = getById;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield services_1.prisma.user.update({
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
            agency: true,
            customers: true,
        },
    });
    return user;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.prisma.user.delete({
        where: {
            id
        }
    });
    return;
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.repository.js.map
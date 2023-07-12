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
exports.deleteClient = exports.updateClient = exports.getById = exports.getAll = exports.createClient = void 0;
const services_1 = require("../services/services");
const createClient = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.create({
        data,
        select: {
            id: true,
            name: true,
            agencyId: true
        }
    });
    return client;
});
exports.createClient = createClient;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield services_1.prisma.client.findMany();
    return customers;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.findUnique({
        where: {
            id
        },
        select: {
            name: true,
            agencyId: true,
        }
    });
    return client;
});
exports.getById = getById;
const updateClient = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.update({
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
});
exports.updateClient = updateClient;
const deleteClient = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.prisma.client.delete({
        where: {
            id
        }
    });
    return;
});
exports.deleteClient = deleteClient;
//# sourceMappingURL=client.repository.js.map
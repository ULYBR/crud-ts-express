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
exports.deleteAgency = exports.updateAgency = exports.getAgencyById = exports.getAll = exports.createAgency = void 0;
const services_1 = require("../services/services");
const createAgency = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const agency = yield services_1.prisma.agency.create({
        data,
    });
    return agency;
});
exports.createAgency = createAgency;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const agencys = yield services_1.prisma.agency.findMany({
        select: {
            id: true,
            name: true,
            cnpj: true,
            users: true,
        }
    });
    return agencys;
});
exports.getAll = getAll;
const getAgencyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const agency = yield services_1.prisma.agency.findUnique({
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
});
exports.getAgencyById = getAgencyById;
const updateAgency = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const agency = yield services_1.prisma.agency.update({
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
});
exports.updateAgency = updateAgency;
const deleteAgency = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.prisma.agency.delete({
        where: {
            id
        }
    });
    return;
});
exports.deleteAgency = deleteAgency;

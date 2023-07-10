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
exports.addAgencyToUser = void 0;
const agency_repository_1 = require("../repositories/agency.repository");
const user_repository_1 = require("../repositories/user.repository");
const services_1 = require("../services/services");
const addAgencyToUser = (userId, agencyId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repository_1.getById)(userId);
    console.log(user);
    if (!user)
        throw new Error('User not found⛔');
    const agency = yield (0, agency_repository_1.getAgencyById)(agencyId);
    console.log(agencyId);
    if (!agency)
        throw new Error('Agency not found⛔');
    const hasAgencyInUser = yield user.agencies.every((agency) => agency.id === agencyId);
    console.log(hasAgencyInUser);
    if (hasAgencyInUser)
        throw new Error('User already registered in the agency⛔');
    const updatedUser = yield services_1.prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            agencies: {
                connect: { id: agencyId },
            },
        },
    });
    return updatedUser;
});
exports.addAgencyToUser = addAgencyToUser;

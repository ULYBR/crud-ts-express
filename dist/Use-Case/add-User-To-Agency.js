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
exports.addUserToAgency = void 0;
const services_1 = require("../services/services");
const agency_repository_1 = require("../repositories/agency.repository");
const user_repository_1 = require("../repositories/user.repository");
const addUserToAgency = (userId, agencyId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repository_1.getById)(userId);
    if (!user)
        throw new Error('User not found⛔');
    const agency = yield (0, agency_repository_1.getAgencyById)(agencyId);
    if (!agency)
        throw new Error('Agency not found⛔');
    const HasUserInAngency = agency.users.some((user) => user.id === userId);
    if (HasUserInAngency) {
        throw new Error('User already registered in the agency⛔');
    }
    else if (!HasUserInAngency) {
        const updatedAgency = yield services_1.prisma.agency.update({
            where: {
                id: agencyId,
            },
            data: {
                users: {
                    connect: { id: userId },
                },
            },
        });
        return updatedAgency;
    }
});
exports.addUserToAgency = addUserToAgency;
//# sourceMappingURL=add-User-To-Agency.js.map
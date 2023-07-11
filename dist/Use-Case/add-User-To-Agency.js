"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToAgency = void 0;
const services_1 = require("../services/services");
const agency_repository_1 = require("../repositories/agency.repository");
const user_repository_1 = require("../repositories/user.repository");
const addUserToAgency = async (userId, agencyId) => {
    const user = await (0, user_repository_1.getById)(userId);
    if (!user)
        throw new Error('User not found⛔');
    const agency = await (0, agency_repository_1.getAgencyById)(agencyId);
    if (!agency)
        throw new Error('Agency not found⛔');
    const HasUserInAngency = agency.users.some((user) => user.id === userId);
    if (HasUserInAngency) {
        throw new Error('User already registered in the agency⛔');
    }
    else if (!HasUserInAngency) {
        const updatedAgency = await services_1.prisma.agency.update({
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
};
exports.addUserToAgency = addUserToAgency;
//# sourceMappingURL=add-User-To-Agency.js.map
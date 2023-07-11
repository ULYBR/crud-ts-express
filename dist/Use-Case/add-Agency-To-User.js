"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAgencyToUser = void 0;
const agency_repository_1 = require("../repositories/agency.repository");
const user_repository_1 = require("../repositories/user.repository");
const services_1 = require("../services/services");
const addAgencyToUser = async (userId, agencyId) => {
    const user = await (0, user_repository_1.getById)(userId);
    if (!user)
        throw new Error('User not found⛔');
    const agency = await (0, agency_repository_1.getAgencyById)(agencyId);
    if (!agency)
        throw new Error('Agency not found⛔');
    const HasAgencyInUser = user.agency?.id === agencyId;
    if (HasAgencyInUser) {
        throw new Error('User already registered in the agency⛔');
    }
    else {
        const updatedUser = await services_1.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                agency: {
                    connect: { id: agencyId },
                },
            },
        });
        return updatedUser;
    }
};
exports.addAgencyToUser = addAgencyToUser;
//# sourceMappingURL=add-Agency-To-User.js.map
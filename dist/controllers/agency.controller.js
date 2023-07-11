"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.addUser = exports.getId = exports.get = exports.create = void 0;
const agency_validation_1 = require("../validations/agency.validation");
const agency_repository_1 = require("../repositories/agency.repository");
const add_User_To_Agency_1 = require("../Use-Case/add-User-To-Agency");
const create = async (req, res) => {
    try {
        const data = req.body;
        await agency_validation_1.agencyValidation.validate(data);
        const agency = await (0, agency_repository_1.createAgency)(data);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.create = create;
const get = async (req, res) => {
    try {
        const agencys = await (0, agency_repository_1.getAll)();
        res.status(200).send(agencys);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.get = get;
const getId = async (req, res) => {
    try {
        const agency = await (0, agency_repository_1.getAgencyById)(req.params.id);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.getId = getId;
const addUser = async (req, res) => {
    try {
        const data = req.body;
        const user = data.users.connect.id;
        const agency = await (0, add_User_To_Agency_1.addUserToAgency)(user, req.params.id);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};
exports.addUser = addUser;
const update = async (req, res) => {
    try {
        const agency = await (0, agency_repository_1.updateAgency)(req.params.id, req.body);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const agency = await (0, agency_repository_1.deleteAgency)(req.params.id);
        res.status(200).send();
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.remove = remove;
//# sourceMappingURL=agency.controller.js.map
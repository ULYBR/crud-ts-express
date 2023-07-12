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
exports.remove = exports.update = exports.addUser = exports.getId = exports.get = exports.create = void 0;
const agency_validation_1 = require("../validations/agency.validation");
const agency_repository_1 = require("../repositories/agency.repository");
const add_User_To_Agency_1 = require("../Use-Case/add-User-To-Agency");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield agency_validation_1.agencyValidation.validate(data);
        const agency = yield (0, agency_repository_1.createAgency)(data);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agencys = yield (0, agency_repository_1.getAll)();
        res.status(200).send(agencys);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.get = get;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agency = yield (0, agency_repository_1.getAgencyById)(req.params.id);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.getId = getId;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = data.users.connect.id;
        const agency = yield (0, add_User_To_Agency_1.addUserToAgency)(user, req.params.id);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});
exports.addUser = addUser;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agency = yield (0, agency_repository_1.updateAgency)(req.params.id, req.body);
        res.status(200).send(agency);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agency = yield (0, agency_repository_1.deleteAgency)(req.params.id);
        res.status(200).send();
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.remove = remove;
//# sourceMappingURL=agency.controller.js.map
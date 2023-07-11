"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.addAgency = exports.update = exports.getId = exports.get = exports.create = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_validation_1 = require("../validations/user.validation");
const user_repository_1 = require("../repositories/user.repository");
const add_Agency_To_User_1 = require("../Use-Case/add-Agency-To-User");
const create = async (req, res) => {
    try {
        const data = req.body;
        await user_validation_1.userValidation.validate(data);
        const hashPassword = await bcrypt_1.default.hash(data.password, 10);
        data.password = hashPassword;
        const user = await (0, user_repository_1.createUser)(data);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.create = create;
const get = async (req, res) => {
    try {
        const users = await (0, user_repository_1.getAll)();
        res.status(200).send(users);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.get = get;
const getId = async (req, res) => {
    try {
        const user = await (0, user_repository_1.getById)(req.params.id);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.getId = getId;
const update = async (req, res) => {
    try {
        const data = req.body;
        const user = await (0, user_repository_1.updateUser)(req.params.id, data);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.update = update;
const addAgency = async (req, res) => {
    try {
        const agency = req.body.agencies.connect.id;
        const user = await (0, add_Agency_To_User_1.addAgencyToUser)(req.params.id, agency);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};
exports.addAgency = addAgency;
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        await (0, user_repository_1.deleteUser)(id);
        res.status(200).send();
    }
    catch (e) {
        res.status(400).send({ message: "Deleted User", e });
    }
};
exports.remove = remove;
//# sourceMappingURL=user.controller.js.map
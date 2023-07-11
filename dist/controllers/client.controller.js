"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getId = exports.get = exports.create = void 0;
const client_validation_1 = require("../validations/client.validation");
const client_repository_1 = require("../repositories/client.repository");
const create = async (req, res) => {
    try {
        const data = req.body;
        await client_validation_1.clientValidation.validate(data);
        const client = await (0, client_repository_1.createClient)(data);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.create = create;
const get = async (req, res) => {
    try {
        const customers = await (0, client_repository_1.getAll)();
        res.status(200).send(customers);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.get = get;
const getId = async (req, res) => {
    try {
        const client = await (0, client_repository_1.getById)(req.params.id);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.getId = getId;
const update = async (req, res) => {
    try {
        const client = await (0, client_repository_1.updateClient)(req.params.id, req.body);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const client = await (0, client_repository_1.deleteClient)(req.params.id);
        res.status(200).send();
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.remove = remove;
//# sourceMappingURL=client.controller.js.map
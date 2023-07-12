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
exports.remove = exports.update = exports.getId = exports.get = exports.create = void 0;
const client_validation_1 = require("../validations/client.validation");
const client_repository_1 = require("../repositories/client.repository");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield client_validation_1.clientValidation.validate(data);
        const client = yield (0, client_repository_1.createClient)(data);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield (0, client_repository_1.getAll)();
        res.status(200).send(customers);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.get = get;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, client_repository_1.getById)(req.params.id);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.getId = getId;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, client_repository_1.updateClient)(req.params.id, req.body);
        res.status(200).send(client);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, client_repository_1.deleteClient)(req.params.id);
        res.status(200).send();
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.remove = remove;
//# sourceMappingURL=client.controller.js.map
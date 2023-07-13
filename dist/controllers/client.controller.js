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
        res.status(201).json(client);
    }
    catch (e) {
        console.error('Error in client creation:', e);
        res.status(400).json({ error: 'Failed to create client' });
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const customers = yield (0, client_repository_1.getAll)(Number(page), Number(limit));
        res.status(200).json(customers);
    }
    catch (e) {
        console.error('Error in fetching clients:', e);
        res.status(400).json({ error: 'Failed to fetch clients' });
    }
});
exports.get = get;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, client_repository_1.getClientById)(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json(client);
    }
    catch (e) {
        console.error('Error in fetching client by ID:', e);
        res.status(400).json({ error: 'Failed to fetch client' });
    }
});
exports.getId = getId;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, client_repository_1.updateClient)(req.params.id, req.body);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json(client);
    }
    catch (e) {
        console.error('Error in updating client:', e);
        res.status(400).json({ error: 'Failed to update client' });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, client_repository_1.deleteClient)(req.params.id);
        res.status(200).json({ message: 'Client removed successfully' });
    }
    catch (e) {
        console.error('Error in removing client', e);
        res.status(400).json({ error: 'Failed to remove client' });
    }
});
exports.remove = remove;
//# sourceMappingURL=client.controller.js.map
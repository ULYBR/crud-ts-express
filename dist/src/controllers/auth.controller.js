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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const services_1 = require("../services/services");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res
                .status(400)
                .send({ message: "User and password are required ⛔" });
        }
        const user = yield services_1.prisma.user.findFirst({
            where: {
                email,
            }
        });
        if (!user) {
            return res
                .status(401)
                .send({ message: "Email and or password does not exist ⛔" });
        }
        if (user && bcrypt_1.default.compareSync(password, String(user.password))) {
            const token = jsonwebtoken_1.default.sign({
                id: user.id,
                email,
                name: user.name
            }, String(process.env.TOKEN_KEY), {
                expiresIn: "3h"
            });
            return res.status(200).send({ token });
        }
        else {
            return res.status(401).send({ message: "Email and or password does not exist ⛔" });
        }
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.authenticate = authenticate;

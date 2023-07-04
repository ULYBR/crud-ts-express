"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: "Required Token 🚨" });
    }
    try {
        const replace = token.replace("Bearer ", "");
        jsonwebtoken_1.default.verify(replace, String(process.env.TOKEN_KEY));
        next();
    }
    catch (e) {
        res.status(401).send({ message: "Invalid Credentials ⛔" });
    }
};
exports.verifyToken = verifyToken;

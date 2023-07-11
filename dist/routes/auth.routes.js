"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const authRoutes = async (app) => {
    app.post("/login", auth_controller_1.authenticate);
};
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map
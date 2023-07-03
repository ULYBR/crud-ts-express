"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (app) => {
    app.post("/user", user_controller_1.create);
};
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map
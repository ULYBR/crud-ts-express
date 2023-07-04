"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (app) => {
    app.post("/user", user_controller_1.create);
    app.get("/user", user_controller_1.get);
    app.get("/user/:id", user_controller_1.getId);
    app.put("/user/:id", user_controller_1.update);
    app.delete("/user/:id", user_controller_1.remove);
};
exports.default = userRoutes;

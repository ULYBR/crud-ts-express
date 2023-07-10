"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middlewares/auth");
const userRoutes = (app) => {
    app.post("/users", user_controller_1.create);
    app.get("/users", user_controller_1.get);
    app.get("/users/:id", auth_1.verifyToken, user_controller_1.getId);
    app.put("/users/:id", user_controller_1.update);
    app.put("/users/add/:id", user_controller_1.update);
    app.delete("/users/:id", auth_1.verifyToken, user_controller_1.remove);
};
exports.default = userRoutes;

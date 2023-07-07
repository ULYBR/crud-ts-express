"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agency_controller_1 = require("../controllers/agency.controller");
const auth_1 = require("../middlewares/auth");
const agencyRoutes = (app) => {
    app.post("/agency", agency_controller_1.create);
    app.get("/agency", auth_1.verifyToken, agency_controller_1.get);
    app.get("/agency/:id", auth_1.verifyToken, agency_controller_1.getId);
    app.put("/agency/:id", auth_1.verifyToken, agency_controller_1.update);
    app.delete("/agency/:id", auth_1.verifyToken, agency_controller_1.remove);
};
exports.default = agencyRoutes;

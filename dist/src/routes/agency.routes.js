"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agency_controller_1 = require("../controllers/agency.controller");
const auth_1 = require("../middlewares/auth");
const agencyRoutes = (app) => {
    app.post("/agencies", agency_controller_1.create);
    app.get("/agencies", auth_1.verifyToken, agency_controller_1.get);
    app.get("/agencies/:id", auth_1.verifyToken, agency_controller_1.getId);
    app.put("/agencies/:id", auth_1.verifyToken, agency_controller_1.update);
    app.delete("/agencies/:id", auth_1.verifyToken, agency_controller_1.remove);
};
exports.default = agencyRoutes;

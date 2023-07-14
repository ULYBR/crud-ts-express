"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middlewares/auth");
const client_controller_1 = require("../controllers/client.controller");
const clientRoutes = (app) => {
  app.post("/clients", auth_1.verifyToken, client_controller_1.create);
  app.get("/clients", auth_1.verifyToken, client_controller_1.get);
  app.get("/clients/:id", auth_1.verifyToken, client_controller_1.getId);
  app.put("/clients/:id", auth_1.verifyToken, client_controller_1.update);
  app.delete("/clients/:id", auth_1.verifyToken, client_controller_1.remove);
};
exports.default = clientRoutes;
//# sourceMappingURL=client.routes.js.map

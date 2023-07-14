"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove =
  exports.update =
  exports.addUser =
  exports.getId =
  exports.get =
  exports.create =
    void 0;
const agency_validation_1 = require("../validations/agency.validation");
const agency_repository_1 = require("../repositories/agency.repository");
const add_User_To_Agency_1 = require("../Use-Case/add-User-To-Agency");
const create = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = req.body;
      const userId = data.users;
      const clientId = data.Client;
      console.log(data);
      yield agency_validation_1.agencyValidation.validate(data);
      const agency = yield (0, agency_repository_1.createAgency)(
        data,
        userId,
        clientId,
      );
      res.status(201).json(agency);
    } catch (e) {
      console.error("Error in agency creation:", e);
      res.status(400).json({ error: "Failed to create agency" });
    }
  });
exports.create = create;
const get = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { page, limit } = req.query;
      const agencies = yield (0, agency_repository_1.getAll)(
        Number(page),
        Number(limit),
      );
      res.status(200).send(agencies);
    } catch (e) {
      console.error("Error in fetching agencies:", e);
      res.status(400).json({ error: "Failed to fetch agencies" });
    }
  });
exports.get = get;
const getId = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const agency = yield (0, agency_repository_1.getAgencyById)(
        req.params.id,
      );
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }
      res.status(200).send(agency);
    } catch (e) {
      console.error("Error in fetching agency by ID:", e);
      res.status(400).json({ error: "Failed to fetch agency" });
    }
  });
exports.getId = getId;
const addUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = req.body;
      const user = data.users.connect.id;
      const agency = yield (0, add_User_To_Agency_1.addUserToAgency)(
        user,
        req.params.id,
      );
      res.status(200).send(agency);
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });
exports.addUser = addUser;
const update = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const agency = yield (0, agency_repository_1.updateAgency)(
        req.params.id,
        req.body,
      );
      if (!agency) {
        return res.status(404).json({ error: "Agency not found" });
      }
      res.status(200).send(agency);
    } catch (e) {
      console.error("Error in updating agency:", e);
      res.status(400).json({ error: "Failed to update agency" });
    }
  });
exports.update = update;
const remove = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const agency = yield (0, agency_repository_1.deleteAgency)(req.params.id);
      res.status(200).json({ message: "Agency removed successfully" });
    } catch (e) {
      console.error("Error in removing agency", e);
      res.status(400).json({ error: "Failed to remove agency " });
    }
  });
exports.remove = remove;
//# sourceMappingURL=agency.controller.js.map

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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove =
  exports.addAgency =
  exports.update =
  exports.getId =
  exports.get =
  exports.create =
    void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_validation_1 = require("../validations/user.validation");
const user_repository_1 = require("../repositories/user.repository");
const add_Agency_To_User_1 = require("../Use-Case/add-Agency-To-User");
const create = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = req.body;
      const clientId = data.customers;
      yield user_validation_1.userValidation.validate(data);
      const hashPassword = yield bcrypt_1.default.hash(data.password, 10);
      data.password = hashPassword;
      const user = yield (0, user_repository_1.createUser)(data, clientId);
      res.status(201).send(user);
    } catch (e) {
      console.error("Error in user creation:", e);
      res.status(400).json({ error: "Failed to create user" });
    }
  });
exports.create = create;
const get = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { page, limit } = req.query;
      const result = yield (0, user_repository_1.getAll)(
        Number(page),
        Number(limit),
      );
      res.status(200).json(result);
    } catch (e) {
      console.error("Error in fetching users:", e);
      res.status(400).json({ error: "Failed to fetch users" });
    }
  });
exports.get = get;
const getId = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const userId = req.params.id;
      const user = yield (0, user_repository_1.getById)(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (e) {
      console.error("Error in fetching user by ID:", e);
      res.status(400).json({ error: "Failed to fetch user" });
    }
  });
exports.getId = getId;
const update = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const user = yield (0, user_repository_1.updateUser)(userId, userData);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (e) {
      console.error("Error in updating user:", e);
      res.status(400).json({ error: "Failed to update user" });
    }
  });
exports.update = update;
const addAgency = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const agency = req.body.agencies.connect.id;
      const user = yield (0, add_Agency_To_User_1.addAgencyToUser)(
        req.params.id,
        agency,
      );
      res.status(200).send(user);
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });
exports.addAgency = addAgency;
const remove = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const userId = req.params.id;
      yield (0, user_repository_1.deleteUser)(userId);
      res.status(200).json({ message: "User removed successfully" });
    } catch (e) {
      console.error("Error in removing user:", e);
      res.status(400).json({ error: "Failed to remove user" });
    }
  });
exports.remove = remove;
//# sourceMappingURL=user.controller.js.map

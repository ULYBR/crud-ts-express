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
exports.authenticate = void 0;
const services_1 = require("../services/services");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_validation_1 = require("../validations/auth.validation");
const authenticate = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { email, password } = req.body;
      yield auth_validation_1.authenticationSchema.validate({
        email,
        password,
      });
      const user = yield services_1.prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid email or password ⛔" });
      }
      const passwordMatch = yield bcrypt_1.default.compare(
        password,
        user.password,
      );
      if (passwordMatch) {
        const token = jsonwebtoken_1.default.sign(
          {
            id: user.id,
            email,
            name: user.name,
          },
          String(process.env.TOKEN_KEY),
          {
            expiresIn: "6h",
          },
        );
        return res.status(200).json({ token });
      } else {
        return res
          .status(401)
          .json({ message: "Invalid email or password ⛔" });
      }
    } catch (e) {
      if (e instanceof Error && e.name === "ValidationError") {
        return res.status(400).json({ message: e.message });
      }
      console.error("Error in authentication:", e);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
exports.authenticate = authenticate;
//# sourceMappingURL=auth.controller.js.map

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
exports.deleteClient =
  exports.updateClient =
  exports.getClientById =
  exports.getAll =
  exports.createClient =
    void 0;
const services_1 = require("../services/services");
const createClient = (data, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.create({
      data: Object.assign(Object.assign({}, data), {
        Users: {
          connect: {
            id: userId,
          },
        },
      }),
      select: {
        id: true,
        name: true,
        agencyId: true,
      },
    });
    return client;
  });
exports.createClient = createClient;
const getAll = (page, limit) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const offset = (page - 1) * limit;
    const customers = yield services_1.prisma.client.findMany({
      select: {
        id: true,
        name: true,
        agency: false,
        Users: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            agency: true,
          },
        },
      },
      skip: offset,
      take: limit,
    });
    const totalCustomersCount = yield services_1.prisma.client.count();
    const totalPages = Math.ceil(totalCustomersCount / limit);
    return {
      customers,
      totalCustomersCount,
      totalPages,
    };
  });
exports.getAll = getAll;
const getClientById = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        agency: {
          select: {
            id: true,
            name: true,
            cnpj: true,
          },
        },
        Users: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            agency: false,
          },
        },
      },
    });
    return client;
  });
exports.getClientById = getClientById;
const updateClient = (id, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const client = yield services_1.prisma.client.update({
      where: {
        id,
      },
      data,
      select: {
        name: true,
        agency: true,
        agencyId: true,
      },
    });
    return client;
  });
exports.updateClient = updateClient;
const deleteClient = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield services_1.prisma.client.delete({
      where: {
        id,
      },
    });
    return;
  });
exports.deleteClient = deleteClient;
//# sourceMappingURL=client.repository.js.map

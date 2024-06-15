import { body, param } from 'express-validator';

export const validateColaborador = [
  body('nome').isString().notEmpty(),
  body('cpf').isString().notEmpty(),
  body('telefone').isString().notEmpty(),
  body('empresaId').isInt({ min: 1 }),
];

export const validateColaboradorId = [
  param('id').isInt({ min: 1 }),
];

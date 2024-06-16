import { body } from 'express-validator';

export const validateLocadora = [
  body('nome').notEmpty().withMessage('O nome da locadora é obrigatório'),
  body('cnpj').notEmpty().withMessage('O CNPJ da locadora é obrigatório'),
  body('cnpj').isLength({ min: 14, max: 14 }).withMessage('O CNPJ deve ter 14 caracteres'),
];

export const validateLocadoraId = [
  body('id').notEmpty().withMessage('O ID da locadora é obrigatório'),
];

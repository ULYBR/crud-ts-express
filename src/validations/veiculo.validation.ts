// src/validations/veiculo.validation.ts

import { body, param } from 'express-validator';

export const validateVeiculo = [
  body('marca').notEmpty().withMessage('Marca é obrigatória'),
  body('modelo').notEmpty().withMessage('Modelo é obrigatório'),
  body('cor').notEmpty().withMessage('Cor é obrigatória'),
  body('placa').notEmpty().withMessage('Placa é obrigatória'),
];

export const validateVeiculoId = [
  param('id').isInt().withMessage('ID do veículo deve ser um número inteiro'),
];

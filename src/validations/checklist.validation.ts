import { body } from 'express-validator';

export const validateChecklist = [
  body('tipo').notEmpty().withMessage('O tipo do checklist é obrigatório'),
  body('data').notEmpty().withMessage('A data do checklist é obrigatória'),
  body('hora').notEmpty().withMessage('A hora do checklist é obrigatória'),
  body('quilometragem').notEmpty().withMessage('A quilometragem do checklist é obrigatória'),
  body('nivel_combustivel').notEmpty().withMessage('O nível de combustível do checklist é obrigatório'),
];

export const validateChecklistId = [
  body('id').notEmpty().withMessage('O ID do checklist é obrigatório'),
];

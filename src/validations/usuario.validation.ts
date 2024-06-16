// src/validations/usuario.validation.ts

import * as yup from 'yup';


const createUsuario = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required(),
});

const updateUsuario = yup.object().shape({
  nome: yup.string(),
  email: yup.string().email(),
  senha: yup.string(),
});

export default {
  createUsuario,
  updateUsuario,
};

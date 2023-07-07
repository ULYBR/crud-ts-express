import * as yup from "yup"

export const agencyValidation = yup.object({
  name: yup.string().required(),
  cnpj: yup.string().required(),
});
import * as yup from "yup"

export const agencyValidation = yup.object({
  name: yup.string().required('Name is required'),
  cnpj: yup
    .string()
    .required('CNPJ is required')
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'Invalid CNPJ format'),
  users: yup.string().required('User is required'),
  Client: yup.string().required('Client is required'),
});
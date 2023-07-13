import * as yup from "yup"

export const clientValidation = yup.object({
  name: yup.string().required('Name is required'),
  agencyId: yup.string().required('Agency is required'),
  Users: yup.string().required('Users are required'),
});
import * as yup from "yup"

export const clientValidation = yup.object({
  name: yup.string().required(),
  agencyId: yup.string(),
  
});
import * as yup from "yup";

export const userValidation = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "Password must contain at least one letter, one number, and one special character",
    ),
});

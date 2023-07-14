import * as yup from "yup";
export declare const authenticationSchema: yup.ObjectSchema<
  {
    email: string;
    password: string;
  },
  yup.AnyObject,
  {
    email: undefined;
    password: undefined;
  },
  ""
>;

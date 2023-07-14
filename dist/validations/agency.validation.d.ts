import * as yup from "yup";
export declare const agencyValidation: yup.ObjectSchema<
  {
    name: string;
    cnpj: string;
    users: string;
    Client: string;
  },
  yup.AnyObject,
  {
    name: undefined;
    cnpj: undefined;
    users: undefined;
    Client: undefined;
  },
  ""
>;

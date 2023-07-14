import * as yup from "yup";
export declare const clientValidation: yup.ObjectSchema<
  {
    name: string;
    agencyId: string;
    Users: string;
  },
  yup.AnyObject,
  {
    name: undefined;
    agencyId: undefined;
    Users: undefined;
  },
  ""
>;

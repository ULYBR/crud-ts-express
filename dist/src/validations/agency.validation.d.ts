import * as yup from "yup";
export declare const agencyValidation: yup.ObjectSchema<{
    name: string;
    cnpj: string;
}, yup.AnyObject, {
    name: undefined;
    cnpj: undefined;
}, "">;

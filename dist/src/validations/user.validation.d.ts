import * as yup from "yup";
export declare const userValidation: yup.ObjectSchema<{
    name: string;
    email: string;
    password: string;
}, yup.AnyObject, {
    name: undefined;
    email: undefined;
    password: undefined;
}, "">;

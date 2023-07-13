import * as yup from "yup";
export declare const clientValidation: yup.ObjectSchema<{
    name: string;
    agency: string;
    users: (string | undefined)[];
}, yup.AnyObject, {
    name: undefined;
    agency: undefined;
    users: "";
}, "">;

import * as yup from "yup";
export declare const clientValidation: yup.ObjectSchema<{
    name: string;
    agencyId: string | undefined;
}, yup.AnyObject, {
    name: undefined;
    agencyId: undefined;
}, "">;

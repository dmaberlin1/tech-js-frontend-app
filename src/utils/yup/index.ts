import * as yup from 'yup';
import {AppErrors} from "../../common/errors";
export const LoginSchema=yup.object().shape({
    email:yup.string()
        .email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password:yup.string()
        .min(7,AppErrors.minLength).required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),

})
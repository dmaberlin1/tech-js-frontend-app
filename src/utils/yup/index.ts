import * as yup from 'yup';
import {AppErrors} from "../../common/errors";
export const LoginSchema=yup.object().shape({
    email:yup.string()
        .email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password:yup.string()
        .min(7,AppErrors.minLength).required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
})

export const RegisterSchema=yup.object().shape({
    email:yup.string()
        .email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password:yup.string()
        .min(7,AppErrors.minLength).required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
    ConfirmPassword:yup.string()
        .min(7,AppErrors.minLength).required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
    telegram:yup.string().required(AppErrors.RequiredField),
    pin:yup.number().min(4,AppErrors.InvalidPIN).max(4,AppErrors.InvalidPIN).required(AppErrors.RequiredField),
    name:yup.string().required(AppErrors.RequiredField),
    username:yup.string().required(AppErrors.RequiredField)
})
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    // setPassword: (value: string) => void
    // setEmail: (value: string) => void
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    loading:boolean
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
>  {
    // setEmail: (value: string) => void
    // setPassword: (value: string) => void
    // setFirstName: (value: string) => void
    // setRepeatPassword: (value: string) => void
    // setUsername: (value: string) => void

    // setTelegram: (value: string) => void
    // setPin: (value: string) => void
    navigate:(to:string)=>void
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    loading:boolean
}

export interface IAuthState {

    // user:{}|IPublicUser,
    user: IPublicUser,
    isLogged: boolean,
    isLoading:boolean
}

export interface IPublicUser {
    id: number | null,
    firstName: string,
    username: string,
    email: string,
    pin: number,
    telegram: string,
    createdAt: string,
    updatedAt: string,
    watchlist: [IWatchlist]
}

export interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}

export interface ILoginData{
    email:string
    password:string
}

export interface IRegisterData {
    email:string
    password:string
    firstName:string
    username:string
}
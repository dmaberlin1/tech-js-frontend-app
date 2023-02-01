import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from '@mui/material'
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import {useStyles} from "./styles";
import {loginUser, registerUser} from "../../store/thunks/auth";

const AuthRootComponent: React.FC = (): JSX.Element => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [repeatPassword, setRepeatPassword] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [username, setUsername] = useState('');
    // const [telegram, setTelegram] = useState('');
    // const [pin, setPin] = useState('');
    const classes=useStyles()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        formState:{
            errors
        },handleSubmit
    } = useForm({
        // mode:'onSubmit',
        resolver:yupResolver(location.pathname==='/login'?LoginSchema:RegisterSchema)
    })

    const loading=useAppSelector((state)=>state.auth.isLoading)

    // console.log(errors 'errors>>>' )
    const handleSubmitForm = async (data:any) => {
        // console.log(data 'data>>>' )
        // e.preventDefault()
        if (location.pathname === '/login') {
            try {

                await dispatch(loginUser(data))
                navigate('/')

            } catch (e) {
                return e
            }
        } else {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        firstName:data.name,
                        username:data.username,
                        email:data.email,
                        password:data.password,
                        pin:data.pin,
                        telegram:data.telegram,
                    }

                  await dispatch(registerUser(userData))
                    navigate('/')
                } catch (e) {
                    return e
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }

    }

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    maxWidth={640}
                    margin={'auto'}
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {
                        location.pathname === '/login'
                            ? <LoginPage
                                // setEmail={setEmail}
                                // setPassword={setPassword}
                                navigate={navigate}
                                register={register}
                                errors={errors}
                                loading={loading}
                            ></LoginPage>
                            : location.pathname === '/register'
                                ? <RegisterPage
                                    navigate={navigate}
                                    errors={errors}
                                    register={register}
                                    loading={loading}
                                ></RegisterPage> : null}
                </Box>
            </form>
        </div>
    )


};

export default AuthRootComponent;

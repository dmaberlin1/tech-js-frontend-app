import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from '@mui/material'
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import {useStyles} from "./styles";

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

    


    // console.log(errors 'errors>>>' )
    const handleSubmitForm = async (data:any) => {
        // console.log(data 'data>>>' )
        // e.preventDefault()
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password
                }
                const user = await instance.post('auth/login', userData)
                await dispatch(login(user.data))
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
                    const newUser = await instance.post('auth/register', userData)
                    console.log(newUser.data)
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
                            ></LoginPage>
                            : location.pathname === '/register'
                                ? <RegisterPage
                                    navigate={navigate}
                                    errors={errors}
                                    register={register}
                                ></RegisterPage> : null}
                </Box>
            </form>
        </div>
    )


};

export default AuthRootComponent;

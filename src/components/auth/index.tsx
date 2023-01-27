import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.scss';
import {Box} from '@mui/material'
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";

const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [telegram, setTelegram] = useState('');
    const [pin, setPin] = useState('');
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        formState:{
            errors
        },handleSubmit
    } = useForm()


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
            if (password === repeatPassword) {
                try {
                    const userData = {
                        firstName,
                        username,
                        email,
                        password,
                        pin,
                        telegram,
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
        <div className={'root'}>
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    maxWidth={640}
                    margin={'auto'}
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
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
                                    setEmail={setEmail}
                                    setPassword={setPassword}
                                    setFirstName={setFirstName}
                                    setRepeatPassword={setRepeatPassword}
                                    setUsername={setUsername}
                                    setPin={setPin}
                                    setTelegram={setTelegram}
                                    navigate={navigate}
                                ></RegisterPage> : null}
                </Box>
            </form>
        </div>
    )


};

export default AuthRootComponent;

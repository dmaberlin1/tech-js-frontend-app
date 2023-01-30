import React, {Fragment} from 'react';
import {TextField,Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import AppButton from "../../../components/app-button";
import {useStyles} from "./styles";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate,register,errors} = props
    const classes=useStyles()
    return (
        <Fragment>
            <Typography variant="h2" component="h2"  fontSize={32} textAlign={'center'}>
                Авторизация
            </Typography>
            <Typography variant="body1"
                        marginBottom={3} component="h2"
                        textAlign={'center'}>
                Введите ваш логин и пароль
            </Typography>

            <TextField
                error={!!errors.email}
                //если у нас есть поле то тру, если нет то false
                //{errors.email? true:false}
                fullWidth={true} margin={'normal'}
                label="Email" variant="outlined"
                placeholder={'Введите ваш email'}
                helperText={errors.email ? `${errors.email.message}` : ''}
                // onChange={(e) => setEmail(e.target.value)}
                {...register('email')}
                        // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                // регулярка на проверку  написания  емейла

            />

            <TextField
                error={!!errors.password}
                type='password' fullWidth={true}
                margin={'normal'} label="Password" variant="outlined"
                placeholder={'Введите ваш пароль'}
                // onChange={(e) => setPassword(e.target.value)}
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <AppButton
                sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
                variant="contained"
                type={'submit'}
            >Войти
            </AppButton>
            <Typography
                variant="body1" sx={{fontFamily: 'Poppins',}}
            >У вас нет аккаунта?
                <span className={classes.incitingText} onClick={()=>navigate('/register')}>Регистрация</span>
            </Typography>
        </Fragment>
    );
};

export default LoginPage;

//
// {...register('password',{
//     required:'Это обязательное поле',
//     minLength:7
// })}
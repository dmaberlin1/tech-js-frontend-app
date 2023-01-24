import React, {Fragment} from 'react';
import {TextField, Button, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setEmail, setPassword, navigate} = props
    return (
        <Fragment>
            <Typography variant="h2" component="h2" fontFamily={'Poppins'} textAlign={'center'}>
                Авторизация
            </Typography>
            <Typography variant="body1"
                        marginBottom={3} component="h2" fontFamily={'Poppins'}
                        textAlign={'center'}>
                Введите ваш логин и пароль
            </Typography>

            <TextField
                fullWidth={true} margin={'normal'}
                label="Email" variant="outlined"
                placeholder={'Введите ваш email'}
                onChange={(e) => setEmail(e.target.value)}

            />

            <TextField
                type='password' fullWidth={true}
                margin={'normal'} label="Password" variant="outlined"
                placeholder={'Введите ваш пароль'}
                onChange={(e) => setPassword(e.target.value)}

            />
            <Button
                sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}}
                variant="contained"
                type={'submit'}
            >Войти
            </Button>
            <Typography
                variant="body1" sx={{fontFamily: 'Poppins',}}
            >У вас нет аккаунта?
                <span className={'incitingText'} onClick={()=>navigate('/register')}>Регистрация</span>
            </Typography>
        </Fragment>
    );
};

export default LoginPage;

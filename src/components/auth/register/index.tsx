import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage:React.FC<IPropsRegister> = (props:IPropsRegister):JSX.Element => {
    const {setRepeatPassword,setPassword,setUsername,setEmail,setFirstName,setPin,setTelegram,navigate}=props
    return (
        <Fragment>
            <Typography variant="h2" component="h2"  fontFamily={'Poppins'} textAlign={'center'}>
                Регистрация
            </Typography><Typography variant="body1" marginBottom={3} component="h2" fontFamily={'Poppins'} textAlign={'center'}>
            Введите данные для регистрации
        </Typography>

            <TextField onChange={(e)=>setFirstName(e.target.value)} fullWidth={true} margin={'normal'} label="Имя" variant="outlined" placeholder={'Введите ваш Имя'}/>
            <TextField onChange={(e)=>setUsername(e.target.value)} fullWidth={true} margin={'normal'} label="Username" variant="outlined" placeholder={'Введите ваш Username'}/>
            <TextField  onChange={(e)=>setEmail(e.target.value)} fullWidth={true} margin={'normal'} label="Email" variant="outlined" placeholder={'Введите ваше email'}/>
            <TextField onChange={(e)=>setPassword(e.target.value)} type={'password'} fullWidth={true} margin={'normal'} label="Password" variant="outlined" placeholder={'Введите ваш пароль'}/>
            <TextField onChange={(e)=>setRepeatPassword(e.target.value)} type={'password'} fullWidth={true} margin={'normal'} label="Password" variant="outlined" placeholder={'Повторите ваш пароль'}/>
            <TextField onChange={(e)=>setTelegram(e.target.value)}  fullWidth={true} margin={'normal'} label="Telegram" variant="outlined" placeholder={'Введите ваш telegram'}/>
            <TextField onChange={(e)=>setPin(e.target.value)} type={'password'} fullWidth={true} margin={'normal'} label="PIN" variant="outlined" placeholder={'Введите ваш PIN'}/>
            <Button sx={{fontFamily:'Poppins',marginTop:2,marginBottom:2,width:'60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily:'Poppins',}} >
                У вас есть аккаунт <span className={'incitingText'} onClick={()=>navigate('/login')}>Авторизация</span>
            </Typography>
        </Fragment>
    );
};

export default RegisterPage;

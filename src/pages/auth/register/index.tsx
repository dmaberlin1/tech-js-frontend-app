import React, {Fragment} from 'react';
import {TextField, Typography, Box} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {useStyles} from "./style";
import AppLoadingButton from '../../../components/loading-button';


const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {navigate, register, errors,loading} = props
    const classes = useStyles()
    return (
        <Fragment>
            <Typography variant="h2" component="h2" textAlign={'center'}>
                Регистрация
            </Typography><Typography variant="body1" marginBottom={3} component="h2" textAlign={'center'}>
            Введите данные для регистрации
        </Typography>

            <Box marginBottom={2}> <TextField
                // onChange={(e)=>setFirstName(e.target.value)}
                error={!!errors.name}
                fullWidth={true} margin={'normal'} label="Имя"
                variant="outlined" placeholder={'Введите ваш Имя'}
                helperText={errors.name ? `${errors.name.message}` : ''}

                {...register('name')}
            />
                <TextField
                    // onChange={(e)=>setUsername(e.target.value)}
                    error={!!errors.username}
                    fullWidth={true} margin={'normal'} label="Username"
                    variant="outlined" placeholder={'Введите ваш Username'}
                    helperText={errors.username ? `${errors.username.message}` : ''}

                    {...register('username')}

                />
                <TextField
                    // onChange={(e)=>setEmail(e.target.value)}
                    error={!!errors.email}
                    fullWidth={true} margin={'normal'} label="Email"
                    variant="outlined" placeholder={'Введите ваше email'}
                    helperText={errors.email ? `${errors.email.message}` : ''}

                    {...register('email')}

                />
                <TextField
                    // onChange={(e)=>setPassword(e.target.value)}
                    error={!!errors.password}

                    type={'password'} fullWidth={true} margin={'normal'}
                    label="Password" variant="outlined" placeholder={'Введите ваш пароль'}
                    helperText={errors.password ? `${errors.password.message}` : ''}

                    {...register('password')}

                />
                <TextField
                    // onChange={(e)=>setRepeatPassword(e.target.value)}
                    error={!!errors.confirmPassword}

                    type={'password'} fullWidth={true} margin={'normal'}
                    label="Password" variant="outlined" placeholder={'Повторите ваш пароль'}
                    helperText={errors.password ? `${errors.password.message}` : ''}

                    {...register('confirmPassword')}

                />
                <TextField
                    // onChange={(e)=>setTelegram(e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.telegram ? `${errors.telegram.message}` : ''}

                    {...register('telegram')}


                    fullWidth={true} margin={'normal'} label="Telegram"
                    variant="outlined" placeholder={'Введите ваш telegram'}
                />
                <TextField
                    // error={!!errors.email}
                    // onChange={(e)=>setPin(e.target.value)}
                    error={!!errors.pin}
                    helperText={errors.pin ? `${errors.pin.message}` : ''}

                    {...register('PIN')}

                    type={'password'} fullWidth={true} margin={'normal'}
                    label="PIN" variant="outlined" placeholder={'Введите ваш PIN'}
                />
            </Box>

            <AppLoadingButton
                type={'submit'}
                variant="contained">Регистрация
                loading={loading}
            </AppLoadingButton>
            <Box margin='20px 0'>
                <Typography variant="body1">
                    У вас есть аккаунт <span className={classes.incitingText}
                                             onClick={() => navigate('/login')}>Авторизация</span>
                </Typography>

            </Box>
        </Fragment>
    );
};

export default RegisterPage;

import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {
//необходимо решить вопрос с '@mui/styles'
    // const {user}=useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes=useStyles()

    return (
        <Box display={'flex'} justifyContent='space-between' px='32px' py='24px'>
            <Grid>Welcome TestName</Grid>
            <Box display={'flex'}>
                <Grid onClick={colorMode.toggleColorMode}
                sx={{pr:'37px',borderRight:`1px solid ${colors.mineShaft.DEFAULT}`}}
                >
                    <IconButton sx={{mr:'45px'}}>
                        {theme.palette.mode === 'light' ? <LightModeIcon/> : <DarkModeIcon></DarkModeIcon>}
                    </IconButton>

                </Grid>
                <Grid>
                    <IconButton>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display:'flex',
                        backgroundColor:`${colors.primary[600]}`,
                        borderRadius:'8px',
                        ml:'28px'
                    }}
                >

                    <IconButton       className={classes.root}>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <InputBase sx={{
                                   px:'18px',py:'12px'

                                }}
                               placeholder={'Поиск'}></InputBase>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;

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
    // const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes=useStyles()

    return (
        <Box className={classes.root}>
            <Grid>Welcome TestName</Grid>
            <Box display={'flex'}>
                <Grid onClick={colorMode.toggleColorMode}
                className={classes.iconBlock}
                >
                    <IconButton className={classes.themeIcon}>
                        {theme.palette.mode === 'light' ? <LightModeIcon/> : <DarkModeIcon></DarkModeIcon>}
                    </IconButton>

                </Grid>
                <Grid>
                    <IconButton>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>

                    <IconButton       className={classes.searchIcon}>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <InputBase className={classes.searchInput}
                               placeholder={'Поиск'}></InputBase>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;

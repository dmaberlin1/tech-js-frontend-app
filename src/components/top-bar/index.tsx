import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {LightMode,DarkMode,NotificationsNone,Search,MenuOutlined} from '@mui/icons-material/';

import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";

const TopBarComponent = (props:any) => {
//необходимо решить вопрос с '@mui/styles'
    // const {user}=useAppSelector(state => state.auth.user)
    const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes=useStyles()
    const {setIsOpen,isOpen}=props

    return(
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                       <FlexBetween>
                           <MenuOutlined className={classes.menuIcon} onClick={()=>setIsOpen(!isOpen)}></MenuOutlined>
                           <Typography variant={'h3'}>
                               Welcome TestName
                           </Typography>
                       </FlexBetween>
                              <Box display={'flex'}>
                                <Grid onClick={colorMode.toggleColorMode}
                            className={classes.iconBlock}
                            >
                                <IconButton className={classes.themeIcon}>
                                    {theme.palette.mode === 'light' ? <LightMode/> : <DarkMode></DarkMode>}
                                </IconButton>

                            </Grid>
                            <Grid>
                                <IconButton>
                                    <NotificationsNone></NotificationsNone>
                                </IconButton>
                            </Grid>
                            <Grid className={classes.searchBlock}>

                                <IconButton       className={classes.searchIcon}>
                                    <Search></Search>
                                </IconButton>
                                <InputBase className={classes.searchInput}
                                           placeholder={'Поиск'}></InputBase>
                            </Grid>
                        </Box>
            </Toolbar>
        </AppBar>
    )


    // return (
    //     <Box className={classes.root}>
    //         <Grid>Welcome TestName</Grid>
    //         <Box display={'flex'}>
    //             <Grid onClick={colorMode.toggleColorMode}
    //             className={classes.iconBlock}
    //             >
    //                 <IconButton className={classes.themeIcon}>
    //                     {theme.palette.mode === 'light' ? <LightModeIcon/> : <DarkModeIcon></DarkModeIcon>}
    //                 </IconButton>
    //
    //             </Grid>
    //             <Grid>
    //                 <IconButton>
    //                     <NotificationsNoneIcon></NotificationsNoneIcon>
    //                 </IconButton>
    //             </Grid>
    //             <Grid className={classes.searchBlock}>
    //
    //                 <IconButton       className={classes.searchIcon}>
    //                     <SearchIcon></SearchIcon>
    //                 </IconButton>
    //                 <InputBase className={classes.searchInput}
    //                            placeholder={'Поиск'}></InputBase>
    //             </Grid>
    //         </Box>
    //     </Box>
    // );
};

export default TopBarComponent;

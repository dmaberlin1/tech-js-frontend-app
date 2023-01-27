import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    Box, Drawer, Divider, IconButton, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Typography, useTheme,
} from '@mui/material'
//List это оболочка для ul списка
//ListItem это оболочка для li списка
import {
    ChevronLeftOutlined,
    ChevronRightOutlined, LogoutOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between";
import {navMenu} from "../../common/moks/navigate";
import Logo from '../../assets/images/sidebar/neraex.svg'
import {tokens} from "../../theme";

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('');
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    //деструктурирем, и достанем pathname из нашего юзлокейшн
    //когда пользователь перешёл куда-то, нам надо изменить наш хук, поэтому мы pathname прокинем в наш массив
    //зависимостей в useEffect
    const navigate = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

//если в юзеффект не передаём зависимость, то исполняется только когда компонент Монтируется
    //если же в массив зависимостей передаём какой-либо параметр,то уже сработает когда наше приложение будет
    //обновляться ( когда будет изменяться наш массив зависимостей)
    useEffect(() => {
        setActive(pathname.substring(1))
        // .substring(1)   когда пользователь поменяет роут у нас будет лежать крайнее значение ,
        //допустим login,news,watchlist , без всей строки "localhost:3000/login" и тп
    }, [pathname])

    const getNavMenu = navMenu.map((item): JSX.Element => {
        return (
            <ListItem key={item.id}>
                <ListItemButton onClick={() => navigate(`${item.path}`)} className={classes.navItem}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {/*в варианте подгрузки с бекенда лучше использовать строчное*/}
                    {/*добавление, например fontawesome,applyicons*/}
                    {/*(где используеться строчное добавление через tag i*/}
                    <ListItemText>
                        <Typography variant={"body1"}>{item.name}</Typography>
                    </ListItemText>
                    <ListItemIcon></ListItemIcon>
                </ListItemButton>
            </ListItem>
        )
    })


    return (
        <Box component={'nav'}>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    //в зависимости от тру или фолс, откроеться ли наш Drawer
                    onClose={() => setIsOpen(false)}
                    //с помощью onClose= мы будем понимать, закрывать или не закрывать данный Drawer
                    //что делать в случае закрытия, у нас он меняет хук isOpen
                    variant={'persistent'}
                    anchor={'left'}
                    //с какой стороны будет наш Drawer
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }

                    }}
                >
                    <Box  className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt={'logo'}/>
                                    <Typography
                                        variant={'h1'}
                                        className={classes.brandTitle}
                                    >Think Analytics</Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined></ChevronLeftOutlined>
                                    </IconButton>)}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            {getNavMenu}
                        </List>
                    </Box>
                    <Box width={'100%'}>
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined></LogoutOutlined>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;


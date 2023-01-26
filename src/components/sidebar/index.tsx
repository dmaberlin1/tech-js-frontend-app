import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    Box, Drawer, Divider, IconButton, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, Typography, useTheme
} from '@mui/material'
//List это оболочка для ul списка
//ListItem это оболочка для li списка
import {
    HomeOutlined, ChevronLeftOutlined,
    ChevronRightOutlined, AutoGraphOutlined,
    MenuBookOutlined, SettingsOutlined, LogoutOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between";

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('');
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname}=useLocation()
    //деструктурирем, и достанем pathname из нашего юзлокейшн
    //когда пользователь перешёл куда-то, нам надо изменить наш хук, поэтому мы pathname прокинем в наш массив
    //зависимостей в useEffect
    const navigate=useNavigate()
    const theme=useTheme()
//если в юзеффект не передаём зависимость, то исполняется только когда компонент Монтируется
    //если же в массив зависимостей передаём какой-либо параметр,то уже сработает когда наше приложение будет
    //обновляться ( когда будет изменяться наш массив зависимостей)
    useEffect(()=>{
    setActive(pathname.substring(1))
        // .substring(1)   когда пользователь поменяет роут у нас будет лежать крайнее значение ,
        //допустим login,news,watchlist , без всей строки "localhost:3000/login" и тп
    },[pathname])

    return (
        <Box component={'nav'}>
            {isOpen &&(
                <Drawer
                    open={isOpen}
                    //в зависимости от тру или фолс, откроеться ли наш Drawer
                    onClose={()=>setIsOpen(false)}
                    //с помощью onClose= мы будем понимать, закрывать или не закрывать данный Drawer
                    //что делать в случае закрытия, у нас он меняет хук isOpen
                    variant={'persistent'}
                    anchor={'left'}
                    //с какой стороны будет наш Drawer
                    sx={{
                        width:drawerWidth,
                        '& .MuiDrawer-paper':{
                            color:theme.palette.secondary.main,
                            backgroundColor:theme.palette.primary.main,
                            boxSizing:'border-box',
                            width:drawerWidth
                        }
                        
                    }}
                >
                    <Box width={'100%'}>
                        <Box>
                            <FlexBetween>
                                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                                    <Typography>Think Analytics</Typography>
                                </Box>
                                {!isNonMobile &&(
                                    <IconButton onClick={()=>setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined></ChevronLeftOutlined>
                                </IconButton>)}
                            </FlexBetween>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;


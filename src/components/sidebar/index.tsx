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

    },[pathname])

    return (
        <div>
            <h1>This is sidebar</h1>
        </div>
    );
};

export default SidebarComponent;


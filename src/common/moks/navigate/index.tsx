import {
    HomeOutlined,  AutoGraphOutlined,
    MenuBookOutlined, SettingsOutlined,
} from '@mui/icons-material';

export const navMenu=[
    {
        name:'Главная',
        icon:<HomeOutlined></HomeOutlined>,
        path:'/',
        id:1
    },
    {
        name:'Избранное',
        icon:<AutoGraphOutlined></AutoGraphOutlined>,
        path:'/watchlist',
        id:2
    }, {
        name:'Новости',
        icon:<MenuBookOutlined></MenuBookOutlined>,
        path:'/news',
        id:3
    }, {
        name:'Настройки',
        icon:<SettingsOutlined></SettingsOutlined>,
        path:'/settings',
        id:4
    },
]
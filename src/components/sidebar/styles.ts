import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)


    return ({
        brand: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '30px 15px',
            cursor: 'pointer'
        },
        navItem: {


            '&:hover': {
                borderRadius: '4px',
                backgroundColor: '#1900D5 !important',
                color: '#fff',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`
                }

            }
        },
        navBlock: {
            borderBottom: `1px solid ${colors.borderColor}`,
            width: '100%'
        },
        navList: {
            marginBottom: '55px'
        },
        brandTitle: {
            color: `${theme.palette.mode === 'dark'
                ? colors.white.DEFAULT
                : colors.black.DEFAULT}`
        },
        active:{
            backgroundColor:'#1900D5 !important',
            color: '#fff !important',
            borderRadius:'4px !important',
        }
    })
})



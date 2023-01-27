import {makeStyles} from '@mui/styles';
import {Theme} from "@mui/material";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme:Theme) => {
    const colors = tokens(theme.palette.mode)

    return (
        {
            root: {
                position:'static',
                background:`${colors.primary.DEFAULT} !important`,
                borderBottom:`1px solid ${colors.borderColor}`,
                boxShadow:'none !important'
            },
            toolbar:{
              justifyContent:'space-between',
                padding:"25px 45px"
            },
            menuIcon:{
                marginRight:'10px',
                cursor:'pointer'
            },
            iconBlock:{
                paddingTop:'10px',
                paddingRight:'37px',
                borderRight:`1px solid ${colors.borderColor}`
            },
            searchIcon: {
                '&:hover': {
                    'backgroundColor': 'transparent'
                }
            },
            searchBlock: {
                display: 'flex',
                maxHeight:'45px',
                borderRadius: '8px',
                marginLeft: '28px',
                backgroundColor:`${colors.primary[600]}`
            },
            searchInput: {
                padding: '18px 12px'
            },
            themeIcon: {
                marginRight: '45px'
            }
        }
    )
})
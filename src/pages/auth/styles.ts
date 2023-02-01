import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center', //выравнивание по горизонтали
        alignItems: 'center', //выравнивание по вертикали
        width: '100vw',
        height: '100vh',
        padding:'20px'
    },
    form: {
        flex:1,
    },
})
import {makeStyles} from "@mui/styles";
export const useStyles=makeStyles({
    root:{
        display:'flex',
        width:'100%'
    },
    mainSection:{
        display:'flex',
        // width:'90%', вариант с width - не даст нам растягиваня по всей ширине в маленьких экранах
        flexGrow:1,
        //flexGrow даст нам вариант - занимать всё свободное время которе остаётся после sidebara
        flexDirection:'column',
        justifyContent:'center'
    }
})
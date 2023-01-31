import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hook";

const PrivateRoute = () => {
    const auth=useAuth()
    // console.log(auth)

    return (
        auth?<Outlet></Outlet>:<Navigate to={'login'}/>
            //оутлел вернёт тот компонент который будет передан в него
    );
};

export default PrivateRoute;

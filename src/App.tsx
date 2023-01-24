import React from 'react';
import Home from "./components/home";

import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";

function App() {
    return (
        <div className="app">

            <Routes>

                <Route element={<PrivateRoute/>}>
                    <Route path={'/'} element={<Home/>}/>
                </Route>
                <Route path={'login'} element={<AuthRootComponent/>}></Route>
                <Route path={'register'} element={<AuthRootComponent/>}></Route>

            </Routes>
        </div>
    );
}

export default App;

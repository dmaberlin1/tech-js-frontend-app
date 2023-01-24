import React from 'react';
import Home from "./components/home";
import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import {useMode,ColorModeContext} from "./theme";
import {CssBaseline,ThemeProvider} from '@mui/material'

function App() {
    const[theme,colorMode]=useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                <div className="App">
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path={'/'} element={<Home/>}/>
                    </Route>
                    <Route path={'login'} element={<AuthRootComponent/>}></Route>
                    <Route path={'register'} element={<AuthRootComponent/>}></Route>

                </Routes>
            </div></ThemeProvider>

        </ColorModeContext.Provider>
    );
}

export default App;

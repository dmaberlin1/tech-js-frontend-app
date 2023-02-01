import React from 'react';
import Home from "./pages/home";
import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./pages/auth";
import {useMode, ColorModeContext} from "./theme";
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout";
import NewsComponent from "./pages/news";
import Watchlist from "./pages/watchlist";
import SettingsComponent from "./pages/settings";
import WatchlistComponent from "./pages/watchlist";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>

                    <div className="App">
                        <Routes>
                            <Route element={<LayoutComponent/>}>
                                <Route element={<PrivateRoute/>}>
                                    <Route path={'/'} element={<Home/>}/>
                                    <Route path={'/watchlist'} element={<WatchlistComponent/>}/>
                                    <Route path={'/news'} element={<NewsComponent/>}/>
                                    <Route path={'/settings'} element={<SettingsComponent/>}/>
                                </Route>
                                <Route path={'login'} element={<AuthRootComponent/>}></Route>
                                <Route path={'register'} element={<AuthRootComponent/>}></Route>
                            </Route>
                        </Routes>
                    </div>

            </ThemeProvider>

        </ColorModeContext.Provider>
    );
}

export default App;

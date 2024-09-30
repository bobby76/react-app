import React, { useEffect, useMemo, useRef, useState } from "react";
import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import { AuthContext } from "./context/index.js";
import PostFilterSearch from "./components/PostFilterSearch.jsx";
import Posts from "./pages/Posts.jsx";
import { HashRouter } from 'react-router-dom';


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    useEffect( () => {
            if(localStorage.getItem('auth')){
                setIsAuth(true);
            }
            setLoading(false);
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <HashRouter >
                <Navbar />
                <AppRouter />
            </HashRouter>
        </AuthContext.Provider>
    )
}

export default App;

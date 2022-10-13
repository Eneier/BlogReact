import React, {useContext} from 'react';
import {Navigate, Redirect, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from '../hoc/RequireAuth'
import {publicRoutes, privateRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)

    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    element={route.element}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        element={route.element}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;
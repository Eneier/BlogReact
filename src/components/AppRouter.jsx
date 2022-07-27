import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from '../hoc/RequireAuth'
import {publicRoutes, privateRoutes} from "../router";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="*" element={<Posts/>} />
                <Route path="/posts/:*" element={<Posts/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;
import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from '../hoc/RequireAuth'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={
                    <RequireAuth>
                        <About/>
                    </RequireAuth>
                }/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="*" element={<Posts/>} />
                <Route path="/posts/:*" element={<Posts/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;
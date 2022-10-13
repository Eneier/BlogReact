import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const style1 = ['nav-mobile'].join(' ')
    const style2 = ['left', 'hide-on-med-and-down'].join(' ')

    return (
        <nav>
        <div className={cl.navWrapper}>
            <ul id={style1} className={style2}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/login" onClick={logout}>Logout</Link></li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
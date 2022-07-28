import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'

const Navbar = () => {

    const style1 = ['nav-mobile'].join(' ')
    const style2 = ['left', 'hide-on-med-and-down'].join(' ')

    return (
        <nav>
        <div className={cl.navWrapper}>
            <ul id={style1} className={style2}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
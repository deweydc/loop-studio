import React from 'react';
import Logo from './images/logo.svg';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function Nav() {
    return (
        <div className='flex'>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <nav className='navLinks'>
                <div className='navLink'>
                    <Link to='/about'>About</Link>
                </div>
                <div className='navLink'>
                    <Link to="/careers">Careers</Link>
                </div>
                <div className='navLink'>
                    <Link to="/event">Event</Link>
                </div>
                <div className='navLink'>
                    <Link to="/products">Products</Link>
                </div>
                <div className='navLink'>
                    <Link to="/support">Support</Link>
                </div>
            </nav>
        </div >
    )
}

export default Nav

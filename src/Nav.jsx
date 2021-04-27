import React from 'react';
import Logo from './images/logo.svg'

function Nav() {
    return (
        <div className='flex'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <nav className='navLinks'>
                <div className='navLink'>
                    <a href="#">About</a>
                </div>
                <div className='navLink'>
                    <a href="#">Careers</a>
                </div>
                <div className='navLink'>
                    <a href="#">Event</a>
                </div>
                <div className='navLink'>
                    <a href="#">Products</a>
                </div>
                <div className='navLink'>
                    <a href="#">Support</a>
                </div>
            </nav>
        </div >
    )
}

export default Nav

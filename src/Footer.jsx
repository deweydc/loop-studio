import React from 'react';
import './Footer.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
            <div className="container">

                <div className="footer__left-side">
                    <a href="#">
                        <img src={require('./images/logo.svg').default} alt="test" />
                    </a>

                    <div className='footer__nav-links'>
                        <div className='footer__nav-link'>
                            <Link to="/about">About</Link>
                        </div>
                        <div className='footer__nav-link'>
                            <Link to="/careers">Careers</Link>
                        </div>
                        <div className='footer__nav-link'>
                            <Link to="/event">Event</Link>
                        </div>
                        <div className='footer__nav-link'>
                            <Link to="/products">Products</Link>
                        </div>
                        <div className='footer__nav-link'>
                            <Link to="support">Support</Link>
                        </div>
                    </div>
                </div>

                <div className="footer__right-side">
                    <div className="footer__social-icons">
                        <a href="">
                            <FacebookIcon fontSize="large" />
                        </a>
                        <a href="">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="">
                            <PinterestIcon fontSize="large" />
                        </a>
                        <a href="">
                            <InstagramIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="footer__copyright">
                        <p>
                            &#169; 2021 Loopstudios. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

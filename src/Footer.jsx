import React from 'react';
import './Footer.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

// import { FacebookIcon } from '@material-ui/icons';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">


                <div className="footer__left-side">
                    <img src={require('./Hero/logo.svg').default} alt="test" />

                    <div className='footer__nav-links'>
                        <div className='footer__nav-link'>
                            <a href="#">About</a>
                        </div>
                        <div className='footer__nav-link'>
                            <a href="#">Careers</a>
                        </div>
                        <div className='footer__nav-link'>
                            <a href="#">Event</a>
                        </div>
                        <div className='footer__nav-link'>
                            <a href="#">Products</a>
                        </div>
                        <div className='footer__nav-link'>
                            <a href="#">Support</a>
                        </div>
                    </div>
                </div>

                <div className="footer__right-side">
                    <div className="footer__social-icons">
                        <FacebookIcon
                            className='social-icon'
                            fontSize="large"
                            style={{ marginLeft: 10 }}
                        />
                        <TwitterIcon
                            fontSize="large"
                            style={{ marginLeft: 10 }}
                        />
                        <PinterestIcon
                            fontSize="large"
                            style={{ marginLeft: 10 }}
                        />
                        <InstagramIcon
                            fontSize="large"
                            style={{ marginLeft: 10 }}
                        />
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
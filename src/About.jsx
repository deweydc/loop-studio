import React from 'react';
import Nav from './Nav';

import './About.css'

function About() {
    return (
        <div className='about__container'>
            <div className="nav__header">
                <Nav />
            </div>
            <h1>About Page</h1>
        </div>
    )
}

export default About

import React from 'react';
import Nav from './Nav';

import './About.css'

function About() {
    return (
        <div className='about__container'>
            <div className="nav__header">
                <Nav />
            </div>
            <div className="about__content">
                {/* Title */}
                <h1 className='about__title'>About Us</h1>
                {/* Image */}
                <img src={require("./images/About-us-img.jpg").default} alt="test" />

                {/* Text */}
                <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, impedit aperiam. Cum ratione mollitia laboriosam cumque ipsam eaque, blanditiis velit inventore praesentium accusamus, perferendis minima. Temporibus, aliquid libero? Doloribus optio iure ipsam quod dicta itaque numquam? Quasi natus facilis distinctio itaque illum at commodi alias facere nulla, nemo totam sint, sit blanditiis est unde.</p>
            </div>


        </div>
    )
}

export default About

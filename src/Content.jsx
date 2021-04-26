import React from 'react';
import VRImage from './images/desktop/image-interactive.jpg';
import './Content.css'


function Content() {
    return (
        <div className='content'>

            <div className="content__info">

                <div className="content__imgContainer">
                    <img className='content__img' src={VRImage} alt="test" />
                </div>
                <div className="content__infoContainer">
                    <h1 className="content__title">The leader in interactive VR</h1>
                    <p className="content__info-content">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Content

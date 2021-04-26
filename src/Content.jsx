import React from 'react';
import VRImage from './images/desktop/image-interactive.jpg';
import './Content.css'


function Content() {
    return (
        <div className='content'>

            <div className="content__info">

                <div className="content__infoContainer">
                    <div className="content__imgContainer">
                        <img className='content__img' src={VRImage} alt="test" />
                    </div>
                    <div className="content__right-block">

                        <h2 className="content__title">The leader in interactive VR</h2>
                        <p className="content__info-content">
                            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>

                <div className="content__showcase">
                    {/* title */}
                    <div className="showcase__header">
                        <h2 className="content__showcase__title">
                            OUR CREATIONS
                        </h2>

                        {/* button */}
                        <button className="showcase__btn">SEE ALL</button>
                    </div>

                    {/* img gallery */}
                    <div className="showcase__img-gallery">
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-deep-earth.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>Deep Earth</h3>
                            </div>
                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-night-arcade.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>Night Arcade</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-soccer-team.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>Soccer Team VR</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-grid.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>The Grid</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-from-above.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>From Up Above VR</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-pocket-borealis.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>Pocket Borealis</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-curiosity.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>The Curiosity</h3>
                            </div>                        </div>
                        <div className="showcase__img-container">
                            <img className='showcase__img' src={require('./images/desktop/image-fisheye.jpg').default} alt="test" />
                            <div className="showcase__title-container">
                                <h3 className='showcase__img-title'>Make It Fisheye</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content

import React from 'react';
import Logo from './logo.svg';
import styles from './jumbotron.module.css';

export default function Hero() {
    return (

        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.navLinks}>
                    <div className="nav-link">
                        <a href="#">About</a>
                    </div>
                    <div className="nav-link">
                        <a href="#">Careers</a>
                    </div>
                    <div className="nav-link">
                        <a href="#">Event</a>
                    </div>
                    <div className="nav-link">
                        <a href="#">Products</a>
                    </div>
                    <div className="nav-link">
                        <a href="#">Support</a>
                    </div>
                </div>
            </div>

            <h1 className="title">Immersive experiences that deliver</h1>
        </div>


    )
}

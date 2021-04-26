import React from 'react';
import Logo from './logo.svg';
import styles from './hero.module.css';

export default function Hero() {
    return (

        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.navLinks}>
                    <div className={styles.navLink}>
                        <a href="#">About</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#">Careers</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#">Event</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#">Products</a>
                    </div>
                    <div className={styles.navLink}>
                        <a href="#">Support</a>
                    </div>
                </div>
            </div>

            <h1 className={styles.title}>Immersive experiences that deliver</h1>
        </div>


    )
}

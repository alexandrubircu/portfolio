import React from "react";
import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faArrowDown } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return(
        <div className={styles.About}>
             <div className={styles.subtitle}>
                <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                <p>ABOUT</p>
            </div>
            
            <div className={styles.header}>
                <h1>
                    Frontend Developer specializing in <span style={{ color: '#28e98c' }}>React.js</span> 
                </h1>
            </div>

            <div className={styles.aboutDescription}>
                <p>
                    As a passionate Frontend Developer, 
                    I specialize in creating dynamic, 
                    responsive, and user-friendly applications using React.js. 
                    With a strong foundation in JavaScript and modern web technologies, 
                    I am dedicated to delivering clean, efficient code and continuously improving my skills. 
                    Whether it's building interactive interfaces or optimizing performance,
                    I focus on creating seamless user experiences.
                </p>
            </div>


        </div>
    )
}

export default About;
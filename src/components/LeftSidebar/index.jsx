import React from "react";
import styles from './styles.module.scss'

import leftSideImage from '../../assets/images/leftSideImage.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const LeftSidebar = () => {
    return (
        <div className={styles.leftSidebar}>
            <img src={leftSideImage} alt="HI" />
            <h3>Alexandru</h3>
            <ul>
                <li>
                    <a href="https://github.com" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </a>
                </li>
            </ul>
            <button className={styles.mainButton}>HIRE ME!</button>
        </div>
    );
}

export default LeftSidebar;

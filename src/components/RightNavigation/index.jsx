import React from "react";
import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faShapes, faGripVertical, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const RightNavigation = () => {
    return(
        <ul className={styles.rightNavigation}>
            <li>

                <FontAwesomeIcon icon={faHouse} className={styles.icon} />
            
            </li>

            <li>

                <FontAwesomeIcon icon={faUser} className={styles.icon} />

            </li>

            <li>

                <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />

            </li>

            <li>

                <FontAwesomeIcon icon={faShapes} className={styles.icon} />

            </li>

            <li>

                <FontAwesomeIcon icon={faGripVertical} className={styles.icon} />

            </li>

            <li>

                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />

            </li>
        </ul>
    );
}
export default RightNavigation;
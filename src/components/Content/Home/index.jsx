import React from "react";
import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faArrowDown } from '@fortawesome/free-solid-svg-icons';

import roundText from '../../../assets/images/round-text.png'

const Home = () => {
    return(

        <div className={styles.Home}>
            <div className={styles.subtitle}>
                <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                <p>INTRODUCE</p>
            </div>

            <div className={styles.header}>
                <h1>
                    Hi, I'm a <span style={{ color: '#28e98c' }}>Frontend Developer</span> Passionate About Creating Interactive Web Experiences
                </h1>
            </div>

            <div className={styles.rotatingLink}>
                <FontAwesomeIcon icon={faArrowDown} className={styles.arrow}/>
                <img src={roundText} alt="Rotating" className={styles.rotatingImage} />
            </div>

            <div className={styles.facts}>
                <div className={styles.expirience}>
                    <h2>1+</h2>
                    <p>Years of <br/> Experience</p>
                </div>
                <div className={styles.projects}>
                    <h2>10+</h2>
                    <p>projects <br/> completed</p>
                </div>
            </div>

        </div>


        // <div className={styles.Home}>

        //     <div className={styles.mainContainer}>

        //         <div className={styles.subtitle}>
        //             <FontAwesomeIcon icon={faHouse} className={styles.icon} />
        //             <p>INTRODUCE</p>
        //         </div>

        //         <div className={styles.header}>
        //             <h1>
        //                 Hi, I'm a <span style={{ color: '#28e98c' }}>Frontend Developer</span> Passionate About Creating Interactive Web Experiences
        //             </h1>
        //         </div>



        //         <div className={styles.rotatingLink}>

        //             <FontAwesomeIcon icon={faArrowDown} className={styles.arrow}/>
        //             <img src={roundText} alt="Rotating" className={styles.rotatingImage} />

        //         </div>


        //         <div className={styles.facts}>
        //             <div className={styles.expirience}>
        //                 <h2>1+</h2>
        //                 <p>Years of <br/> Experience</p>
        //             </div>
        //             <div className={styles.projects}>
        //                 <h2>10+</h2>
        //                 <p>projects <br/> completed</p>
        //             </div>
        //         </div>

        //     </div>

        // </div>
    )
}

export default Home
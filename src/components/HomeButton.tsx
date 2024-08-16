import React from "react";
import styles from "../styles/home.module.css";

const HomeButton: React.FC = () => {
    return (
        <button className={styles.homeButton}>
            Let's Work Together! <span className={styles.arrow}>&rarr;</span>
        </button>
    );
};

export default HomeButton;

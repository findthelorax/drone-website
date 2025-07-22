import React from "react";
import styles from "../styles/home.module.css";

const HomeButton: React.FC = () => {
    const handleClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button className={styles.homeButton} onClick={handleClick}>
            Let&#39;s Work Together! <span className={styles.arrow}>&rarr;</span>
        </button>
    );
};

export default HomeButton;
import React from "react";
import styles from "@/styles/footer.module.css";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <p>© &nbsp;{year}&nbsp; DKS Drone</p>
            </div>
        </footer>
    );
};

export default Footer;
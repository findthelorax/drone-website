import React from "react";
import styles from "@/styles/footer.module.css";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span>© {year} DKS Drone</span>
                <span className={styles.madeBy}>
                    Made by <strong>Brett Ferrante</strong>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
import React from "react";
import styles from "@/styles/footer.module.css";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <p>© &nbsp;{year}&nbsp; DKS Drone</p>
            </div>
            {/* <div className={styles.right}>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedin}
                >
                    LinkedIn
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.youtube}
                >
                    YouTube
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagram}
                >
                    Instagram
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.twitter}
                >
                    Twitter
                </a>
            </div> */}
        </footer>
    );
};

export default Footer;
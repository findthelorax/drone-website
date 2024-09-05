"use client";

import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    const handleContactClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoText}>
                        <span>D</span>
                        <span>K</span>
                        <span>S</span>
                        <span>&nbsp;</span>
                        <span>D</span>
                        <span>r</span>
                        <span>o</span>
                        <span>n</span>
                        <span>e</span>
                    </div>
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link href="/about">
                            {/* <div className={styles.aboutText}> */}
                                <span>A</span>
                                <span>B</span>
                                <span>O</span>
                                <span>U</span>
                                <span>T</span>
                            {/* </div> */}
                        </Link>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleContactClick}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
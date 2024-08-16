"use client";

import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoText}>
                        <span>D</span><span>K</span><span>S</span><span>&nbsp;</span><span>D</span><span>r</span><span>o</span><span>n</span><span>e</span>
                    </div>
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
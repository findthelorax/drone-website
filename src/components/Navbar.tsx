import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
const pathname = usePathname();

    const handleContactClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        setIsMenuOpen(false);
        if (pathname === "/") {
            e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleNavItemClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (!isMenuOpen) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar} ref={navRef}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo} onClick={handleNavItemClick}>
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
                <button className={styles.hamburger} onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li>
                        <Link href="/services" onClick={handleNavItemClick}>SERVICES</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleNavItemClick}>
                            <span>A</span>
                            <span>B</span>
                            <span>O</span>
                            <span>U</span>
                            <span>T</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/#contact" onClick={handleContactClick}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
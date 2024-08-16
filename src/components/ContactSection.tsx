import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import ContactCard from './ContactCard';
import { userInfo } from '../helpers/userInfo';
import styles from '../styles/contactSection.module.css';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={`${styles.contactSectionRow} ${styles.contactSectionRowMd} ${styles.contactSectionRowLg}`}>
                <h1 className={styles.contactTitle}>CONTACT</h1>
                <p className={styles.contactText}>Have a question? Please reach out.</p>
                <p className={`${styles.contactSubText} ${styles.underline}`}>Address</p>
                <p className={`${styles.contactSubText}`}>{userInfo.address}</p>
                <p className={`${styles.contactSubText} ${styles.underline}`}>Phone</p>
                <p className={`${styles.contactSubText}`}>{userInfo.phone}</p>
                <p className={`${styles.contactSubText} ${styles.underline}`}>Email</p>
                <p className={`${styles.contactSubText}`}>
                    <a href={`mailto:${userInfo.email}`}>
                        {userInfo.email}
                    </a>
                </p>
                <div className={styles.socialIcons}>
                    <a
                        href={userInfo.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaYoutube size={30} />
                    </a>
                    <a
                        href={userInfo.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href={userInfo.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaFacebook size={30} />
                    </a>
                </div>
            </div>
            <div className={`${styles.contactCardContainer} ${styles.contactCardContainerMd} ${styles.contactCardContainerLg}`}>
                <ContactCard />
            </div>
        </section>
    );
};

export default ContactSection;
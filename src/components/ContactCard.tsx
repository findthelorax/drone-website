import React, { useEffect, useState } from 'react';
import styles from '../styles/contactCard.module.css';
import { getRandomDinosaurFact } from '../data/dinosaurFacts';

const ContactCard: React.FC = () => {
    const [randomFact, setRandomFact] = useState('');

    useEffect(() => {
        setRandomFact(getRandomDinosaurFact());
    }, []);

    return (
        <section id="contact">
            <div className={styles.contactCardContainer}>
                <div className={styles.contactCard}>
                    {/* <h2>Have a question? Please reach out.</h2> */}
                    <div>
                        <label className="sr-only" htmlFor="name">
                            Name
                        </label>
                        <input
                            className={styles.contactInput}
                            id="name"
                            type="text"
                            placeholder="NAME"
                        />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={styles.contactInput}
                            id="email"
                            type="email"
                            placeholder="EMAIL"
                        />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={styles.contactInput}
                            id="message"
                            placeholder={randomFact.toUpperCase()}
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className={styles.contactButton}>
                            SEND MESSAGE
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width="24"
                                height="24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;
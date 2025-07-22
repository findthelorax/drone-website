import React, { useEffect, useState } from 'react';
import styles from '../styles/contactCard.module.css';
import { getRandomDinosaurFact } from '../data/dinosaurFacts';

const ContactCard: React.FC = () => {
    const [randomFact, setRandomFact] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setRandomFact(getRandomDinosaurFact());
    }, []);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        // Submit logic here (e.g., API call)
        alert('Message sent!');
    };

    return (
        <section id="contact">
            <div className={styles.contactCardContainer}>
                <form className={styles.contactCard} onSubmit={handleSubmit} noValidate>
                    <div>
                        <label className="sr-only" htmlFor="name">
                            Name
                        </label>
                        <input
                            className={styles.contactInput}
                            id="name"
                            type="text"
                            placeholder="NAME"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
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
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    {error && (
                        <div style={{ color: 'red', marginBottom: '10px' }}>
                            {error}
                        </div>
                    )}
                    <div className="flex items-center justify-center">
                        <button className={styles.contactButton} type="submit">
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
                </form>
            </div>
        </section>
    );
};

export default ContactCard;
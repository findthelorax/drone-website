import React, { useEffect, useState } from 'react';
import styles from "../styles/home.module.css";
import { getRandomSleussSlogan } from '../data/seussSlogans';

const HomeSlogan: React.FC = () => {
    const [slogan, setSlogan] = useState('');

    useEffect(() => {
        setSlogan(getRandomSleussSlogan());
    }, []);

    if (!slogan) {
        return null;
    }

    return (
        <div className={styles.homeSlogan}>
            <p>
                {slogan.split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default HomeSlogan;
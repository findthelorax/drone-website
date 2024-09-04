import React from 'react';
import Image from 'next/image';
import styles from '../styles/services2.module.css';
import { services } from '../data/servicesData';

const ServicesCard: React.FC = () => {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                {services.map(service => (
                    <div key={service.id} className={styles.serviceCard}>
                        <div className={styles.serviceCardInner}>
                            <div className={styles.serviceCardFront}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src={service.image} 
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className={styles.serviceImage} 
                                    />
                                </div>
                                <div className={styles.serviceText}>
                                    <h2>{service.title.toUpperCase()}</h2>
                                </div>
                            </div>
                            <div className={styles.serviceCardBack}>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <button className={styles.serviceButton}>Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesCard;
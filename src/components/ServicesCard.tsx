import React from 'react';
import styles from "../styles/services.module.css";
import { services } from '../data/servicesData';

const ServicesCard: React.FC = () => {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
                {services.map(service => (
                    <div key={service.id} className={styles.serviceCard}>
                        <div className={styles.serviceText}>
                            <h2 className={styles.serviceTitle}>{service.title}</h2>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                        <img src={service.image} alt={service.title} className={styles.serviceImage} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesCard;
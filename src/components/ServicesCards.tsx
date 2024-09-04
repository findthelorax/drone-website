import React from 'react';
import Image from 'next/image';
import { services } from '@/data/servicesData';
import styles from '@/styles/services.module.css';

const ServiceCards: React.FC = () => {
    return (
        <div className={styles.servicesContainer}>
            {services.map(service => (
                <div key={service.id} className={styles.service}>
                    <div className={styles.serviceFront}>
                        <div className={styles.imageWrapper}>
                            <Image 
                                src={service.image} 
                                alt={service.title}
                                width={300}
                                height={300}
                                className={styles.serviceImage} 
                            />
                        </div>
                        <div className={styles.serviceTitle}>{service.title.toUpperCase()}</div>
                    </div>
                    <div className={styles.serviceBack}>
                        <div className={styles.serviceDescription}>{service.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
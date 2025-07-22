import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/services.module.css';
import { services } from '../data/servicesData';
import classNames from 'classnames';

const ServicesCard: React.FC = () => {
    const [flippedId, setFlippedId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setFlippedId(prev => (prev === id ? null : id));
    };

    return (
        <div className={styles.servicesContainer}>
            {services.map(service => {
                const imageWrapperClass = classNames(styles.imageWrapper, {
                    [styles.realEstateImage]: service.image.includes('Real-Estate'),
                    [styles.weddingsImage]: service.image.includes('Weddings'),
                    [styles.inspectionsImage]: service.image.includes('inspections'),
                    [styles.waterStorageImage]: service.image.includes('water-storage'),
                    [styles.droneImage]: service.image.includes('drone'),
                });

                const serviceTextClass = classNames(styles.serviceText, {
                    [styles.serviceTextTop]: service.title.includes('Weddings') || service.title.includes('Inspections') || service.title.includes('Orthomosaic Mapping'),
                    [styles.serviceTextBottom]: service.title.includes('Real Estate') || service.title.includes('3D Modeling') || service.title.includes('Custom Requests'),
                    [styles.serviceTextWhite]: service.title.includes('3D Modeling') || service.title.includes('Custom Requests'),
                });

                const cardInnerClass = classNames(styles.serviceCardInner, {
                    [styles.rotated]: flippedId === service.id,
                });

                return (
                    <div
                        key={service.id}
                        className={styles.serviceCard}
                        onClick={() => handleCardClick(service.id)}
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                    >
                        <div className={cardInnerClass}>
                            <div className={styles.serviceCardFront}>
                                <div className={imageWrapperClass}>
                                    <Image 
                                        src={service.image} 
                                        alt={service.title}
                                        width={2500}
                                        height={2500}
                                        className={styles.serviceImage} 
                                    />
                                </div>
                                <div className={serviceTextClass}>
                                    <h2>{service.title.toUpperCase()}</h2>
                                </div>
                            </div>
                            <div className={styles.serviceCardBack}>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <button className={styles.serviceButton}>Learn More</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ServicesCard;
'use client';

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/services.module.css";
import Navbar from "@/components/Navbar";
import { services } from "@/data/servicesData.ts";

export default function ServicesPage() {
    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <main className={styles.servicesMain}>
            <Navbar/>
            <h1 className={styles.servicesTitle}>Our Services</h1>
            <div className={styles.servicesList}>
                {services.map(service => (
                    <section
                        key={service.id}
                        className={`${styles.serviceSection} ${openId === service.id ? styles.open : ""}`}
                        tabIndex={0}
                        aria-expanded={openId === service.id}
                    >
                        <button
                            className={styles.serviceHeader}
                            onClick={() => handleToggle(service.id)}
                            aria-controls={`service-desc-${service.id}`}
                            aria-expanded={openId === service.id}
                        >
                            <span>{service.title}</span>
                            <span className={styles.arrow}>{openId === service.id ? "▲" : "▼"}</span>
                        </button>
                        <div
                            id={`service-desc-${service.id}`}
                            className={styles.serviceContent}
                        >
                            <div className={styles.serviceDetails}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={250}
                                    className={styles.serviceImage}
                                />
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
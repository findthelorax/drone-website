"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { videos } from "@/data/videos";
import styles from "@/styles/videoSlider.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSlider = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [iAnimating, setIAnimating] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && sliderRef.current) {
            initializeCards();
        }
    }, [isClient, sliderRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleClick();
        }, 10000);

        return () => clearInterval(interval);
    }, [iAnimating]);

    const initializeCards = () => {
        if (!sliderRef.current) return;
        const cards = Array.from(sliderRef.current.querySelectorAll(`.${styles.videoSliderCard}`));
        gsap.to(cards, {
            y: (i) => 0 + 10 * i + "%",
            z: (i) => 15 + i,
            scale: (i) => 1 + 0.1 * i,
            duration: 1,
            ease: "power3.out",
            stagger: -0.1,
        });
    }

    const handleClick = () => {
        if (iAnimating) return;
        setIAnimating(true);

        if (!sliderRef.current) return; // Add null check
        const slider = sliderRef.current;
        const cards = Array.from(slider.querySelectorAll(`.${styles.videoSliderCard}`));
        const lastCard = cards.pop();

        if (!lastCard) return; // Add null check
        gsap.to(lastCard, {
            y: "+=100%",
            duration: 0.75,
            ease: "power3.inOut",
            onStart: () => {
                setTimeout(() => {
                    slider.prepend(lastCard);
                    initializeCards();
                    setTimeout(() => {
                        setIAnimating(false);
                    }, 1000);
                }, 300);
            },
        });
    };

    return (
        <>
            <div className={styles.videoSliderContainer} onClick={handleClick}>
                <div className={styles.videoSlider} ref={sliderRef}>
                    {videos.map((video) => (
                        <div className={styles.videoSliderCard} key={video.id}>
                            <div className={styles.vscInfo}>
                                <div className={styles.vscItem}>
                                    <p>{video.title}</p>
                                </div>
                                <div className={styles.vscItem}>
                                    <p>{video.date}</p>
                                </div>
                                <div className={styles.vscItem}>
                                    <p>{video.id}</p>
                                </div>
                            </div>
                            <div className={styles.vscVideo}>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${video.id}`}
                                    controls={false}
                                    autoPlay={true}
                                    playing
                                    muted
                                    loop={true}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoSlider;
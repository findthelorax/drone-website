import React from "react";
import Head from "next/head";
import styles from "../styles/videoBackground.module.css";
import useShrinkOnScroll from "../hooks/useShrinkOnScroll";

const VideoBackground: React.FC = () => {
    // useShrinkOnScroll(`.${styles.videoContainer}`, 0.25, 1, 1);

    return (
        <>
            <Head>
                <meta name="description" content="Background video of a lake" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.videoContainer}>
                <video 
                    src="/assets/lake_hyper.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={styles.videoBackground}
                />
            </div>
        </>
    );
};

export default VideoBackground;
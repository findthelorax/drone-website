import React from "react";
import Head from "next/head";
import styles from "../styles/videoBackground.module.css";

const VideoBackground: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Background video of a lake" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <video 
                src="/assets/lake_hyper.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={styles.videoBackground}
            />
        </>
    );
};

export default VideoBackground;
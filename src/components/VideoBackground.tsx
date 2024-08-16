import React from "react";
import Head from "next/head";

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
                style={{ width: '100%', height: 'auto' }}
            />
        </>
    );
};

export default VideoBackground;
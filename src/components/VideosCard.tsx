import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/videosCard.module.css";

interface VideoCardProps {
    videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

    return (
        <div className={styles.videoContainer}>
            <iframe
                src={videoSrc}
                className={styles.iframe}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube video"
            />
        </div>
    );
};

const VideosCard: React.FC = () => {
    const videoIds = [
        "f4mUhKDI09k",
        "lV0zxH9hjhk",
        "QbbavdKtLF0",
        // "Srbw9wcmuSI",
    ];

    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={10000}>
            {videoIds.map((id) => (
                <div key={id} className={styles.carouselItem}>
                    <VideoCard videoId={id} />
                </div>
            ))}
        </Carousel>
    );
};

export default VideosCard;
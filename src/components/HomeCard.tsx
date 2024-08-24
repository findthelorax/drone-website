import React from 'react';
import styles from "../styles/home.module.css";
import useShrinkOnScroll from "../hooks/useShrinkOnScroll";

const HomeCard: React.FC = () => {
    useShrinkOnScroll(`.${styles.homeCard}`, 0.25, 1, 2);

    return (
        <div className={styles.homeCard}>
            <p>
                DKS Drone is a Vermont-based aerial imagery company providing high quality, affordable drone services to
                businesses and individuals in Vermont, New Hampshire, New York, and beyond.
                {/* <br />
                <br />
                We offer a wide range of services, including aerial photography, videography, mapping, and more. Whether
                you're seeking to showcase the beauty of your property, enhance your marketing efforts, or streamline
                your operations with innovative aerial solutions, we're here to transform your vision into reality, one
                pixel at a time. */}
            </p>
        </div>
    );
};

export default HomeCard;
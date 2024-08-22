import React, { useState, useEffect } from "react";
import styles from "@/styles/droneFlying.module.css";

const DroneFlying: React.FC = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const droneElement = document.querySelector(`.${styles.drone}`);
            if (droneElement) {
                const rect = droneElement.getBoundingClientRect();
                const droneX = rect.left + rect.width / 2;
                const mouseX = event.clientX;
                const deltaX = mouseX - droneX;

                // Calculate the angle based on horizontal distance only
                const angle = (deltaX / window.innerWidth) * 40; // Scale to -20 to 20 degrees

                // Invert the angle
                const invertedAngle = angle * -1;

                // Clamp the angle between -20 and 20 degrees
                const clampedAngle = Math.max(-20, Math.min(20, invertedAngle));

                console.log(`MouseX: ${mouseX}, DroneX: ${droneX}, DeltaX: ${deltaX}, Angle: ${angle}, ClampedAngle: ${clampedAngle}`);

                setRotation(clampedAngle);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.droneContainer}>
            <img
                src="/assets/drone4.png"
                alt="Drone"
                className={styles.drone}
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        </div>
    );
};

export default DroneFlying;
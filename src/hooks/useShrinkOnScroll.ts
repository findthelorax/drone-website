import { useEffect } from "react";

const useShrinkOnScroll = (selector: string, minScale: number = 0.25, maxScale: number = 1, speedFactor: number = 1) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollY / maxScroll;

            const element = document.querySelector(selector);

            if (element) {
                const scale = maxScale - (scrollFraction * (maxScale - minScale) * speedFactor);
                element.style.transform = `scale(${scale})`;
                element.style.transformOrigin = 'center center';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selector, minScale, maxScale, speedFactor]);
};

export default useShrinkOnScroll;
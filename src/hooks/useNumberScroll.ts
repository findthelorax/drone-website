import { useState, useEffect } from 'react';

const useNumberScroll = (targetNumber: number, duration: number) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = targetNumber / (duration / 100);

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
                clearInterval(interval);
                setDisplayNumber(targetNumber);
            } else {
                setDisplayNumber(Math.floor(start));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return displayNumber;
};

export default useNumberScroll;
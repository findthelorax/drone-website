import React from 'react';
import { metrics } from '@/data/metricsData';
import styles from '@/styles/metrics.module.css';
import { useInView } from 'react-intersection-observer';
import useNumberScroll from '@/hooks/useNumberScroll';

interface MetricCardProps {
    title: string;
    value: number;
    unit?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const displayNumber = useNumberScroll(inView ? value : 0, 2000);

    return (
        <div className={styles.card} ref={ref}>
            <h3>{title}</h3>
            <p>{displayNumber}{unit && ` ${unit}`}</p>
        </div>
    );
};

const Metrics = () => {
    return (
        <div className={styles.metricsContainer}>
            <MetricCard title="Miles Flown" value={metrics.milesFlown} />
            <MetricCard title="Pilot Years" value={metrics.yearsAsPilot} />
            <MetricCard title="Lands Surveyed" value={metrics.landsSurveyed} />
            <MetricCard title="Average Speed" value={metrics.averageFlightSpeed} unit="mph" />
        </div>
    );
};

export default Metrics;
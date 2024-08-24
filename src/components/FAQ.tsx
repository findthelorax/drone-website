import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/faq.module.css";
import { faqs } from "@/data/faq";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.leftSide}>
                <h1>FAQ</h1>
                <p>Ask Me Anything!</p>
                <Image src="/assets/declan1-nobg.png" alt="FAQ Image" width={500} height={500} />
            </div>
            <div className={styles.rightSide}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div
                            className={`${styles.questionBubble} ${activeIndex === index ? styles.open : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{faq.question}</span>
                            <span className={`${styles.chevron} ${activeIndex === index ? styles.open : ''}`}></span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.answerContainer}>
                                <div className={styles.answer}>{faq.answer}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
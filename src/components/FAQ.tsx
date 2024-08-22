import { useState } from "react";
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
                <img src="/path/to/image.jpg" alt="FAQ Image" />
            </div>
            <div className={styles.rightSide}>
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className={styles.faqItem}
                        open={activeIndex === index}
                        onClick={() => toggleAnswer(index)}
                    >
                        <summary className={styles.questionBubble}>
                            {faq.question}
                        </summary>
                        <div className={styles.answer}>{faq.answer}</div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
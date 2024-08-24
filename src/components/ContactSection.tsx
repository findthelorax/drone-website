import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { userInfo } from "../helpers/userInfo";
import styles from "../styles/contactSection.module.css";
import stylesSVG from "../styles/svg.module.css";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div
                className={`${styles.contactSectionRow} ${styles.contactSectionRowMd} ${styles.contactSectionRowLg}`}
            >
                <h1 className={styles.contactTitle}>DKS DRONE</h1>
                <p className={`${styles.contactSubText}`}>{userInfo.address}</p>
                <div className={styles.contactInfoContainer}>
                    <p className={`${styles.contactSubText}`}>{userInfo.phone}</p>
                    <p className={`${styles.contactSubText}`}>
                        <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                    </p>
                </div>
                <div className={styles.socialIcons}>
                    <a
                        href={userInfo.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaYoutube size={30} />
                    </a>
                    <a
                        href={userInfo.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href={userInfo.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <FaFacebook size={30} />
                    </a>
                </div>
                <svg className={stylesSVG.svgRect}>
                    <rect x="0" y="0" width="50" height="30" />
                </svg>
                <svg
                    className={stylesSVG.svgTriangle}
                    viewBox="0 10 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="50,15 90,85 10,85" />
                </svg>
                <svg
                    className={stylesSVG.svgBlob1}
                    width="150"
                    height="150"
                    viewBox="0 0 250 250"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M220,437.47425887578476C256.3932009975233,429.27799791257854,258.0661894338786,372.30672507607204,288.97102137028486,351.4133018140599C314.9574484254933,333.84499985244076,360.8679759185428,355.3421336655595,379.1693940777182,329.86670004268854C397.335759523934,304.57925875979186,369.7143247571723,269.37743735241986,370.26977935571085,238.24605462774196C370.75650605692715,210.96664194891684,388.900296880516,184.93042575422777,382.2274067711931,158.47525997186645C375.40430556407233,131.4245711957964,353.36263452948435,111.48753400701628,333.38522974109037,92.01453292184533C312.725180297175,71.8761230782015,292.2079376633789,47.01590514086047,263.65262498221637,42.8943384803978C235.1673278914114,38.782877607469395,210.47644251499688,61.41928483369966,183.10820684191995,70.32411144649585C157.81290357069852,78.55446624316653,131.6847722373061,81.49165981957368,107.97320349705505,93.54788707101905C79.35506960877197,108.09887395210795,42.57192691807618,118.39075871541738,30.259086461864598,148.04076320717417C18.007283101950527,177.54378697699107,35.15440226502449,211.26233497825325,46.72393850223537,241.03952303200083C56.6609247420192,266.61492224271956,78.4989889990611,284.4168133506251,92.43047647979458,308.0548842721587C107.58375731735498,333.76601724539887,111.58773155918257,365.3896413569338,132.53841580210315,386.6441257934722C156.5586726410766,411.01269386628496,186.61913821520312,444.992098660846,220,437.47425887578476"
                        transform="scale(.5)"
                        fill="#8A3FFC"
                    />
                </svg>
            </div>
            <div
                className={`${styles.contactCardContainer} ${styles.contactCardContainerMd} ${styles.contactCardContainerLg}`}
            >
                <ContactCard />
            </div>
        </section>
    );
};

export default ContactSection;
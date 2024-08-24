import React from "react";
import usePageLoad from "@/hooks/usePageLoad";
import footerStyles from "@/styles/footer.module.css";

interface FooterContainerProps {
    children: React.ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
    const isLoaded = usePageLoad();

    return (
        <div className={`${footerStyles.footerContainer} ${!isLoaded ? footerStyles.hiddenFooter : ""}`}>
            {children}
        </div>
    );
};

export default FooterContainer;
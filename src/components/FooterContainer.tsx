import React, { forwardRef } from "react";
import usePageLoad from "@/hooks/usePageLoad";
import footerStyles from "@/styles/footer.module.css";

interface FooterContainerProps {
    children: React.ReactNode;
}

const FooterContainer = forwardRef<HTMLDivElement, FooterContainerProps>(({ children }, ref) => {
    const isLoaded = usePageLoad();

    return (
        <div ref={ref} className={`${footerStyles.footerContainer} ${!isLoaded ? footerStyles.hiddenFooter : ""}`}>
            {children}
        </div>
    );
});

export default FooterContainer;
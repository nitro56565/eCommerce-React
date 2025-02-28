import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    }, [pathname]); // Run this effect every time the pathname changes

    return null; // This component does not render anything
};

export default ScrollToTop;

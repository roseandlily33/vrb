import styles from "./BackToTopButton.module.css";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
            type="button"
        >
            ↑ Top
        </button>
    );
}

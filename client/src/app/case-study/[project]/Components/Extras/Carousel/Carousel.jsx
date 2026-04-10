import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const total = slides.length;

    const goTo = (idx) => setCurrent(idx);
    const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
    const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

    return (
        <>
            <div className={styles.carouselContainer}>
                <div className={styles.slide}>
                    <img
                        src={slides[current].url}
                        alt={slides[current].desc || `Slide ${current + 1}`}
                        className={styles.slideImage}
                        style={{ cursor: "zoom-in" }}
                        onClick={() => setFullscreen(true)}
                    />
                    <div className={styles.slideDesc}>{slides[current].desc}</div>
                </div>
                <div className={styles.carouselNav}>
                    <button className={styles.carouselButton} onClick={prev} aria-label="Previous slide">&#8592;</button>
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={idx === current ? `${styles.carouselDot} ${styles.active}` : styles.carouselDot}
                            onClick={() => goTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            role="button"
                            tabIndex={0}
                        />
                    ))}
                    <button className={styles.carouselButton} onClick={next} aria-label="Next slide">&#8594;</button>
                </div>
            </div>
            {fullscreen && (
                <div className={styles.fullscreenOverlay} onClick={() => setFullscreen(false)}>
                    <div className={styles.fullscreenContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.fullscreenClose} onClick={() => setFullscreen(false)} aria-label="Close fullscreen">&times;</button>
                        <img
                            src={slides[current].url}
                            alt={slides[current].desc || `Slide ${current + 1}`}
                            className={styles.fullscreenImage}
                        />
                        <div className={styles.fullscreenDesc}>{slides[current].desc}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Carousel;

"use client";
import { useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const total = slides.length;

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Helper to get slide index with wrap-around
  const getIdx = (idx) => (idx + total) % total;

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {/* Previous Slide */}
          {total > 1 && (
            <button
              type="button"
              className={`${styles.slideSide} ${styles.slideSideLeft}`}
              onClick={prev}
              aria-label="Previous slide"
            >
              <Image
                src={slides[getIdx(current - 1)]?.url}
                alt={
                  slides[getIdx(current - 1)]?.desc ||
                  slides[getIdx(current - 1)]?.description ||
                  `Slide ${getIdx(current - 1) + 1}`
                }
                className={styles.slideImageSide}
                width={200}
                height={200}
              />
            </button>
          )}

          {/* Center/Main Slide */}
          <div className={styles.slideCenter}>
            <button
              type="button"
              className={styles.mainImageButton}
              onClick={() => setFullscreen(true)}
              aria-label={`Expand slide ${current + 1}`}
            >
              <Image
                src={slides[current]?.url}
                alt={
                  slides[current]?.desc ||
                  slides[current]?.description ||
                  `Slide ${current + 1}`
                }
                className={styles.slideImageCenter}
                width={400}
                height={400}
              />

              <span className={styles.imagePixel} aria-hidden="true" />
            </button>

            <div className={styles.slideDesc}>
              {slides[current]?.desc || slides[current]?.description}
            </div>
          </div>

          {/* Next Slide */}
          {total > 1 && (
            <button
              type="button"
              className={`${styles.slideSide} ${styles.slideSideRight}`}
              onClick={next}
              aria-label="Next slide"
            >
              <Image
                src={slides[getIdx(current + 1)]?.url}
                alt={
                  slides[getIdx(current + 1)]?.desc ||
                  slides[getIdx(current + 1)]?.description ||
                  `Slide ${getIdx(current + 1) + 1}`
                }
                className={styles.slideImageSide}
                width={200}
                height={200}
              />
            </button>
          )}
        </div>

        <div className={styles.carouselNav}>
          <button
            type="button"
            className={styles.carouselButton}
            onClick={prev}
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className={styles.dots} aria-label="Choose slide">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={
                  idx === current
                    ? `${styles.carouselDot} ${styles.active}`
                    : styles.carouselDot
                }
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === current ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.carouselButton}
            onClick={next}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

      {fullscreen && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Slide ${current + 1} fullscreen view`}
        >
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.fullscreenClose}
              onClick={() => setFullscreen(false)}
              aria-label="Close fullscreen"
            >
              ×
            </button>

            <div className={styles.fullscreenImageWrap}>
              <Image
                src={slides[current]?.url}
                alt={
                  slides[current]?.desc ||
                  slides[current]?.description ||
                  `Slide ${current + 1}`
                }
                className={styles.fullscreenImage}
                width={800}
                height={600}
              />
            </div>

            {(slides[current]?.desc || slides[current]?.description) && (
              <div className={styles.fullscreenDesc}>
                {slides[current]?.desc || slides[current]?.description}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;

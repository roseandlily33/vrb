"use client";
import React from "react";
import styles from "./HeroImage.module.css";
import { FiArrowRight } from "react-icons/fi";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton.component";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton.component";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* =====================================
        LEFT: CONTENT
    ===================================== */}

        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowPixel} aria-hidden="true" />
            Web Design & Development
          </p>

          <h1 className={styles.title}>
            Where design, development and <span>strategy connect.</span>
          </h1>

          <p className={styles.subtitle}>
            {/* Custom websites that bring thoughtful design, intuitive experiences
            and technical expertise together to help businesses build a stronger
            online presence. */}
            I'm a freelance web designer and developer in Halifax, Nova Scotia,
            creating custom websites that bring together thoughtful design,
            development and strategy for businesses across Canada.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/work">
              <PrimaryButton as="span">
                View My Work <FiArrowRight />
              </PrimaryButton>
            </Link>

            <Link href="/services">
              <SecondaryButton as="span">Explore Services</SecondaryButton>
            </Link>
          </div>

          <div className={styles.heroDetail}>
            <span className={styles.detailLine} aria-hidden="true" />
            <p>
              Independent web design and development
              <span> · Halifax, Nova Scotia</span>
            </p>
          </div>
        </div>

        {/* =====================================
        RIGHT: CONNECTED DIGITAL GRAPHIC
    ===================================== */}

        <div className={styles.right} aria-hidden="true">
          <div className={styles.digitalScene}>
            <div className={styles.sceneGlow} />

            {/* Orbital paths */}
            <svg
              className={styles.orbitGraphic}
              viewBox="0 0 600 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                className={styles.orbitOuter}
                cx="300"
                cy="260"
                rx="255"
                ry="112"
                transform="rotate(-24 300 260)"
              />

              <ellipse
                className={styles.orbitInner}
                cx="300"
                cy="260"
                rx="225"
                ry="90"
                transform="rotate(-24 300 260)"
              />

              {/* Pixel attached to orbital path */}
              <rect
                className={styles.orbitAttachedPixel}
                x="493"
                y="83"
                width="19"
                height="19"
              />

              <rect
                className={styles.orbitSmallPixel}
                x="516"
                y="111"
                width="11"
                height="11"
              />
            </svg>

            {/* Circuit paths inspired by the VRB logo */}
            <svg
              className={styles.circuitGraphic}
              viewBox="0 0 600 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.circuitPath}
                d="M65 245H205L255 195H360"
              />

              <path
                className={`${styles.circuitPath} ${styles.circuitDelay}`}
                d="M65 280H340"
              />

              <path
                className={`${styles.circuitPath} ${styles.circuitDelayTwo}`}
                d="M65 315H185L245 375H365"
              />

              {/* Circuit nodes */}
              <circle className={styles.circuitNode} cx="370" cy="195" r="10" />

              <circle className={styles.circuitNode} cx="350" cy="280" r="10" />

              <circle className={styles.circuitNode} cx="375" cy="375" r="10" />

              {/* Small central nodes */}
              <circle
                className={styles.circuitCenter}
                cx="370"
                cy="195"
                r="3"
              />

              <circle
                className={styles.circuitCenter}
                cx="350"
                cy="280"
                r="3"
              />

              <circle
                className={styles.circuitCenter}
                cx="375"
                cy="375"
                r="3"
              />
            </svg>

            {/* Floating pixels */}
            <span className={`${styles.scenePixel} ${styles.pixel1}`} />
            <span className={`${styles.scenePixel} ${styles.pixel2}`} />
            <span className={`${styles.scenePixel} ${styles.pixel3}`} />
            <span className={`${styles.scenePixel} ${styles.pixel4}`} />
            <span className={`${styles.scenePixel} ${styles.pixel5}`} />
            <span className={`${styles.scenePixel} ${styles.pixel6}`} />

            {/* Outline pixels */}
            <span className={`${styles.outlinePixel} ${styles.outline1}`} />
            <span className={`${styles.outlinePixel} ${styles.outline2}`} />
            <span className={`${styles.outlinePixel} ${styles.outline3}`} />
          </div>
        </div>
      </div>

      {/* =====================================
      BOTTOM BRAND BAR
  ===================================== */}

      <div className={styles.heroBar}>
        <span>Design</span>
        <span className={styles.barPixel} aria-hidden="true" />
        <span>Development</span>
        <span className={styles.barPixel} aria-hidden="true" />
        <span>Strategy</span>
        <span className={styles.barPixel} aria-hidden="true" />
        <span>Performance</span>
      </div>
    </section>
  );
};

export default HeroImage;

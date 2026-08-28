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
        <div className={styles.left}>
          <p className={styles.eyebrow}>Design · Develop · Deliver</p>

          <h1 className={styles.title}>
            Designing and building fast, user-focused <span>websites.</span>
          </h1>

          <p className={styles.subtitle}>
            Freelance web designer and web developer based in Halifax, Nova
            Scotia, creating custom websites and scalable web applications for
            businesses across Canada.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/work">
              <PrimaryButton as="span">
                View My Work <FiArrowRight />
              </PrimaryButton>
            </Link>

            <Link href="/services">
              <SecondaryButton as="span">Services</SecondaryButton>
            </Link>
          </div>
        </div>

        <div className={styles.right} aria-hidden="true">
          <div className={styles.pixelScene}>
            <span className={`${styles.pixel} ${styles.pixel1}`} />
            <span className={`${styles.pixel} ${styles.pixel2}`} />
            <span className={`${styles.pixel} ${styles.pixel3}`} />
            <span className={`${styles.pixel} ${styles.pixel4}`} />
            <span className={`${styles.pixel} ${styles.pixel5}`} />
            <span className={`${styles.pixel} ${styles.pixel6}`} />
            <span className={`${styles.pixel} ${styles.pixel7}`} />
            <span className={`${styles.pixel} ${styles.pixel8}`} />
            <span className={`${styles.pixel} ${styles.pixel9}`} />

            <span className={`${styles.pixelOutline} ${styles.outline1}`} />
            <span className={`${styles.pixelOutline} ${styles.outline2}`} />
            <span className={`${styles.pixelOutline} ${styles.outline3}`} />

            <span className={styles.pixelGlow} />
          </div>
        </div>
      </div>

      <div className={styles.heroBar}>
        <span>Design</span>
        <span className={styles.barPixel} />
        <span>Development</span>
        <span className={styles.barPixel} />
        <span>Strategy</span>
        <span className={styles.barPixel} />
        <span>Performance</span>
      </div>
    </section>
  );
};

export default HeroImage;

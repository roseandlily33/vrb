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
            Designing and building fast, user-focused{" "}
            <span>web experiences.</span>
          </h1>

          <p className={styles.subtitle}>
            I design intuitive interfaces and build scalable web applications
            that are clean, reliable, and built with real users in mind.
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
          <div className={styles.codeCard}>
            <div className={styles.windowDots}>
              <span />
              <span />
              <span />
            </div>

            <pre className={styles.codeBlock}>
              <code>
                {`import React from 'react';
import { useState } from 'react';

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Building digital products</h1>
        <p>That users love.</p>

        <button className="btn primary">
          View My Work
        </button>
      </div>
    </section>
  );
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;

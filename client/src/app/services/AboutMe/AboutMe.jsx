import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container} aria-labelledby="about-me-title">
      <div className={styles.inner}>
        {/* LEFT: SECTION HEADING */}
        <div className={styles.titleBlock}>
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <h2 id="about-me-title" className={styles.title}>
            About Me
          </h2>

          <div className={styles.titleDecoration} aria-hidden="true">
            <span className={styles.decorationLine} />
            <span className={styles.decorationNode} />
          </div>
        </div>

        {/* RIGHT: SEO CONTENT */}
        <div className={styles.content}>
          <p className={styles.text}>
            I provide web design and development services for businesses in
            Halifax, Nova Scotia, and across Canada, including custom website
            development, UX/UI design, responsive web design, website redesigns,
            and ongoing website support. Each service can be tailored to the
            needs of the project, from a focused business website to a custom
            web application.
          </p>

          <div className={styles.visual} aria-hidden="true">
            <svg
              className={styles.orbit}
              viewBox="0 0 560 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 128C125 128 150 30 283 30C407 30 430 128 548 128"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 144H160L186 118H356L382 144H548"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5 8"
              />
              <circle cx="283" cy="30" r="7" fill="#FFD21F" />
              <circle cx="186" cy="118" r="5" fill="#269BE6" />
              <circle cx="382" cy="144" r="5" fill="#269BE6" />
              <rect x="34" y="112" width="16" height="16" fill="#0054C9" />
              <rect x="58" y="104" width="8" height="8" fill="#69B9F2" />
              <rect x="504" y="112" width="16" height="16" fill="#0054C9" />
              <rect x="528" y="104" width="8" height="8" fill="#FFD21F" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container} aria-labelledby="about-me-title">
      <div className={styles.inner}>
        <div className={styles.titleBlock}>
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span className={styles.markerPixel} />
          </div>

          <h2 id="about-me-title" className={styles.title}>
            About Me
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.text}>
            I provide web design and development services for businesses in
            Halifax, Nova Scotia, and across Canada, including custom website
            development, UX/UI design, responsive web design, website redesigns,
            and ongoing website support. Each service can be tailored to the
            needs of the project, from a focused business website to a custom
            web application.
          </p>

          <div className={styles.pixels} aria-hidden="true">
            <span className={styles.pixelLarge} />
            <span className={styles.pixelMedium} />
            <span className={styles.pixelSmall} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

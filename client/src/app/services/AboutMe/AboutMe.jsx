import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container} aria-labelledby="about-me-title">
      <h2 id="about-me-title" className={styles.title}>
        About Me
      </h2>

      <p className={styles.text}>
        I provide web design and development services for businesses in Halifax,
        Nova Scotia, and across Canada, including custom website development,
        UX/UI design, responsive web design, website redesigns, and ongoing
        website support. Each service can be tailored to the needs of the
        project, from a focused business website to a custom web application.
      </p>
    </section>
  );
};

export default AboutMe;

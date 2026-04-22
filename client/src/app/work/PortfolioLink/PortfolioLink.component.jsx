"use client";
import styles from "./PortfolioLink.module.css";
import CTAButton from "@/app/Components/CTAButton/CTAButton.component";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

const PortfolioLink = () => {
  return (
    <section className={styles.linkContainer}>
      <div className={styles.words}>
        <h2 className={styles.h2}>Want to see more of my work?</h2>
        <p>Check out my full portfolio for more projects and case studies.</p>
      </div>
      <div className={styles.buttonWrapper}>
        <a
          href="https://victoriabenoit-portfolio.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <CTAButton>View Portfolio</CTAButton>
        </a>
      </div>
    </section>
  );
};

export default PortfolioLink;

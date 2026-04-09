import styles from "../page.module.css";

const CSHero = ({ img, companyName, link, tagline, ctaLabel }) => {
  return (
    <div className={styles.hero}>
      <img
        src={img}
        alt={`${companyName} Hero Image`}
        className={styles.logo}
      />
      <h1 className={styles.heroTitle}>{companyName}</h1>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroLink}
        >
          {ctaLabel || "Visit Site"}
        </a>
      )}
    </div>
  );
};

export default CSHero;

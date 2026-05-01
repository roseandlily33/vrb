import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.centerBlock}>
        <div className={styles.logoWrap}>
          <img src="/ArielPerformance/ArielLogo.webp" alt="Logo" className={styles.logo} />
        </div>
        <p className={styles.tagline}>Redefining Your Equestrian Experience</p>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoItem}>
          <p className={styles.phone}>902-123-4567</p>
          <a href="mailto:info@example.com" className={styles.email}>
            info@example.com
          </a>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.location}>Halifax, Nova Scotia</p>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Ariel Performance Horses. All Rights Reserved.
      </p>
    </footer>
  );
}
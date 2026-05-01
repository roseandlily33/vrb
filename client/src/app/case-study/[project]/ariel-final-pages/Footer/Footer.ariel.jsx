import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.phone}>902-123-4567</p>

          <a href="mailto:info@example.com" className={styles.email}>
            info@example.com
          </a>

          <p className={styles.copy}>
            © {new Date().getFullYear()} Ariel Training. All Rights Reserved.
          </p>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          <div className={styles.logoWrap}>
            <img src="" alt="Logo" className={styles.logo} />
          </div>

          <p className={styles.tagline}>
            Redefining Your Equestrian Experience
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.location}>Halifax, Nova Scotia</p>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
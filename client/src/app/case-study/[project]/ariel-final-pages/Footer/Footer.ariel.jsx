import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <img
          src="/ArielPerformance/ArielLogo.webp"
          alt="Logo"
          className={styles.logo}
        />
        <p className={styles.subtext}>Redefining Your Equestrian Experience</p>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.left}>
          <p>
            <span className={styles.icon} aria-hidden="true">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884l2-3.5A2 2 0 0 1 5.617 1h8.766a2 2 0 0 1 1.614.884l2 3.5A2 2 0 0 1 18 7v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 .003-.116zM4.618 3a1 1 0 0 0-.809.442l-2 3.5A1 1 0 0 0 2 7v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-.191-.558l-2-3.5A1 1 0 0 0 13.382 3H4.618z" /></svg>
            </span>
            902-123-4567
          </p>
          <a href="mailto:hello@example.com">
            <span className={styles.icon} aria-hidden="true">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 4.94A8 8 0 1 1 4.94 17.06a8 8 0 0 1-2-12.12zm1.414 1.414a6 6 0 1 0 8.485 8.485 6 6 0 0 0-8.485-8.485zm2.829 2.829a1 1 0 0 1 1.415 0l1.415 1.415 1.415-1.415a1 1 0 1 1 1.415 1.415l-1.415 1.415 1.415 1.415a1 1 0 1 1-1.415 1.415l-1.415-1.415-1.415 1.415a1 1 0 1 1-1.415-1.415l1.415-1.415-1.415-1.415a1 1 0 0 1 0-1.415z" /></svg>
            </span>
            hello@example.com
          </a>
          <p>© 2026 Ariel Boesener Performance Horses. All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <p>
            <span className={styles.icon} aria-hidden="true">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M12.454 11.293l-1.414 1.414a1 1 0 0 1-1.415 0l-4.95-4.95a1 1 0 0 1 0-1.415l1.414-1.414a1 1 0 0 1 1.415 0l4.95 4.95a1 1 0 0 1 0 1.415z" /><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </span>
            Nova Scotia, Canada
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.449.425 20.276.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

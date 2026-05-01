import Link from "next/link";
import styles from "./Nav.module.css";

const navLinksLeft = [
  { label: "Gallery", href: "/gallery" },
  { label: "Training", href: "/training" },
];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navInner} aria-label="Main navigation">
        <div className={styles.navGroup}>
          {navLinksLeft.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/" className={styles.logoWrap} aria-label="Home">
          <img src="" alt="Logo" className={styles.logo} />
        </Link>

        <div className={styles.navGroup}>
          <Link href="/shop" className={styles.navLink}>
            Shop
          </Link>

          <Link href="/contact" className={styles.contactButton}>
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
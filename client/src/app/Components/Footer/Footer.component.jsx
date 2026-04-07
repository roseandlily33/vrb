import React from "react";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.logoSection}>
        <a href="#home" aria-label="Home">
          <img src="/VRBLogo.jpg" alt="VRB Logo" className={styles.logo} />
        </a>
      </div>
      <nav className={styles.linksSection} aria-label="Footer Navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.footerLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
    <div className={styles.copyright}>
      &copy; {new Date().getFullYear()} VRB Web Design and Development. All
      rights reserved.
    </div>
  </footer>
);

export default Footer;

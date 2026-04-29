import React from "react";
import styles from "./Footer.module.css";
import TertiaryButton from "../TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

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
    <div className={styles.footerInner}>
      {/* LEFT: Logo + Brand */}
      <div className={styles.brand}>
        <a href="#home" aria-label="Home" className={styles.logoWrap}>
          <img src="/VRBLogo.png" alt="VRB Logo" className={styles.logo} />
        </a>

        <p className={styles.tagline}>
          Designing and building clean, scalable web experiences.
        </p>

        <p className={styles.availability}>Currently booking new projects</p>
      </div>

      {/* RIGHT: Links */}
      <div className={styles.footerRight}>
        {/* Navigation */}
        <nav className={styles.linksSection} aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social / Contact */}
        <div className={styles.socials}>
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/roseandlily33"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/victoria-benoit-3rose3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Portfolio */}
        <div className={styles.externalLinks}>
          <Link
            href="https://victoriabenoit-portfolio.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <TertiaryButton as="a">
              My Portfolio{" "}
              <FiArrowUpRight
                style={{ marginLeft: 8, verticalAlign: "middle" }}
                aria-hidden="true"
              />
            </TertiaryButton>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className={styles.bottomBar}>
      <span>© {new Date().getFullYear()} VRB Web Design and Development. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
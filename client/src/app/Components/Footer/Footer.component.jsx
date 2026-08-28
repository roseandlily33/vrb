"use client";
import React from "react";
import styles from "./Footer.module.css";
import TertiaryButton from "../TertiaryButton/TertiaryButton.component";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Home" className={styles.logoWrap}>
              <Image
                src="/VRBLogo.png"
                alt="VRB Logo"
                className={styles.logo}
                width={200}
                height={200}
              />
            </Link>

            <p className={styles.tagline}>
              Designing and building clean, scalable user-focused websites.
            </p>

            <div className={styles.availability}>
              <span className={styles.availabilityPixel} />
              <span>Currently booking new projects</span>
            </div>
          </div>

          <div className={styles.footerNavigation}>
            <div className={styles.navigationGroup}>
              <p className={styles.footerHeading}>Navigate</p>

              <nav
                className={styles.linksSection}
                aria-label="Footer Navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.navigationGroup}>
              <p className={styles.footerHeading}>Connect</p>

              <div className={styles.socials}>
                <a
                  href="mailto:victoria@vrbwebdesignanddev.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://github.com/VRB-Web-Design-and-Development"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/company/116058547/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61589721155068"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/vrb_webdesignanddev/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className={styles.externalLinks}>
                <Link
                  href="https://victoriabenoit-portfolio.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TertiaryButton as="span">
                    My Portfolio
                    <FiArrowUpRight
                      style={{
                        marginLeft: 8,
                        verticalAlign: "middle",
                      }}
                      aria-hidden="true"
                    />
                  </TertiaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            © {new Date().getFullYear()} VRB Web Design and Development. All
            rights reserved.
          </span>

          <span className={styles.bottomMark}>
            Design <span /> Develop <span /> Deliver
          </span>
        </div>
      </div>

      <div className={styles.pixelFloor} aria-hidden="true">
        <span className={`${styles.pixel} ${styles.pixel1}`} />
        <span className={`${styles.pixel} ${styles.pixel2}`} />
        <span className={`${styles.pixel} ${styles.pixel3}`} />
        <span className={`${styles.pixel} ${styles.pixel4}`} />
        <span className={`${styles.pixel} ${styles.pixel5}`} />
        <span className={`${styles.pixel} ${styles.pixel6}`} />
        <span className={`${styles.pixel} ${styles.pixel7}`} />
        <span className={`${styles.pixel} ${styles.pixel8}`} />
        <span className={`${styles.pixel} ${styles.pixel9}`} />
        <span className={`${styles.pixel} ${styles.pixel10}`} />
        <span className={`${styles.pixel} ${styles.pixel11}`} />
        <span className={`${styles.pixel} ${styles.pixel12}`} />
        <span className={`${styles.pixel} ${styles.pixel13}`} />
        <span className={`${styles.pixel} ${styles.pixel14}`} />
        <span className={`${styles.pixel} ${styles.pixel15}`} />
        <span className={`${styles.pixel} ${styles.pixel16}`} />
      </div>
    </footer>
  );
};


export default Footer;

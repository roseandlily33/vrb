"use client";
import React from "react";
import styles from "./Footer.module.css";
// import TertiaryButton from "../TertiaryButton/TertiaryButton.component";
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
          {/* BRAND */}
          <div className={styles.brand}>
            <Link
              href="/"
              aria-label="VRB Web Design and Development home"
              className={styles.logoWrap}
            >
              <Image
                src="/VRBLogo.png"
                alt="VRB Web Design and Development"
                className={styles.logo}
                width={200}
                height={200}
              />
            </Link>

            <p className={styles.tagline}>
              Thoughtful design, practical development, and websites built
              around your business.
            </p>

            <Link href="/contact" className={styles.brandContact}>
              <span className={styles.contactPixel} aria-hidden="true" />
              Have a project in mind? Let's talk.
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <div className={styles.brandCircuit} aria-hidden="true">
              <span className={styles.circuitLine} />
              <span className={styles.circuitNode} />
              <span className={styles.circuitPixel} />
            </div>
          </div>

          {/* NAVIGATION */}
          <div className={styles.footerNavigation}>
            <div className={styles.navigationGroup}>
              <h2 className={styles.footerHeading}>Explore</h2>

              <nav
                className={styles.linksSection}
                aria-label="Footer navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONNECT */}
            <div className={styles.navigationGroup}>
              <h2 className={styles.footerHeading}>Connect</h2>

              <a
                href="mailto:victoria@vrbwebdesignanddev.com"
                className={styles.emailLink}
              >
                victoria@vrbwebdesignanddev.com
              </a>

              <div className={styles.socials}>
                <a
                  href="mailto:victoria@vrbwebdesignanddev.com"
                  aria-label="Email VRB"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://github.com/VRB-Web-Design-and-Development"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VRB on GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/company/116058547/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VRB on LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61589721155068"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VRB on Facebook"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/vrb_webdesignanddev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VRB on Instagram"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className={styles.externalLinks}>
                <Link
                  href="https://victoriabenoit-portfolio.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portfolioLink}
                >
                  My Personal Portfolio
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} VRB Web Design and Development. All
            rights reserved.
          </p>

          <div className={styles.bottomMark}>
            <span>Design</span>
            <span className={styles.markPixel} aria-hidden="true" />
            <span>Develop</span>
            <span className={styles.markPixel} aria-hidden="true" />
            <span>Deliver</span>
          </div>
        </div>
      </div>

      {/* PIXEL FLOOR */}
      <div className={styles.pixelFloor} aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <span
            key={index}
            className={`${styles.pixel} ${styles[`pixel${index + 1}`]}`}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

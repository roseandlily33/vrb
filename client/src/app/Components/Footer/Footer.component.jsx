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
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  // const sceneRef = useRef(null);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const scene = sceneRef.current;
  //   if (!scene) return;

  //   // Use IntersectionObserver to trigger a one-way reveal when the scene is scrolled into view
  //   let timeoutId;
  //   const observer = new IntersectionObserver(
  //     (entries, obs) => {
  //       entries.forEach((entry) => {
  //         // require at least 50% of the scene to be visible before revealing
  //         if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
  //           // small delay to smooth the fade
  //           timeoutId = setTimeout(() => {
  //             setVisible(true);
  //             // stop observing once revealed (one-way)
  //             obs.unobserve(entry.target);
  //           }, 120);
  //         }
  //       });
  //     },
  //     {
  //       threshold: [0, 0.25, 0.5, 0.75],
  //       root: null,
  //       rootMargin: "0px 0px -5% 0px",
  //     }
  //   );

  //   observer.observe(scene);
  //   return () => {
  //     if (timeoutId) clearTimeout(timeoutId);
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <div className={styles.footerReveal}>
        {/* <div
          className={`${styles.revealScene} ${visible ? styles.revealActive : ""}`}
          ref={sceneRef}
        >
          <div className={styles.revealImageWrap}>
            <img
              src="/footer-image.jpg"
              alt=""
              className={styles.revealImage}
            />

            <div className={styles.revealOverlay} />

            <div
              className={`${styles.revealContent} ${visible ? styles.revealVisible : ""}`}
            >
              <span className={styles.revealEyebrow}>Still scrolling?</span>

              <h2>
                Let&apos;s make something
                <span> worth finding.</span>
              </h2>

              <Link href="/contact" className={styles.revealButton}>
                Start a project
              </Link>
            </div>
          </div> */}

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              {/* LEFT: Logo + Brand */}
              <div className={styles.brand}>
                <a href="#home" aria-label="Home" className={styles.logoWrap}>
                  <Image
                    src="/VRBLogo.png"
                    alt="VRB Logo"
                    className={styles.logo}
                    width={200}
                    height={200}
                  />
                </a>

                <p className={styles.tagline}>
                  Designing and building clean, scalable user-focused websites.
                </p>

                <p className={styles.availability}>
                  Currently booking new projects
                </p>
              </div>

              {/* RIGHT: Links */}
              <div className={styles.footerRight}>
                {/* Navigation */}
                <nav
                  className={styles.linksSection}
                  aria-label="Footer Navigation"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.footerLink}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Social / Contact */}
                <div className={styles.socials}>
                  <a
                    href="mailto:victoria@vrbwebdesignanddev.com"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    // href="https://github.com/roseandlily33"
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
              <span>
                © {new Date().getFullYear()} VRB Web Design and Development. All
                rights reserved.
              </span>
            </div>
          </footer>
        </div>
      {/* </div> */}
    </>
  );
};

export default Footer;

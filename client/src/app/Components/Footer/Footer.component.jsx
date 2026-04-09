import React from "react";
import styles from "./Footer.module.css";
import TertiaryButton from "../TertiaryButton/TertiaryButton.component";
import Link from "next/link";
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
        <div className={styles.footerContent}>
            <div className={styles.logoSection}>
                <a href="#home" aria-label="Home">
                    <img src="/VRBLogo.png" alt="VRB Logo" className={styles.logo} />
                </a>
            </div>
            <div className={styles.navGroups}>
                <nav className={styles.linksSection} aria-label="Footer Navigation">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className={styles.footerLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className={styles.externalLinks}>
                    <Link href="https://victoriabenoit-portfolio.onrender.com" target="_blank" rel="noopener noreferrer" passHref>
                        <TertiaryButton as="a">
                            My Portfolio <FiArrowUpRight style={{ marginLeft: 8, verticalAlign: "middle" }} aria-hidden="true" />
                        </TertiaryButton>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} VRB Web Design and Development. All
            rights reserved.
        </div>
    </footer>
);

export default Footer;

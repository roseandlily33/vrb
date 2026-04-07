"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton.component";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="#home" aria-label="Home">
          <img src="/VRBLogo.png" alt="VRB Logo" className={styles.logo} />
        </a>
      </div>
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        {navLinks.map((link) =>
          link.label === "Contact" ? (
            <PrimaryButton
              key={link.label}
              onClick={() => setOpen(false)}
              href={link.href}
            >
              {link.label}
            </PrimaryButton>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </nav>
  );
};

export default Navbar;

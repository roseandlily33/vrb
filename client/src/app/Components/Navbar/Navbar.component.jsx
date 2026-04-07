"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton.component";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
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
            <Link href={link.href} key={link.label} passHref>
              <PrimaryButton onClick={() => setOpen(false)}>
                {link.label}
              </PrimaryButton>
            </Link>
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

"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const caseStudyLinks = [
    { label: "Ariel Performance Horses", href: "/case-study/ariel-performance-horses" },
    { label: "InspectionPal", href: "/case-study/inspection-pal" },
    { label: "Yoda Safety Services", href: "/case-study/yoda-safety-services" },
    { label: "VRB", href: "/case-study/vrb-web" },
    { label: "Assuage", href: "/case-study/assuage" },
    { label: "NewLine", href: "/case-study/newline" },
    { label: "Anchor Marine", href: "/case-study/anchor-marine" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" aria-label="Home">
          <Image src="/VRBLogo.png" alt="VRB Logo" className={styles.logo} width={200} height={200} />
        </Link>
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
            <Link
              href={link.href}
              key={link.label}
              className={
                styles.contactBtn +
                (pathname === link.href ? " " + styles.contactActive : "")
              }
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ) : (
            <Link
              href={link.href}
              key={link.label}
              className={
                styles.navLink +
                (pathname === link.href ? " " + styles.active : "")
              }
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ),
        )}

        {/* Case study links only visible inside mobile/burger menu */}
        <div className={styles.extraGroup}>
          <div className={styles.extraHeader}>Case Studies</div>
          {caseStudyLinks.map((l) => (
            <Link
              href={l.href}
              key={l.href}
              className={styles.extraLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

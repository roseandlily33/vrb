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
    {
      label: "Ariel Performance Horses",
      href: "/case-study/ariel-performance-horses",
    },
    {
      label: "InspectionPal",
      href: "/case-study/inspection-pal",
    },
    {
      label: "Yoda Safety Services",
      href: "/case-study/yoda-safety-services",
    },
    {
      label: "VRB",
      href: "/case-study/vrb-web",
    },
    {
      label: "Assuage",
      href: "/case-study/assuage",
    },
    {
      label: "NewLine",
      href: "/case-study/newline",
    },
    {
      label: "Anchor Marine",
      href: "/case-study/anchor-marine",
    },
  ];

  const packageTypes = [
    { key: "retainer", label: "Website Maintenance" },
    { key: "web", label: "Custom Websites" },
    { key: "seo", label: "SEO" },
    { key: "design", label: "Web Design" },
    { key: "marketing", label: "Social Media Marketing" },
    { key: "extras", label: "Extras & Add Ons" },
  ];

  const closeMenu = () => setOpen(false);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/package");

  const isWorkActive =
    pathname === "/work" || pathname.startsWith("/case-study");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Home" onClick={closeMenu}>
            <Image
              src="/VRBLogo.png"
              alt="VRB Logo"
              className={styles.logo}
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key="services" className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    isServicesActive ? styles.active : ""
                  }`}
                  aria-current={
                    pathname === link.href ? "page" : undefined
                  }
                >
                  Services
                </Link>

                <div
                  className={styles.servicesDropdown}
                  aria-label="Service packages"
                >
                  <div className={styles.dropdownHeader}>
                    <span>Services</span>
                    <span className={styles.dropdownPixel} />
                  </div>

                  {packageTypes.map((p) => (
                    <Link
                      href={`/package?type=${p.key}`}
                      key={p.key}
                      className={styles.serviceLink}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : link.label === "Contact" ? (
              <Link
                href={link.href}
                key={link.label}
                className={`${styles.contactBtn} ${
                  pathname === link.href ? styles.contactActive : ""
                }`}
                aria-current={
                  pathname === link.href ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={link.href}
                key={link.label}
                className={`${styles.navLink} ${
                  link.label === "Work" && isWorkActive
                    ? styles.active
                    : pathname === link.href
                    ? styles.active
                    : ""
                }`}
                aria-current={
                  pathname === link.href ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${
            open ? styles.hamburgerOpen : ""
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div
          id="mobile-navigation"
          className={`${styles.mobileMenu} ${
            open ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuInner}>
            <div className={styles.mobilePrimary}>
              <p className={styles.mobileSectionLabel}>Navigate</p>

              {navLinks
                .filter(
                  (link) =>
                    link.label !== "Services" &&
                    link.label !== "Contact",
                )
                .map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`${styles.mobileMainLink} ${
                      link.label === "Work" && isWorkActive
                        ? styles.mobileActive
                        : pathname === link.href
                        ? styles.mobileActive
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>

            <div className={styles.mobileGroup}>
              <div className={styles.mobileGroupHeader}>
                <p className={styles.mobileSectionLabel}>Services</p>

                <Link
                  href="/services"
                  className={styles.mobileViewAll}
                  onClick={closeMenu}
                >
                  View all
                </Link>
              </div>

              <div className={styles.mobileServiceGrid}>
                {packageTypes.map((p) => (
                  <Link
                    href={`/package?type=${p.key}`}
                    key={p.key}
                    className={styles.mobileServiceLink}
                    onClick={closeMenu}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.mobileGroup}>
              <div className={styles.mobileGroupHeader}>
                <p className={styles.mobileSectionLabel}>Case Studies</p>

                <Link
                  href="/work"
                  className={styles.mobileViewAll}
                  onClick={closeMenu}
                >
                  View work
                </Link>
              </div>

              <div className={styles.mobileCaseStudies}>
                {caseStudyLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={styles.mobileCaseLink}
                    onClick={closeMenu}
                  >
                    <span className={styles.caseNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className={styles.mobileContact}
              onClick={closeMenu}
            >
              Contact
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

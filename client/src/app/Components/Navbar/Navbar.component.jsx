"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { buildPackageTypeHref } from "../../package/packageRouting";

// ==========================================
// NAVIGATION LINKS
// ==========================================

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ==========================================
// CASE STUDIES
// ==========================================

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

// ==========================================
// SERVICE CATEGORIES
// ==========================================

const packageTypes = [
  { key: "retainer", label: "Website Maintenance" },
  { key: "web", label: "Custom Websites" },
  { key: "seo", label: "SEO" },
  { key: "design", label: "Web Design" },
  { key: "marketing", label: "Social Media Marketing" },
  { key: "extras", label: "Extras & Add Ons" },
];

// ==========================================
// ACTIVE LINK ORBIT
// ==========================================

function NavOrbit() {
  return (
    <span className={styles.navOrbit} aria-hidden="true">
      <svg viewBox="0 0 110 44" focusable="false">
        <ellipse
          cx="55"
          cy="22"
          rx="51"
          ry="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(-9 55 22)"
        />
      </svg>

      <span className={styles.orbitPixel} />
    </span>
  );
}

// ==========================================
// NAVBAR
// ==========================================

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const mobileMenuId = useId();

  // ----------------------------------------
  // ROUTE MATCHING
  // ----------------------------------------

  const matchesRoute = (href) => {
    if (!href || !pathname) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive =
    matchesRoute("/services") || matchesRoute("/package");

  const isWorkActive = matchesRoute("/work") || matchesRoute("/case-study");

  const isLinkActive = (link) => {
    if (link.label === "Services") {
      return isServicesActive;
    }

    if (link.label === "Work") {
      return isWorkActive;
    }

    return matchesRoute(link.href);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // ----------------------------------------
  // CLOSE MENU WHEN ROUTE CHANGES
  // ----------------------------------------

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ----------------------------------------
  // MOBILE MENU BEHAVIOUR
  // ----------------------------------------

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();

        document.getElementById("mobile-menu-toggle")?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  // ----------------------------------------
  // DESKTOP NAVIGATION
  // ----------------------------------------

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.navInner}>
        {/* ==================================
            LOGO
        ================================== */}

        <div className={styles.logoContainer}>
          <Link
            href="/"
            aria-label="VRB Web Design and Development home"
            onClick={closeMenu}
          >
            <Image
              src="/VRBLogo.png"
              alt="VRB Web Design and Development"
              className={styles.logo}
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>

        {/* ==================================
            DESKTOP LINKS
        ================================== */}

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            // --------------------------------
            // SERVICES + DROPDOWN
            // --------------------------------

            if (link.label === "Services") {
              return (
                <div key={link.href} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      active ? styles.active : ""
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    <span className={styles.navText}>{link.label}</span>

                    <NavOrbit />
                  </Link>

                  <div className={styles.servicesDropdown}>
                    <div className={styles.dropdownHeader}>
                      <span>Explore Services</span>
                      <span className={styles.dropdownPixel} />
                    </div>

                    <Link
                      href="/services"
                      className={styles.dropdownAll}
                      aria-current={
                        pathname === "/services" ? "page" : undefined
                      }
                    >
                      All Services
                      <span aria-hidden="true">↗</span>
                    </Link>

                    {packageTypes.map((p) => {
                      const href = buildPackageTypeHref(p.key);

                      return (
                        <Link
                          href={href}
                          key={p.key}
                          className={styles.serviceLink}
                          aria-current={matchesRoute(href) ? "page" : undefined}
                        >
                          <span
                            className={styles.serviceNode}
                            aria-hidden="true"
                          />

                          {p.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // --------------------------------
            // CONTACT CTA
            // --------------------------------

            if (link.label === "Contact") {
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`${styles.contactBtn} ${
                    active ? styles.contactActive : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{link.label}</span>

                  <span className={styles.contactArrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              );
            }

            // --------------------------------
            // STANDARD LINKS
            // --------------------------------

            return (
              <Link
                href={link.href}
                key={link.href}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                <span className={styles.navText}>{link.label}</span>

                <NavOrbit />
              </Link>
            );
          })}
        </div>

        {/* ==================================
            HAMBURGER BUTTON
        ================================== */}

        <button
          id="mobile-menu-toggle"
          type="button"
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={mobileMenuId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* ==================================
            MOBILE MENU
        ================================== */}

        <div
          id={mobileMenuId}
          className={`${styles.mobileMenu} ${
            open ? styles.mobileMenuOpen : ""
          }`}
          aria-hidden={!open}
          inert={!open}
        >
          <div className={styles.mobileMenuInner}>
            {/* ------------------------------
                PRIMARY LINKS
            ------------------------------ */}

            <div className={styles.mobilePrimary}>
              <p className={styles.mobileSectionLabel}>Navigate</p>

              {navLinks
                .filter(
                  (link) =>
                    link.label !== "Services" && link.label !== "Contact",
                )
                .map((link) => {
                  const active = isLinkActive(link);

                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={`${styles.mobileMainLink} ${
                        active ? styles.mobileActive : ""
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <span>{link.label}</span>

                      <span
                        className={styles.mobileLinkPixel}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
            </div>

            {/* ------------------------------
                SERVICES
            ------------------------------ */}

            <div className={styles.mobileGroup}>
              <div className={styles.mobileGroupHeader}>
                <p className={styles.mobileSectionLabel}>Services</p>

                <Link
                  href="/services"
                  className={styles.mobileViewAll}
                  onClick={closeMenu}
                >
                  View all ↗
                </Link>
              </div>

              <div className={styles.mobileServiceGrid}>
                {packageTypes.map((p) => {
                  const href = buildPackageTypeHref(p.key);

                  const active = matchesRoute(href);

                  return (
                    <Link
                      href={href}
                      key={p.key}
                      className={`${styles.mobileServiceLink} ${
                        active ? styles.mobileSubActive : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {p.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------
                CASE STUDIES
            ------------------------------ */}

            <div className={styles.mobileGroup}>
              <div className={styles.mobileGroupHeader}>
                <p className={styles.mobileSectionLabel}>Case Studies</p>

                <Link
                  href="/work"
                  className={styles.mobileViewAll}
                  onClick={closeMenu}
                >
                  View work ↗
                </Link>
              </div>

              <div className={styles.mobileCaseStudies}>
                {caseStudyLinks.map((link, index) => {
                  const active = matchesRoute(link.href);

                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={`${styles.mobileCaseLink} ${
                        active ? styles.mobileSubActive : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <span className={styles.caseNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{link.label}</span>

                      <span aria-hidden="true">↗</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------
                MOBILE CONTACT CTA
            ------------------------------ */}

            <Link
              href="/contact"
              className={styles.mobileContact}
              aria-current={matchesRoute("/contact") ? "page" : undefined}
              onClick={closeMenu}
            >
              <span>Let's Talk About Your Project</span>

              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

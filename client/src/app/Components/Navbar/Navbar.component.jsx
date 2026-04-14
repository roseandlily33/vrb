"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton.component";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="/" aria-label="Home">
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
                {navLinks.map((link) => (
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
                    )
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

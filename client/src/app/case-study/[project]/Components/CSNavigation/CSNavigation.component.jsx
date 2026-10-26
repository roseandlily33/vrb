"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CSNavigation.module.css";

const CSNavigation = ({ project, items = [] }) => {
  const pathname = usePathname();
  const navigationRef = useRef(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const element = navigationRef.current;

    if (!element || items.length < 2) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const hasPassedNavigation =
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;

        setShowFloating(hasPassedNavigation);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [items.length, pathname]);

  if (items.length < 2) return null;

  const normalizedPath = (value) => {
    if (!value) return "/";
    return value.replace(/\/+$/, "") || "/";
  };

  const activePath = normalizedPath(pathname);

  const renderItems = (floating = false) =>
    items.map((item) => {
      const isActive = normalizedPath(item.href) === activePath;

      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive ? "page" : undefined}
          className={`${styles.navItem} ${
            isActive ? styles.active : ""
          } ${floating ? styles.floatingItem : ""}`}
        >
          <span className={styles.itemLabel}>{item.label}</span>

          <span className={styles.activeIndicator} aria-hidden="true" />
        </Link>
      );
    });

  return (
    <>
      <nav
        ref={navigationRef}
        className={styles.topNavigation}
        aria-label={`${project} case studies`}
      >
        <div className={styles.topInner}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>EXPLORE THE PROJECT</span>

            <p>{project}</p>
          </div>

          <div className={styles.topLinks}>{renderItems()}</div>
        </div>
      </nav>

      <nav
        className={`${styles.floatingNavigation} ${
          showFloating ? styles.floatingVisible : ""
        }`}
        aria-label={`${project} case studies quick navigation`}
        aria-hidden={!showFloating}
        inert={!showFloating}
      >
        <div className={styles.floatingInner}>{renderItems(true)}</div>
      </nav>
    </>
  );
};

export default CSNavigation;

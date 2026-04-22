"use client";
import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import Link from "next/link";
import PortfolioLink from "./PortfolioLink/PortfolioLink.component";
import { projects } from "../Components/projectList";
import TertiaryButton from "../Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";
import MetadataBar from "./MetadataBar/MetadataBar.component";
import React, { useRef, useEffect, useState } from "react";


export default function Work() {
  const [inViewArr, setInViewArr] = useState(projects.map(() => false));
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth > 600) return; // Only run on mobile
    const observers = [];
    cardRefs.current = cardRefs.current.slice(0, projects.length);
    projects.forEach((_, i) => {
      if (!cardRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViewArr((prev) => {
              if (prev[i]) return prev;
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(cardRefs.current[i]);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Hero
        topMeta="Selected Work"
        title="Designing & Building High-Performing Web Experiences"
        subText="Focused on performance, UX, and real business impact"
      />
      <MetadataBar />
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            className={`${styles.projectCard} ${inViewArr[index] ? styles.inView : ""}`}
            key={index}
            ref={el => (cardRefs.current[index] = el)}
          >
            <div
              className={styles.projectCardBg}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.2) 100%), url(${project.image})`,
              }}
            >
              <div className={styles.projectCardContent}>
                {/* <span className={styles.projectBadge}>{project.tech?.[0]}</span> */}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className={styles.projectCardFooter}>
              <Link href={project.link}>
                <TertiaryButton>
                  View Case Study{" "}
                  <FiArrowRight
                    style={{ marginLeft: 6, verticalAlign: "middle" }}
                    aria-hidden="true"
                  />
                </TertiaryButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <PortfolioLink />
    </main>
  );
}

"use client";
import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import Link from "next/link";
import PortfolioLink from "./PortfolioLink/PortfolioLink.component";
import { projects } from "../Components/projectList";
import TertiaryButton from "../Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";
import MetadataBar from "./MetadataBar/MetadataBar.component";
import React from "react";
import PillButton from "../Components/PillButton/PillButton.component";

export default function Work() {
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
          <article key={index} className={styles.projectCard}>
            <div
              className={styles.projectCardBg}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {project.badge && (
                <div className={styles.projectBadge}>
                  <PillButton>{project.badge}</PillButton>
                </div>
              )}
              <div className={styles.projectCardContent}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>

            <div className={styles.projectCardFooter}>
              <Link href={project.link}>
                <TertiaryButton>
                  View Case Study{" "}
                  <FiArrowRight
                    className={styles.arrowIcon}
                    aria-hidden="true"
                  />
                </TertiaryButton>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <PortfolioLink />
    </main>
  );
}

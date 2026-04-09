"use client";
import styles from "./Projects.module.css";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    name: "Yoda Safety Services",
    description:
      "End-to-end training platform with payments, course management, form workflows, automated certifications, and a company dashboard for tracking progress and performance.",
    tech: ["React", "Mongo DB","CSS Modules"],
    image: "/YodaSafetyServices/Pages/Home.png",
    link: "/case-study/yoda-safety-services",
  },
  {
    name: "Inspection Pal",
    description: "Front End development project started from scratch, built with Gatsby and styled with CSS Modules.",
    tech: ["Gatsby", "Design"],
    image: "/InspectionPal/Home.png",
    link: "/case-study/inspection-pal",
  },
  {
    name: "Ariel Boesener Performance Horses",
    description:
      "A redesign project, redid organization, navigation and made other improvements.",
    tech: ["Design"],
    image: "/ArielPerformance/Phase2/Home.png",
    link: "/case-study/ariel-performance-horses",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const project = projects[current];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div
        className={styles.carousel}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          aria-label="Previous project"
          onClick={goPrev}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 1rem",
            color: "var(--blue-800)",
            fontSize: "2.2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FiArrowLeft />
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.projectCard} key={project.name}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectDetails}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((tech) => (
                  <span className={styles.techItem} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className={styles.learnMoreLink}>
                <TertiaryButton as="span">
                  Learn More{" "}
                  <FiArrowRight
                    style={{ marginLeft: 6, verticalAlign: "middle" }}
                    aria-hidden="true"
                  />
                </TertiaryButton>
              </a>
            </div>
          </div>
        </div>
        <button
          aria-label="Next project"
          onClick={goNext}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 1rem",
            color: "var(--blue-800)",
            fontSize: "2.2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}

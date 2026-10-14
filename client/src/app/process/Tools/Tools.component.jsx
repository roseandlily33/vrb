import PillButton from "@/app/Components/PillButton/PillButton.component";
import styles from "./Tools.module.css";
import {
  FaNodeJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiNetlify } from "react-icons/si";

const tools = [
  { name: "Express", icon: <SiExpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Netlify", icon: <SiNetlify /> },
];

export default function Tools() {
  return (
    <section className={styles.toolsSection} aria-labelledby="tools-heading">
      <div className={styles.toolsInner}>
        {/* SECTION HEADER */}
        <div className={styles.toolsHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Technical Toolkit</p>

            <h2 id="tools-heading" className={styles.heading}>
              My Tools & Stack
            </h2>

            <p className={styles.p}>
              The core technologies I use to design, build, deploy, and maintain
              modern web experiences.
            </p>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
          </div>
        </div>

        {/* TECHNOLOGY CONSTELLATION */}
        <div className={styles.constellation}>
          {/* Background orbit paths */}
          <svg
            className={styles.orbitLines}
            viewBox="0 0 1200 560"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <ellipse
              cx="600"
              cy="280"
              rx="565"
              ry="170"
              transform="rotate(-9 600 280)"
              className={styles.orbitPrimary}
            />

            <ellipse
              cx="600"
              cy="280"
              rx="450"
              ry="245"
              transform="rotate(13 600 280)"
              className={styles.orbitSecondary}
            />

            <path
              d="M 20 400 C 280 80, 610 480, 1180 120"
              className={styles.orbitDashed}
            />
          </svg>

          {/* Decorative nodes */}
          <span
            className={`${styles.orbitDot} ${styles.orbitDotOne}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.orbitDot} ${styles.orbitDotTwo}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.orbitPixel} ${styles.orbitPixelOne}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.orbitPixel} ${styles.orbitPixelTwo}`}
            aria-hidden="true"
          />

          {/* Actual tools */}
          <ul className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <li className={styles.toolItem} key={tool.name}>
                <div className={styles.toolNode}>
                  <span className={styles.icon} aria-hidden="true">
                    {tool.icon}
                  </span>

                  <span className={styles.nodeOrbit} aria-hidden="true" />
                </div>

                <span className={styles.toolName}>{tool.name}</span>

                <span className={styles.toolNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

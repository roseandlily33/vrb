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
    <section className={styles.toolsSection}>
      <div className={styles.toolsInner}>
        <div className={styles.toolsHeader}>
          <div>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Technical Toolkit</p>

            <h2 className={styles.heading}>My Tools & Stack</h2>

            <p className={styles.p}>
              The core technologies I use to design, build, deploy, and
              maintain modern web experiences.
            </p>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
          </div>
        </div>

        <ul className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <li className={styles.toolItem} key={tool.name}>
              <div className={styles.toolTop}>
                <span className={styles.toolNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.icon} aria-hidden="true">
                  {tool.icon}
                </span>
              </div>

              <span className={styles.toolName}>{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
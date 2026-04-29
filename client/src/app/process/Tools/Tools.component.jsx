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
  // Recommendations
  // { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "Figma", icon: <FaFigma /> },
  // { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },
];

export default function Tools() {
  return (
    <section className={styles.toolsSection}>
      <p className="eyebrowHeader">Technical Toolkit</p>
      <h2 className={styles.heading}>My Tools & Stack</h2>
      <p className={styles.p}>The core technologies I use to design, build, deploy, and maintain modern web experiences.</p>
      <div className={styles.toolsGrid}>
        {tools.map((tool) => (
        //   <span className={styles.toolPill} key={tool.name}>
            <PillButton key={tool.name}>
              <span className={styles.icon}>{tool.icon}</span>
              <span className={styles.toolName}>{tool.name}</span>
            </PillButton>
        //   </span>
        ))}
      </div>
    </section>
  );
}

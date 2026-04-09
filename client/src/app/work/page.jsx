import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
// Card import removed; using custom card layout below
import Link from "next/link";
import PortfolioLink from "./PortfolioLink/PortfolioLink.component";
import { projects } from "../Components/projectList";
import TertiaryButton from "../Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";
import MetadataBar from "./MetadataBar/MetadataBar.component";

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
          <div className={styles.projectCard} key={index}>
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

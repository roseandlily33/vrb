import Link from "next/link";
import styles from "./page.module.css";
import PillButton from "../Components/PillButton/PillButton.component";
import PortfolioLink from "./PortfolioLink/PortfolioLink.component";
import { projects } from "../Components/projectList";
import TertiaryButton from "../Components/TertiaryButton/TertiaryButton.component";
import { FiArrowRight } from "react-icons/fi";

const WorkPage = () => {
  return (
    <>
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

              <div className={styles.projectNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>

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

              <span className={styles.footerPixel} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>

      <PortfolioLink />
    </>
  );
};

export default WorkPage;

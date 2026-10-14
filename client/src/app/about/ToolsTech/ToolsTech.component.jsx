import React from "react";
import styles from "./ToolsTech.module.css";
import { skills } from "./ToolsList";

const ToolsTechnologies = () => {
  return (
    <section className={styles.tools} aria-labelledby="tools-heading">
      <div className={styles.toolsInner}>
        <div className={styles.toolsHeader}>
          <div className={styles.headerContent}>
            <div className={styles.sectionMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Technical Toolkit</p>

            <h2 id="tools-heading">Tools & Technologies</h2>

            <p className={styles.toolsIntro}>
              Focused on building high-performance, scalable web applications
              using modern technologies
            </p>
          </div>

          <div className={styles.headerPixels} aria-hidden="true">
            <span className={styles.pixelOne} />
            <span className={styles.pixelTwo} />
            <span className={styles.pixelThree} />
            <span className={styles.pixelOutline} />
          </div>
        </div>

        <div className={styles.skillSections}>
          {Object.entries(skills).map(([section, skillList], sectionIndex) => (
            <div key={section} className={styles.skillSection}>
              <div className={styles.skillSectionHeader}>
                <div className={styles.categoryMarker} aria-hidden="true">
                  <span className={styles.categoryDot} />
                </div>

                <div className={styles.categoryContent}>
                  <span className={styles.sectionNumber}>
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <h3>{section}</h3>
                </div>
              </div>

              <ul className={styles.skillsGrid}>
                {skillList.map((skill, index) => (
                  <li
                    key={skill.name}
                    className={styles.skillItem}
                    style={{ "--skill-index": index }}
                  >
                    <span className={styles.skillIcon} aria-hidden="true">
                      {skill.icon}
                    </span>

                    <span className={styles.skillName}>{skill.name}</span>

                    <span className={styles.skillAccent} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;

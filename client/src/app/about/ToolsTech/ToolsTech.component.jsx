import React from "react";
import styles from "./ToolsTech.module.css";
import { skills } from "./ToolsList";
import PillButton from "@/app/Components/PillButton/PillButton.component";

const ToolsTechnologies = () => {
    return (
        <section className={styles.tools}>
            <h3>Tools & Technologies</h3>
            <p>Focused on building high-performance, scalable web applications using modern technologies</p>
            {Object.entries(skills).map(([section, skillList]) => (
                <div key={section} className={styles.skillSection}>
                    <h4>{section}</h4>
                    <div className={styles.skillsGrid}>
                        {skillList.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
                                <PillButton icon={skill.icon} key={index}>
                                    <span>{skill.name}</span>
                                </PillButton>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ToolsTechnologies;

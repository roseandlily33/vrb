import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import Card from "../Components/Card/Card.component";
import Link from "next/link";
export default function Work() {
  const projects = [
    {
      projectName: "Yoda Safety Services",
      link: "case-study/yoda-safety-services",
    },
    {
      projectName: "Inspection Pal",
      link: "case-study/inspection-pal",
    },
    {
      projectName: "Ariel Performance Horses",
      link: "case-study/ariel-performance-horses",
    },
  ];
  return (
    <main>
      <Hero title="Selected Work" subText="Real projects, Real results" />
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <Link href={`/${project.link}`} key={index}>
          <Card
            key={index}
            className={styles.projectCard}
          >
            <h2>{project.projectName}</h2>
          </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

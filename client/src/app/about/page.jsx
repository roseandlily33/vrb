import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";
import ToolsTechnologies from "./ToolsTech/ToolsTech.component";
import AboutMe from "./AboutMe/AboutMe.component";
import ExperienceSnapshot from "./ExperienceSnapshot/ExperienceSnapshot.component";
import FocusOn from "./FocusOn/FocusOn.component";
import HowIWork from "./HowIWork/HowIWork.component";
import WhyMe from "./WhyMe/WhyMe.component";

export default function About() {
  return (
    <main>
      <Hero
        topMeta="About Me"
        title="Full Stack Developer focused on
building high-performing, user-first
      web experiences"
        highlight="Full Stack Developer"
        subText="Combining design and development to create seamless, high-quality user experiences"
      />
      <AboutMe />
      <div className={styles.sideBySide}>
        <HowIWork />
        <div className={styles.sideBySideDivider} />
        <FocusOn />
      </div>
      <ExperienceSnapshot />
      <WhyMe />
      <ToolsTechnologies />
      <CTA3 />
    </main>
  );
}

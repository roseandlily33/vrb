import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";
export default function About() {
  return (
    <main>
      <Hero
        title="About Me"
        subText="Full Stack Developer focused on 
|       building high-performing, user-first
|       web experiences"
      />
      <CTA3 />
    </main>
  );
}

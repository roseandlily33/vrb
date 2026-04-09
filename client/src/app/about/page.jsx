import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";
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
      <CTA3 />
    </main>
  );
}

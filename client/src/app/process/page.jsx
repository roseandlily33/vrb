import styles from "./page.module.css";
import Hero from "../Components/Hero/Hero.component";
import Timeline from "./Timeline/Timeline.component";
import Steps from "./Steps/Steps.component";
import Tools from "./Tools/Tools.component";
import CTA3 from "../Components/CTA/CTA3/CTA3.component";

export default function Process() {
  return (
    <main>
      <Hero
        topMeta="Process"
        title="From idea to launch, here's how I build high performing web applications"
        highlight="high performing"
        subText="Every project follows a structured approach focused on performance, usability, and real results"
      />
      <Timeline />
      <Steps />
      <Tools />
      <CTA3 />
    </main>
  );
}

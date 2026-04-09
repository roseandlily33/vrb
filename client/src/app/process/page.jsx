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
        title="My Process"
        subText="From idea to launch, here's how I build high performing web applications"
      />
      <Timeline />
      <Steps />
      <Tools />
      <CTA3 />
    </main>
  );
}

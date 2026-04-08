import styles from "./page.module.css";
import Packages from "./Packages/Packages.component";
import DesignPackage from "./DesignPackage/DesignPackage.component";
import CTA2 from "../Components/CTA/CTA2/CTA2.component";
import Process from "./Process/Process.component";
import Retainers from "./Retainers/Retainers.component";
import Extras from "./Extras/Extras.component";
import Hero from "../Components/Hero/Hero.component";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      <Hero
        title="Services designed to bring your ideas to life"
        highlight="designed"
        subText="Custom websites designed to grow your business."
      />
      <Packages />
      <DesignPackage />
      <Process />
      <Retainers />
      <Extras />
      <CTA2 />
    </main>
  );
}

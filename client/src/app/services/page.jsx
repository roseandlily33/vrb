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
        topMeta="Services"
        title="Custom websites built to grow your business"
        highlight="grow"
        subText="Focused on performance, scalability, and user experience"
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

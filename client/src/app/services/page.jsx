import styles from "./page.module.css";
import ServicesHero from "./ServicesHero/ServicesHero.component";
import Packages from "./Packages/Packages.component";
import DesignPackage from "./DesignPackage/DesignPackage.component";
import CTA2 from "../Components/CTA/CTA2/CTA2.component";
import Process from "./Process/Process.component";
import Retainers from "./Retainers/Retainers.component";
import Extras from "./Extras/Extras.component";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      <ServicesHero />
      <Packages />
      <DesignPackage />
      <Process />
      <Retainers />
      <Extras />
      <CTA2 />
    </main>
  );
}

import styles from "./page.module.css";
import Packages from "./Packages/Packages.component";
import DesignPackage from "./DesignPackage/DesignPackage.component";
import CTA2 from "../Components/CTA/CTA2/CTA2.component";
import Process from "./Process/Process.component";
import Retainers from "./Retainers/Retainers.component";
import Extras from "./Extras/Extras.component";
import Hero from "../Components/Hero/Hero.component";
import Links from "./Links/Links.component";
import MiniFaq from "./MiniFaq/MiniFaq.component";
import TrustedBy from "./TrustedBy/TrustedBy.component";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      <Hero
        topMeta="Services"
        title="Custom websites built to grow your business"
        highlight="grow"
        subText="Focused on performance, scalability, and user experience"
      />
      <Links />
      <Packages />
      <DesignPackage />
      <TrustedBy />
      <Retainers />
      <Process />
      <Extras />
      <MiniFaq />
      <CTA2 />
    </main>
  );
}

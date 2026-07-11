import styles from "./page.module.css";
import CTA2 from "../Components/CTA/CTA2/CTA2.component";
import Process from "./Process/Process.component";
// import Retainers from "./Retainers/Retainers.component";
// import Extras from "./Extras/Extras.component";
import Hero from "../Components/Hero/Hero.component";
import Links from "./Links/Links.component";
import MiniFaq from "./MiniFaq/MiniFaq.component";
import TrustedBy from "./TrustedBy/TrustedBy.component";
import ExplorePackages from "./Packages/Packages.component";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      <Hero
        topMeta="Services"
        title="Custom websites built to grow your business"
        highlight="grow"
        subText="Performance-driven, user-focused, and built to scale with you"
      />
      <Links />
      <ExplorePackages />
      {/* <Retainers /> */}
      <Process />
      <TrustedBy />
      {/* <Extras /> */}
      <MiniFaq />
      <CTA2 />
    </main>
  );
}

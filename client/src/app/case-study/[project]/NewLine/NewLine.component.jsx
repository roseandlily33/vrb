import Link from "next/link";
import styles from "./NewLine.module.css";
import CSHero from "../Components/CSHero/CSHero.component";
import { designElements } from "./designElements";
// import Breadcrumbs from "../Components/Extras/Breadcrumbs/Breadcrumbs.component";

import CSDesignShowcase from "../Components/CSDesignShowcase/CSDesignShowcase.component";

export const metadata = {
  title: "Newline Plumbing, Heating & Construction | Web Design & Development Project",
  description:
    "Explore the Newline project, a custom web design and development project focused on creating a polished, responsive, and user-friendly digital experience.",
};

export default function NewLineCaseStudy() {
  return (
    <main className={styles.page}>
      {/* <Breadcrumbs current="VRB Web Design and Development" /> */}
      <CSHero
        title="Brand refinement and business materials."
        img="/NewLine/NewLineLogoNew.png"
        role="Designer"
        date="2026"
        status="Completed"
        type="Branding & Design"
        companyName="Newline Plumbing, Heating & Construction"
      />
      <CSDesignShowcase showcase={designElements} />
    </main>
  );
}

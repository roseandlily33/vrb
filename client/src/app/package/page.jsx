import React from "react";
// import styles from "./page.module.css";
import PackageHero from "./PackageHero/PackageHero.component";
import Packages from "./Packages/Packages.component";
import DesignPackage from "./DesignPackage/DesignPackage.component";
import StyleGuidePreview from "./trial.component";

const PackagesPage = () => {
  return (
    <main>
      <PackageHero />
      <Packages />
      <DesignPackage />
      <StyleGuidePreview />
    </main>
  );
};

export default PackagesPage;

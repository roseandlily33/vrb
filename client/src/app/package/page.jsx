import React from "react";
import PackageHero from "./PackageHero/PackageHero.component";
import Packages from "./Packages/Packages.component";

const PackagesPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const type = resolvedSearchParams?.type || "web";

  return (
    <main>
      <PackageHero type={type} />
      <Packages type={type} />
    </main>
  );
};

export default PackagesPage;

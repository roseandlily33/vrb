import React from "react";
import { redirect } from "next/navigation";
import PackageHero from "./PackageHero/PackageHero.component";
import Packages from "./Packages/Packages.component";
import SEOSection from "./SeoPackage/seo.component";
import CTA5 from "../Components/CTA/CTA5/CTA5.component";
import TinyFaq from "../Components/TinyFaq/TinyFaq.component";
import WhatCanBeAdded from "../Components/WhatCanBeAdded/WhatCanBeAdded.component";
import RelatedProjects from "../Components/RelatedProjects/RelatedProjects.component";
import { buildPackageTypeHref, getPackageMetadata, resolvePackageType } from "./packageRouting";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const type = resolvePackageType(resolvedSearchParams?.type) || "web";
  const meta = getPackageMetadata(type);
  const canonical = "https://vrbwebdesignanddev.com/package";

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
    },
    alternates: {
      canonical,
    },
  };
}

const PackagesPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const requestedType = resolvedSearchParams?.type;

  if (requestedType) {
    const resolvedType = resolvePackageType(requestedType);
    if (resolvedType) {
      redirect(buildPackageTypeHref(resolvedType));
    }
  }

  const type = "web";

  return (
    <main>
      <PackageHero type={type} />
      {type !== "seo" ? <Packages type={type} /> : <SEOSection />}
      {type !== "extras" && <WhatCanBeAdded type={type} />}
      <RelatedProjects pkg={type} />
      {type !== "seo" && <TinyFaq type={type} />}
      <CTA5 />
    </main>
  );
};

export default PackagesPage;

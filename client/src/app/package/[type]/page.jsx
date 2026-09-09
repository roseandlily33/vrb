import React from "react";
import { notFound } from "next/navigation";
import PackageHero from "../PackageHero/PackageHero.component";
import Packages from "../Packages/Packages.component";
import SEOSection from "../SeoPackage/seo.component";
import CTA5 from "../../Components/CTA/CTA5/CTA5.component";
import TinyFaq from "../../Components/TinyFaq/TinyFaq.component";
import WhatCanBeAdded from "../../Components/WhatCanBeAdded/WhatCanBeAdded.component";
import RelatedProjects from "../../Components/RelatedProjects/RelatedProjects.component";
import {
  buildPackageTypeHref,
  getPackageMetadata,
  resolvePackageType,
} from "../packageRouting";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const resolvedType = resolvePackageType(resolvedParams?.type);

  if (!resolvedType) {
    return {
      title: "Packages — VRB",
      description: "Overview of packages available",
    };
  }

  const meta = getPackageMetadata(resolvedType);
  const canonical = `https://vrbwebdesignanddev.com${buildPackageTypeHref(resolvedType)}`;

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

export default async function PackageTypePage({ params }) {
  const resolvedParams = await params;
  const resolvedType = resolvePackageType(resolvedParams?.type);

  if (!resolvedType) {
    notFound();
  }

  return (
    <main>
      <PackageHero type={resolvedType} />
      {resolvedType !== "seo" ? <Packages type={resolvedType} /> : <SEOSection />}
      {resolvedType !== "extras" && <WhatCanBeAdded type={resolvedType} />}
      <RelatedProjects pkg={resolvedType} />
      {resolvedType !== "seo" && <TinyFaq type={resolvedType} />}
      <CTA5 />
    </main>
  );
}
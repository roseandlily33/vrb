import React from "react";
import PackageHero from "./PackageHero/PackageHero.component";
import Packages from "./Packages/Packages.component";
import SEOSection from "./SeoPackage/seo.component";
import CTA5 from "../Components/CTA/CTA5/CTA5.component";
import TinyFaq from "../Components/TinyFaq/TinyFaq.component";
import WhatCanBeAdded from "../Components/WhatCanBeAdded/WhatCanBeAdded.component";
import RelatedProjects from "../Components/RelatedProjects/RelatedProjects.component";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const type = resolvedSearchParams?.type || "web";

  const metaMap = {
    web: {
      title: "Custom Web Development Services | VRB Web Design & Development",
      description:
        "Custom web development services for businesses that need scalable platforms, advanced functionality, integrations, and tailored workflows.",
    },
    retainer: {
      title: "Website Maintenance Services | VRB Web Design & Development",
      description:
        "Website maintenance services for businesses needing ongoing updates, support, optimization, troubleshooting, and reliable website care.",
    },
    seo: {
      title: "SEO Packages | VRB Web Design & Development",
      description:
        "SEO services Canada for businesses looking to improve their organic visibility, technical SEO, content strategy, and performance optimizations.",
    },
    design: {
      title: "Website Design Packages | VRB Web Design & Development",
      description:
        "Explore website design packages for businesses, from focused design support to complete UX/UI strategy, responsive interfaces, and design systems.",
    },
    marketing: {
      title: "Social Media Management Services | VRB Web Design & Development",
      description:
        "Social media management services for businesses looking for strategic content, consistent posting, audience engagement, and online growth.",
    },
    extras: {
      title: "Website Extras | VRB Web Design & Development",
      description:
        "Website extras and add-ons for businesses looking to enhance their website with additional features, integrations, and functionality.",
    },
  };

  const meta = metaMap[type] || metaMap.web;
  const canonical = `https://vrbwebdesignanddev.com/package${type ? `?type=${type}` : ""}`;

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
  const type = resolvedSearchParams?.type || "web";

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

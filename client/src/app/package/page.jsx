import React from "react";
import PackageHero from "./PackageHero/PackageHero.component";
import Packages from "./Packages/Packages.component";

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
      title: "SEO Packages | VRB SEO Services",
      description:
        "SEO packages including technical audits, content strategy, and ongoing optimization to grow organic traffic.",
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
      <Packages type={type} />
    </main>
  );
};

export default PackagesPage;

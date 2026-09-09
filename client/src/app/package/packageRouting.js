import { PackageInfo } from "./Packages/packageList";
import designPackages from "./DesignPackage/designPackage";
import { socialMediaList } from "../services/SocialMedia/socialMedia";
import { Retainer } from "../services/Retainers/retainerList";
import { extrasList } from "../services/Extras/extrasList";
import { slugify } from "../../lib/slugify";

export const packageTypeConfig = {
  web: {
    routeSegment: "web-design",
    label: "Custom Websites",
    eyebrow: "Development Package",
    title: "Custom Web Development Services | VRB Web Design & Development",
    description:
      "Custom web development services for businesses that need scalable platforms, advanced functionality, integrations, and tailored workflows.",
  },
  retainer: {
    routeSegment: "retainer",
    label: "Website Maintenance",
    eyebrow: "Retainer Package",
    title: "Website Maintenance Services | VRB Web Design & Development",
    description:
      "Website maintenance services for businesses needing ongoing updates, support, optimization, troubleshooting, and reliable website care.",
  },
  seo: {
    routeSegment: "seo",
    label: "SEO",
    eyebrow: "SEO Package",
    title: "SEO Packages | VRB Web Design & Development",
    description:
      "SEO services Canada for businesses looking to improve their organic visibility, technical SEO, content strategy, and performance optimizations.",
  },
  design: {
    routeSegment: "design",
    label: "Web Design",
    eyebrow: "Design Package",
    title: "Website Design Packages | VRB Web Design & Development",
    description:
      "Explore website design packages for businesses, from focused design support to complete UX/UI strategy, responsive interfaces, and design systems.",
  },
  marketing: {
    routeSegment: "marketing",
    label: "Social Media Marketing",
    eyebrow: "Marketing Package",
    title: "Social Media Management Services | VRB Web Design & Development",
    description:
      "Social media management services for businesses looking for strategic content, consistent posting, audience engagement, and online growth.",
  },
  extras: {
    routeSegment: "extras",
    label: "Extras & Add Ons",
    eyebrow: "Extras & Add-Ons",
    title: "Website Extras | VRB Web Design & Development",
    description:
      "Website extras and add-ons for businesses looking to enhance their website with additional features, integrations, and functionality.",
  },
};

const packageLists = {
  web: PackageInfo,
  design: designPackages,
  marketing: socialMediaList,
  retainer: Retainer,
  extras: extrasList,
  seo: [],
};

export const packageTypeEntries = Object.entries(packageTypeConfig);

export function resolvePackageType(typeOrSegment) {
  if (!typeOrSegment) return "web";

  const normalized = String(typeOrSegment).toLowerCase().trim();

  if (packageTypeConfig[normalized]) {
    return normalized;
  }

  const match = packageTypeEntries.find(
    ([, config]) => config.routeSegment === normalized
  );

  return match?.[0] || null;
}

export function getPackageRouteSegment(type) {
  const resolvedType = resolvePackageType(type);
  return packageTypeConfig[resolvedType]?.routeSegment || resolvedType || "web-design";
}

export function buildPackageTypeHref(type) {
  return `/package/${getPackageRouteSegment(type)}`;
}

export function getPackageMetadata(type) {
  const resolvedType = resolvePackageType(type) || "web";
  return packageTypeConfig[resolvedType] || packageTypeConfig.web;
}

export function getPackageList(type) {
  const resolvedType = resolvePackageType(type) || "web";
  return packageLists[resolvedType] || PackageInfo;
}

export function getAllPackageLists() {
  return [
    { key: "design", list: designPackages },
    { key: "marketing", list: socialMediaList },
    { key: "retainer", list: Retainer },
    { key: "extras", list: extrasList },
    { key: "web", list: PackageInfo },
  ];
}

export function getPackageSlug(pkg) {
  return slugify(pkg?.title || pkg?.name || pkg?.slug || "");
}

export function matchesIncomingPackageSlug(pkg, incoming) {
  const candidates = new Set();

  if (pkg.title) candidates.add(slugify(pkg.title));
  if (pkg.name) candidates.add(slugify(pkg.name));
  if (pkg.slug) candidates.add(slugify(pkg.slug));
  if (pkg.title) {
    candidates.add(String(pkg.title).toLowerCase().trim().replace(/\s+/g, "-"));
  }

  return candidates.has(incoming);
}

export function findPackageBySlug(slug, preferredType) {
  const incoming = slugify(decodeURIComponent(String(slug || "")));
  const resolvedType = resolvePackageType(preferredType);

  if (resolvedType && resolvedType !== "seo") {
    const preferredList = getPackageList(resolvedType);
    const preferredPackage = preferredList.find((pkg) =>
      matchesIncomingPackageSlug(pkg, incoming)
    );

    if (preferredPackage) {
      return {
        pkg: preferredPackage,
        resolvedType,
        list: preferredList,
        incoming,
      };
    }
  }

  for (const entry of getAllPackageLists()) {
    const found = entry.list.find((pkg) => matchesIncomingPackageSlug(pkg, incoming));
    if (found) {
      return {
        pkg: found,
        resolvedType: entry.key,
        list: entry.list,
        incoming,
      };
    }
  }

  return {
    pkg: null,
    resolvedType: resolvedType || "web",
    list: getPackageList(resolvedType || "web"),
    incoming,
  };
}

export function buildPackageDetailHref(type, pkg) {
  return `${buildPackageTypeHref(type)}/${getPackageSlug(pkg)}`;
}
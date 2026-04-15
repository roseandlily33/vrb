import designPackages from "../DesignPackage/designPackage.jsx";

export const PackageInfo = [
  // Website packages
  {
    title: "Website Essentials",
    startingAt: "$2,800",
    timeline: "2–4 weeks",
    bestFor: "establishing online presence",
    description:
      "A clean, professional website to establish your online presence and communicate your core message.",
    features: [
      "2–5 responsive pages",
      "Custom design aligned with your brand",
      "Contact form with email integration",
      "Basic SEO setup",
      "Social media links",
      "Design consultation & previews",
      "Up to 2 rounds of revisions",
    ],
    type: "website",
  },
  {
    title: "Professional Website",
    startingAt: "$5,500",
    timeline: "4–8 weeks",
    bestFor: "growing businesses",
    description:
      "A fully customized website designed to support business growth with enhanced functionality and flexibility.",
    features: [
      "Up to 10 custom pages",
      "Fully responsive, tailored design",
      "Form & email integrations",
      "SEO optimization",
      "Branding & UX consultation",
      "Light backend features (e.g. newsletter signup, basic booking, gated content)",
      "Up to 3 rounds of revisions",
    ],
    type: "website",
    highlight: "Most Popular",
  },
  {
    title: "Custom Platform",
    startingAt: "$12,000",
    timeline: "3–6 months",
    bestFor: "complex needs & long-term growth",
    description:
      "A fully bespoke web platform built around your business needs, workflows, and long-term goals.",
    features: [
      "Custom frontend & backend architecture",
      "User accounts & authentication",
      "Database & API integrations",
      "Advanced backend functionality",
      "E-commerce or complex workflows",
      "Unlimited pages & custom features",
      "Fully customized design system",
      "Advanced SEO setup",
      "Ongoing collaboration & support options",
    ],
    type: "website",
  },
  // Design packages (add type: "design")
  ...designPackages.map((pkg) => ({ ...pkg, type: "design" })),
];

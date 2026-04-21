import { MdWeb, MdStar, MdBuild } from "react-icons/md";

export const PackageInfo = [
  {
    title: "Website Essentials",
    startingAt: "$2,800",
    timeline: "2–4 weeks",
    bestFor: "Small businesses needing a polished online presence",
    description:
      "A clean, professional website built to clearly present your business, build trust, and make it easy for people to get in touch.",
    features: [
      "2–5 responsive pages",
      "Custom design aligned with your brand",
      "Contact form with email integration",
      "Basic SEO setup",
      "Social media links",
      "Up to 2 rounds of revisions",
    ],
    type: "website",
    icon: MdWeb,
  },
  {
    title: "Professional Website",
    startingAt: "$5,500",
    timeline: "4–8 weeks",
    bestFor: "Growing businesses ready for a more strategic, flexible site",
    description:
      "A fully custom website designed to support growth with stronger structure, better user experience, and room for more advanced functionality.",
    features: [
      "Up to 10 custom pages",
      "Fully responsive custom design",
      "Form and email integrations",
      "SEO optimization",
      "Branding and UX consultation",
      "Light backend features such as newsletter signup, basic booking, or gated content",
    ],
    type: "website",
    highlight: "Most Popular",
    icon: MdStar,
  },
  {
    title: "Custom Platform",
    startingAt: "$12,000+",
    timeline: "3–6 months",
    bestFor: "Businesses needing custom functionality, workflows, or long-term scalability",
    description:
      "A fully bespoke web platform built around your business logic, operations, and long-term goals — ideal for more complex systems that go beyond a standard marketing site.",
    features: [
      "Custom frontend and backend architecture",
      "User accounts and authentication",
      "Database and API integrations",
      "Advanced functionality or custom workflows",
      "Fully customized design system",
      "Ongoing collaboration and support options",
    ],
    type: "website",
    icon: MdBuild,
  },
];
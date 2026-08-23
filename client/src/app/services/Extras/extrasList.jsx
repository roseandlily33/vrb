import {
  FaRegEye,
  FaCalendarAlt,
  FaRedo,
  FaTachometerAlt,
  FaSearch,
  FaShoppingCart,
  FaBlog,
  FaPlug,
  FaTools,
  FaWpforms,
  FaPalette,
  FaCloudUploadAlt,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export const extrasList = [
  {
    title: "UI/UX Audit",
    slug: "ui-ux-audit",
    seoTitle: "UI/UX Audit | VRB Web Design & Development",
    seoDescription:
      "A thorough review of your website or app to ensure usability, accessibility, and visual consistency.",
    startingAt: "$900",
    timeline: "1-2 weeks",
    bestFor: "Sites needing usability improvements",
    description:
      "A thorough review of your website or app to ensure it’s easy to use, visually consistent, accessible, and on-brand. Includes actionable suggestions for improvement.",
    type: "extras",
    whatsIncluded: [
      "Heuristic review, accessibility checks, and prioritized recommendations",
    ],
    icon: FaRegEye,
  },
  {
    title: "Website Redesign",
    slug: "website-redesign",
    seoTitle: "Website Redesign Services | VRB Web Design & Development",
    seoDescription:
      "Website redesign services for businesses needing a modern, responsive website with improved structure, navigation, usability, and user experience.",
    startingAt: "$4,500",
    timeline: "4-8 weeks",
    bestFor:
      "Businesses with outdated websites needing a complete visual and structural refresh",
    description:
      "Website redesign services that transform outdated websites with a modern visual direction, improved structure, responsive layouts, and a better overall user experience.",
    type: "extras",
    whatsIncluded: ["UI redesign, content restructuring, and launch support"],
    icon: FaRedo,
  },
  {
    title: "Performance Optimization",
    slug: "performance-optimization",
    seoTitle: "Performance Optimization | VRB Web Design & Development",
    seoDescription:
      "Improve load times and site efficiency through image compression, caching, and code optimizations.",
    startingAt: "$800",
    timeline: "1-2 weeks",
    bestFor: "Sites needing faster load times",
    description:
      "Boost your site’s speed and efficiency by compressing images, lazy loading content, and optimizing code for faster load times.",
    type: "extras",
    whatsIncluded: ["Image optimization, caching, and audit-driven fixes"],
    icon: FaTachometerAlt,
  },
  {
    title: "SEO Setup",
    slug: "seo-setup",
    seoTitle: "SEO Setup | VRB Web Design & Development",
    seoDescription:
      "Optimize your site for search with meta tags, headings, and site structure improvements.",
    startingAt: "$700",
    timeline: "1-3 weeks",
    bestFor: "Sites that need search visibility",
    description:
      "Improve your site’s visibility on search engines by optimizing keywords, meta tags, headings, and site structure for better ranking.",
    type: "extras",
    whatsIncluded: ["Basic on-page SEO, meta tags, and sitemap setup"],
    icon: FaSearch,
  },
  {
    title: "E-Commerce Integration",
    slug: "e-commerce-integration",
    seoTitle: "E-Commerce Integration | VRB Web Design & Development",
    seoDescription:
      "Add online shopping features with secure checkout, product pages, and payment gateway integration.",
    startingAt: "$3,000",
    timeline: "2-6 weeks",
    bestFor: "Sites adding commerce capabilities",
    description:
      "Add online shopping features using platforms like Shopify or custom solutions. Includes product pages, shopping cart, and secure checkout.",
    type: "extras",
    whatsIncluded: [
      "Product pages, cart setup, and payment gateway integration",
    ],
    icon: FaShoppingCart,
  },
  {
    title: "Blog Setup",
    slug: "blog-setup",
    seoTitle: "Blog Setup | VRB Web Design & Development",
    seoDescription:
      "Add a blog with CMS integration and SEO-friendly URLs to support content marketing.",
    startingAt: "$500",
    timeline: "1-2 weeks",
    bestFor: "Sites adding content channels",
    description:
      "Add a blog to your site using modern tools or CMS, with easy-to-manage posts and categories, and SEO-friendly URLs.",
    type: "extras",
    whatsIncluded: ["CMS configuration, templates, and initial posts guidance"],
    icon: FaBlog,
  },
  // {
  //     title: "Custom Animations",
  //     description:
  //         "Enhance your site with engaging custom animations for elements, transitions, and user interactions.",
  //     // What you do: Add interactive or animated elements to your site.
  //     // Includes: Scroll animations, hover effects, page transitions, animated icons.
  // },
  {
    title: "API Integration",
    slug: "api-integration",
    seoTitle: "API Integration | VRB Web Design & Development",
    seoDescription:
      "Connect your site to external services and data sources with secure API integrations.",
    startingAt: "$2,000",
    timeline: "2-6 weeks",
    bestFor: "Sites needing external data or services",
    description:
      "Connect your site to external services or data sources, such as weather, news, payment gateways, or business tools.",
    type: "extras",
    whatsIncluded: ["Authentication, endpoints, and data mapping"],
    icon: FaPlug,
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    seoTitle: "Maintenance & Support | VRB Web Design & Development",
    seoDescription:
      "Ongoing updates, backups, and minor content changes to keep your site secure and up to date.",
    startingAt: "$250",
    timeline: "Monthly",
    bestFor: "Sites needing regular upkeep",
    description:
      "Ongoing updates, troubleshooting, and support to keep your website running smoothly and securely.",
    type: "extras",
    whatsIncluded: ["Security updates, backups, and minor content changes"],
    icon: FaTools,
  },
  {
    title: "Content Management System (CMS)",
    slug: "content-management-system",
    seoTitle: "Content Management System | VRB Web Design & Development",
    seoDescription:
      "Set up an easy-to-manage CMS so you can edit content without code.",
    startingAt: "$1,200",
    timeline: "1-3 weeks",
    bestFor: "Sites needing non-technical content editing",
    description:
      "Set up a system so you can easily edit your site’s content (text, images, blog posts) without needing to code.",
    type: "extras",
    whatsIncluded: ["CMS install, templating, and editor training"],
    icon: FaWpforms,
  },
  {
    title: "Branding & Logo Design",
    slug: "branding-logo-design",
    seoTitle: "Branding & Logo Design | VRB Web Design & Development",
    seoDescription:
      "Create or refresh your brand identity including logo, color palette, and basic guidelines.",
    startingAt: "$1,200",
    timeline: "2-4 weeks",
    bestFor: "Projects needing refreshed brand identity",
    description:
      "Create or refresh your brand identity, including logo design, color palette, font selection, and brand guidelines.",
    type: "extras",
    whatsIncluded: ["Logo mindmap, color palette, and basic brand guidelines"],
    icon: FaPalette,
  },
  // {
  //     title: "Analytics Setup",
  //     description:
  //         "Install and configure analytics tools (like Google Analytics) so you can track visitors, page views, and user behavior.",
  //     // What you do: Add tools to track site visitors and behavior.
  //     // Includes: Google Analytics, Plausible, tracking code, goals/events, reporting.
  // },
  {
    title: "Hosting & Deployment",
    slug: "hosting-deployment",
    seoTitle: "Hosting & Deployment | VRB Web Design & Development",
    seoDescription:
      "Launch your site with domain setup, SSL, and a deployment pipeline for a secure live site.",
    startingAt: "$300",
    timeline: "1-3 days",
    bestFor: "Sites ready to go live",
    description:
      "Launch your website on the internet, connect your custom domain, set up SSL, and ensure everything is live and secure.",
    type: "extras",
    whatsIncluded: ["Domain setup, SSL, and deployment pipeline"],
    icon: FaCloudUploadAlt,
  },
  {
    title: "Training & Documentation",
    slug: "training-documentation",
    seoTitle: "Training & Documentation | VRB Web Design & Development",
    seoDescription:
      "Personalized guides and video walkthroughs to help you manage and update your website.",
    startingAt: "$400",
    timeline: "1 week",
    bestFor: "Teams needing handoff materials",
    description:
      "Personalized guides or video walkthroughs to help you manage and update your website with confidence.",
    type: "extras",
    whatsIncluded: ["Written guides and a recorded walkthrough"],
    icon: FaChalkboardTeacher,
  },
  // {
  //     title: "Testing & Quality Assurance",
  //     description: "Set up automated or manual testing to ensure your site works as expected and is bug-free.",
  //     // What you do: Implement and run tests for your site.
  //     // Includes: Unit tests, integration tests, manual QA, bug fixing.
  // },
  {
    title: "Website Security Best Practices",
    slug: "website-security-best-practices",
    seoTitle: "Website Security Best Practices | VRB Web Design & Development",
    seoDescription:
      "Security review and recommendations to protect user data and improve site safety.",
    startingAt: "$600",
    timeline: "1-2 weeks",
    bestFor: "Sites that handle user data",
    description:
      "Review and improve your site’s security, including best practices for authentication, authorization, and data protection.",
    type: "extras",
    whatsIncluded: ["Security audit, recommendations, and patching guidance"],
    icon: FaShieldAlt,
  },
  // {
  //     title: "Progressive Web App (PWA) Enablement",
  //     description: "Make your site installable and usable offline for a better user experience.",
  //     // What you do: Add PWA features.
  //     // Includes: Service workers, offline support, installability.
  // },
  {
    title: "Custom Email Solutions",
    slug: "custom-email-solutions",
    seoTitle: "Custom Email Solutions | VRB Web Design & Development",
    seoDescription:
      "Set up transactional and marketing email templates and integrations.",
    startingAt: "$350",
    timeline: "1-2 weeks",
    bestFor: "Sites needing transactional or marketing emails",
    description:
      "Set up transactional or marketing emails using MJML, Brevo, Handlebars, nodemailer, or react-email.",
    type: "extras",
    whatsIncluded: ["Template setup and SMTP/service integration"],
    icon: FaEnvelopeOpenText,
  },
  {
    title: "Booking System Integration",
    slug: "booking-system-integration",
    seoTitle: "Booking System Integration | VRB Web Design & Development",
    seoDescription:
      "Integrate scheduling tools for appointments and confirmations with calendar sync.",
    startingAt: "$600",
    timeline: "1-3 weeks",
    bestFor: "Service businesses needing scheduling",
    description:
      "Integrate scheduling tools that allow visitors to book appointments, consultations, or services online.",
    type: "extras",
    whatsIncluded: ["Calendar sync, booking UI, and confirmation workflows"],
    icon: FaCalendarAlt,
  },
  {
    title: "Website Migration",
    slug: "website-migration",
    seoTitle: "Website Migration | VRB Web Design & Development",
    seoDescription:
      "Move your site and content to a new host or platform with minimal disruption.",
    startingAt: "$800",
    timeline: "1-2 weeks",
    bestFor: "Sites moving hosts or platforms",
    description:
      "Move an existing website, content, or domain to a new hosting provider or platform with minimal disruption.",
    type: "extras",
    whatsIncluded: ["Full site transfer, DNS changes, and verification"],
    icon: FaCloudUploadAlt,
  },
  {
    title: "Landing Pages",
    slug: "landing-pages",
    seoTitle: "Landing Pages | VRB Web Design & Development",
    seoDescription:
      "Create focused campaign pages designed for lead generation and conversions.",
    startingAt: "$700",
    timeline: "1-2 weeks",
    bestFor: "Campaigns and lead generation",
    description:
      "Create focused pages designed around a specific service, campaign, or marketing goal.",
    type: "extras",
    whatsIncluded: ["Design, copy layout, and CTA optimization"],
    icon: FaPalette,
  },
  {
    title: "Content Strategy",
    slug: "content-strategy",
    seoTitle: "Content Strategy | VRB Web Design & Development",
    seoDescription:
      "Plan messaging, sitemap, and content structure to improve clarity and user journeys.",
    startingAt: "$900",
    timeline: "2-4 weeks",
    bestFor: "Sites needing clearer messaging",
    description:
      "Plan website content, page structure, messaging, and information hierarchy to create a clearer user experience.",
    type: "extras",
    whatsIncluded: ["Content audit, sitemap, and content recommendations"],
    icon: FaBlog,
  },
  {
    title: "Conversion Optimization",
    slug: "conversion-optimization",
    seoTitle: "Conversion Optimization | VRB Web Design & Development",
    seoDescription:
      "Improve conversion rates through A/B suggestions, CTA improvements, and prioritized fixes.",
    startingAt: "$900",
    timeline: "2-4 weeks",
    bestFor: "Sites wanting higher conversion rates",
    description:
      "Review and improve key pages to help visitors take action through clearer messaging, stronger calls to action, and improved user flows.",
    type: "extras",
    whatsIncluded: ["A/B suggestions, CTA changes, and prioritized fixes"],
    icon: FaTachometerAlt,
  },
  {
    title: "Accessibility Review",
    slug: "accessibility-review",
    seoTitle: "Accessibility Review | VRB Web Design & Development",
    seoDescription:
      "Review for accessibility best practices including contrast, keyboard navigation, and screen reader support.",
    startingAt: "$600",
    timeline: "1-2 weeks",
    bestFor: "Sites prioritizing inclusive access",
    description:
      "Review your website for accessibility best practices including contrast, keyboard navigation, screen reader support, and usability improvements.",
    type: "extras",
    whatsIncluded: ["Accessibility checklist, prioritized fixes, and examples"],
    icon: FaRegEye,
  },
];

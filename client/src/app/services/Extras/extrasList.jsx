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
    startingAt: "$4,500",
    timeline: "4-8 weeks",
    bestFor: "Sites needing a full visual and structural refresh",
    description:
      "Transform your existing website with a fresh, modern look and improved structure. Enhances navigation, responsiveness, and overall user experience.",
    type: "extras",
    whatsIncluded: ["UI redesign, content restructuring, and launch support"],
    icon: FaRedo,
  },
  {
    title: "Performance Optimization",
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
    startingAt: "$3,000",
    timeline: "2-6 weeks",
    bestFor: "Sites adding commerce capabilities",
    description:
      "Add online shopping features using platforms like Shopify or custom solutions. Includes product pages, shopping cart, and secure checkout.",
    type: "extras",
    whatsIncluded: ["Product pages, cart setup, and payment gateway integration"],
    icon: FaShoppingCart,
  },
  {
    title: "Blog Setup",
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

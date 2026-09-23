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
  FaMobileAlt,
} from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

export const extrasList = [
  {
    title: "UI/UX Audit",

    slug: "ui-ux-audit",

    seoTitle: "UI/UX Audit | VRB Web Design & Development",

    seoDescription:
      "A thorough review of your website or app to improve usability, accessibility, and visual consistency with actionable recommendations.",

    startingAt: "$900",

    timeline: "1–2 Weeks",

    bestFor:
      "Businesses with an existing website or app that needs usability improvements",

    description:
      "A comprehensive usability and design review of your existing website or application. I'll identify friction points, accessibility concerns, inconsistent design patterns, and opportunities to improve the overall user experience with clear, prioritized recommendations.",

    type: "extras",

    icon: FaRegEye,

    deliverables: "Audit report + actionable improvement plan",

    features: [
      "Complete heuristic usability review",
      "Accessibility review (WCAG fundamentals)",
      "Navigation & user flow analysis",
      "Visual consistency & UI review",
      "Mobile responsiveness assessment",
      "CTA & conversion opportunity review",
      "Prioritized improvement recommendations",
      "30-minute review call",
    ],

    whatsIncluded: [
      "Detailed UX audit report",
      "Annotated screenshots with findings",
      "Accessibility observations",
      "Navigation & hierarchy recommendations",
      "Visual consistency review",
      "Prioritized list of improvements",
      "30-minute walkthrough of findings",
    ],

    whatsNotIncluded: [
      "Design implementation",
      "Website development",
      "Copywriting or content rewriting",
      "Full accessibility certification",
      "Ongoing UX consulting",
    ],

    supportPeriod: "2 weeks for questions after delivery",

    note: "This package focuses on identifying opportunities for improvement. Any design or development work can be completed separately as a follow-up project.",
  },
  
  {
    title: "Performance Optimization",
    slug: "performance-optimization",

    seoTitle: "Website Performance Optimization | VRB Web Design & Development",

    seoDescription:
      "Improve website speed and performance through image optimization, code improvements, loading strategies, and performance-focused fixes.",

    startingAt: "$800",
    timeline: "1 - 2 Weeks",

    bestFor: "Websites experiencing slow load times or performance issues",

    description:
      "Identify and address performance bottlenecks that are slowing down your website, with improvements focused on faster loading, more efficient assets, and a smoother experience across devices.",

    type: "extras",
    icon: FaTachometerAlt,

    deliverables:
      "Performance review, implemented optimizations, and before-and-after performance findings",

    features: [
      "Performance audit",
      "Image optimization",
      "Asset & loading review",
      "Lazy loading improvements",
      "Code optimization opportunities",
      "Font loading review",
      "Core Web Vitals review",
      "Performance testing",
    ],

    whatsIncluded: [
      "Initial performance assessment",
      "Image & asset optimization",
      "Loading strategy improvements",
      "Performance-focused code fixes",
      "Responsive performance review",
      "Post-optimization testing",
      "Summary of completed improvements",
    ],

    whatsNotIncluded: [
      "Complete website redevelopment",
      "Hosting infrastructure replacement unless discussed",
      "Third-party service performance issues outside my control",
      "Ongoing performance monitoring",
    ],

    supportPeriod: "1 week after completion",

    optionalAddOns: [
      "Technical SEO Audit",
      "Website Refresh",
      "Ongoing maintenance",
    ],

    note: "Performance improvements depend on the website's existing platform, hosting environment, third-party scripts, and technical condition.",
  },

  {
    title: "SEO Setup",
    slug: "seo-setup",

    seoTitle: "SEO Setup Services | VRB Web Design & Development",

    seoDescription:
      "Build stronger SEO foundations with metadata, page structure, keyword mapping, indexing setup, sitemaps, and technical search improvements.",

    startingAt: "$700",
    timeline: "1 - 3 Weeks",

    bestFor: "Websites that need stronger search engine foundations",

    description:
      "Build the technical and on-page foundations search engines need to understand your website, from page metadata and heading structure to indexing, sitemaps, and keyword alignment.",

    type: "extras",
    icon: FaSearch,

    deliverables:
      "SEO foundation setup across agreed pages with indexing and crawlability configuration",

    features: [
      "SEO foundation review",
      "Keyword-to-page mapping",
      "Title tag optimization",
      "Meta description optimization",
      "Heading structure review",
      "Internal linking recommendations",
      "XML sitemap review or setup",
      "Robots.txt review",
      "Search indexing setup",
    ],

    whatsIncluded: [
      "On-page SEO setup for agreed pages",
      "Page title & meta description optimization",
      "Heading hierarchy improvements",
      "Basic keyword alignment",
      "Sitemap setup or review",
      "Robots.txt review",
      "Indexing configuration",
      "Basic internal linking recommendations",
    ],

    whatsNotIncluded: [
      "Guaranteed rankings",
      "Ongoing SEO management",
      "Backlink campaigns",
      "Large-scale content creation",
      "Advanced competitor research",
      "Paid search advertising",
    ],

    supportPeriod: "2 weeks after completion",

    optionalAddOns: [
      "Technical SEO Audit",
      "Content Strategy",
      "Performance Optimization",
      "Additional page optimization",
      "Ongoing SEO support",
    ],

    note: "SEO improvements support search visibility but cannot guarantee specific rankings, traffic levels, or search engine outcomes.",
  },

  {
    title: "Technical SEO Audit",
    slug: "technical-seo-audit",

    seoTitle: "Technical SEO Audit Services | VRB Web Design & Development",

    seoDescription:
      "Identify technical SEO issues affecting crawling, indexing, site structure, performance, and search visibility.",

    startingAt: "$900",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Websites with indexing problems, technical SEO concerns, or unexplained search visibility issues",

    description:
      "A technical review of your website focused on the issues that can affect how search engines crawl, understand, and index your pages.",

    type: "extras",
    icon: FaSearch,

    deliverables:
      "Technical SEO audit with prioritized findings and recommended fixes",

    features: [
      "Crawlability review",
      "Indexing review",
      "Sitemap analysis",
      "Robots.txt analysis",
      "Canonical tag review",
      "URL & redirect review",
      "Core Web Vitals review",
      "Internal linking analysis",
      "Metadata & heading checks",
      "Technical issue prioritization",
    ],

    whatsIncluded: [
      "Technical SEO audit",
      "Indexing & crawlability assessment",
      "Sitemap and robots.txt review",
      "Canonical & duplicate-content observations",
      "Core Web Vitals observations",
      "Prioritized technical recommendations",
      "30-minute findings walkthrough",
    ],

    whatsNotIncluded: [
      "Implementation of recommended fixes",
      "Ongoing SEO management",
      "Backlink strategy",
      "Content creation",
      "Guaranteed ranking improvements",
    ],

    supportPeriod: "2 weeks for questions after delivery",

    optionalAddOns: [
      "Technical SEO implementation",
      "SEO Setup",
      "Performance Optimization",
      "Content Strategy",
    ],

    note: "Implementation can be added separately if you would like the identified technical issues corrected after the audit.",
  },

  {
    title: "Search Console & Indexing Setup",
    slug: "search-console-indexing-setup",

    seoTitle:
      "Google Search Console & Indexing Setup | VRB Web Design & Development",

    seoDescription:
      "Set up Google Search Console, sitemap submission, and indexing foundations so you can monitor how your website appears in Google Search.",

    startingAt: "$350",
    timeline: "2 - 5 Days",

    bestFor:
      "New or existing websites that are not yet properly connected to Google Search Console",

    description:
      "Get the essential search monitoring tools and indexing foundations in place so you can see how Google discovers, indexes, and displays your website.",

    type: "extras",
    icon: FaSearch,

    deliverables:
      "Search Console setup, property verification, sitemap submission, and indexing review",

    features: [
      "Google Search Console setup",
      "Property verification",
      "XML sitemap submission",
      "Indexing status review",
      "Basic robots.txt review",
      "Initial search visibility check",
    ],

    whatsIncluded: [
      "Search Console property setup or review",
      "Website ownership verification",
      "Sitemap submission",
      "Basic indexing checks",
      "Initial configuration review",
    ],

    whatsNotIncluded: [
      "Ongoing SEO management",
      "Ranking guarantees",
      "Content optimization",
      "Advanced technical SEO remediation",
    ],

    optionalAddOns: [
      "SEO Setup",
      "Technical SEO Audit",
      "Performance Optimization",
    ],

    note: "Search engines control when and whether pages are crawled and indexed. Setup does not guarantee immediate indexing.",
  },

  {
    title: "E-Commerce Integration",
    slug: "e-commerce-integration",

    seoTitle: "E-Commerce Integration Services | VRB Web Design & Development",

    seoDescription:
      "Add e-commerce functionality with product pages, shopping carts, secure checkout, and payment integration.",

    startingAt: "$3,000",
    timeline: "2 - 6 Weeks",

    bestFor:
      "Businesses adding online purchasing to an existing website or platform",

    description:
      "Add a streamlined online purchasing experience to your website with product presentation, cart functionality, secure payment processing, and customer-facing checkout flows.",

    type: "extras",
    icon: FaShoppingCart,

    deliverables:
      "Configured storefront experience with products, cart, checkout, and payment integration",

    features: [
      "Product page setup",
      "Product catalogue structure",
      "Shopping cart functionality",
      "Secure checkout flow",
      "Payment processor integration",
      "Responsive purchasing experience",
      "Order confirmation workflow",
      "Checkout testing",
    ],

    whatsIncluded: [
      "E-commerce setup for the agreed platform",
      "Product & catalogue configuration",
      "Shopping cart setup",
      "Payment gateway integration",
      "Checkout experience",
      "Responsive optimization",
      "Transaction flow testing",
      "Launch support",
    ],

    whatsNotIncluded: [
      "Product photography",
      "Product copywriting unless discussed",
      "Inventory migration outside agreed scope",
      "Third-party platform fees",
      "Payment processor fees",
      "Ongoing store management",
      "Custom ERP or fulfillment systems",
    ],

    revisionLimits: "2 rounds of revisions",

    supportPeriod: "2 weeks post-launch support",

    optionalAddOns: [
      "Additional products",
      "Custom email notifications",
      "CMS integration",
      "SEO Setup",
      "Ongoing maintenance",
    ],

    note: "Final scope depends on product volume, payment requirements, shipping rules, platform, and required integrations.",
  },

  {
    title: "Blog Setup",
    slug: "blog-setup",

    seoTitle: "Website Blog Setup | VRB Web Design & Development",

    seoDescription:
      "Add an easy-to-manage blog with reusable post templates, categories, CMS integration, and SEO-friendly structure.",

    startingAt: "$500",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Businesses adding articles, resources, updates, or other recurring content",

    description:
      "Add a structured, easy-to-manage blog to your existing website so you can publish useful content without rebuilding pages every time you post.",

    type: "extras",
    icon: FaBlog,

    deliverables:
      "Blog index, reusable post template, content management setup, and publishing structure",

    features: [
      "Blog index setup",
      "Reusable article template",
      "CMS configuration",
      "Category or topic structure",
      "SEO-friendly URLs",
      "Responsive layouts",
    ],

    whatsIncluded: [
      "Blog landing page",
      "Reusable blog post template",
      "CMS or content workflow setup",
      "Category structure",
      "Responsive optimization",
      "Publishing guidance",
    ],

    whatsNotIncluded: [
      "Ongoing article writing",
      "Large-scale content migration",
      "Advanced SEO strategy",
      "Ongoing blog management",
    ],

    revisionLimits: "2 rounds of revisions",

    optionalAddOns: [
      "Content Strategy",
      "SEO Setup",
      "Article migration",
      "Copywriting support",
    ],
  },

  {
    title: "API Integration",
    slug: "api-integration",

    seoTitle: "API Integration Services | VRB Web Design & Development",

    seoDescription:
      "Connect your website or application to third-party services, platforms, and data sources with custom API integration.",

    startingAt: "$2,000",
    timeline: "2 - 6 Weeks",

    bestFor:
      "Websites and applications that need to exchange data with external services",

    description:
      "Connect your website or application to external platforms and services so data and functionality can move reliably between systems.",

    type: "extras",
    icon: FaPlug,

    deliverables:
      "Implemented and tested API integration with required data mapping and application workflows",

    features: [
      "API requirements review",
      "Authentication setup",
      "Endpoint integration",
      "Data mapping",
      "Error handling",
      "Frontend or backend integration",
      "Integration testing",
    ],

    whatsIncluded: [
      "Integration planning",
      "API authentication configuration",
      "Required endpoint connections",
      "Data transformation & mapping",
      "Error handling",
      "Testing",
      "Implementation documentation",
    ],

    whatsNotIncluded: [
      "Third-party API fees",
      "Development of the external API itself",
      "Unsupported or undocumented third-party systems",
      "Ongoing third-party service management",
      "Major application redevelopment outside the integration scope",
    ],

    supportPeriod: "2 weeks after launch",

    optionalAddOns: [
      "Custom Web Application Development",
      "Custom Email Solutions",
      "Ongoing maintenance",
      "Additional integrations",
    ],

    note: "Final scope depends on the third-party API, available documentation, authentication requirements, rate limits, and required data workflows.",
  },

  {
    title: "Maintenance & Support",
    slug: "maintenance-support",

    seoTitle: "Website Maintenance Services | VRB Web Design & Development",

    seoDescription:
      "Ongoing website maintenance, updates, troubleshooting, and support to keep your website current and running smoothly.",

    startingAt: "$250",
    timeline: "Monthly",

    bestFor:
      "Businesses that want ongoing help maintaining and updating their website",

    description:
      "Keep your website current and running smoothly with ongoing technical support, routine updates, troubleshooting, and minor content changes.",

    type: "extras",
    icon: FaTools,

    deliverables: "Ongoing monthly website maintenance and technical support",

    features: [
      "Routine website updates",
      "Technical troubleshooting",
      "Minor content changes",
      "Dependency & software updates",
      "Basic website health checks",
      "Priority support for maintenance clients",
    ],

    whatsIncluded: [
      "Agreed monthly maintenance time",
      "Minor website updates",
      "Routine technical maintenance",
      "Troubleshooting",
      "Minor content changes",
    ],

    whatsNotIncluded: [
      "Full redesigns",
      "Large new features",
      "Major content creation",
      "Third-party subscription costs",
      "Unused hours unless otherwise agreed",
    ],

    optionalAddOns: [
      "Additional development hours",
      "SEO support",
      "Performance Optimization",
      "Website Refresh",
    ],

    note: "Maintenance scope and available hours depend on the selected maintenance or retainer arrangement.",
  },

  {
    title: "Content Management System (CMS)",
    slug: "content-management-system",

    seoTitle: "CMS Integration Services | VRB Web Design & Development",

    seoDescription:
      "Add a content management system that makes it easier to update website text, images, posts, and other recurring content.",

    startingAt: "$1,200",
    timeline: "1 - 3 Weeks",

    bestFor:
      "Businesses that want to update website content without editing code",

    description:
      "Add an easy-to-manage content system that gives you control over frequently updated website content without requiring code changes.",

    type: "extras",
    icon: FaWpforms,

    deliverables:
      "Configured CMS, editable content structure, templates, and editor training",

    features: [
      "CMS setup",
      "Content model planning",
      "Editable page content",
      "Image management",
      "Reusable content structures",
      "Frontend integration",
      "Editor training",
    ],

    whatsIncluded: [
      "CMS configuration",
      "Content structure setup",
      "Integration with agreed website sections",
      "Reusable content fields",
      "Testing",
      "Editor training",
      "Basic documentation",
    ],

    whatsNotIncluded: [
      "Large-scale content entry",
      "Copywriting",
      "Complete website redesign",
      "Third-party CMS subscription costs",
      "Ongoing content management",
    ],

    supportPeriod: "2 weeks after handoff",

    optionalAddOns: [
      "Blog Setup",
      "Content migration",
      "Additional content types",
      "Ongoing maintenance",
    ],
  },

  {
    title: "Branding & Logo Design",
    slug: "branding-logo-design",

    seoTitle: "Branding & Logo Design | VRB Web Design & Development",

    seoDescription:
      "Create or refresh a practical visual identity with logo design, colour palette, typography, and brand guidelines.",

    startingAt: "$1,200",
    timeline: "2 - 4 Weeks",

    bestFor:
      "Small businesses needing a cohesive visual identity for their website and marketing materials",

    description:
      "Create or refresh the core visual elements of your brand with a cohesive logo, colour palette, typography direction, and practical guidelines for consistent use.",

    type: "extras",
    icon: FaPalette,

    deliverables:
      "Logo package, colour palette, typography direction, and basic visual brand guide",

    features: [
      "Visual direction exploration",
      "Logo concept development",
      "Colour palette",
      "Typography selection",
      "Logo variations",
      "Basic usage guidelines",
    ],

    whatsIncluded: [
      "Brand discovery",
      "Logo concept development",
      "Primary logo",
      "Supporting logo variations",
      "Colour palette",
      "Typography recommendations",
      "Basic brand guidelines",
      "Final logo files",
    ],

    whatsNotIncluded: [
      "Full brand strategy",
      "Naming services",
      "Copywriting",
      "Packaging design",
      "Large marketing collateral suites",
      "Ongoing graphic design",
    ],

    revisionLimits: "2 rounds of revisions",

    optionalAddOns: [
      "Business card design",
      "Social media assets",
      "Website design",
      "Additional marketing materials",
    ],
  },

  {
    title: "Hosting & Deployment",
    slug: "hosting-deployment",

    seoTitle:
      "Website Hosting & Deployment Setup | VRB Web Design & Development",

    seoDescription:
      "Launch your website with hosting configuration, domain connection, SSL setup, and deployment support.",

    startingAt: "$300",
    timeline: "1 - 3 Days",

    bestFor: "Websites that are complete and ready to be launched",

    description:
      "Get your completed website live with the hosting, domain, SSL, and deployment configuration needed for a secure production launch.",

    type: "extras",
    icon: FaCloudUploadAlt,

    deliverables:
      "Production deployment, domain connection, SSL configuration, and launch verification",

    features: [
      "Hosting configuration",
      "Production deployment",
      "Domain connection",
      "DNS configuration",
      "SSL setup",
      "Launch verification",
    ],

    whatsIncluded: [
      "Hosting setup",
      "Domain connection",
      "DNS configuration",
      "SSL configuration",
      "Production deployment",
      "Post-launch verification",
    ],

    whatsNotIncluded: [
      "Hosting fees",
      "Domain registration fees",
      "Website development",
      "Email hosting unless discussed",
      "Ongoing hosting management",
    ],

    supportPeriod: "1 week after deployment",

    optionalAddOns: [
      "Custom Email Solutions",
      "Maintenance & Support",
      "Website Migration",
    ],
  },

  {
    title: "Training & Documentation",
    slug: "training-documentation",

    seoTitle: "Website Training & Documentation | VRB Web Design & Development",

    seoDescription:
      "Receive personalized website documentation and walkthroughs so your team can confidently manage common website tasks.",

    startingAt: "$400",
    timeline: "1 Week",

    bestFor:
      "Business owners or teams taking over management of a website or application",

    description:
      "Get practical documentation and personalized walkthroughs showing you how to manage the parts of your website or application you're responsible for.",

    type: "extras",
    icon: FaChalkboardTeacher,

    deliverables:
      "Customized documentation and recorded walkthrough of agreed website workflows",

    features: [
      "Workflow documentation",
      "Step-by-step instructions",
      "Recorded walkthrough",
      "Content management guidance",
      "Common task reference material",
    ],

    whatsIncluded: [
      "Customized written guide",
      "Recorded walkthrough",
      "Documentation for agreed workflows",
      "Handoff session",
    ],

    whatsNotIncluded: [
      "Ongoing staff training",
      "Technical developer documentation unless discussed",
      "Ongoing website management",
    ],

    supportPeriod: "2 weeks for follow-up questions",
  },

  {
    title: "Website Security Review",
    slug: "website-security-review",

    seoTitle: "Website Security Review | VRB Web Design & Development",

    seoDescription:
      "Review website security fundamentals including authentication, authorization, data handling, dependencies, and common configuration concerns.",

    startingAt: "$600",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Websites and applications that handle accounts, forms, or user data",

    description:
      "Review your website or application for common security concerns and identify practical improvements related to authentication, authorization, data handling, configuration, and application security practices.",

    type: "extras",
    icon: FaShieldAlt,

    deliverables:
      "Security review with documented findings and prioritized recommendations",

    features: [
      "Authentication review",
      "Authorization review",
      "Data handling review",
      "Dependency & configuration review",
      "Form & input handling observations",
      "Common application security checks",
      "Prioritized recommendations",
    ],

    whatsIncluded: [
      "Application security review",
      "Documented observations",
      "Prioritized recommendations",
      "Guidance for identified improvements",
    ],

    whatsNotIncluded: [
      "Penetration testing",
      "Security certification",
      "Compliance certification",
      "24/7 security monitoring",
      "Guaranteed protection from security incidents",
    ],

    optionalAddOns: [
      "Implementation of recommended fixes",
      "Ongoing maintenance",
      "Custom Web Application Development",
    ],

    note: "This service is a development-focused security review and is not a substitute for professional penetration testing, compliance auditing, or specialized cybersecurity services.",
  },

  {
    title: "Custom Email Solutions",
    slug: "custom-email-solutions",

    seoTitle: "Custom Website Email Solutions | VRB Web Design & Development",

    seoDescription:
      "Set up branded transactional emails, notification workflows, and email service integrations for websites and web applications.",

    startingAt: "$350",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Websites and applications that need automated customer or system emails",

    description:
      "Create reliable, branded email workflows for website and application events such as account notifications, purchases, confirmations, and other automated communication.",

    type: "extras",
    icon: FaEnvelopeOpenText,

    deliverables:
      "Configured email templates and integration with the agreed email delivery service",

    features: [
      "Transactional email setup",
      "Branded email templates",
      "Dynamic email content",
      "SMTP or email service integration",
      "Trigger-based email workflows",
      "Responsive email testing",
    ],

    whatsIncluded: [
      "Email service configuration",
      "Agreed email template setup",
      "Dynamic data integration",
      "Email trigger implementation",
      "Testing",
    ],

    whatsNotIncluded: [
      "Email service subscription costs",
      "Large marketing campaigns",
      "Ongoing newsletter management",
      "Email list acquisition",
    ],

    optionalAddOns: [
      "Additional email templates",
      "API Integration",
      "Custom Web Application Development",
    ],
  },
  {
    title: "Mobile & Responsive Optimization",

    slug: "mobile-responsive-optimization",

    seoTitle:
      "Mobile & Responsive Website Optimization | VRB Web Design & Development",

    seoDescription:
      "Improve an existing website across mobile, tablet, and desktop with responsive layout fixes, navigation improvements, and better mobile usability.",

    startingAt: "$700",

    timeline: "1 - 2 Weeks",

    bestFor:
      "Websites that work on desktop but have layout, navigation, or usability issues on smaller screens",

    description:
      "Improve how your existing website adapts across screen sizes with responsive layout fixes, mobile navigation improvements, touch-friendly interactions, and refinements that create a more consistent experience across devices.",

    type: "extras",

    icon: FaMobileAlt,

    deliverables:
      "Responsive improvements across agreed pages with mobile, tablet, and desktop testing",

    features: [
      "Responsive layout review",
      "Mobile navigation improvements",
      "Breakpoint refinements",
      "Typography & spacing adjustments",
      "Touch target improvements",
      "Image & media responsiveness",
      "Overflow & layout fixes",
      "Cross-device testing",
    ],

    whatsIncluded: [
      "Responsive review of agreed pages",
      "Mobile layout improvements",
      "Tablet layout improvements",
      "Navigation refinements",
      "Responsive typography & spacing fixes",
      "Button & touch target improvements",
      "Responsive image & media fixes",
      "Testing across common screen sizes",
    ],

    whatsNotIncluded: [
      "Complete website redesign",
      "New page designs",
      "Major content restructuring",
      "New custom functionality",
      "Performance optimization outside responsive issues",
      "Ongoing website maintenance",
    ],

    supportPeriod: "1 week after completion",

    optionalAddOns: [
      "Website Refresh",
      "Performance Optimization",
      "Accessibility Review",
      "UI/UX Audit",
    ],

    note: "Responsive design is included in new websites I build. This standalone service is intended for existing websites that need their current mobile and tablet experience improved.",
  },

  {
    title: "Booking System Integration",
    slug: "booking-system-integration",

    seoTitle:
      "Online Booking System Integration | VRB Web Design & Development",

    seoDescription:
      "Add online appointment or service booking with scheduling, calendar integration, and confirmation workflows.",

    startingAt: "$600",
    timeline: "1 - 3 Weeks",

    bestFor:
      "Service businesses that want customers to book appointments online",

    description:
      "Make it easier for customers to schedule appointments, consultations, or services through an integrated online booking experience.",

    type: "extras",
    icon: FaCalendarAlt,

    deliverables:
      "Configured booking experience with scheduling, calendar connection, and confirmation workflow",

    features: [
      "Booking interface integration",
      "Service or appointment setup",
      "Availability configuration",
      "Calendar synchronization",
      "Confirmation workflow",
      "Responsive booking experience",
    ],

    whatsIncluded: [
      "Booking platform integration",
      "Basic service configuration",
      "Calendar connection",
      "Booking flow setup",
      "Confirmation setup",
      "Testing",
    ],

    whatsNotIncluded: [
      "Third-party booking fees",
      "Complex custom scheduling applications",
      "Ongoing appointment management",
      "Payment processing unless included in scope",
    ],

    optionalAddOns: [
      "Payment integration",
      "Custom Email Solutions",
      "Additional booking workflows",
    ],
  },

  {
    title: "Website Migration",
    slug: "website-migration",

    seoTitle: "Website Migration Services | VRB Web Design & Development",

    seoDescription:
      "Move your website, content, domain, or hosting setup to a new platform or provider with careful migration and launch verification.",

    startingAt: "$800",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Businesses moving an existing website to a new host, platform, or deployment environment",

    description:
      "Move your website to a new hosting provider or platform while preserving important content, URLs, configuration, and functionality wherever the destination allows.",

    type: "extras",
    icon: FaCloudUploadAlt,

    deliverables:
      "Website transfer, required configuration changes, and post-migration verification",

    features: [
      "Migration planning",
      "Website file transfer",
      "Content transfer",
      "DNS updates",
      "Domain configuration",
      "Redirect review",
      "Post-migration testing",
    ],

    whatsIncluded: [
      "Migration assessment",
      "Agreed website transfer",
      "Domain & DNS configuration",
      "Basic redirect setup",
      "Post-migration testing",
      "Launch verification",
    ],

    whatsNotIncluded: [
      "Complete website redesign",
      "Large-scale content restructuring",
      "Third-party platform fees",
      "Unsupported legacy systems",
      "New functionality outside the migration scope",
    ],

    supportPeriod: "1 week after migration",

    optionalAddOns: [
      "Website Redesign",
      "Performance Optimization",
      "SEO Setup",
      "Maintenance & Support",
    ],

    note: "Migration complexity varies significantly by platform, website size, integrations, and existing technical setup.",
  },

  {
    title: "Landing Pages",
    slug: "landing-pages",

    seoTitle: "Custom Landing Page Design | VRB Web Design & Development",

    seoDescription:
      "Custom landing page design and development for campaigns, services, lead generation, and focused marketing goals.",

    startingAt: "$700",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Campaigns, service launches, lead generation, and focused marketing goals",

    description:
      "Create a focused landing page built around one clear goal, with intentional content hierarchy, responsive design, and calls to action that make the next step obvious.",

    type: "extras",
    icon: FaPalette,

    deliverables: "Custom designed and developed responsive landing page",

    features: [
      "Custom page design",
      "Content hierarchy",
      "CTA strategy",
      "Responsive development",
      "Basic SEO setup",
      "Contact or lead form integration",
      "Launch support",
    ],

    whatsIncluded: [
      "One custom landing page",
      "Responsive design",
      "CTA placement & hierarchy",
      "Basic on-page SEO",
      "Form integration where required",
      "Development & deployment",
    ],

    whatsNotIncluded: [
      "Full website redesign",
      "Long-form copywriting unless discussed",
      "Paid advertising",
      "Ongoing campaign management",
      "Complex application functionality",
    ],

    revisionLimits: "2 rounds of revisions",

    supportPeriod: "1 week post-launch",

    optionalAddOns: [
      "Copywriting support",
      "Analytics & Conversion Tracking",
      "SEO Setup",
      "Additional landing pages",
    ],
  },

  {
    title: "Content Strategy",
    slug: "content-strategy",

    seoTitle: "Website Content Strategy | VRB Web Design & Development",

    seoDescription:
      "Plan website messaging, page structure, information hierarchy, and content organization for a clearer user experience.",

    startingAt: "$900",
    timeline: "2 - 4 Weeks",

    bestFor:
      "Websites with unclear, outdated, duplicated, or difficult-to-organize content",

    description:
      "Create a clearer plan for what your website needs to say, where information belongs, and how visitors should move through the content.",

    type: "extras",
    icon: FaBlog,

    deliverables:
      "Content audit, recommended sitemap, content hierarchy, and page-level recommendations",

    features: [
      "Existing content audit",
      "Information architecture review",
      "Sitemap planning",
      "Content hierarchy",
      "Page purpose definition",
      "Messaging recommendations",
      "Content gap identification",
      "Internal linking opportunities",
    ],

    whatsIncluded: [
      "Content audit",
      "Recommended sitemap",
      "Page structure recommendations",
      "Content hierarchy recommendations",
      "Content gaps & duplication findings",
      "Prioritized content plan",
    ],

    whatsNotIncluded: [
      "Full copywriting",
      "Blog article writing",
      "Website development",
      "Ongoing content management",
      "Advanced keyword research unless discussed",
    ],

    supportPeriod: "2 weeks for follow-up questions",

    optionalAddOns: [
      "Copywriting support",
      "SEO Setup",
      "Website Redesign",
      "Blog Setup",
    ],
  },

  {
    title: "Conversion Optimization",
    slug: "conversion-optimization",

    seoTitle: "Website Conversion Optimization | VRB Web Design & Development",

    seoDescription:
      "Review key website pages and improve calls to action, user flows, content hierarchy, and conversion opportunities.",

    startingAt: "$900",
    timeline: "2 - 4 Weeks",

    bestFor:
      "Websites that receive visitors but have unclear or ineffective paths to action",

    description:
      "Review important customer journeys and identify opportunities to make actions such as contacting, booking, purchasing, or requesting information clearer and easier to complete.",

    type: "extras",
    icon: FaTachometerAlt,

    deliverables:
      "Conversion-focused review with prioritized UX, content hierarchy, and CTA recommendations",

    features: [
      "Key page review",
      "CTA analysis",
      "User journey review",
      "Content hierarchy assessment",
      "Form friction review",
      "Trust & clarity observations",
      "Prioritized recommendations",
    ],

    whatsIncluded: [
      "Review of agreed conversion pages",
      "CTA recommendations",
      "User flow observations",
      "Form usability observations",
      "Content hierarchy recommendations",
      "Prioritized improvement plan",
    ],

    whatsNotIncluded: [
      "Guaranteed conversion increases",
      "Paid advertising",
      "Ongoing analytics management",
      "Formal A/B testing unless separately scoped",
      "Implementation unless discussed",
    ],

    supportPeriod: "2 weeks for follow-up questions",

    optionalAddOns: [
      "Implementation of recommended changes",
      "Analytics & Conversion Tracking",
      "UI/UX Audit",
      "Landing Page Design",
    ],

    note: "This service identifies and improves conversion opportunities but does not guarantee a specific increase in leads, sales, or conversion rate.",
  },

  {
    title: "Accessibility Review",
    slug: "accessibility-review",

    seoTitle: "Website Accessibility Review | VRB Web Design & Development",

    seoDescription:
      "Review website accessibility including keyboard navigation, contrast, semantic structure, forms, images, and responsive usability.",

    startingAt: "$600",
    timeline: "1 - 2 Weeks",

    bestFor:
      "Businesses wanting a more inclusive and accessible website experience",

    description:
      "Review your website for common accessibility barriers and identify practical improvements that make content and interactions easier to use for more people.",

    type: "extras",
    icon: FaRegEye,

    deliverables:
      "Accessibility review with documented findings, examples, and prioritized recommendations",

    features: [
      "Keyboard navigation review",
      "Focus state review",
      "Colour contrast checks",
      "Heading & semantic structure review",
      "Image alternative text review",
      "Form accessibility review",
      "Interactive element review",
      "Responsive usability review",
    ],

    whatsIncluded: [
      "Accessibility review of agreed pages",
      "Documented findings",
      "Examples of identified barriers",
      "Prioritized recommendations",
      "Practical remediation guidance",
    ],

    whatsNotIncluded: [
      "Formal accessibility certification",
      "Legal compliance certification",
      "Assistive technology testing by users with disabilities",
      "Implementation of fixes unless discussed",
      "Ongoing accessibility monitoring",
    ],

    supportPeriod: "2 weeks for questions after delivery",

    optionalAddOns: [
      "Accessibility remediation",
      "UI/UX Audit",
      "Website Refresh",
      "Ongoing maintenance",
    ],

    note: "This service provides a practical accessibility review and improvement guidance. It is not a legal compliance audit or accessibility certification.",
  },

  {
    title: "Design System & Component Library",
    slug: "design-system-component-library",

    seoTitle:
      "Design System & Component Library Services | VRB Web Design & Development",

    seoDescription:
      "Create a reusable design system and component library that improves interface consistency, scalability, and development efficiency.",

    startingAt: "$2,400",
    timeline: "3 - 6 Weeks",

    bestFor:
      "Growing websites and applications with inconsistent or repeatedly recreated interface components",

    description:
      "Turn repeated interface patterns into a more consistent and reusable system of components, states, styles, and interaction rules that can scale with your product.",

    type: "extras",
    icon: FaPalette,

    deliverables:
      "Reusable component system with documented variants, states, and visual foundations",

    features: [
      "Existing UI inventory",
      "Component audit",
      "Typography & colour foundations",
      "Spacing & layout conventions",
      "Reusable UI components",
      "Component variants & states",
      "Responsive behaviour",
      "Accessibility considerations",
      "Component documentation",
    ],

    whatsIncluded: [
      "UI & component inventory",
      "Reusable component architecture",
      "Core visual foundations",
      "Component states & variants",
      "Responsive considerations",
      "Accessibility considerations",
      "Documentation",
    ],

    whatsNotIncluded: [
      "Complete product redesign unless discussed",
      "Full application redevelopment",
      "Unlimited component creation",
      "Ongoing product design",
    ],

    revisionLimits: "2 rounds of revisions",

    optionalAddOns: [
      "Storybook setup",
      "Additional components",
      "UI/UX Audit",
      "Frontend implementation",
      "Ongoing design system support",
    ],

    note: "Final scope depends on the size of the existing interface and the number and complexity of components required.",
  },

  {
    title: "Analytics & Conversion Tracking",
    slug: "analytics-conversion-tracking",

    seoTitle:
      "Website Analytics & Conversion Tracking Setup | VRB Web Design & Development",

    seoDescription:
      "Set up website analytics and conversion tracking to measure important visitor actions and understand how people use your website.",

    startingAt: "$450",
    timeline: "2 - 5 Days",

    bestFor:
      "Businesses that want better visibility into website traffic and important customer actions",

    description:
      "Set up analytics and meaningful conversion events so you can better understand how visitors use your website and whether they complete important actions.",

    type: "extras",
    icon: FaTachometerAlt,

    deliverables:
      "Analytics configuration with agreed conversion events and verification",

    features: [
      "Analytics setup",
      "Conversion event planning",
      "Form submission tracking",
      "CTA interaction tracking",
      "Key page tracking",
      "Configuration testing",
    ],

    whatsIncluded: [
      "Analytics property setup or review",
      "Tracking code configuration",
      "Agreed conversion event setup",
      "Basic event testing",
      "Configuration verification",
    ],

    whatsNotIncluded: [
      "Ongoing analytics reporting",
      "Paid advertising management",
      "Advanced data engineering",
      "Guaranteed conversion improvements",
    ],

    optionalAddOns: [
      "Conversion Optimization",
      "SEO Setup",
      "Landing Pages",
      "Ongoing reporting",
    ],
  },
];

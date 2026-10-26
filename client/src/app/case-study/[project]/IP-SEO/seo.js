// InspectionPal SEO Case Study
// Google Search Console: September 14 – October 24, 2026
// Exported: October 26, 2026

export const data = {
  id: "inspectionpal",
  slug: "inspectionpal",

  project: {
    name: "InspectionPal",
    website: "https://inspectionpal.com",
    industry: "Automotive dealership safety and compliance software",
    description:
      "Establishing organic search visibility for an existing safety management platform built for automotive dealerships.",
    role: "SEO Strategy & Implementation",
    seoStartDate: "2026-09-15",
    trackingStartDate: "2026-09-15",
    status: "ongoing",
    lastUpdated: "2026-10-26",
    dataThrough: "2026-10-24",

    goals: [
      "Establish organic search visibility for InspectionPal.",
      "Improve technical SEO, crawlability and sitemap discovery.",
      "Clarify page targeting around dealership safety management and related services.",
      "Set up reliable organic search performance tracking.",
    ],

    services: [
      "SEO strategy",
      "Keyword research",
      "Technical SEO",
      "On-page SEO",
      "Google Search Console setup and monitoring",
    ],
  },

  startingPoint: {
    overview:
      "InspectionPal had been live for approximately a year or longer when SEO work began on September 15, 2026. The Gatsby website already offered dealership safety management software and supporting training and workplace safety products, but Google Search Console and other SEO tracking had not been configured. The project began by establishing a measurable SEO foundation and refining how the site presented its services in organic search.",

    challenges: [
      "No Google Search Console or other established SEO tracking before the project.",
      "No reliable historical organic search baseline for comparison.",
      "Sitemap submission/discovery needed correction after the initial setup.",
      "The existing pages needed clearer search-focused metadata and keyword targeting.",
    ],

    existingStrengths: [
      "An established, live website with a clear focus on automotive dealership safety management.",
      "Four existing public pages covering the platform, training, products and contact information.",
      "A reusable Gatsby SEO component that could be improved rather than rebuilt entirely.",
    ],

    initialIndexingStatus: null,
    initialSearchVisibility: null,

    baseline: {
      startDate: null,
      endDate: null,
      clicks: null,
      impressions: null,
      ctr: null,
      position: null,
    },
  },

  seoWork: [
    {
      id: "gsc-setup",
      date: "2026-09-15",
      category: "technical",
      title: "Set up Google Search Console",
      description:
        "Verified the domain property using DNS and established organic search tracking for the first time.",
      affectedPages: [
        "https://inspectionpal.com/",
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome:
        "Performance reporting became available; historical pre-project data remains unavailable.",
    },
    {
      id: "keyword-research",
      date: "2026-09-15",
      category: "research",
      title: "Research Canadian search demand",
      description:
        "Used Semrush Canada to assess safety management software (210 monthly searches, 23% KD), incident reporting software (260, 17%), safety inspection software (140, 15%), compliance management software (170, 33%), workplace safety software (90, 14%), inspection software (140, 35%) and dealership software (110, 42%). Chose safety management software for automotive dealerships as the homepage direction.",
      affectedPages: ["https://inspectionpal.com/"],
      outcome: null,
    },
    {
      id: "sitemap-robots",
      date: "2026-09-15",
      category: "technical",
      title: "Configure sitemap and robots.txt",
      description:
        "Configured Gatsby sitemap generation and robots.txt, with the sitemap index at /sitemap-index.xml and its URL referenced in robots.txt.",
      affectedPages: [
        "https://inspectionpal.com/",
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome: null,
    },
    {
      id: "remove-dsg",
      date: "2026-09-15",
      category: "technical",
      title: "Remove unused starter route",
      description:
        "Removed the Gatsby starter /using-dsg/ route and its template so it would no longer be part of the intended public site structure.",
      affectedPages: ["https://inspectionpal.com/using-dsg/"],
      outcome: null,
    },
    {
      id: "metadata-canonicals",
      date: "2026-09-15",
      category: "on-page",
      title: "Standardize SEO metadata and canonicals",
      description:
        "Updated the shared SEO component and page Head exports for unique titles, descriptions, canonical URLs, Open Graph metadata and Twitter metadata. Removed redundant page-level Helmet usage and meta keywords.",
      affectedPages: [
        "https://inspectionpal.com/",
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome: null,
    },
    {
      id: "homepage-content",
      date: "2026-09-15",
      category: "content",
      title: "Refine homepage search positioning",
      description:
        "Updated the homepage hero and supporting copy to clearly describe safety management software built for automotive dealerships, with natural references to inspections, incident reporting and compliance.",
      affectedPages: ["https://inspectionpal.com/"],
      outcome: null,
    },
    {
      id: "supporting-pages",
      date: "2026-09-15",
      category: "on-page",
      title: "Optimize supporting page metadata",
      description:
        "Refined page titles and descriptions for online safety training, workplace safety products and the contact page, retaining the existing Yoda Safety Services partnership context.",
      affectedPages: [
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome: null,
    },
    {
      id: "structured-data",
      date: "2026-09-15",
      category: "technical",
      title: "Implement shared structured data",
      description:
        "Included Organization and WebSite JSON-LD in page SEO output. The same schema is repeated across pages, so cleanup remains a future opportunity.",
      affectedPages: [
        "https://inspectionpal.com/",
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome: null,
    },
    {
      id: "sitemap-resubmit",
      date: "2026-09-21",
      category: "indexing",
      title: "Correct sitemap submission and request indexing",
      description:
        "Corrected the sitemap submission issue, resubmitted the sitemap in Google Search Console and requested indexing for key URLs.",
      affectedPages: [
        "https://inspectionpal.com/",
        "https://inspectionpal.com/training/",
        "https://inspectionpal.com/shop/",
        "https://inspectionpal.com/contact/",
      ],
      outcome:
        "Subsequent GSC exports show impressions for all four public pages; exact indexing status at the time was not recorded.",
    },
  ],

  searchConsole: {
    dailyPerformance: [
      { date: "2026-09-14", clicks: 0, impressions: 4, ctr: 0, position: 4 },
      { date: "2026-09-15", clicks: 0, impressions: 3, ctr: 0, position: 8.3 },
      {
        date: "2026-09-16",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-09-17", clicks: 1, impressions: 4, ctr: 25, position: 3.2 },
      { date: "2026-09-18", clicks: 0, impressions: 1, ctr: 0, position: 2 },
      { date: "2026-09-19", clicks: 0, impressions: 1, ctr: 0, position: 39 },
      {
        date: "2026-09-20",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-09-21", clicks: 0, impressions: 3, ctr: 0, position: 41 },
      { date: "2026-09-22", clicks: 0, impressions: 1, ctr: 0, position: 6 },
      { date: "2026-09-23", clicks: 2, impressions: 4, ctr: 50, position: 2.8 },
      {
        date: "2026-09-24",
        clicks: 1,
        impressions: 10,
        ctr: 10,
        position: 3.7,
      },
      { date: "2026-09-25", clicks: 0, impressions: 2, ctr: 0, position: 4.5 },
      { date: "2026-09-26", clicks: 0, impressions: 3, ctr: 0, position: 2 },
      {
        date: "2026-09-27",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-09-28", clicks: 0, impressions: 3, ctr: 0, position: 29.3 },
      { date: "2026-09-29", clicks: 0, impressions: 4, ctr: 0, position: 4.2 },
      { date: "2026-09-30", clicks: 0, impressions: 3, ctr: 0, position: 4.7 },
      { date: "2026-10-01", clicks: 1, impressions: 5, ctr: 20, position: 7.2 },
      { date: "2026-10-02", clicks: 0, impressions: 1, ctr: 0, position: 2 },
      { date: "2026-10-03", clicks: 0, impressions: 2, ctr: 0, position: 19 },
      { date: "2026-10-04", clicks: 0, impressions: 2, ctr: 0, position: 9 },
      { date: "2026-10-05", clicks: 0, impressions: 1, ctr: 0, position: 2 },
      { date: "2026-10-06", clicks: 0, impressions: 2, ctr: 0, position: 3 },
      { date: "2026-10-07", clicks: 0, impressions: 1, ctr: 0, position: 1 },
      { date: "2026-10-08", clicks: 0, impressions: 2, ctr: 0, position: 3 },
      {
        date: "2026-10-09",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-10-10", clicks: 0, impressions: 3, ctr: 0, position: 13 },
      { date: "2026-10-11", clicks: 0, impressions: 3, ctr: 0, position: 4 },
      { date: "2026-10-12", clicks: 0, impressions: 2, ctr: 0, position: 6.5 },
      {
        date: "2026-10-13",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-10-14", clicks: 0, impressions: 5, ctr: 0, position: 5.4 },
      { date: "2026-10-15", clicks: 0, impressions: 2, ctr: 0, position: 5 },
      {
        date: "2026-10-16",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-10-17", clicks: 0, impressions: 3, ctr: 0, position: 41.7 },
      { date: "2026-10-18", clicks: 0, impressions: 2, ctr: 0, position: 31.5 },
      {
        date: "2026-10-19",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-10-20", clicks: 0, impressions: 2, ctr: 0, position: 9 },
      {
        date: "2026-10-21",
        clicks: 0,
        impressions: 0,
        ctr: null,
        position: null,
      },
      { date: "2026-10-22", clicks: 0, impressions: 1, ctr: 0, position: 6 },
      {
        date: "2026-10-23",
        clicks: 1,
        impressions: 3,
        ctr: 33.33,
        position: 3,
      },
      { date: "2026-10-24", clicks: 0, impressions: 3, ctr: 0, position: 1 },
    ],

    snapshots: [
      {
        id: "gsc-2026-10-26",
        exportedAt: "2026-10-26",

        period: {
          startDate: "2026-09-14",
          endDate: "2026-10-24",
        },

        filters: {
          searchType: "web",
          country: null,
          device: null,
          searchAppearance: null,
        },

        totals: {
          clicks: 6,
          impressions: 91,
          ctr: 6.59,
          position: null,
        },

        queries: [
          {
            query: "safety pal",
            clicks: 0,
            impressions: 8,
            ctr: 0,
            position: 26.62,
          },
          {
            query:
              "where can i find personal protective equipment and cleanliness supplies for \nworkplaces?",
            clicks: 0,
            impressions: 4,
            ctr: 0,
            position: 6,
          },
          {
            query: "inspectall",
            clicks: 0,
            impressions: 2,
            ctr: 0,
            position: 41.5,
          },
          {
            query: "inspectal",
            clicks: 0,
            impressions: 1,
            ctr: 0,
            position: 11,
          },
        ],

        pages: [
          {
            page: "https://inspectionpal.com/",
            title: "Home",
            clicks: 6,
            impressions: 63,
            ctr: 9.52,
            position: 4.68,
          },
          {
            page: "https://inspectionpal.com/training/",
            title: "Online Safety Training",
            clicks: 0,
            impressions: 26,
            ctr: 0,
            position: 14.04,
          },
          {
            page: "https://inspectionpal.com/shop/",
            title: "Workplace Safety Products & Supplies",
            clicks: 0,
            impressions: 17,
            ctr: 0,
            position: 4.18,
          },
          {
            page: "https://inspectionpal.com/contact/",
            title: "Contact",
            clicks: 0,
            impressions: 17,
            ctr: 0,
            position: 12.47,
          },
        ],

        sourceFiles: {
          chart: "Chart(3).csv",
          queries: "Queries(3).csv",
          pages: "Pages(3).csv",
        },
      },
    ],

    highlights: [
      "The available September 14 to October 24 export records 91 impressions and 6 clicks across 41 daily records.",
      "All six clicks in the page export were attributed to the homepage.",
      "All four public pages recorded impressions.",
      "The disclosed query export accounts for 15 impressions; many searches are not shown in the query table.",
    ],
  },

  technicalCheckpoints: [
    {
      id: "technical-2026-09-15",
      date: "2026-09-15",

      indexing: {
        indexedPages: null,
        notIndexedPages: null,
        notes: ["Original Google indexing coverage was not recorded."],
      },

      sitemap: {
        submitted: null,
        status: null,
        discoveredPages: null,
        notes: [
          "Gatsby XML sitemap and robots.txt configuration was implemented during initial SEO work.",
          "Submission status at the end of September 15 is not independently confirmed.",
        ],
      },

      coreWebVitals: {
        mobile: null,
        desktop: null,
        notes: ["No verified Core Web Vitals assessment was recorded."],
      },

      issues: ["No pre-SEO tracking or reliable numerical baseline."],
    },
    {
      id: "technical-2026-09-21",
      date: "2026-09-21",

      indexing: {
        indexedPages: null,
        notIndexedPages: null,
        notes: [
          "Priority URLs were submitted for indexing.",
          "Exact indexed and non-indexed page counts were not recorded.",
        ],
      },

      sitemap: {
        submitted: true,
        status:
          "Resubmitted after correcting a submission issue; subsequent processing status not independently recorded.",
        discoveredPages: null,
        notes: [
          "Sitemap index: https://inspectionpal.com/sitemap-index.xml",
          "Gatsby sitemap output includes /sitemap-0.xml.",
        ],
      },

      coreWebVitals: {
        mobile: null,
        desktop: null,
        notes: ["No verified Core Web Vitals assessment was recorded."],
      },

      issues: [
        "Historical indexing counts and sitemap discovery counts unavailable.",
      ],
    },
  ],

  milestones: [
    {
      id: "milestone-seo-start",
      date: "2026-09-15",
      type: "implementation",
      title: "SEO implementation began",
      description:
        "Began keyword research, technical SEO configuration, metadata and content refinement, and first-time Google Search Console setup.",
      relatedWorkIds: [
        "gsc-setup",
        "keyword-research",
        "sitemap-robots",
        "remove-dsg",
        "metadata-canonicals",
        "homepage-content",
        "supporting-pages",
        "structured-data",
      ],
    },
    {
      id: "milestone-sitemap",
      date: "2026-09-21",
      type: "indexing",
      title: "Sitemap corrected and resubmitted",
      description:
        "Corrected the sitemap submission issue and requested indexing for priority pages.",
      relatedWorkIds: ["sitemap-resubmit"],
    },
    {
      id: "milestone-report",
      date: "2026-10-26",
      type: "performance",
      title: "First consolidated GSC export reviewed",
      description:
        "Reviewed 41 daily records and full available query and page exports for September 14 to October 24.",
      relatedWorkIds: [],
    },
  ],

  media: [],

  findings: {
    currentSummary:
      "InspectionPal now has an established SEO tracking and technical foundation, clearer keyword targeting and its first documented organic search performance dataset. From September 14 to October 24, 2026, Google Search Console recorded 91 impressions and 6 clicks. All four public pages received impressions, while the homepage accounted for all recorded clicks. These are early visibility signals, not evidence of sustained traffic growth or a causal lift from individual changes.",

    keyTakeaways: [
      "Established Google Search Console monitoring for an existing website that previously had no SEO tracking.",
      "Implemented and refined technical SEO, metadata, canonical URLs and page targeting across the four public pages.",
      "Recorded 91 impressions and 6 clicks in the first available 41-day GSC export.",
      "All four public pages received impressions; the homepage generated all six recorded clicks.",
      "The query export includes a workplace PPE and cleaning supplies question relevant to the Shop page topic, but the query-to-page relationship is not established.",
    ],

    limitations: [
      "No reliable pre-SEO GSC baseline exists; the reporting window begins one day before implementation.",
      "Low search volume and a short observation period limit conclusions about trends.",
      "The query export omits or anonymizes many searches: 15 query impressions versus 91 overall impressions.",
      "Page-level impressions total 123 and should not be summed to reproduce the site-wide total.",
      "Original indexing counts and Core Web Vitals results were not recorded.",
      "The official overall average position was not separately supplied in the exports.",
      "Search visibility cannot be causally attributed to specific SEO changes from these data alone.",
    ],

    nextSteps: [
      "Continue collecting consistent Google Search Console exports and preserving historical snapshots.",
      "Review query relevance and landing-page performance as search data accumulates.",
      "Verify current indexing coverage and sitemap discovery in Google Search Console.",
      "Assess mobile and desktop Core Web Vitals and image loading performance.",
      "Review repeated Organization and WebSite structured data and improve the social sharing image.",
    ],

    observations: [
      {
        id: "observation-2026-10-26",
        date: "2026-10-26",
        title: "Early visibility across all public pages",
        description:
          "The first consolidated export records 91 impressions and 6 clicks, with impressions for the homepage, Training, Shop and Contact pages. All six recorded page clicks came from the homepage.",
        relatedSnapshotIds: ["gsc-2026-10-26"],
      },
      {
        id: "observation-query-coverage",
        date: "2026-10-26",
        title: "Limited disclosed query coverage",
        description:
          "The query export shows four disclosed queries totaling 15 impressions, compared with 91 impressions in the daily chart. This limits conclusions about which searches generated visibility.",
        relatedSnapshotIds: ["gsc-2026-10-26"],
      },
    ],
  },

  updates: [
    {
      id: "update-2026-10-26",
      publishedAt: "2026-10-26",
      title: "Initial SEO visibility report",
      summary:
        "Established the initial living case study using confirmed September implementation history and the September 14 to October 24 Google Search Console export.",
      relatedSnapshotIds: ["gsc-2026-10-26"],
      relatedMilestoneIds: [
        "milestone-seo-start",
        "milestone-sitemap",
        "milestone-report",
      ],
    },
  ],
};

import Link from "next/link";
import styles from "./NewLine.module.css";

const services = [
  "Brand refinement",
  "Business card design",
  "Invoice template",
  "Quote template",
  "Signage concepts",
  "One-page website design",
];

const deliverables = [
  {
    number: "01",
    title: "Brand Direction",
    description:
      "A practical visual direction built around the company’s existing yellow, black, and white palette.",
  },
  {
    number: "02",
    title: "Business Materials",
    description:
      "A coordinated business card, invoice, and quote system designed for everyday client communication.",
  },
  {
    number: "03",
    title: "Exterior Signage",
    description:
      "Readable signage concepts that communicate the company’s services quickly from a distance.",
  },
  {
    number: "04",
    title: "Website Design",
    description:
      "A straightforward one-page website that introduces the business, services, and contact information.",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Clarity over decoration",
    description:
      "Every layout prioritizes the company name, services, and contact information before supporting visual details.",
  },
  {
    number: "02",
    title: "One recognizable system",
    description:
      "Repeated typography, spacing, colors, and visual treatments create consistency across print and digital materials.",
  },
  {
    number: "03",
    title: "Built for real use",
    description:
      "Templates were designed to remain easy to update, export, print, and send without requiring specialized software.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Review",
    description:
      "Reviewed the existing logo, business information, service categories, and current client-facing materials.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Created multiple layout directions for the business card, signage, and supporting documents.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Combined the strongest concepts and adjusted hierarchy, spacing, typography, and content placement.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Prepared polished print materials and translated the visual system into a responsive website direction.",
  },
];

function ImagePlaceholder({
  label,
  description,
  className = "",
  dark = false,
  wide = false,
}) {
  return (
    <div
      className={`${styles.imagePlaceholder} ${
        dark ? styles.imagePlaceholderDark : ""
      } ${wide ? styles.imagePlaceholderWide : ""} ${className}`}
    >
      <div className={styles.placeholderIcon} aria-hidden="true">
        <span />
        <span />
      </div>

      <div>
        <strong>{label}</strong>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function NewLineCaseStudy() {
  const showComingSoon = true; // set to false to show full case study

  if (showComingSoon) {
    return (
      <main className={styles.page}>
        <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Coming soon</h1>
            <p>This case study is being prepared and will be available shortly.</p>
            <Link href="/projects" className={styles.secondaryButton}>Back to projects</Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/projects">Projects</Link>
            <span>/</span>
            <span>Plumbing &amp; Heating</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Brand &amp; Business Design</span>

              <h1>
                Building a clear, practical brand system for a local trade
                company.
              </h1>

              <p className={styles.heroLead}>
                A connected collection of print and digital materials designed
                to help a plumbing, heating, and construction company present
                itself more consistently and professionally.
              </p>

              <div className={styles.heroActions}>
                <a href="#project" className={styles.primaryButton}>
                  Explore the project
                  <span aria-hidden="true">↓</span>
                </a>

                <Link href="/contact" className={styles.secondaryButton}>
                  Start a project
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.brandStripe} aria-hidden="true" />

              <ImagePlaceholder
                label="Main Project Image"
                description="Add a collage featuring the business card, sign, invoice, and website."
                className={styles.heroImage}
              />

              <div className={styles.heroBadge}>
                <span>Project type</span>
                <strong>Print + Digital</strong>
              </div>
            </div>
          </div>

          <div className={styles.projectMeta}>
            <div>
              <span>Client</span>
              <strong>Plumbing &amp; Heating Company</strong>
            </div>

            <div>
              <span>Industry</span>
              <strong>Trades &amp; Construction</strong>
            </div>

            <div>
              <span>Services</span>
              <strong>Brand, Print &amp; Web</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Nova Scotia</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro} id="project">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Project Overview</span>

              <h2>
                Turning separate business materials into one recognizable
                company presence.
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>
                The company needed a collection of practical materials that
                could support daily operations while presenting a more
                consistent image to customers.
              </p>

              <p>
                Rather than treating each item as an isolated design, the
                project established a flexible visual system that could work
                across business cards, documents, roadside signage, and a
                future-facing website.
              </p>
            </div>
          </div>

          <div className={styles.serviceList}>
            {services.map((service) => (
              <div className={styles.serviceItem} key={service}>
                <span className={styles.checkmark} aria-hidden="true">
                  ✓
                </span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <div className={styles.challengeGrid}>
            <div className={styles.challengeVisual}>
              <ImagePlaceholder
                label="Before / Existing Materials"
                description="Add the original logo, card, document, or existing brand materials."
                dark
              />

              <div className={styles.yellowCorner} aria-hidden="true" />
            </div>

            <div className={styles.challengeContent}>
              <span className={styles.eyebrowLight}>The Challenge</span>

              <h2>A trusted local service without a unified visual system.</h2>

              <p>
                The business already had recognizable elements, including its
                logo, bright yellow color, and established service offering.
                However, those elements were not yet being applied consistently
                across customer touchpoints.
              </p>

              <div className={styles.challengePoints}>
                <article>
                  <span>01</span>
                  <div>
                    <h3>Inconsistent presentation</h3>
                    <p>
                      Important business information changed in placement,
                      scale, and hierarchy from one material to another.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h3>Complex service offering</h3>
                    <p>
                      Plumbing, heating, construction, garage packages, and
                      related services needed to be communicated without
                      overcrowding each design.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h3>Print and digital requirements</h3>
                    <p>
                      The system needed to remain recognizable across small
                      business cards, large signs, editable documents, and
                      responsive web layouts.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directionSection}>
        <div className={styles.container}>
          <div className={styles.directionHeader}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Visual Direction</span>
              <h2>Bold enough to be noticed. Simple enough to be trusted.</h2>
            </div>

            <p>
              The direction combines the practical confidence of a trade
              company with cleaner spacing, stronger typography, and a more
              controlled use of the existing yellow accent.
            </p>
          </div>

          <div className={styles.brandBoard}>
            <div className={styles.brandBoardMain}>
              <ImagePlaceholder
                label="Logo Presentation"
                description="Add the primary logo and alternate logo treatments."
              />
            </div>

            <div className={styles.paletteCard}>
              <span className={styles.cardLabel}>Color palette</span>

              <div className={styles.swatches}>
                <div className={`${styles.swatch} ${styles.swatchYellow}`}>
                  <span>#F2C300</span>
                </div>

                <div className={`${styles.swatch} ${styles.swatchBlack}`}>
                  <span>#171717</span>
                </div>

                <div className={`${styles.swatch} ${styles.swatchWhite}`}>
                  <span>#FFFFFF</span>
                </div>
              </div>
            </div>

            <div className={styles.typeCard}>
              <span className={styles.cardLabel}>Typography</span>

              <div className={styles.typeExample}>
                <strong>Oswald</strong>
                <p>Headlines and service labels</p>
              </div>

              <div className={styles.typeExample}>
                <strong>Montserrat</strong>
                <p>Body copy and business information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.deliverablesSection}>
        <div className={styles.container}>
          <div className={styles.deliverablesHeader}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Project Deliverables</span>
              <h2>One system, designed across every customer touchpoint.</h2>
            </div>

            <p>
              Each piece has a different purpose, but all share the same visual
              language and information hierarchy.
            </p>
          </div>

          <div className={styles.deliverablesList}>
            {deliverables.map((item) => (
              <article className={styles.deliverableRow} key={item.number}>
                <span className={styles.deliverableNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.container}>
          <div className={styles.showcaseBlock}>
            <div className={styles.showcaseCopy}>
              <span className={styles.eyebrow}>Business Card</span>
              <h2>Essential contact details, without visual clutter.</h2>

              <p>
                The business card balances the existing company character with
                a clearer, more structured layout. Contact names, titles, phone
                numbers, services, and legal business information remain easy
                to locate.
              </p>

              <ul className={styles.detailList}>
                <li>Clear separation between company and contact details</li>
                <li>Flexible layout for one or two primary contacts</li>
                <li>High-contrast typography for reliable print readability</li>
              </ul>
            </div>

            <div className={styles.showcaseVisual}>
              <ImagePlaceholder
                label="Business Card Mockup"
                description="Add the front and back card designs here."
              />
            </div>
          </div>

          <div
            className={`${styles.showcaseBlock} ${styles.showcaseBlockReverse}`}
          >
            <div className={styles.showcaseCopy}>
              <span className={styles.eyebrow}>Business Documents</span>
              <h2>Documents that feel professional and remain practical.</h2>

              <p>
                The invoice and quote templates use a shared structure so
                clients receive a consistent experience from the initial
                estimate through final payment.
              </p>

              <ul className={styles.detailList}>
                <li>Editable Word-based templates</li>
                <li>One-page layouts where project details allow</li>
                <li>Dedicated fields for HST and legal business information</li>
                <li>Clear subtotal, tax, and total-due hierarchy</li>
              </ul>
            </div>

            <div className={styles.documentGrid}>
              <ImagePlaceholder
                label="Invoice Template"
                description="Add invoice preview."
              />

              <ImagePlaceholder
                label="Quote Template"
                description="Add quote preview."
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.signageSection}>
        <div className={styles.container}>
          <div className={styles.signageHeader}>
            <div>
              <span className={styles.eyebrowLight}>Exterior Signage</span>
              <h2>Designed to communicate in a glance.</h2>
            </div>

            <p>
              The signage uses larger type, limited content, and carefully
              grouped contact details so the message remains understandable
              from a distance.
            </p>
          </div>

          <div className={styles.signageGallery}>
            <ImagePlaceholder
              label="Primary Sign Mockup"
              description="Add the selected sign concept."
              dark
              className={styles.signageMain}
            />

            <div className={styles.signageSide}>
              <ImagePlaceholder
                label="Alternate Concept"
                description="Add an alternate sign layout."
                dark
              />

              <ImagePlaceholder
                label="Installed View"
                description="Add a realistic roadside or building mockup."
                dark
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.websiteSection}>
        <div className={styles.container}>
          <div className={styles.websiteIntro}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>One-Page Website</span>
              <h2>A straightforward digital home for the business.</h2>
            </div>

            <div>
              <p>
                The website direction translates the print system into a clean,
                responsive experience that gives potential customers the
                information they need without unnecessary complexity.
              </p>
            </div>
          </div>

          <div className={styles.browserMockup}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className={styles.browserAddress}>
                plumbingcompany.ca
              </div>
            </div>

            <ImagePlaceholder
              label="Website Homepage"
              description="Add the full desktop homepage design here."
              className={styles.browserContent}
              wide
            />
          </div>

          <div className={styles.mobileShowcase}>
            <div className={styles.mobileCopy}>
              <span className={styles.eyebrow}>Responsive Design</span>
              <h3>Built to remain clear on smaller screens.</h3>

              <p>
                Content stacks naturally on mobile, service information remains
                scannable, and phone numbers can be positioned as direct
                contact actions.
              </p>
            </div>

            <div className={styles.phoneFrame}>
              <div className={styles.phoneSpeaker} />
              <ImagePlaceholder
                label="Mobile Website"
                description="Add mobile homepage."
                className={styles.phoneScreen}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.decisionsSection}>
        <div className={styles.container}>
          <div className={styles.decisionsHeader}>
            <span className={styles.eyebrow}>Design Decisions</span>
            <h2>The reasoning behind the visual system.</h2>
          </div>

          <div className={styles.decisionGrid}>
            {designDecisions.map((decision) => (
              <article className={styles.decisionCard} key={decision.number}>
                <span>{decision.number}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div className={styles.processHeading}>
              <span className={styles.eyebrowLight}>The Process</span>
              <h2>From scattered materials to a connected system.</h2>

              <p>
                The project developed through several practical stages, with
                each new deliverable helping define the next.
              </p>
            </div>

            <div className={styles.processSteps}>
              {processSteps.map((step) => (
                <article className={styles.processStep} key={step.number}>
                  <span>{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className={styles.container}>
          <div className={styles.outcomeCard}>
            <div className={styles.outcomeContent}>
              <span className={styles.eyebrow}>The Outcome</span>

              <h2>
                A more cohesive company presence, ready for print and digital
                use.
              </h2>

              <p>
                The final system gives the business a reliable foundation for
                presenting itself consistently across customer communication,
                printed materials, signage, and the web.
              </p>

              <div className={styles.outcomeStats}>
                <div>
                  <strong>6+</strong>
                  <span>Connected deliverables</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Unified visual system</span>
                </div>

                <div>
                  <strong>Print + Web</strong>
                  <span>Flexible applications</span>
                </div>
              </div>
            </div>

            <ImagePlaceholder
              label="Final Project Collage"
              description="Add a polished collection of the completed deliverables."
              className={styles.outcomeImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.nextProjectSection}>
        <div className={styles.container}>
          <div className={styles.nextProjectCard}>
            <span className={styles.eyebrowLight}>Have a project in mind?</span>

            <h2>Let’s turn your business materials into one clear system.</h2>

            <p>
              From individual designs to a complete brand and web experience, I
              create practical solutions built around how your business
              actually works.
            </p>

            <div className={styles.nextProjectActions}>
              <Link href="/contact" className={styles.lightButton}>
                Start a project
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/projects" className={styles.darkTextButton}>
                View more projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import styles from "../../[slug]/page.module.css";
import CTA3 from "../../../Components/CTA/CTA3/CTA3.component";
import Breadcrumbs from "../../../case-study/[project]/Components/Extras/Breadcrumbs/Breadcrumbs.component";
import OptionalAddOns from "../../[slug]/Add/Add.component";
import {
  buildPackageDetailHref,
  buildPackageTypeHref,
  findPackageBySlug,
  getPackageMetadata,
  resolvePackageType,
} from "../../packageRouting";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const routeType = resolvePackageType(resolvedParams?.type);

  if (!routeType) {
    return {
      title: "Packages — VRB",
      description: "Overview of packages available",
    };
  }

  const match = findPackageBySlug(resolvedParams?.slug, routeType);

  if (!match.pkg) {
    return {
      title: "Packages — VRB",
      description: "Overview of packages available",
    };
  }

  const title = match.pkg.seoTitle || match.pkg.title;
  const description = match.pkg.seoDescription || match.pkg.description || "";
  const canonical = `https://vrbwebdesignanddev.com${buildPackageDetailHref(
    match.resolvedType,
    match.pkg,
  )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
    },
    alternates: {
      canonical,
    },
  };
}

export default async function PackageDetailPage({ params }) {
  const resolvedParams = await params;
  const routeType = resolvePackageType(resolvedParams?.type);

  if (!routeType) {
    notFound();
  }

  const match = findPackageBySlug(resolvedParams?.slug, routeType);

  if (!match.pkg) {
    notFound();
  }

  if (match.resolvedType !== routeType) {
    permanentRedirect(buildPackageDetailHref(match.resolvedType, match.pkg));
  }

  const meta = getPackageMetadata(match.resolvedType);

  return (
    <main>
      <div className={styles.packagePage}>
        {/* BREADCRUMBS */}
        <div className={styles.breadcrumbs}>
          <Breadcrumbs
            current={match.pkg.title}
            first="Extras"
            firstLink={buildPackageTypeHref(match.resolvedType)}
          />
        </div>

        {/* =====================================
        HERO
    ===================================== */}
        <section className={styles.hero}>
          <div className={styles.heroArtwork} aria-hidden="true">
            <span className={styles.heroOrbit} />
            <span className={styles.heroOrbitInner} />
            <span className={styles.heroPixelOne} />
            <span className={styles.heroPixelTwo} />
            <span className={styles.heroPixelThree} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroTopline}>
              <span className={styles.heroMarker} aria-hidden="true">
                <span />
                <span />
              </span>
              <span className={styles.eyebrow}>{meta.eyebrow}</span>
            </div>

            <h1 className={styles.title}>{match.pkg.title}</h1>

            <p className={styles.description}>{match.pkg.description}</p>

            <div className={styles.heroActions}>
              <a href="/contact" className={styles.primaryButton}>
                Book a Consultation
                <span aria-hidden="true">↗</span>
              </a>

              <a href="/work" className={styles.secondaryButton}>
                View My Work
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <aside className={styles.summaryCard}>
            <div className={styles.summaryTopline}>
              <span>Package Overview</span>
              <span aria-hidden="true">↗</span>
            </div>

            <div className={styles.summaryItem}>
              <span>Starting Investment</span>
              <strong>{match.pkg.startingAt}</strong>
            </div>

            <div className={styles.summaryItem}>
              <span>Estimated Timeline</span>
              <p>{match.pkg.timeline}</p>
            </div>

            <div className={styles.summaryItem}>
              <span>Best For</span>
              <p>{match.pkg.bestFor}</p>
            </div>

            <div className={styles.summaryBottom} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </aside>
        </section>

        {/* =====================================
        OVERVIEW / OUTCOME
    ===================================== */}
        {match.pkg.deliverables && (
          <section className={styles.overviewSection}>
            <div className={styles.sectionIntro}>
              <span className={styles.eyebrow}>The Outcome</span>
              <h2>What You’ll Walk Away With</h2>
            </div>

            <div className={styles.outcome}>
              <span className={styles.outcomeNumber}>01</span>
              <p>{match.pkg.deliverables}</p>
            </div>
          </section>
        )}

        {/* =====================================
        FEATURES
    ===================================== */}
        {match.pkg.features?.length > 0 && (
          <section className={styles.featureSection}>
            <div className={styles.featureHeader}>
              <span className={styles.eyebrow}>What We’ll Work On</span>

              <h2>What This Service Covers</h2>

              <p>
                The key areas included in the scope of this service, tailored to
                your website, application, or project.
              </p>

              <div className={styles.featureHeaderAccent} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <ol className={styles.featureList}>
              {match.pkg.features.map((feature, index) => (
                <li key={feature}>
                  <span className={styles.featureNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.featureText}>{feature}</span>

                  <span className={styles.featureArrow} aria-hidden="true">
                    ↗
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* =====================================
        INCLUDED / NOT INCLUDED
    ===================================== */}
        {(match.pkg.whatsIncluded?.length > 0 ||
          match.pkg.whatsNotIncluded?.length > 0) && (
          <section className={styles.scopeSection}>
            <div className={styles.scopeHeader}>
              <span className={styles.eyebrow}>Project Scope</span>

              <h2>What’s Included</h2>

              <p>
                A clear breakdown of what is covered within the package and what
                would be scoped separately.
              </p>
            </div>

            <div className={styles.comparisonGrid}>
              {match.pkg.whatsIncluded?.length > 0 && (
                <div className={styles.listCard}>
                  <div className={styles.listCardTop}>
                    <span className={styles.cardLabel}>Included</span>
                    <span className={styles.listCardSymbol} aria-hidden="true">
                      +
                    </span>
                  </div>

                  <h3>What You Receive</h3>

                  <ul>
                    {match.pkg.whatsIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {match.pkg.whatsNotIncluded?.length > 0 && (
                <div className={`${styles.listCard} ${styles.mutedCard}`}>
                  <div className={styles.listCardTop}>
                    <span className={styles.cardLabel}>Outside Scope</span>
                    <span className={styles.listCardSymbol} aria-hidden="true">
                      −
                    </span>
                  </div>

                  <h3>Not Included</h3>

                  <ul>
                    {match.pkg.whatsNotIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* =====================================
        PROJECT DETAILS
    ===================================== */}
        {(match.pkg.revisionLimits ||
          match.pkg.supportPeriod ||
          match.pkg.revisionAndHandoffSupport ||
          match.pkg.includedMockups) && (
          <section className={styles.projectDetails}>
            <div className={styles.projectDetailsHeader}>
              <span className={styles.eyebrow}>Good to Know</span>
              <h2>Project Details</h2>
            </div>

            <div className={styles.detailsGrid}>
              {match.pkg.revisionLimits && (
                <div className={styles.infoPanel}>
                  <span className={styles.panelNumber}>01</span>
                  <div>
                    <span className={styles.panelLabel}>Revisions</span>
                    <p>{match.pkg.revisionLimits}</p>
                  </div>
                </div>
              )}

              {match.pkg.supportPeriod && (
                <div className={styles.infoPanel}>
                  <span className={styles.panelNumber}>02</span>
                  <div>
                    <span className={styles.panelLabel}>Support</span>
                    <p>{match.pkg.supportPeriod}</p>
                  </div>
                </div>
              )}

              {match.pkg.includedMockups && (
                <div className={styles.infoPanel}>
                  <span className={styles.panelNumber}>03</span>
                  <div>
                    <span className={styles.panelLabel}>Included Mockups</span>
                    <p>{match.pkg.includedMockups}</p>
                  </div>
                </div>
              )}

              {match.pkg.revisionAndHandoffSupport && (
                <div className={styles.infoPanel}>
                  <span className={styles.panelNumber}>04</span>
                  <div>
                    <span className={styles.panelLabel}>
                      Revision &amp; Handoff
                    </span>
                    <p>{match.pkg.revisionAndHandoffSupport}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* =====================================
        OPTIONAL ADD-ONS
    ===================================== */}
        {match.pkg.optionalAddOns?.length > 0 && (
          <OptionalAddOns key={match.pkg.slug} pkg={match.pkg} />
        )}

        {/* =====================================
        SCOPE NOTE
    ===================================== */}
        {match.pkg.note && (
          <aside className={styles.note}>
            <div className={styles.noteHeading}>
              <span className={styles.noteMarker} aria-hidden="true" />
              <span className={styles.noteLabel}>A Note About Scope</span>
            </div>

            <p>{match.pkg.note}</p>
          </aside>
        )}
      </div>

      <CTA3 />
    </main>
  );
}

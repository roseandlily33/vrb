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
    match.pkg
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
        <div style={{ marginBottom: 44 }}>
          <Breadcrumbs
            current={match.pkg.title}
            first="Packages"
            firstLink={buildPackageTypeHref(match.resolvedType)}
          />
        </div>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{meta.eyebrow}</span>

            <h1 className={styles.title}>{match.pkg.title}</h1>

            <p className={styles.description}>{match.pkg.description}</p>

            <div className={styles.heroActions}>
              <a href="/contact" className={styles.primaryButton}>
                Book a Consultation
              </a>

              <a href="/work" className={styles.secondaryButton}>
                View My Work
              </a>
            </div>
          </div>

          <aside className={styles.summaryCard}>
            <div>
              <span>Starting Investment</span>
              <strong>{match.pkg.startingAt}</strong>
            </div>

            <div>
              <span>Estimated Timeline</span>
              <p>{match.pkg.timeline}</p>
            </div>

            <div>
              <span>Best For</span>
              <p>{match.pkg.bestFor}</p>
            </div>
          </aside>
        </section>

        <section className={styles.detailsGrid}>
          {match.pkg.deliverables && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Deliverables</span>

              <p>{match.pkg.deliverables}</p>
            </div>
          )}

          {match.pkg.includedMockups && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Included Mockups</span>

              <p>{match.pkg.includedMockups}</p>
            </div>
          )}

          {match.pkg.revisionLimits && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Revision Limits</span>

              <p>{match.pkg.revisionLimits}</p>
            </div>
          )}

          {match.pkg.supportPeriod && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Support Period</span>

              <p>{match.pkg.supportPeriod}</p>
            </div>
          )}

          {match.pkg.revisionAndHandoffSupport && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>
                Revision & Handoff Support
              </span>
              <p>{match.pkg.revisionAndHandoffSupport}</p>
            </div>
          )}
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureHeader}>
            <span className={styles.eyebrow}>Package Features</span>

            <h2>What’s Included</h2>

            <p>
              Everything included in this package to support planning, design,
              development, launch, and long-term usability.
            </p>
          </div>

          <ol className={styles.featureList}>
            {match.pkg.features?.map((feature, index) => (
              <li key={feature}>
                <span className={styles.featureNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ol>
        </section>

        {(match.pkg.whatsIncluded || match.pkg.whatsNotIncluded) && (
          <section className={styles.comparisonGrid}>
            {match.pkg.whatsIncluded && (
              <div className={styles.listCard}>
                <span className={styles.eyebrow}>Included</span>

                <h2>What You Receive</h2>

                <ul>
                  {match.pkg.whatsIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {match.pkg.whatsNotIncluded && (
              <div className={`${styles.listCard} ${styles.mutedCard}`}>
                <span className={styles.eyebrow}>Not Included</span>

                <h2>Outside Project Scope</h2>

                <ul>
                  {match.pkg.whatsNotIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {match.pkg.optionalAddOns && <OptionalAddOns key={match.pkg.id} pkg={match.pkg} />}

        {match.pkg.note && (
          <div className={styles.note}>
            <strong>Note:</strong> {match.pkg.note}
          </div>
        )}
      </div>
      <CTA3 />
    </main>
  );
}
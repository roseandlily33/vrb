import React from "react";
import styles from "./page.module.css";
import { PackageInfo } from "../Packages/packageList";
import designPackages from "../DesignPackage/designPackage";
import CTA3 from "../../Components/CTA/CTA3/CTA3.component";
import OptionalAddOns from "./OptionalAddOns/OptionalAddOns.component";
import Breadcrumbs from "../../case-study/[project]/Components/Extras/Breadcrumbs/Breadcrumbs.component";

export default async function PackagePage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const type = resolvedSearchParams?.type || "web";
  const slug = resolvedParams?.slug || "";

  const slugify = (str = "") =>
    str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const list = type === "design" ? designPackages : PackageInfo;

  const pkg = list.find((p) => slugify(p.title) === slugify(slug));

  if (!pkg) {
    console.log({
      type,
      slug,
      slugifiedSlug: slugify(slug),
      availablePackages: list.map((p) => ({
        title: p.title,
        slug: slugify(p.title),
      })),
    });

    return <div>Could not find this package.</div>;
  }

  return (
    <main>
      <Breadcrumbs current={pkg.title} first="Packages" firstLink="/package" />
      <div className={styles.packagePage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              {type === "design" ? "Design Package" : "Development Package"}
            </span>

            <h1 className={styles.title}>{pkg.title}</h1>

            <p className={styles.description}>{pkg.description}</p>

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
              <strong>{pkg.startingAt}</strong>
            </div>

            <div>
              <span>Estimated Timeline</span>
              <p>{pkg.timeline}</p>
            </div>

            <div>
              <span>Best For</span>
              <p>{pkg.bestFor}</p>
            </div>
          </aside>
        </section>

        <section className={styles.detailsGrid}>
          {pkg.deliverables && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Deliverables</span>

              <p>{pkg.deliverables}</p>
            </div>
          )}

          {pkg.includedMockups && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Included Mockups</span>

              <p>{pkg.includedMockups}</p>
            </div>
          )}

          {pkg.revisionLimits && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Revision Limits</span>

              <p>{pkg.revisionLimits}</p>
            </div>
          )}

          {pkg.supportPeriod && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>Support Period</span>

              <p>{pkg.supportPeriod}</p>
            </div>
          )}

          {pkg.revisionAndHandoffSupport && (
            <div className={styles.infoPanel}>
              <span className={styles.panelLabel}>
                Revision & Handoff Support
              </span>
              <p>{pkg.revisionAndHandoffSupport}</p>
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
            {pkg.features?.map((f, index) => (
              <li key={f}>
                <span className={styles.featureNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featureText}>{f}</span>
              </li>
            ))}
          </ol>
        </section>

        {(pkg.whatsIncluded || pkg.whatsNotIncluded) && (
          <section className={styles.comparisonGrid}>
            {pkg.whatsIncluded && (
              <div className={styles.listCard}>
                <span className={styles.eyebrow}>Included</span>

                <h2>What You Receive</h2>

                <ul>
                  {pkg.whatsIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.whatsNotIncluded && (
              <div className={`${styles.listCard} ${styles.mutedCard}`}>
                <span className={styles.eyebrow}>Not Included</span>

                <h2>Outside Project Scope</h2>

                <ul>
                  {pkg.whatsNotIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {pkg?.optionalAddOns && <OptionalAddOns key={pkg.id} pkg={pkg} />}

        {pkg?.note && (
          <div className={styles.note}>
            <strong>Note:</strong> {pkg.note}
          </div>
        )}
      </div>
      <CTA3 />
    </main>
  );
}

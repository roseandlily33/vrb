import React from "react";
import styles from "./page.module.css";
import { PackageInfo } from "../Packages/packageList";
import designPackages from "../DesignPackage/designPackage";
import { socialMediaList } from "../../services/SocialMedia/socialMedia";
import { Retainer } from "../../services/Retainers/retainerList";
import { extrasList } from "../../services/Extras/extrasList";
import CTA3 from "../../Components/CTA/CTA3/CTA3.component";
import Breadcrumbs from "../../case-study/[project]/Components/Extras/Breadcrumbs/Breadcrumbs.component";
import OptionalAddOns from "./Add/Add.component";
import { slugify } from "../../../lib/slugify";

export default async function PackagePage({ params, searchParams }) {
  const { slug } = await params;
  const { type = "web" } = await searchParams;

  let resolvedType = type;

  let list =
    resolvedType === "design"
      ? designPackages
      : resolvedType === "marketing"
        ? socialMediaList
        : resolvedType === "retainer"
          ? Retainer
          : resolvedType === "extras"
            ? extrasList
            : PackageInfo;

  const incoming = slugify(decodeURIComponent(String(slug || "")));

  function matchesIncoming(p) {
    const candidates = new Set();
    if (p.title) candidates.add(slugify(p.title));
    if (p.name) candidates.add(slugify(p.name));
    if (p.slug) candidates.add(slugify(p.slug));
    // also include raw title lower/trim variant
    if (p.title)
      candidates.add(String(p.title).toLowerCase().trim().replace(/\s+/g, "-"));
    return candidates.has(incoming);
  }

  let pkg = list.find((p) => matchesIncoming(p));

  // Fallback: if not found in the selected type, search all known lists
  if (!pkg) {
    const allLists = [
      { key: "design", list: designPackages },
      { key: "marketing", list: socialMediaList },
      { key: "retainer", list: Retainer },
      { key: "extras", list: extrasList },
      { key: "web", list: PackageInfo },
    ];

    for (const entry of allLists) {
      const found = entry.list.find((p) => matchesIncoming(p));

      if (found) {
        pkg = found;
        resolvedType = entry.key;
        list = entry.list;
        break;
      }
    }
  }

  if (!pkg) {
    // console.log({
    //   type,
    //   slug,
    //   slugifiedSlug: slugify(slug),
    //   availablePackages: list.map((p) => ({
    //     title: p.title,
    //     slug: slugify(p.title),
    //   })),
    // });

    return (
      <main style={{ padding: "2rem" }}>
        <h2>Could not find this package.</h2>
        <p>
          Requested <strong>slug</strong>: {slug || <em>(empty)</em>} <br />
          Computed <strong>incoming</strong> slug:{" "}
          {incoming || <em>(empty)</em>}
          <br />
          Requested <strong>type</strong>: {type}
        </p>

        <details style={{ marginTop: 12 }}>
          <summary style={{ cursor: "pointer" }}>Debug: route data</summary>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, marginTop: 8 }}>
            {JSON.stringify(
              { params: resolvedParams, searchParams: resolvedSearchParams },
              null,
              2,
            )}
          </pre>
        </details>
        <h3>Available packages for type: {type}</h3>
        <ul>
          {list.map((p) => (
            <li key={p.title}>
              {p.title} — <em>{slugify(p.title)}</em>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <main>
      <div className={styles.packagePage}>
        <div style={{ marginBottom: 44 }}>
        <Breadcrumbs
          current={pkg.title}
          first="Packages"
          firstLink="/package"
        />
        </div>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              {resolvedType === "design"
                ? "Design Package"
                : "Development Package"}
            </span>

            {resolvedType !== type && (
              <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
                Showing package from <strong>{resolvedType}</strong> (requested{" "}
                <strong>{type}</strong>)
              </div>
            )}

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

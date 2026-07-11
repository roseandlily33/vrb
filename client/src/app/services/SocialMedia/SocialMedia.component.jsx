"use client";
import { useRouter } from "next/navigation";
import styles from "./SocialMedia.module.css";
import { socialMediaList } from "./socialMedia.jsx";
import { slugify } from "../../../lib/slugify";
import TertiaryButton from "@/app/Components/TertiaryButton/TertiaryButton.component";

export default function SocialMediaSection() {
  const router = useRouter();

  const handleClick = (pkg) => {
    const slug = slugify(pkg.name || pkg.title || pkg.name);
    router.push(`/package/${slug}?type=marketing`);
  };

  return (
    <section className={styles.section} id="marketing-packages">
      <div className={styles.header}>
        <span className="eyebrowHeader">Marketing</span>
        <h2 className="heading">Social Media Packages</h2>
        <p className="meta">
          Managed social media packages to build presence, engagement and
          consistent content for your audience.
        </p>
      </div>

      <div className={styles.grid}>
        {socialMediaList.map((pkg) => (
          <article key={pkg.name} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{pkg.name}</h3>
                <div className={styles.bestFor}>{pkg.timeline}</div>
              </div>

              <div className={styles.priceSection}>
                <div className={styles.priceLabel}>STARTING AT</div>
                <div className={styles.priceValue}>${pkg.price}</div>
              </div>
            </div>

            <p className={styles.cardDesc}>{pkg.description}</p>

            <ul className={styles.features}>
              {pkg.features.slice(0, 6).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <TertiaryButton onClick={() => handleClick(pkg)}>
                See what’s included
              </TertiaryButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

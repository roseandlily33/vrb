import styles from "./TrustedBy.module.css";
import Link from "next/link";
import Image from "next/image";

const companies = [
  {
    name: "ArielPerformance",
    img: "/ArielPerformance/ArielLogo.webp",
    alt: "Ariel Performance Horses Logo",
    href: "/case-study/ariel-performance-horses",
  },
  {
    name: "InspectionPal",
    img: "/InspectionPal/Logo.png",
    alt: "InspectionPal Logo",
    href: "/case-study/inspection-pal",
  },
  {
    name: "YodaSafetyServices",
    img: "/YodaSafetyServices/Logo.png",
    alt: "Yoda Safety Services Logo",
    href: "/case-study/yoda-safety-services",
  },
  {
    name: "Assuage Wellness Centre",
    img: "/Assuage/AssuageLogoLong.png",
    alt: "Assuage Wellness Centre Logo",
    href: "/case-study/assuage",
  },
  {
    name: "New Line",
    img: "/NewLine/NewLineLogoNew.png",
    alt: "NewLine Plumbing, Heating & Construction Logo",
    href: "/case-study/newline",
  },
  {
    name: "AnchorMarine",
    img: "/Anchor/AnchorLogo.png",
    alt: "Anchor Marine & Mechanical Logo",
    href: "/case-study/anchor-marine",
  },
];

export default function TrustedBy() {
  return (
    <section
      className={styles.trustedSection}
      aria-labelledby="trusted-heading"
    >
      <div className={styles.trustedInner}>
        <div className={styles.trustedHeader}>
          <div className={styles.headerContent}>
            <div className={styles.headerMarker} aria-hidden="true">
              <span className={styles.markerLine} />
              <span className={styles.markerPixel} />
            </div>

            <p className={styles.eyebrow}>Selected Collaborations</p>

            <h2 id="trusted-heading" className={styles.heading}>
              Businesses I've Worked With
            </h2>
          </div>

          <p className={styles.headerDescription}>
            Every project is different. Here are some of the businesses I've had
            the opportunity to work with.
          </p>
        </div>

        <div className={styles.logoRow}>
          {companies?.map((company) => (
            <div key={company.name} className={styles.logoCol}>
              <Link
                href={company.href}
                className={styles.logoLink}
                aria-label={`Visit ${company.name}`}
              >
                <div className={styles.logoImageWrap}>
                  <Image
                    src={company.img}
                    alt={company.alt}
                    className={styles.logoImg}
                    width={200}
                    height={100}
                  />
                </div>

                <span className={styles.companyName}>
                  {company.name.replace(/([A-Z])/g, " $1").trim()}
                </span>

                <span className={styles.logoArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

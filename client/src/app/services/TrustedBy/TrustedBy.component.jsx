import styles from "./TrustedBy.module.css";
import Link from "next/link";

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
];

export default function TrustedBy() {
  return (
    <section className={styles.trustedSection}>
      <p className="eyebrowHeader" style={{ marginBottom: "0.5rem" }}>
        Trusted by
      </p>
      <h3 className="heading"> Companies and teams I’ve worked with</h3>
      <div className={styles.logoRow}>
        {companies?.map((company) => (
          <div key={company.name} className={styles.logoCol}>
            <Link href={company.href} className={styles.logoLink}>
              <img
                src={company.img}
                alt={company.alt}
                className={styles.logoImg}
              />
            </Link>
            <div className={styles.companyName}>
              {company.name.replace(/([A-Z])/g, " $1").trim()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

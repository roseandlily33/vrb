import styles from "./Card.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Card({
  learnMoreLink,
  icon,
  title,
  description,
  className = "",
  children,
  bare = false,
  variant = "default",
  ...props
}) {
  if (bare) {
    return (
      <article className={className} {...props}>
        {children}
      </article>
    );
  }
  return (
    <article
      className={[
        styles.serviceCard,
        variant === "minimal" ? styles.minimal : "",
        className || "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.cardContent}>
        {icon && (
          <div className={styles.iconContainer} aria-hidden="true">
            {icon}
          </div>
        )}

        <h3 className={styles.cardTitle}>{title}</h3>

        {description && <p className={styles.cardDescription}>{description}</p>}

        {children}
      </div>

      {learnMoreLink && (
        <Link
          href={learnMoreLink}
          className={styles.serviceLink}
          aria-label={`Learn more about ${title}`}
        >
          <span>Explore Service</span>
          <FaArrowRight aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

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
      className={styles.serviceCard + (className ? ` ${className}` : "")}
      key={title}
    >
      <h3>
        {icon}
        {title}
      </h3>
      <p>{description}</p>
      {learnMoreLink && (
        <Link href={learnMoreLink} className={styles.serviceLink}>
          Learn More <FaArrowRight />
        </Link>
      )}
      {children}
    </article>
  );
}

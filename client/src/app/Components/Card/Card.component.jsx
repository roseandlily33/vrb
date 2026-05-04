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
  ...props
}) {
  return (
    <article className={styles.serviceCard} key={title}>
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
    </article>
  );
}

import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ current, first = "Work", firstLink = "/work" }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href={firstLink} className={styles.link}>
            {first}
          </Link>
        </li>

        <li className={styles.separator} aria-hidden="true">
          <span className={styles.separatorPixel} />
        </li>

        <li className={`${styles.item} ${styles.current}`} aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ current, first = "Work", firstLink = "/work" }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link href={firstLink} className={styles.link}>
            {first}
          </Link>
        </li>
        <li style={{ color: "var(--grey-500)", fontSize: "1.1em" }}>/</li>
        <li className={styles.current} aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

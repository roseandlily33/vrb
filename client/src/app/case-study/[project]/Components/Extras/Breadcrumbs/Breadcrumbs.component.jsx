import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ current }) => {
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
          <Link href="/work" className={styles.link}>
            Work
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

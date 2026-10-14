import styles from "./Select.module.css";
import React from "react";

export default function Select({
  value,
  onChange,
  name,
  children,
  icon,
  ...rest
}) {
  return (
    <div className={styles.selectIconWrapper}>
      <select
        {...rest}
        id={name}
        name={name}
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>

      <span className={styles.selectArrow} aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>

      <span className={styles.selectAccent} aria-hidden="true" />
    </div>
  );
}

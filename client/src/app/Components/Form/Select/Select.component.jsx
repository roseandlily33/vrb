import styles from "./Select.module.css";
import React from "react";

export default function Select({ value, onChange, name, children, icon, ...rest }) {
  return (
    <div className={styles.selectIconWrapper}>
      {/* {icon && <span className={styles.selectIcon}>{icon}</span>} */}
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        name={name}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

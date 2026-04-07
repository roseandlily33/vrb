import styles from "./Select.module.css";
import React from "react";

export default function Select({ value, onChange, name, children, ...rest }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onChange}
      name={name}
      {...rest}
    >
      {children}
    </select>
  );
}

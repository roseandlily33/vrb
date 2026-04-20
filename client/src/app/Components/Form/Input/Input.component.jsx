import styles from "./Input.module.css";
import React from "react";

export default function Input({
  label,
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  error,
  helperText,
  icon,
  ...rest
}) {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputIconWrapper}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          className={`${styles.input} ${error ? styles.error : ""}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}

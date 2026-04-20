import styles from "./Textarea.module.css";
import React from "react";

export default function Textarea({
  label,
  value,
  onChange,
  name,
  placeholder,
  error,
  helperText,
  icon,
  ...rest
}) {
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.textareaIconWrapper}>
        {icon && <span className={styles.textareaIcon}>{icon}</span>}
        <textarea
          id={name}
          name={name}
          className={`${styles.textarea} ${error ? styles.error : ""}`}
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

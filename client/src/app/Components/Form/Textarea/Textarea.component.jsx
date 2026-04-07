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
  ...rest
}) {
  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={`${styles.textarea} ${error ? styles.error : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}

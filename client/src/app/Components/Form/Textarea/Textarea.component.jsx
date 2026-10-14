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

      <div
        className={`${styles.textareaIconWrapper} ${
          icon ? styles.hasIcon : ""
        } ${error ? styles.hasError : ""}`}
      >
        {icon && (
          <span className={styles.textareaIcon} aria-hidden="true">
            {icon}
          </span>
        )}

        <textarea
          {...rest}
          id={name}
          name={name}
          className={`${styles.textarea} ${error ? styles.error : ""}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
        />

        <span className={styles.textareaAccent} aria-hidden="true" />
      </div>

      {helperText && !error && (
        <p id={`${name}-helper`} className={styles.helperText}>
          {helperText}
        </p>
      )}

      {error && (
        <p id={`${name}-error`} className={styles.errorText} role="alert">
          <span className={styles.errorIndicator} aria-hidden="true">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

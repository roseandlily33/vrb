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

      <div
        className={`${styles.inputIconWrapper} ${
          icon ? styles.hasIcon : ""
        } ${error ? styles.hasError : ""}`}
      >
        {icon && (
          <span className={styles.inputIcon} aria-hidden="true">
            {icon}
          </span>
        )}

        <input
          {...rest}
          id={name}
          name={name}
          type={type}
          className={`${styles.input} ${error ? styles.error : ""}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
        />

        <span className={styles.inputAccent} aria-hidden="true" />
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

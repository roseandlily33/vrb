import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  href,
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
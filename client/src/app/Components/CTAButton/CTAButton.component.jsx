import React from "react";
import styles from "./CTAButton.module.css";

const CTAButton = ({ children, onClick, type = "button", ...props }) => (
  <button
    className={styles.orbitalBtn}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
    <span className={styles.orbit}>
      {/* <span className={styles.orbitPath}> */}
        <span className={styles.orbitDot}></span>
      {/* </span> */}
    </span>
  </button>
);

export default CTAButton;

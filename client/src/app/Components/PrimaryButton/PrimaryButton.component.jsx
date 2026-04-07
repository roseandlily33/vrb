import React from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick, type = "button", ...props }) => (
    <button className={styles.primaryButton} onClick={onClick} type={type} {...props}>
        {children}
    </button>
);

export default PrimaryButton;

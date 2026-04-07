import React from "react";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ children, onClick, type = "button", ...props }) => (
	<button className={styles.secondaryButton} onClick={onClick} type={type} {...props}>
		{children}
	</button>
);

export default SecondaryButton;

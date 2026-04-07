import React from "react";
import styles from "./TertiaryButton.module.css";

const TertiaryButton = ({ children, onClick, type = "button", ...props }) => (
	<button className={styles.tertiaryButton} onClick={onClick} type={type} {...props}>
		{children}
	</button>
);

export default TertiaryButton;

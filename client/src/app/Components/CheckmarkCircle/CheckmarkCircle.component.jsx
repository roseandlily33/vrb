import styles from './CheckmarkCircle.module.css';

export default function CheckmarkCircle() {
    return (
        <span className={styles.circle} aria-hidden="true">
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
            >
                <circle cx="11" cy="11" r="11" fill="none" />
                <path
                    d="M6.5 11.5L10 15L15.5 8.5"
                    stroke="#69baf2"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}


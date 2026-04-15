
import styles from './MostPopular.module.css';

export default function MostPopular({ children = 'Most Popular' }) {
    return (
        <span className={styles.mostPopularBadge}>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.starIcon}
                aria-hidden="true"
                focusable="false"
                style={{ marginRight: '0.4em', verticalAlign: '-2px' }}
            >
                <polygon
                    points="9,1 11,7 17,9 11,11 9,17 7,11 1,9 7,7"
                    fill="#FFD700"
                    stroke="#E6B800"
                    strokeWidth="1"
                />
            </svg>
            {children}
        </span>
    );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/card.module.css";

export default function Card({ titel, body, iconUrl }: { titel: string, body: string, iconUrl: any }) {
    return (
        <div className={styles.card}>
            <div>
                <FontAwesomeIcon icon={iconUrl} className={styles.iconColor} />
            </div>
            <h4 className={styles.titel}>
                {titel}
            </h4>
            <p>
                {body}
            </p>
        </div>
    );
}

import styles from "../styles/footer.module.css";
import NestedLayout from "./nestedLayout";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <NestedLayout>
                <div className={styles.footerContent}>
                    <div className={styles.col}>
                        <h6>Kontakt</h6>
                        <p>
                            Braincase UG <br />
                            Robert-Bloch-Straße 15<br />
                            D-63322 Rödermark<br />
                            Mobil: +49 (6074) 72 91 65 6<br />
                            Email: info@braincase.de<br />
                        </p>
                    </div>
                    <div className={styles.col}>
                        <h6>Braincase</h6>
                        <p>
                            Braincase ist Ihr kompetenter Software-Testing-Partner für Software-Hersteller,
                            mittelständische Unternehmen und Konzerne.
                        </p>
                    </div>
                    <div className={styles.col}>
                        <h6>Nutzliches Link</h6>
                    </div>
                    <div className={styles.col}>
                        <h6>Soziales</h6>
                    </div>
                </div>
            </NestedLayout>
        </footer>
    );
}
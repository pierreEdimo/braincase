import styles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

export default function AppHeaderContent() {
    return (
        <div className={styles.appHeaderContent}>
            <Link href="/">
                <Image src={logo}
                       alt="Logo of the Company"
                       width="250px"
                       height="80px"
                />
            </Link>
            <div className={styles.menuItem}>
                <Link href="/">
                    Dienstleistungen
                </Link>
                <Link href="/">
                    Über Uns
                </Link>
                <Link href="/">
                    Blog
                </Link>
                <Link href="/">
                    Kontakt
                </Link>
            </div>
            <div>
                <button className={styles.customButton}>Get It Support</button>
            </div>
        </div>
    )
}
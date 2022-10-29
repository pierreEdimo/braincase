import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

export default function AppHeaderContent(){
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
                    Home
                </Link>
                <Link href="/">
                    Über Uns
                </Link>
                <Link href="/">
                    Dienstleistungen
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
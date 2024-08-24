import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Airport Terminals</Link>
        </div>
        <menu className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/airlines">Airlines</Link>
          </li>
        </menu>
      </div>
    </header>
  );
}

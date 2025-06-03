import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
								<h1>Hello World</h1>
      </main>
      <footer className={styles.footer}>
								<h2>Hello from the footer</h2>
      </footer>
    </div>
  );
}

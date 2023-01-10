import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dummy_Data = [
    { id: 1, name: "next", author: "ekta", total: 12 },
    { id: 2, name: "react", author: "kushagra", total: 14 },
    { id: 3, name: "Js", author: "sundar", total: 22 },
  ];
  return (
    <div className={`bg-dark text-light p-4
    ${styles.container}`} >
        <h1 className="text-light mt-5  text-center ">Welcome to library management</h1>
      <main className={styles.main}>
        <Link href="/adminLogin" className="text-decoration-none text-light">
          <h2 className={styles.card}>Enter as admin</h2>
        </Link>

        <Link href="/member-login"  className="text-decoration-none text-light">
          <h2 className={styles.card}>Enter as student</h2>
        </Link>
      </main>
    </div>
  );
}

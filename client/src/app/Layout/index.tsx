import React from "react";
import styles from "./index.module.scss";
import Footer from "widgets/Footer";
import { Header } from "widgets/Header";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

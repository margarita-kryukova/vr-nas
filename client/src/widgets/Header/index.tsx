import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Nav from "./components/Nav";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";
import Logo from "shared/ui/Logo";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(767, "max");
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile, setMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  }, [location.pathname]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.header_scrolled : ""}`}
    >
      <div className={styles.header__container}>
        <Logo zIndex={50} />
        <button
          className={`${styles.header__button} ${
            isMenuOpen ? styles["header__button_open"] : ""
          }`}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className={styles["header__button-icon"]} />
          <span className={styles["header__button-icon"]} />
          <span className={styles["header__button-icon"]} />
        </button>
        <div
          className={`${styles.header__nav} ${
            isMenuOpen ? styles["header__nav_open"] : ""
          }`}
        >
          <Nav />
        </div>
      </div>
    </header>
  );
};

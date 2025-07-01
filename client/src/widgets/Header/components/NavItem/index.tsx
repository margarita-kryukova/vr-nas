import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import ArrowButton from "shared/ui/Arrow";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";

interface INavItemProps {
  name: string;
  href?: string;
  content?: { name: string; href: string }[];
  isOpen?: boolean;
  onToggle?: () => void;
}

export const NavItem: React.FC<INavItemProps> = ({
  name,
  href,
  content,
  isOpen = false,
  onToggle,
}) => {
  const isMobile = useMediaQuery(767, "max");
  const hasDropdown = !!content?.length;
  const dropdownId = `dropdown-menu-${name.replace(/\s/g, "-").toLowerCase()}`;
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle?.();
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.relatedTarget as Node)
      ) {
        onToggle?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [onToggle]);

  useEffect(() => {
    if (isOpen) {
      onToggle?.();
    }
  }, [location]);

  const renderLabel = (name: string, href?: string) =>
    href ? (
      <Link
        to={href}
        className={`${styles.navItem__text} ${styles.navItem__text_clickable}`}
      >
        {name}
      </Link>
    ) : (
      <span className={styles.navItem__text}>{name}</span>
    );

  return (
    <li
      className={`${styles.navItem} ${
        hasDropdown ? styles.navItem_withButton : ""
      }`}
    >
      {hasDropdown ? (
        <>
          <div className={styles.navItem__dropdownRow}>
            {renderLabel(name, href)}
            <ArrowButton
              size={isMobile ? "1.5rem" : "1rem"}
              direction={isOpen ? "up" : "down"}
              onClick={onToggle}
              classNameBtn={styles.navItem__dropdownBtn}
              aria-expanded={isOpen}
              aria-controls={dropdownId}
            />
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="dropdown"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className={styles.navItem__dropdown}
                id={dropdownId}
                aria-hidden={!isOpen}
                ref={dropdownRef}
              >
                <ul className={styles.navItem__dropdownContent}>
                  {content!.map((item) => (
                    <li key={item.href} className={styles.navItem}>
                      {renderLabel(item.name, item.href)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        renderLabel(name, href)
      )}
    </li>
  );
};

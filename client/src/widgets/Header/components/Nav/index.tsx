import React, { useState } from "react";
import styles from "./index.module.scss";
import Button from "shared/ui/Button";
import { NavItem } from "../NavItem";

const NAV = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "Page",
    content: [
      {
        name: "Pricing Plan",
        href: "/page/pricing-plan",
      },
      {
        name: "FAQ",
        href: "/page/faq",
      },
      {
        name: "Terms & Conditions",
        href: "/page/terms",
      },
      {
        name: "Privacy Policy",
        href: "/page/privacy-policy",
      },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    content: [
      {
        name: "Recent articles",
        href: "/blog/recent-articles",
      },
      {
        name: "Our Team",
        href: "/blog/our-team",
      },
      {
        name: "Detail Service",
        href: "/blog/detail-service",
      },
    ],
  },
];

const Nav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {NAV.map((link, index) => (
          <NavItem
            {...link}
            key={link.name}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ul>
      <Button
        text="Contact us"
        href="/"
        typeButton="secondary"
        className={styles.nav__button}
      />
    </nav>
  );
};

export default Nav;

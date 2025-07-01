import React from "react";
import FooterContact from "shared/ui/FooterContact";
import FooterNav from "shared/ui/FooterNav";
import styles from "./index.module.scss";
import Logo from "shared/ui/Logo";
import SocialLinks from "../../entities/SocialLinks";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className={styles.wrapper}>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles.footer}
    >
      <div className={styles.footer__top}>
        <div className={styles.footer__branding}>
          <Logo />
          <SocialLinks />
        </div>
        <FooterNav />
        <FooterContact />
      </div>
      <span className={styles.footer__copyright}>
        © Copyright 2023, All Rights Reserved
      </span>
    </motion.div>
  </footer>
);

export default Footer;

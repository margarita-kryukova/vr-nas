import { Link } from "react-router-dom";
import Icon from "shared/icons/logo.svg?react";
import styles from "./index.module.scss";
import React from "react";

interface ILogo {
  zIndex?: number;
}

const Logo: React.FC<ILogo> = ({ zIndex = 10 }) => {
  return (
    <Link to="/" className={styles.logo} style={{ zIndex }}>
      <Icon />
    </Link>
  );
};

export default Logo;

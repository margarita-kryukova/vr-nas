import React from "react";
import Icon from "shared/icons/arrow.svg?react";
import styles from "./index.module.scss";

interface ArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  direction?: "down" | "up";
  classNameBtn?: string;
  as?: "button" | "icon";
}

export const Arrow: React.FC<ArrowProps> = ({
  size = "1rem",
  direction = "down",
  classNameBtn,
  as = "button",
  ...buttonProps
}) => {
  const style = {
    width: size,
    height: size,
  };

  if (as === "button") {
    return (
      <button
        type="button"
        className={`${styles.arrow} ${classNameBtn}`}
        style={{ ...style }}
        {...buttonProps}
      >
        <Icon
          className={`${styles.arrow__icon} ${
            direction === "down" ? styles.arrow__icon_down : ""
          }`}
        />
      </button>
    );
  }
  return (
    <span
      className={`${styles.arrow} ${classNameBtn}`}
      style={{ ...style }}
      tabIndex={-1}
      aria-hidden="true"
    >
      <Icon
        className={`${styles.arrow__icon} ${
          direction === "down" ? styles.arrow__icon_down : ""
        }`}
      />
    </span>
  );
};

export default Arrow;

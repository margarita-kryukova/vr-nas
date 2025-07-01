import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  typeButton?: "primary" | "secondary" | "tonal";
  className?: string;
  text: string;
  href?: string;
  styleText?: "bold" | "light";
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
}

const Button = React.forwardRef<HTMLDivElement, IButtonProps>(
  (
    {
      className = "",
      text,
      href,
      typeButton = "primary",
      styleText = "light",
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClass = [
      styles.button,
      styles[`button_${typeButton}`],
      styles[`button_${styleText}`],
      disabled ? styles.disabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={`${styles.wrapper} ${className}`}>
        {href ? (
          <Link
            to={href}
            className={buttonClass}
            aria-disabled={disabled}
            onClick={(e) => {
              if (disabled) {
                e.preventDefault();
                e.stopPropagation();
              }
              if (props.onClick && !disabled)
                props.onClick(
                  e as React.MouseEvent<
                    HTMLButtonElement | HTMLAnchorElement,
                    MouseEvent
                  >
                );
            }}
          >
            <span className={styles.button__text}>{text}</span>
          </Link>
        ) : (
          <button
            className={buttonClass}
            type={props.type ?? "button"}
            disabled={disabled}
            {...props}
          >
            <span className={styles.button__text}>{text}</span>
          </button>
        )}
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;

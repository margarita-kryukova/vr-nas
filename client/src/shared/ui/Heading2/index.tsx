import React from "react";
import styles from "./index.module.scss";

interface IHeading2 {
  title: string;
  className?: string;
}

const Heading2 = React.forwardRef<HTMLHeadingElement, IHeading2>(
  ({ title, className = "" }, ref) => (
    <h2 ref={ref} className={`${styles.title} ${className}`.trim()}>
      {title}
    </h2>
  )
);

Heading2.displayName = "Heading2";

export default Heading2;

import styles from "./index.module.scss";
import Icon from "shared/icons/check-box.svg?react";

interface ICheckbox {
  value: string;
}
const Checkbox: React.FC<ICheckbox> = ({ value }) => {
  return (
    <li key={value} className={styles["checkbox"]}>
      <Icon className={styles["checkbox__check"]} />
      <span className={styles["checkbox__text"]}>{value}</span>
    </li>
  );
};

export default Checkbox;

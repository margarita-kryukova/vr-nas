import styles from "./index.module.scss";
import Icon from "shared/icons/point-cloud.svg?react";
interface IGeneralPriceCard {
  title: string;
  description: string;
}
const GeneralPriceCard: React.FC<IGeneralPriceCard> = ({
  title,
  description,
}) => {
  return (
    <li className={styles.item}>
      <Icon className={styles.item__icon} />
      <div className={styles.item__content}>
        <p className={styles.item__title}>{title}</p>
        <p className={styles.item__desc}>{description}</p>
      </div>
    </li>
  );
};

export default GeneralPriceCard;

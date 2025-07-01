import Button from "shared/ui/Button";
import styles from "./index.module.scss";

interface IPricingCardMini {
  price: number;
  link: string;
  condition: string;
  className: string;
}

const PricingCardMini: React.FC<IPricingCardMini> = ({
  price,
  link,
  condition,
  className,
}) => (
  <div className={`${styles.card} ${className}`}>
    <span className={styles.card__label}>Start from</span>
    <span className={styles.card__value}>${price}</span>
    <Button
      text="get started"
      href={link}
      styleText="bold"
      className={styles.card__btn}
    />
    <span className={styles.card__note}>{condition}</span>
  </div>
);

export default PricingCardMini;

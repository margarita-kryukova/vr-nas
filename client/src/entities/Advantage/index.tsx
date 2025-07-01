import styles from "./index.module.scss";

export interface IAdvantage {
  icon: string;
  title: string;
  description: string;
}

const Advantage: React.FC<IAdvantage> = ({ icon, title, description }) => {
  return (
    <li className={styles.advantage}>
      <img
        src={icon}
        alt={title}
        className={styles.advantage__icon}
        width={70}
        height={70}
      />
      <div className={styles.advantage__title}>{title}</div>
      <div className={styles.advantage__desc}>{description}</div>
    </li>
  );
};

export default Advantage;

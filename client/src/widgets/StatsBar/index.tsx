import Label from "shared/ui/Label";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

interface IStatsBarItem {
  label: string;
  value: string;
}

interface IStatsBarProps {
  stats: IStatsBarItem[];
}

const StatsBar: React.FC<IStatsBarProps> = ({ stats }) => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {stats.map((stat, idx) => (
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            key={stat.label + idx}
            className={styles.list__stat}
          >
            <Label text={stat.label} />
            <span className={styles.list__value}>{stat.value}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default StatsBar;

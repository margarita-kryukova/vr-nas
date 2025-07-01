import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Advantage, { IAdvantage } from "../../entities/Advantage";
interface IAdvantageListProps {
  list: IAdvantage[];
}

const AdvantageList: React.FC<IAdvantageListProps> = ({ list }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles["advantage-list"]}
    >
      {list.map((item) => (
        <Advantage {...item} key={item.title} />
      ))}
    </motion.ul>
  );
};

export default AdvantageList;

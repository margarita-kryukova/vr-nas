import { motion } from "framer-motion";
import styles from "./index.module.scss";
import Label from "shared/ui/Label";
import AdvantageList from "features/AdvantageList";
import Heading2 from "shared/ui/Heading2";
import { IAdvantage } from "entities/Advantage";

interface IAdvantages {
  label?: string;
  title?: string;
  advantageList: IAdvantage[];
}

const Advantages: React.FC<IAdvantages> = ({ label, title, advantageList }) => {
  return (
    <section className={styles.advantages}>
      {label || title ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.advantages__header}
        >
          {label ? <Label text={label} /> : null}
          {title ? <Heading2 title={title} /> : null}
        </motion.div>
      ) : null}
      <AdvantageList list={advantageList} />
    </section>
  );
};

export default Advantages;

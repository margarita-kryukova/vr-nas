import { motion } from "framer-motion";
import styles from "./index.module.scss";
import AccordionItem, { IAccordionItem } from "./components/AccordionItem";

interface IAccordion {
  list: IAccordionItem[];
}

const Accordion: React.FC<IAccordion> = ({ list }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles.accordion}
    >
      {list.map((item) => (
        <AccordionItem {...item} key={item.title} />
      ))}
    </motion.ul>
  );
};

export default Accordion;

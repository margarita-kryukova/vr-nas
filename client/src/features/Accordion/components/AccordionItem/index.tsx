import styles from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "shared/ui/Arrow";
import { useState } from "react";

export interface IAccordionItem {
  title: string;
  description: string;
}

const AccordionItem: React.FC<IAccordionItem> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`${styles.item} ${isOpen ? styles.item_open : ""}`}>
      <button className={styles.item__header} onClick={handleToggle}>
        <h3 className={styles.item__title}>{title}</h3>
        <ArrowButton
          size="1.5rem"
          direction={isOpen ? "up" : "down"}
          as="icon"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden={!isOpen}
          >
            <p className={styles.item__text}>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default AccordionItem;

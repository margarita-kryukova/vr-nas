import styles from "./index.module.scss";
import Label from "shared/ui/Label";
import { motion } from "framer-motion";
import ServiceList from "features/ServiceList";
import { IService } from "entities/Service";

interface IServicesProps {
  label: string;
  title: string;
  description: string;
  list: IService[];
  className?: string;
}

const fadeIn = () => ({
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.7, ease: "easeOut" as const },
});

const Services: React.FC<IServicesProps> = ({
  label,
  title,
  description,
  list,
  className,
}) => {
  return (
    <section className={`${styles.service} ${className}`.trim()}>
      <div className={styles.service__header}>
        <motion.div {...fadeIn()} className={styles["service__header-main"]}>
          <Label text={label} />
          <h2 className={styles.service__title}>{title}</h2>
        </motion.div>
        <motion.p {...fadeIn()} className={styles.service__desc}>
          {description}
        </motion.p>
      </div>
      <ServiceList list={list} />
    </section>
  );
};

export default Services;

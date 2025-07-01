import styles from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "shared/ui/Arrow";
import Button from "shared/ui/Button";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";

export interface IService {
  icon: string;
  title: string;
  description: string;
  link: string;
}
interface IServiceItemProps extends IService {
  isOpen?: boolean;
  onToggle?: () => void;
}

const ServiceItem: React.FC<IServiceItemProps> = ({
  icon,
  title,
  description,
  link,
  isOpen = false,
  onToggle,
}) => {
  const isMobile = useMediaQuery(767, "max");

  const handleMobileKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isMobile && onToggle) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles.wrapper}
    >
      <div className={`${styles.service} ${isOpen ? styles.service_open : ""}`}>
        <div
          className={styles.service__header}
          {...(isMobile
            ? {
                tabIndex: 0,
                role: "button",
                onClick: onToggle,
                onKeyDown: handleMobileKeyDown,
                "aria-expanded": isOpen,
              }
            : {})}
        >
          <img
            src={icon}
            alt={title}
            className={styles.service__icon}
            width={48}
            height={48}
          />
          <h3 className={styles.service__title}>{title}</h3>
          {isMobile ? (
            <ArrowButton
              size="2rem"
              direction={isOpen ? "up" : "down"}
              tabIndex={-1}
            />
          ) : null}
        </div>
        {isMobile ? (
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
                <div className={styles.service__content}>
                  <p className={styles.service__text}>{description}</p>
                  <Button
                    text="Learn more"
                    href={link}
                    typeButton="secondary"
                    styleText="bold"
                    className={styles.service__btn}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div className={styles.service__content}>
            <p className={styles.service__text}>{description}</p>
            <div className={styles["service__btn-wrapper"]}>
              <Button
                text="Learn more"
                href={link}
                typeButton="secondary"
                styleText="bold"
                className={styles.service__btn}
              />
            </div>
          </div>
        )}
      </div>
    </motion.li>
  );
};
export default ServiceItem;

import Label from "shared/ui/Label";
import styles from "./index.module.scss";
import Heading2 from "shared/ui/Heading2";
import { motion, MotionProps } from "framer-motion";
import Image from "shared/ui/Image";
import GeneralPriceCard from "../../entities/GeneralPriceCard";
import PricingCardMini from "../../entities/PricingCardMini";
interface IGeneralPrice {
  label: string;
  title: string;
  description: string;
  options: {
    title: string;
    description: string;
  }[];
  price: number;
  link: string;
  condition: string;
}

const fadeIn = (): MotionProps => ({
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut" },
});

const GeneralPrice: React.FC<IGeneralPrice> = ({
  label,
  title,
  description,
  options,
  price,
  link,
  condition,
}) => {
  const MotionLabel = motion.create(Label);
  const MotionHeading2 = motion.create(Heading2);
  return (
    <section className={styles["general-price"]}>
      <div className={styles["general-price__heading"]}>
        <MotionLabel
          {...fadeIn()}
          text={label}
          className={styles["general-price__label"]}
        />
        <MotionHeading2
          {...fadeIn()}
          title={title}
          className={styles["general-price__title"]}
        />

        <motion.p {...fadeIn()} className={styles["general-price__desc"]}>
          {description}
        </motion.p>
      </div>
      <motion.div {...fadeIn()} className={styles["general-price__content"]}>
        <div className={styles["general-price__options"]}>
          {options.map((option) => (
            <GeneralPriceCard {...option} key={option.title} />
          ))}
        </div>
        <div className={styles["general-price__image-wrapper"]}>
          <Image
            url="/widgets/generalPrice/image.png"
            webp="/widgets/generalPrice/image.webp"
            urlDesk="/widgets/generalPrice/image_desk.png"
            className={styles["general-price__image"]}
          />
        </div>
        <PricingCardMini
          price={price}
          link={link}
          condition={condition}
          className={styles["general-price__price-card"]}
        />
      </motion.div>
    </section>
  );
};

export default GeneralPrice;

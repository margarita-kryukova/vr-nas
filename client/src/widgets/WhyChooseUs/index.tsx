import { motion, MotionProps } from "framer-motion";
import styles from "./index.module.scss";
import Image from "shared/ui/Image";
import Video from "shared/ui/Video";
import Label from "shared/ui/Label";
import Accordion from "features/Accordion";
import { IVideo } from "shared/lib/config/interfaces";

interface IChooseProps {
  content: {
    label: string;
    title: string;
    list: {
      title: string;
      description: string;
    }[];
    video: IVideo;
  };
  direction?: "reverse" | "forward";
}

const fadeInVariant = (direction: "x" | "y", value: number): MotionProps => ({
  initial: { opacity: 0, [direction]: value },
  whileInView: { opacity: 1, [direction]: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut" },
});

const WhyChooseUs: React.FC<IChooseProps> = ({
  content: { label, title, list, video },
  direction = "forward",
}) => {
  const image =
    direction === "reverse"
      ? {
          url: "/widgets/whyChooseUs/image_mob_reverse.png",
          urlDesk: "/widgets/whyChooseUs/image_desk_reverse.png",
          webp: "/widgets/whyChooseUs/image_reverse.webp",
        }
      : {
          url: "/widgets/whyChooseUs/image_mob.png",
          urlDesk: "/widgets/whyChooseUs/image_desk.png",
          webp: "/widgets/whyChooseUs/image.webp",
        };
  return (
    <section
      className={`${styles.choose} ${
        direction === "reverse" ? styles.choose_reverse : ""
      }`}
    >
      <div className={styles.choose__column}>
        <motion.div
          {...fadeInVariant("x", direction === "reverse" ? 100 : -100)}
          className={styles["choose__image-wrapper"]}
        >
          <Image
            url={image.url}
            webp={image.webp}
            urlDesk={image.urlDesk}
            className={styles.choose__image}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={styles["choose__video-wrapper"]}
        >
          <Video
            src={video.src}
            preview={video.preview}
            className={styles.choose__video}
          />
        </motion.div>
      </div>
      <div className={styles.choose__column}>
        <motion.div
          {...fadeInVariant("y", 100)}
          className={styles.choose__header}
        >
          <Label text={label} className={styles.choose__label} />
          <h2 className={styles.choose__title}>{title}</h2>
        </motion.div>
        <Accordion list={list} />
      </div>
    </section>
  );
};

export default WhyChooseUs;

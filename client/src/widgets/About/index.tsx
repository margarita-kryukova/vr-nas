import styles from "./index.module.scss";
import Video from "shared/ui/Video";
import Label from "shared/ui/Label";
import Button from "shared/ui/Button";
import { motion, MotionProps } from "framer-motion";
import React from "react";
import Image from "shared/ui/Image";
import Checkbox from "shared/ui/Checkbox";
import { ILink, IVideo } from "shared/lib/config/interfaces";

const fadeInVariant = (direction: "x" | "y", value: number): MotionProps => ({
  initial: { opacity: 0, [direction]: value },
  whileInView: { opacity: 1, [direction]: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut" },
});

interface IAboutProps {
  label: string;
  title: string;
  description: string;
  list: string[];
  link: ILink;
  video: IVideo;
}

const About: React.FC<IAboutProps> = ({
  label,
  title,
  description,
  list,
  link,
  video,
}) => (
  <section className={styles.about}>
    <div className={styles.about__column}>
      <motion.div
        {...fadeInVariant("x", -100)}
        className={styles["about__image-wrapper"]}
      >
        <Image
          url="/widgets/about/image_mob.png"
          webp="/widgets/about/image.webp"
          urlDesk="/widgets/about/image_desk.png"
          className={styles.about__image}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles["about__video-wrapper"]}
      >
        <Video
          src={video.src}
          preview={video.preview}
          className={styles.about__video}
        />
      </motion.div>
    </div>

    <div className={styles.about__column}>
      <motion.div {...fadeInVariant("y", 100)}>
        <Label text={label} className={styles.about__label} />
        <h2 className={styles.about__title}>{title}</h2>
      </motion.div>
      <motion.p {...fadeInVariant("y", 100)} className={styles.about__desc}>
        {description}
      </motion.p>
      <motion.ul {...fadeInVariant("y", 100)} className={styles.about__list}>
        {list.map((item, index) => (
          <Checkbox value={item} key={`${index}-${item}`} />
        ))}
      </motion.ul>
      <motion.div {...fadeInVariant("y", 100)}>
        <Button
          text={link.name}
          href={link.href}
          styleText="bold"
          className={styles.about__button}
        />
      </motion.div>
    </div>
  </section>
);

export default About;

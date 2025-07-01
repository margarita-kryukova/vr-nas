import styles from "./index.module.scss";
import Button from "shared/ui/Button";
import Video from "shared/ui/Video";
import { motion, MotionProps } from "framer-motion";
import React from "react";
import Image from "shared/ui/Image";
import { IHeroMainProps } from "./types";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";

const fadeIn = (
  direction: "y" | "x" = "y",
  value = 100,
  delay = 0,
  duration = 0.7
): MotionProps => ({
  initial: { opacity: 0, [direction]: value },
  whileInView: { opacity: 1, [direction]: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration, delay, ease: "easeOut" },
});

const HeroMain: React.FC<IHeroMainProps> = ({
  title,
  description,
  link,
  video,
  clients,
}) => {
  const isMobile = useMediaQuery(767, "max");

  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__column}>
          <div className={styles.hero__main}>
            <motion.h1 {...fadeIn("y", 100, 0)} className={styles.main__title}>
              {title}
            </motion.h1>
            <motion.p {...fadeIn("y", 100, 0.2)} className={styles.main__desc}>
              {description}
            </motion.p>
            <motion.div
              {...fadeIn("y", 100, 0.4)}
              className={styles.main__desc}
            >
              <Button
                text={link.name}
                href={link.href}
                className={styles.main__btn}
                styleText="bold"
              />
            </motion.div>
          </div>
          <div className={styles.hero__actions}>
            <motion.div
              {...fadeIn("y", 100, 0)}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className={styles.clients}>
                <ul className={styles.clients__list}>
                  {clients.images.map((img, idx) => (
                    <li key={img.url || idx} className={styles.clients__item}>
                      <Image
                        url={img.url}
                        webp={img.webp}
                        alt={`Client ${idx + 1}`}
                        className={styles["clients__item-img"]}
                      />
                    </li>
                  ))}
                </ul>
                <span className={styles["clients__count"]}>
                  <span className={styles["clients__count_accent"]}>
                    {clients.count}
                  </span>{" "}
                  {clients.text}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={styles["hero__video-wrapper"]}
            >
              <Video
                src={video.src}
                preview={video.preview}
                className={styles.hero__video}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          {...fadeIn("x", 100, 0, 0.7)}
          className={styles.hero__column}
        >
          <div className={styles.hero__img}>
            <Image
              url="/widgets/heroMain/hero.png"
              webp={
                isMobile
                  ? "/widgets/heroMain/hero_mob.webp"
                  : "/widgets/heroMain/hero_desk.webp"
              }
              urlDesk="/widgets/heroMain/hero_desk.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMain;

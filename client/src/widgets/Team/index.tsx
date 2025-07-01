import styles from "./index.module.scss";
import Label from "shared/ui/Label";
import Heading2 from "shared/ui/Heading2";
import { motion, MotionProps } from "framer-motion";
import UserList from "features/UserList";
import Button from "shared/ui/Button";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";
import React from "react";
import { IUser } from "shared/lib/config/interfaces";

interface ITeam {
  label: string;
  title: string;
  list: IUser[];
  view: "all" | "preview";
}

const MotionLabel = motion.create(Label);
const MotionHeading2 = motion.create(Heading2);
const MotionButton = motion.create(Button);

const fadeIn: MotionProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const Team: React.FC<ITeam> = ({ label, title, list, view }) => {
  const isMobile = useMediaQuery(767, "max");

  const showButton = view === "preview";

  const renderSeeAllButton = () => (
    <MotionButton
      {...fadeIn}
      text="See all"
      href="/blog/our-team"
      typeButton="tonal"
      styleText="bold"
      className={styles.team__btn}
    />
  );

  return (
    <section className={`${styles.team} ${styles[`team_${view}`]}`}>
      <div className={styles.team__header}>
        <MotionLabel {...fadeIn} text={label} />
        <MotionHeading2 {...fadeIn} title={title} />
        {!isMobile && showButton && renderSeeAllButton()}
      </div>
      <UserList view={view} users={list} className={styles.team__list} />
      {isMobile && showButton && renderSeeAllButton()}
    </section>
  );
};

export default React.memo(Team);

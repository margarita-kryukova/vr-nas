import styles from "./index.module.scss";
import Image from "shared/ui/Image";
import { motion } from "framer-motion";
import SocialLink from "shared/ui/SocialLink";
import { IUser } from "shared/lib/config/interfaces";

export interface IUserProps extends IUser {
  view?: "mini" | "full";
}

const User: React.FC<IUserProps> = ({
  view = "full",
  name,
  major,
  contacts,
  images,
}) => {
  const socialIcons = [
    { type: "instagram", href: "/" },
    { type: "facebook", href: "/" },
    { type: "twitter", href: "/" },
  ] as const;

  const renderContacts = () => {
    if (view !== "full" || !contacts) return null;
    return (
      <div className={styles.user__contacts}>
        {socialIcons.map(({ type, href }) => (
          <SocialLink key={type} socialNetwork={type} href={href} />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles.wrapper}
    >
      <div className={`${styles.user} ${styles[`user_${view}`]}`}>
        <Image
          url={images.url}
          webp={images.webp}
          className={styles.user__photo}
        />
        {renderContacts()}
        <div className={styles.user__info}>
          <span className={styles.user__name}>{name}</span>
          <span className={styles.user__major}>{major}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default User;

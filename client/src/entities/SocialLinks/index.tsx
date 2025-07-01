import SocialLink from "shared/ui/SocialLink";
import styles from "./index.module.scss";

const links = ["twitter", "facebook", "instagram", "github"] as const;

const SocialLinks = () => (
  <nav className={styles.social}>
    {links.map((link) => (
      <SocialLink socialNetwork={link} key={link} background="color" />
    ))}
  </nav>
);

export default SocialLinks;

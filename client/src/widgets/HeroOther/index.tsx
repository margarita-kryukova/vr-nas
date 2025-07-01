import Breadcrumbs from "shared/ui/Breadcrumbs";
import styles from "./index.module.scss";
interface IHeroOtherProps {
  title: string;
}

const HeroOther: React.FC<IHeroOtherProps> = ({ title }) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>{title}</h1>
      <Breadcrumbs
        list={[
          {
            value: "Home",
            href: "/",
          },
          {
            value: title,
          },
        ]}
      />
    </section>
  );
};

export default HeroOther;

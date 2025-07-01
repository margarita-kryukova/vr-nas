import Services from "widgets/Services";
import About from "widgets/About";
import Advantages from "widgets/Advantages";
import WhyChooseUs from "widgets/WhyChooseUs";
import GeneralPrice from "widgets/GeneralPrice";
import styles from "./index.module.scss";
import { DATA } from "shared/lib/config/const";
import HeroMain from "widgets/HeroMain";

const Home: React.FC = () => {
  return (
    <>
      <HeroMain {...DATA.hero} />
      <Advantages advantageList={DATA.advantages} />
      <About {...DATA.about} />
      <Services {...DATA.service} className={styles.page__services} />
      <WhyChooseUs content={DATA.choose} direction="reverse" />
      <GeneralPrice {...DATA.pricing} />
    </>
  );
};

export default Home;

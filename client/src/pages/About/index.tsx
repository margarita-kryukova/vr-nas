import { ABOUT_PAGE, TEAM } from "shared/lib/config/const";
import Advantages from "widgets/Advantages";
import HeroOther from "widgets/HeroOther";
import Team from "widgets/Team";
import WhyChooseUs from "widgets/WhyChooseUs";

const About: React.FC = () => {
  return (
    <>
      <HeroOther title="About Us" />
      <Advantages {...ABOUT_PAGE.advantages} />
      <WhyChooseUs content={ABOUT_PAGE.choose} />
      <Team list={TEAM} {...ABOUT_PAGE.team} view="preview" />
    </>
  );
};

export default About;

import { SERVICE_PAGE, STATS } from "shared/lib/config/const";
import GeneralPrice from "widgets/GeneralPrice";
import HeroOther from "widgets/HeroOther";
import Services from "widgets/Services";
import StatsBar from "widgets/StatsBar";

const Service: React.FC = () => {
  return (
    <>
      <HeroOther title="Our Service" />
      <Services {...SERVICE_PAGE.service} />
      <StatsBar stats={STATS} />
      <GeneralPrice {...SERVICE_PAGE.pricing} />
    </>
  );
};

export default Service;

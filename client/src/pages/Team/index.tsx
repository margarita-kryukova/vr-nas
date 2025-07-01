import { STATS, TEAM, TEAM_PAGE } from "shared/lib/config/const";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery";
import HeroOther from "widgets/HeroOther";
import StatsBar from "widgets/StatsBar";
import Team from "widgets/Team";

const TeamPage: React.FC = () => {
  const isMobile = useMediaQuery(767, "max");
  return (
    <>
      <HeroOther title="Our Team" />
      <Team view="all" {...TEAM_PAGE.team} list={TEAM} />
      {!isMobile ? <StatsBar stats={STATS} /> : null}
    </>
  );
};

export default TeamPage;

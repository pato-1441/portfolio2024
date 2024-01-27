import HeroStats from "../heroStats/HeroStats";
import HeroPresentation from "../heroPresentation/HeroPresentation";

const Hero = ({ showModalCV }) => {
  return (
    <section className="w-full flex flex-col gap-12 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
      <HeroPresentation showModalCV={showModalCV} />
      <HeroStats />
    </section>
  );
};

export default Hero;

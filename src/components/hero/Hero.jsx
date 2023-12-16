import HeroStats from "../heroStats/HeroStats";
import HeroPresentation from "../heroPresentation/HeroPresentation";

const Hero = () => {
  return (
    <section className="flex flex-col gap-12 sm:flex-row sm:justify-between sm:items-center">
      <HeroPresentation />
      <HeroStats />
    </section>
  );
};

export default Hero;

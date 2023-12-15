import HeroStats from "../heroStats/HeroStats";
import HeroPresentation from "../heroPresentation/HeroPresentation";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 sm:flex-row sm:justify-between">
      <HeroPresentation />
      <HeroStats />
    </section>
  );
};

export default Hero;

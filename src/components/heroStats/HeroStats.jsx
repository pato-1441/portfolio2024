import StatCard from "../statCard/StatCard";

const HeroStats = () => {
  return (
    <div className="sm:w-1/2 flex justify-between items-center gap-2">
      <StatCard qty={"+2"} title={"Años programando"} />
      <StatCard qty={"+15"} title={"Tecnologias empleadas"} />
      <StatCard qty={"+15"} title={"Tecnologias empleadas"} />
    </div>
  );
};

export default HeroStats;

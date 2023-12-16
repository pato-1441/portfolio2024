import { BadgeCheck, Braces, TerminalSquare } from "lucide-react";
import StatCard from "../statCard/StatCard";

const HeroStats = () => {
  return (
    <div
      className="transition-all duration-150 sm:w-1/2 flex justify-between items-center gap-2 px-4 sm:px-6 py-4
     h-fit border border-white border-opacity-30 rounded-xl hover:shadow-white hover:shadow-component"
    >
      <div className="flex items-center">
        <StatCard qty={"+3"} title={"Años\nprogramando"} />
        <TerminalSquare />
      </div>
      <div className="flex items-center">
        <StatCard qty={"+15"} title={"Tecnologías\nempleadas"} />
        <Braces />
      </div>
      <div className="flex items-center">
        <StatCard qty={"+10"} title={"Proyectos\nconcluidos"} />
        <BadgeCheck />
      </div>
    </div>
  );
};

export default HeroStats;

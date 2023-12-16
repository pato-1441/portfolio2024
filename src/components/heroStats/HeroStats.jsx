import { BadgeCheck, Braces, TerminalSquare } from "lucide-react";
import StatCard from "../statCard/StatCard";

const HeroStats = () => {
  return (
    <div
      className="sm:w-1/2 flex flex-col sm:flex-row justify-between items-center
     h-fit "
    >
      <div
        className="transition-all duration-150 hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border rounded-l-xl px-6 py-4"
      >
        <StatCard qty={"+3"} title={"Años\nprogramando"} />
        <TerminalSquare className="w-9 h-9" />
      </div>
      <div
        className="transition-all duration-150 hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border-t border-b px-6 py-4"
      >
        <StatCard qty={"+15"} title={"Tecnologías\nempleadas"} />
        <Braces className="w-9 h-9" />
      </div>
      <div
        className="transition-all duration-150 hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border rounded-r-xl px-6 py-4"
      >
        <StatCard qty={"+10"} title={"Proyectos\nconcluidos"} />
        <BadgeCheck className="w-9 h-9" />
      </div>
    </div>
  );
};

export default HeroStats;

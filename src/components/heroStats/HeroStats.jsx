import { BadgeCheck, Braces, TerminalSquare } from "lucide-react";
import StatCard from "../statCard/StatCard";

const HeroStats = () => {
  return (
    <div className="sm:w-1/3 h-fit ">
      <div
        className="text-black bg-gray-50 dark:bg-neutral-900 dark:text-white transition-all duration-150 hover:shadow-black dark:hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border rounded-xl rounded-b-none px-6 py-4"
      >
        <StatCard qty={"+3"} title={"Años\nprogramando"} />
        <TerminalSquare className="w-9 h-9" />
      </div>
      <div
        className="text-black bg-gray-50 dark:bg-neutral-900 dark:text-white transition-all duration-150 hover:shadow-black dark:hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border-l border-r px-6 py-4"
      >
        <StatCard qty={"+15"} title={"Tecnologías\nempleadas"} />
        <Braces className="w-9 h-9" />
      </div>
      <div
        className="text-black bg-gray-50 dark:bg-neutral-900 dark:text-white transition-all duration-150 hover:shadow-black dark:hover:shadow-white hover:shadow-component flex items-center sm:gap-8
        justify-between w-full border rounded-xl rounded-t-none px-6 py-4"
      >
        <StatCard qty={"+10"} title={"Proyectos\nconcluidos"} />
        <BadgeCheck className="w-9 h-9" />
      </div>
    </div>
  );
};

export default HeroStats;

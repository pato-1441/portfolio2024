import { LucideArrowUpRightSquare } from "lucide-react";

const Working = () => {
  return (
    <section className="w-full flex flex-col gap-2 sm:mt-40 mt-20">
      <h2 className="text-2xl sm:text-3xl font-medium">Trabajando en</h2>
      <div className="w-full flex flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="lg:w-2/3">
          <p className="text-3xl sm:text-4xl font-semibold underline mb-4">
            <a
              href="https://hoc.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition-all duration-150 flex items-center gap-2 hover:gap-3"
            >
              HOC Academy <LucideArrowUpRightSquare />
            </a>
          </p>
          <p className="text-lg sm:text-2xl sm:w-2/3 sm:leading-tight">
            Fullstack Developer <br />
            <span className="italic">Cúneo, Piamonte, Italia</span> <br />
            React, Express, Mongo
          </p>
        </div>
        <div className="lg:w-1/3">
          <p className="text-3xl sm:text-4xl font-semibold underline mb-4">
            <a
              href="https://codinggiants.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition-all duration-150 flex items-center gap-2 hover:gap-3"
            >
              CodingGiants <LucideArrowUpRightSquare />
            </a>
          </p>
          <p className="text-lg sm:text-2xl sm:w-2/3 sm:leading-tight">
            Profesor de programación <br />
            <span className="italic">Barcelona, Cataluña, España</span> <br />
            C#, Python, Scratch
          </p>
        </div>
      </div>
    </section>
  );
};

export default Working;

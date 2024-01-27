import { FileText } from "lucide-react";

const HeroPresentation = ({ showModalCV }) => {
  return (
    <div className="sm:w-2/3 flex flex-col gap-2">
      <h2 className="text-2xl sm:text-3xl font-medium">
        Hola, soy Patricio Albornoz
      </h2>
      <p className="text-4xl sm:text-5xl font-semibold">Fullstack Developer</p>
      <p className="text-lg sm:text-2xl sm:w-2/3 sm:leading-tight">
        Especializado en JavaScript, React, Node, Express, C#. Finalizando
        Tecnicatura Universitaria en Programación.
      </p>
      <div className="mt-2">
        <a
          onClick={showModalCV}
          rel="noopener noreferrer"
          className="hover:cursor-pointer flex w-fit items-center gap-1 sm:gap-2 transition-all duration-150 sm:text-base font-medium px-2.5 sm:px-4 py-2 rounded-xl text-white dark:text-black bg-black dark:bg-white hover:shadow-white dark:hover:shadow-black hover:shadow-button hover:scale-105 hover:-rotate-2"
        >
          Currículum
          <FileText size={22} />
        </a>
      </div>
    </div>
  );
};

export default HeroPresentation;

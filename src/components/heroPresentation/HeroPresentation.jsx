import { FileText } from "lucide-react";

const HeroPresentation = () => {
  return (
    <div className="sm:w-1/2 flex flex-col gap-2">
      <h2 className="text-2xl sm:text-3xl font-medium">
        Hola! soy Patricio Albornoz
      </h2>
      <p className="text-4xl sm:text-5xl font-semibold">Fullstack Developer</p>
      <p className="text-lg sm:text-2xl sm:w-2/3 sm:leading-tight">
        Estudiante avanzado de la Tecnicatura Universitaria en Programación
        dictada por la Universidad Tecnológica Nacional.
      </p>
      <div className="mt-2">
        <a
          href="/CurriculumAlbornozPatricio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex w-fit items-center gap-1 sm:gap-2 transition-all duration-150 sm:text-base font-medium px-2.5 sm:px-4 py-2 rounded-xl text-white dark:text-black bg-black dark:bg-white hover:shadow-white dark:hover:shadow-black hover:shadow-button hover:scale-105 hover:-rotate-2"
        >
          Currículum
          <FileText size={22} />
        </a>
      </div>
    </div>
  );
};

export default HeroPresentation;

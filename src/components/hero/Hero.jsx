import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl sm:text-3xl font-medium">
        Hola! soy Patricio Albornoz
      </h2>
      <p className="text-4xl sm:text-5xl font-semibold">Fullstack Developer</p>
      <p className="text-lg sm:text-2xl sm:w-1/3 sm:leading-tight">
        Estudiante avanzado de la Tecnicatura Universitaria en Programación
        dictada por la Universidad Tecnológica Nacional.
      </p>
      <div className="mt-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="../../assets/CurriculumAlbornozPatricio.pdf"
          className="flex w-fit items-center gap-2 transition-all duration-150 sm:text-base font-medium px-4 py-2 rounded-xl text-black bg-white hover:shadow-black hover:shadow-button hover:scale-105 hover:-rotate-2"
        >
          <FileText size={22} />
          <span>Currículum</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

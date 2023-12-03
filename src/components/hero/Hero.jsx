import ModalContainer from "../ModalContainer/ModalContainer";

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
        <ModalContainer />
      </div>
    </section>
  );
};

export default Hero;

import { XCircle } from "lucide-react";
import flagSpain from "/flagSpain.png";
import flagUSA from "/flagUSA.png";

const Modal = ({ showModalCV }) => {
  return (
    <>
      <div
        className="cursor-pointer top-0 left-0 flex justify-center items-center
     text-white absolute w-full h-screen bg-black opacity-70 z-10"
      ></div>
      <div className="absolute top-0 left-0 p-10 w-full h-full flex items-center justify-center z-40">
        <div className="z-30 opacity-100 gap-6 py-8 px-8 bg-zinc-900 w-[400px] shadow-black rounded-lg drop-shadow-lg">
          <div className="absolute right-3 top-3">
            <XCircle className="cursor-pointer" onClick={showModalCV} />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-8 h-full">
            <div className="w-full flex flex-col gap-3">
              <img
                className="w-6 h-6 rounded-full"
                src={flagSpain}
                alt="spain flag"
              />
              <a
                onClick={showModalCV}
                href="/CurriculumAlbornozPatricio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="h-[60px] w-full flex justify-center items-center gap-1 sm:gap-2 transition-all duration-150 text-lg sm:text-xl font-medium
      px-2.5 sm:px-4 py-2 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:shadow-white dark:hover:shadow-black hover:shadow-button hover:scale-105"
              >
                Español
              </a>
            </div>
            <div className="w-full flex flex-col gap-3">
              <img
                className="w-6 h-6 rounded-full"
                src={flagUSA}
                alt="usa flag"
              />
              <a
                onClick={showModalCV}
                href="/ResumeAlbornozPatricio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="h-[60px] w-full flex justify-center items-center gap-1 sm:gap-2 transition-all duration-150 text-lg sm:text-xl font-medium
      px-2.5 sm:px-4 py-2 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:shadow-white dark:hover:shadow-black hover:shadow-button hover:scale-105"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

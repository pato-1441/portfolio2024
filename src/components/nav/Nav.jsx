import { Github, Linkedin } from "lucide-react";

const Nav = () => {
  return (
    <header className="container mx-auto w-full flex items-center justify-between py-6 px-4 sm:px-24">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold flex gap-2 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/83987715?v=4"
            alt="patricio albornoz picture"
            className="w-10 rounded-full"
          />
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <a
          className="transition-all duration-150 hover:scale-105 text-sm py-1 px-3 rounded-full border border-white hover:shadow-white hover:shadow-button"
          href="mailto:pwalbornoz@gmail.com"
          rel="noreferrer noopener"
        >
          <span>pwalbornoz@gmail.com</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pato-1441"
        >
          <Github size={22} className="hover:fill-white" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/patoalbornoz/"
        >
          <Linkedin size={22} className="hover:fill-white" />
        </a>
      </div>
    </header>
  );
};

export default Nav;

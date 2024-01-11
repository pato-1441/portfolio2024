import { Github, Linkedin } from "lucide-react";

const Nav = () => {
  return (
    <header className="fixed left-0 right-0 top-0 sm:-top-2 flex w-full justify-center bg-white px-4 dark:bg-black sm:sticky sm:px-0 z-10">
      <nav className="flex h-20 w-full max-w-[1400px] items-center justify-between">
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
            className="transition-all duration-150 hover:scale-105 text-sm py-1 px-3 rounded-full border border-black dark:border-white hover:shadow-black dark:hover:shadow-white hover:shadow-button"
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
            <Github
              size={22}
              className="hover:fill-black dark:hover:fill-white"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/patoalbornoz/"
          >
            <Linkedin
              size={22}
              className="hover:fill-black dark:hover:fill-white"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

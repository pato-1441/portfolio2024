import Toast from "../toast/Toast";

const Card = ({ imageSrc, title, stack, desc, deploy, source }) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white">
      <div className="h-64">
        <img
          src={imageSrc}
          alt={title + " project image"}
          className="flex rounded-t-xl w-full h-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-between gap-2 bg-neutral-900 rounded-b-xl h-full">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-xl">{title}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <Toast tech={tech} key={index} />
            ))}
          </div>
          <p className="text-base whitespace-pre-line">{desc}</p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          {deploy != null && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={deploy}
              className="flex w-fit items-center transition-all duration-150 text-base font-medium px-2 py-1 rounded-lg text-black bg-white border border-white hover:shadow-black hover:shadow-button"
            >
              Web
            </a>
          )}

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={source}
            className="flex w-fit items-center transition-all duration-150 text-base font-medium px-2 py-1 rounded-lg border border-white hover:shadow-white hover:shadow-button"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

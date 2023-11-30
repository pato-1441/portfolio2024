const Card = ({ imageSrc, title, stack, desc, deploy, source }) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white">
      <img
        src={imageSrc}
        alt="project image"
        className="rounded-t-xl w-full h-60"
      />
      <div className="p-4 flex flex-col gap-2 bg-neutral-900 rounded-b-xl h-full">
        <p className="font-medium text-xl">{title}</p>
        <p>{stack}</p>
        <p>{desc}</p>
        <div className="flex items-center gap-2 mt-4">
          <a
            href={deploy}
            className="flex w-fit items-center transition-all duration-150 sm:text-base font-medium px-3 py-1.5 rounded-xl border border-white hover:shadow-white hover:shadow-button"
          >
            Web
          </a>
          <a
            href={source}
            className="flex w-fit items-center transition-all duration-150 sm:text-base font-medium px-3 py-1.5 rounded-xl border border-white hover:shadow-white hover:shadow-button"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

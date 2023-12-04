const Toast = ({ tech }) => {
  const getColor = () => {
    switch (tech) {
      case "C#":
        return "bg-blue-600 text-white";
      case "DaisyUI":
        return "bg-gray-100 text-amber-700";
      case ".NET":
        return "bg-purple-700 text-white";
      case "Winforms":
        return "bg-neutral-600 text-white";
      case "Tailwind":
        return "bg-sky-500 text-white";
      case "Javascript":
        return "bg-amber-400 text-black";
      case "Typescript":
        return "bg-blue-400 text-white";
      case "HTML":
        return "bg-orange-500 text-white";
      case "React.js":
        return "bg-cyan-300 text-black";
      case "Node.js":
        return "bg-lime-600 text-white";
      case "Nginx":
        return "bg-green-700 text-white";
      case "Vite":
        return "bg-purple-700 text-amber-400";
      case "SCSS":
        return "bg-rose-500 text-white";
      case "Handlebars":
        return "bg-amber-700 text-white";
      case "Socket.IO":
        return "bg-black text-white";
      case "SASS":
        return "bg-rose-500 text-white";
      case "Firebase":
        return "bg-yellow-500 text-orange-900";
      case "MongoDB":
        return "bg-green-500 text-white";
      case "Express":
        return "bg-white text-black";
      default:
        return "bg-neutral-500";
    }
  };

  return (
    <div
      className={
        "text-center font-bold py-0.5 rounded-md px-1.5 text-[0.7rem] uppercase " +
        getColor()
      }
    >
      {tech}
    </div>
  );
};

export default Toast;

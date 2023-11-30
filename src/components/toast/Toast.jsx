const Toast = ({ tech }) => {
  const getColor = () => {
    switch (tech) {
      case "C#":
        return "bg-blue-600 text-white";
      case ".NET":
        return "bg-blue-600 text-white";
      case "Winforms":
        return "bg-blue-600 text-white";
      case "Tailwind":
        return "bg-blue-600 text-white";
      case "Javascript":
        return "bg-yellow-600 text-black";
      case "React.js":
        return "bg-blue-600 text-black";
      case "Node.js":
        return "bg-green-600 text-white";
      case "SASS":
        return "bg-pink-600 text-white";
      case "Firebase":
        return "bg-pink-600 text-white";
      case "MongoDB":
        return "bg-pink-600 text-white";
      case "Express":
        return "bg-green-300";
      default:
        return "bg-neutral-500";
    }
  };

  return (
    <div
      className={
        "font-medium py-0.5 rounded-md px-1.5 text-[0.7rem] uppercase " +
        getColor()
      }
    >
      {tech}
    </div>
  );
};

export default Toast;

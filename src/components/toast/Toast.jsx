const Toast = ({ tech }) => {
  const getColor = () => {
    switch (tech) {
      case "tailwind":
        return "bg-blue-600 text-white";
      case "javascript":
        return "bg-yellow-600 text-black";
      case "react":
        return "bg-blue-600 text-black";
      case "node.js":
        return "bg-green-600 text-white";
      case "sass":
        return "bg-pink-600 text-white";
      case "firebase":
        return "bg-pink-600 text-white";
      case "mongo":
        return "bg-pink-600 text-white";
      case "express":
        return "orange";
      default:
        return "bg-neutral-500";
    }
  };

  return <div className={"px-1 text-xs uppercase " + getColor()}>{tech}</div>;
};

export default Toast;

import { useEffect, useState, icon } from "react";

const StatCard = ({ title, qty }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let intervalId;

    const increaseNumber = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };

    if (quantity < qty) {
      intervalId = setInterval(increaseNumber, 200);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [quantity, qty]);
  return (
    <div className="flex justify-center items-center gap-1 rounded-xl">
      <div>
        <p className="text-sm sm:text-lg font-semibold whitespace-pre-line">
          {title}
        </p>
        <p className="text-2xl sm:text-4xl font-bold">+{quantity}</p>
      </div>
      {icon}
    </div>
  );
};

export default StatCard;

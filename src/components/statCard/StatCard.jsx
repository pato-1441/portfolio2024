import { useEffect, useState } from "react";

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
    <div className="flex flex-col rounded-xl w-24">
      <p className="text-base sm:text-lg whitespace-pre-line">{title}</p>
      <p className="text-2xl sm:text-4xl font-bold">+{quantity}</p>
    </div>
  );
};

export default StatCard;

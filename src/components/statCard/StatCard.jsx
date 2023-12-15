const StatCard = ({ title, qty }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 border w-56 h-36 rounded-xl">
      <p className="text-center text-4xl font-semibold">{qty}</p>
      <p className="text-center text-lg">{title}</p>
    </div>
  );
};

export default StatCard;

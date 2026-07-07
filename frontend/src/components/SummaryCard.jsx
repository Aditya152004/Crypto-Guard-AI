const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">

      <h2 className="text-lg text-gray-300">
        {title}
      </h2>

      <p className="text-4xl font-bold text-cyan-400 mt-4">
        {value}
      </p>

    </div>
  );
};

export default SummaryCard;
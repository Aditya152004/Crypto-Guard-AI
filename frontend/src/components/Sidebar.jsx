import {
  FaChartBar,
  FaUpload,
  FaBitcoin,
  FaExclamationTriangle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 p-6">

      <div className="flex items-center gap-3 mb-10">

        <FaBitcoin className="text-3xl text-yellow-400" />

        <h1 className="text-xl font-bold text-cyan-400">
          BTC Fraud AI
        </h1>

      </div>

      <ul className="space-y-6">

        <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer">
          <FaChartBar />
          Dashboard
        </li>

        <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer">
          <FaUpload />
          Upload Dataset
        </li>

        <li className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer">
          <FaExclamationTriangle />
          Fraud Analytics
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
import {
  FaArrowUp,
  FaShieldAlt,
  FaChartPie,
  FaBitcoin,
} from "react-icons/fa";

const DashboardPreview = () => {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute -inset-5 rounded-[35px] bg-cyan-500/20 blur-3xl"></div>

      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden w-[520px]">

        {/* Top */}

        <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

          <div>

            <h2 className="text-white text-xl font-bold">
              CryptoGuard AI
            </h2>

            <p className="text-sm text-gray-400">
              Live Fraud Dashboard
            </p>

          </div>

          <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-3 gap-4 p-6">

          <div className="bg-slate-800 rounded-2xl p-4">

            <FaBitcoin className="text-cyan-400 text-2xl mb-3" />

            <p className="text-gray-400 text-sm">
              Transactions
            </p>

            <h3 className="text-3xl font-bold mt-2 text-white">
              12.4K
            </h3>

          </div>

          <div className="bg-slate-800 rounded-2xl p-4">

            <FaShieldAlt className="text-red-400 text-2xl mb-3" />

            <p className="text-gray-400 text-sm">
              Fraud
            </p>

            <h3 className="text-3xl font-bold mt-2 text-red-400">
              328
            </h3>

          </div>

          <div className="bg-slate-800 rounded-2xl p-4">

            <FaArrowUp className="text-green-400 text-2xl mb-3" />

            <p className="text-gray-400 text-sm">
              Detection
            </p>

            <h3 className="text-3xl font-bold mt-2 text-green-400">
              98%
            </h3>

          </div>

        </div>

        {/* Fake Chart */}

        <div className="px-6">

          <div className="bg-slate-800 rounded-2xl p-5">

            <div className="flex items-center justify-between mb-4">

              <div>

                <h3 className="font-semibold text-white">
                  Fraud Trend
                </h3>

                <p className="text-gray-500 text-sm">
                  Last 7 Days
                </p>

              </div>

              <FaChartPie className="text-cyan-400 text-xl" />

            </div>

            <div className="flex items-end gap-3 h-36">

              <div className="w-full bg-cyan-500 rounded-t-lg h-12"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-20"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-16"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-28"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-24"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-32"></div>

              <div className="w-full bg-cyan-500 rounded-t-lg h-18"></div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center px-6 py-6">

          <div>

            <p className="text-gray-400 text-sm">
              Risk Score
            </p>

            <h2 className="text-3xl font-bold text-red-400">
              2.63%
            </h2>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl text-white font-semibold">
            View Dashboard
          </button>

        </div>

      </div>

    </div>
  );
};

export default DashboardPreview;
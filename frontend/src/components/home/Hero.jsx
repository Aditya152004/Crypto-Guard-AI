import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlayCircle,
  FaCheckCircle,
} from "react-icons/fa";

import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-28">

      {/* Background Glow */}

      <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8 w-full ">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 rounded-full text-cyan-400 mb-8">

              <FaCheckCircle />

              AI Powered • Enterprise Ready

            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              Protect

              <span className="block text-cyan-400">

                Cryptocurrency

              </span>

              Transactions

            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-9">

              CryptoGuard AI detects fraudulent cryptocurrency
              transactions using Machine Learning, interactive
              analytics, and intelligent anomaly detection.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link to="/dashboard">

                <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-cyan-500/30">

                  Start Analysis

                  <FaArrowRight />

                </button>

              </Link>

              <button className="border border-slate-700 hover:border-cyan-500 transition px-8 py-4 rounded-2xl flex items-center gap-3">

                <FaPlayCircle />

                Watch Demo

              </button>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  98%

                </h2>

                <p className="text-gray-400 mt-2">

                  Detection Accuracy

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  1M+

                </h2>

                <p className="text-gray-400 mt-2">

                  Transactions

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  Real-time

                </h2>

                <p className="text-gray-400 mt-2">

                  AI Analytics

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <DashboardPreview />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
import { Link, useLocation } from "react-router-dom";
import {
  FaShieldAlt,
  FaGithub,
  FaChartLine,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">

            <FaShieldAlt
              className="text-white text-xl"
            />

          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-white">

              CryptoGuard

              <span className="text-cyan-400">
                {" "}AI
              </span>

            </h1>

            <p className="text-xs text-gray-400">

              Fraud Detection Platform

            </p>

          </div>

        </Link>

        {/* NAVIGATION */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={`transition ${
              location.pathname === "/"
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`transition ${
              location.pathname === "/dashboard"
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            Dashboard
          </Link>

        </div>

        {/* ACTION BUTTONS */}

        <div className="flex items-center gap-4">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-xl hover:border-cyan-400 transition"
          >

            <FaGithub />

            GitHub

          </a>

          <Link to="/dashboard">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-cyan-500/30">

              <FaChartLine />

              Dashboard

            </button>

          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
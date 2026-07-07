import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";

import {
  FaShieldAlt,
  FaChartLine,
  FaBrain,
  FaUpload,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={28} />,
    title: "AI Powered",
    desc: "Isolation Forest + KMeans detect suspicious transactions automatically.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Interactive Dashboard",
    desc: "Visualize fraud scores, PCA clusters, histograms and analytics.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Risk Detection",
    desc: "Identify high-risk Bitcoin transactions within seconds.",
  },
];

const steps = [
  {
    title: "Upload Dataset",
    icon: <FaUpload size={24} />,
  },
  {
    title: "AI Analysis",
    icon: <FaBrain size={24} />,
  },
  {
    title: "Fraud Detection",
    icon: <FaShieldAlt size={24} />,
  },
  {
    title: "Analytics Dashboard",
    icon: <FaChartLine size={24} />,
  },
];

const Home = () => {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO */}

      <Hero />
      <TechStack />

      {/* FEATURES */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold text-center mb-14">

          Platform Features

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 hover:scale-105 transition shadow-xl"
            >

              <div className="text-cyan-400 mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {item.title}

              </h3>

              <p className="text-gray-400">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-slate-900 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">

          How It Works

        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
            >

              <div className="text-cyan-400 flex justify-center mb-6">

                {step.icon}

              </div>

              <h3 className="font-bold text-xl">

                {step.title}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="text-center py-10 text-gray-500 border-t border-slate-800">

        © 2026 AI Bitcoin Fraud Detection Platform

      </footer>

    </div>
  );
};

export default Home;
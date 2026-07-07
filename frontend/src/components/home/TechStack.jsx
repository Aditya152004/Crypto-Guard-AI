import {
  SiReact,
  SiFastapi,
  SiPython,
  SiTailwindcss,
  SiScikitlearn,
} from "react-icons/si";

import { TbChartHistogram } from "react-icons/tb";

const technologies = [
  {
    name: "React",
    icon: <SiReact className="text-sky-400 text-5xl" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="text-green-400 text-5xl" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-yellow-400 text-5xl" />,
  },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn className="text-orange-400 text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Recharts",
    icon: <TbChartHistogram className="text-pink-400 text-5xl" />,
  },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">

            Built With

          </p>

          <h2 className="text-5xl font-black mt-4">

            Modern Technologies

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

            CryptoGuard AI is powered by modern web technologies,
            machine learning frameworks, and scalable backend architecture.

          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {tech.icon}

              <h3 className="mt-6 font-semibold text-center">

                {tech.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TechStack;
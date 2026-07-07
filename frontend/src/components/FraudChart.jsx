import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#ef4444", "#22c55e"];

const FraudChart = ({ data }) => {

  if (!data || data.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white">
          Fraud Distribution
        </h2>

        <p className="text-gray-400 mt-2">
          Upload a dataset to visualize fraud distribution.
        </p>

        <div className="h-[300px] flex items-center justify-center text-gray-500">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

      {/* Header */}

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-3xl font-bold text-white">
          Fraud Distribution
        </h2>

        <p className="text-gray-400 mt-2">
          Distribution of fraudulent and legitimate transactions.
        </p>

      </div>

      {/* Chart */}

      <div className="p-6">

        <ResponsiveContainer width="100%" height={320}>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={3}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );

};

export default FraudChart;
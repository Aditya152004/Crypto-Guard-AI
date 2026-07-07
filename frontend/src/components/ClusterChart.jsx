import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ClusterChart = ({ data }) => {

  if (!data || data.length === 0) {

    return (

      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

        <div className="p-6 border-b border-slate-800">

          <h2 className="text-3xl font-bold text-white">
            Cluster Distribution
          </h2>

          <p className="text-gray-400 mt-2">
            Upload a cryptocurrency transaction dataset to visualize
            K-Means cluster distribution.
          </p>

        </div>

        <div className="h-[400px] flex items-center justify-center text-gray-500">

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
          Cluster Distribution
        </h2>

        <p className="text-gray-400 mt-2">
          Number of transactions grouped into each cluster using
          K-Means clustering.
        </p>

      </div>

      {/* Chart */}

      <div className="p-6 flex justify-center">

        <div className="w-full h-[400px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
              />

              <XAxis
                dataKey="cluster"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#06b6d4"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

};

export default ClusterChart;
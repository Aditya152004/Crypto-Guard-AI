import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const PCAScatter = ({ data }) => {

  if (!data || data.length === 0) {

    return (

      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

        <div className="p-6 border-b border-slate-800">

          <h2 className="text-3xl font-bold text-white">
            PCA Fraud Scatter Plot
          </h2>

          <p className="text-gray-400 mt-2">
            Upload a cryptocurrency transaction dataset to visualize
            PCA-based fraud clustering.
          </p>

        </div>

        <div className="h-[500px] flex items-center justify-center text-gray-500">

          No data available

        </div>

      </div>

    );

  }

  const fraudPoints = data.filter(
    (item) => item.fraud === 1
  );

  const safePoints = data.filter(
    (item) => item.fraud === 0
  );

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

      {/* Header */}

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-3xl font-bold text-white">
          PCA Fraud Scatter Plot
        </h2>

        <p className="text-gray-400 mt-2">
          Visual representation of transaction clusters after PCA
          dimensionality reduction.
        </p>

      </div>

      {/* Chart */}

      <div className="p-6 flex justify-center">

        <div className="w-full h-[500px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                type="number"
                dataKey="x"
                tickCount={6}
              />

              <YAxis
                type="number"
                dataKey="y"
                tickCount={6}
              />

              <Tooltip />

              <Legend />

              <Scatter
                name="Safe"
                data={safePoints}
                fill="#22c55e"
              />

              <Scatter
                name="Fraud"
                data={fraudPoints}
                fill="#ef4444"
              />

            </ScatterChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

};

export default PCAScatter;
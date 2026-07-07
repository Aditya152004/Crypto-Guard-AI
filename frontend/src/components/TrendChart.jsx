import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", fraud: 4 },
  { day: "Tue", fraud: 7 },
  { day: "Wed", fraud: 5 },
  { day: "Thu", fraud: 9 },
  { day: "Fri", fraud: 6 },
  { day: "Sat", fraud: 12 },
  { day: "Sun", fraud: 8 },
];

const TrendChart = () => {
  return (

    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Fraud Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="fraud"
            stroke="#06b6d4"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default TrendChart;
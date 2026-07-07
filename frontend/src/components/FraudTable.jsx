const FraudTable = ({ data }) => {

  const getBadge = (status) => {

    if (!status) return "bg-gray-700 text-gray-300";

    const value = status.toLowerCase();

    if (value.includes("high"))
      return "bg-red-500/20 text-red-400 border border-red-500/30";

    if (value.includes("medium"))
      return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";

    if (value.includes("low"))
      return "bg-green-500/20 text-green-400 border border-green-500/30";

    return "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
  };

  if (!data || data.length === 0) {

    return (

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-white mb-2">
          Suspicious Transactions
        </h2>

        <p className="text-gray-400">
          No suspicious transactions detected yet.
        </p>

      </div>

    );

  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">

      <div className="p-8 border-b border-slate-800">

        <h2 className="text-3xl font-bold text-white">
          Suspicious Transactions
        </h2>

        <p className="text-gray-400 mt-2">
          AI flagged these transactions for further investigation.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="text-left px-6 py-4 text-gray-300 uppercase text-sm">
                Transaction ID
              </th>

              <th className="text-left px-6 py-4 text-gray-300 uppercase text-sm">
                Fraud Score
              </th>

              <th className="text-left px-6 py-4 text-gray-300 uppercase text-sm">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="px-6 py-5 font-medium">

                  #{item.transaction_id}

                </td>

                <td className="px-6 py-5">

                  <span className="font-bold text-red-400">

                    {Number(item.fraud_score).toFixed(4)}

                  </span>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadge(item.status)}`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default FraudTable;
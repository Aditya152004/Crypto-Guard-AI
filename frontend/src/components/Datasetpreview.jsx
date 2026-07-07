const DatasetPreview = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  return (

    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-8 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">
        Dataset Preview
      </h2>

      <table className="w-full text-left">

        <thead>

          <tr className="border-b border-slate-700">

            {columns.map((col, index) => (

              <th
                key={index}
                className="pb-4 pr-6 text-cyan-400"
              >
                {col}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.slice(0, 5).map((row, rowIndex) => (

            <tr
              key={rowIndex}
              className="border-b border-slate-700"
            >

              {columns.map((col, colIndex) => (

                <td
                  key={colIndex}
                  className="py-4 pr-6 text-gray-300"
                >
                  {row[col]}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DatasetPreview;
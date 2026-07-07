import {
  FaClipboardCheck,
  FaDatabase,
  FaShieldAlt,
  FaPercentage,
  FaExclamationTriangle,
} from "react-icons/fa";

const AnalysisSummary = ({ analytics }) => {

  if (!analytics) {

    return (

      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

        <div className="p-6 border-b border-slate-800">

          <h2 className="text-3xl font-bold text-white">

            Analysis Summary

          </h2>

          <p className="text-gray-400 mt-2">

            Upload a dataset to generate an AI-powered summary.

          </p>

        </div>

        <div className="p-8 text-center text-gray-500">

          No analysis available.

        </div>

      </div>

    );

  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

      {/* Header */}

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-3xl font-bold text-white">

          Analysis Summary

        </h2>

        <p className="text-gray-400 mt-2">

          Overall summary generated from the uploaded cryptocurrency transaction dataset.

        </p>

      </div>

      {/* Content */}

      <div className="grid md:grid-cols-2 gap-6 p-8">

        <div className="flex items-start gap-4">

          <FaDatabase className="text-cyan-400 text-2xl mt-1"/>

          <div>

            <h3 className="font-semibold text-white">

              Total Transactions

            </h3>

            <p className="text-gray-400">

              {analytics.total_transactions}

            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaShieldAlt className="text-red-400 text-2xl mt-1"/>

          <div>

            <h3 className="font-semibold text-white">

              Fraud Detected

            </h3>

            <p className="text-gray-400">

              {analytics.fraud_transactions}

            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaPercentage className="text-yellow-400 text-2xl mt-1"/>

          <div>

            <h3 className="font-semibold text-white">

              Fraud Percentage

            </h3>

            <p className="text-gray-400">

              {analytics.fraud_percentage}%

            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaClipboardCheck className="text-green-400 text-2xl mt-1"/>

          <div>

            <h3 className="font-semibold text-white">

              AI Status

            </h3>

            <p className="text-green-400">

              Analysis Completed Successfully

            </p>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="border-t border-slate-800 p-6">

        <div className="flex gap-4">

          <FaExclamationTriangle className="text-yellow-400 text-2xl mt-1"/>

          <div>

            <h3 className="font-semibold text-white mb-2">

              Recommendation

            </h3>

            <p className="text-gray-300 leading-7">

              {analytics.fraud_percentage > 10

                ? "High fraud activity detected. Investigate all flagged transactions immediately and perform additional verification."

                : analytics.fraud_percentage > 3

                ? "Moderate fraud activity detected. Review suspicious transactions before approval."

                : "Fraud activity is currently low. Continue monitoring future transactions and periodically retrain the model."}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AnalysisSummary;
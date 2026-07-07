import { useState } from "react";

import AIInsights from "../components/dashboard/AIInsights";

import PCAScatter from "../components/PCAScatter";
import FraudHistogram from "../components/FraudHistogram";
import ClusterChart from "../components/ClusterChart";

import Sidebar from "../components/Sidebar";

import AnalyticsCard from "../components/AnalyticsCard";
import FraudTable from "../components/FraudTable";
import FraudChart from "../components/FraudChart";
import AnalysisSummary from "../components/dashboard/AnalysisSummary";
import UploadSection from "../components/UploadSection";

const Dashboard = () => {

  const [analytics, setAnalytics] = useState(null);

  return (

    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8 pt-32 space-y-8 overflow-y-auto">

        {/* HEADER */}

        <div>

          <h1 className="text-5xl font-black text-white">

            CryptoGuard

            <span className="text-cyan-400">
              {" "}AI Dashboard
            </span>

          </h1>

          <p className="text-gray-400 mt-2 text-lg">

            Real-Time Cryptocurrency Fraud Detection &
            Analytics Platform

          </p>

        </div>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <AnalyticsCard
            title="Total Transactions"
            value={
              analytics
                ? analytics.total_transactions
                : "0"
            }
            color="text-cyan-400"
          />

          <AnalyticsCard
            title="Fraud Detected"
            value={
              analytics
                ? analytics.fraud_transactions
                : "0"
            }
            color="text-red-400"
          />

          <AnalyticsCard
            title="Fraud Percentage"
            value={
              analytics
                ? `${analytics.fraud_percentage}%`
                : "0%"
            }
            color="text-yellow-400"
          />

        </div>

        {/* AI INSIGHTS */}

        <AIInsights
          totalTransactions={
            analytics
              ? analytics.total_transactions
              : 0
          }
          fraudDetected={
            analytics
              ? analytics.fraud_transactions
              : 0
          }
          fraudPercentage={
            analytics
              ? analytics.fraud_percentage
              : 0
          }
        />

        {/* UPLOAD */}

        <UploadSection
          setAnalytics={setAnalytics}
        />

        {/* PIE CHART */}

        <FraudChart
          data={
            analytics
              ? analytics.chart_data
              : []
          }
        />

        {/* PCA + HISTOGRAM */}

        <div className="grid lg:grid-cols-2 gap-8">

          <PCAScatter
            data={
              analytics
                ? analytics.pca_points
                : []
            }
          />

          <FraudHistogram
            data={
              analytics
                ? analytics.histogram_data
                : []
            }
          />

        </div>

        {/* CLUSTERS */}

        <ClusterChart
          data={
            analytics
              ? analytics.cluster_counts
              : []
          }
        />

        {/* FRAUD TABLE */}

        <FraudTable
          data={
            analytics
              ? analytics.fraud_results
              : []
          }
        />

      <AnalysisSummary analytics={analytics} />

      </div>

    </div>

  );

};

export default Dashboard;
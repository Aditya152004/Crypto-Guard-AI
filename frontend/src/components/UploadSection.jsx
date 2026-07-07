import API from "../services/api";
import toast from "react-hot-toast";

import { useState } from "react";

import {
  FaCloudUploadAlt,
} from "react-icons/fa";

import Papa from "papaparse";

import DatasetPreview from "./DatasetPreview";

const UploadSection = ({
  setAnalytics,
}) => {

  const [file, setFile] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [previewData, setPreviewData] =
  useState([]);

  const handleFileChange = (e) => {

  const selectedFile =
    e.target.files[0];

  if (!selectedFile) return;

  setFile(selectedFile);

  Papa.parse(selectedFile, {

    header: true,

    complete: (results) => {

      setPreviewData(results.data);

    },

  });

};

  const handleAnalyze = async () => {

  if (!file) {

    toast.error(
      "Please upload CSV file"
    );

    return;
  }

  try {

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);

    const response =
      await API.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    setAnalytics(response.data);
    console.log(response.data);

    toast.success(
      "Fraud analysis completed"
    );

  } catch (error) {

  console.log(error);

  toast.error(

    error.response?.data?.error
    || "Backend failed"

  );

} finally {

    setLoading(false);

  }
};

  return (

    <div className="bg-slate-800 p-8 rounded-2xl shadow-lg mt-8">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">
          Upload Cryptocurrency Transaction Dataset
        </h2>

        <p className="text-gray-400 mt-2">
          Supported format: CSV • Maximum file size: 50 MB
        </p>
      </div>

      <label
        className="
        border-2
        border-dashed
        border-cyan-500/70
        rounded-3xl
        p-14
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        bg-slate-900
        hover:bg-slate-800
        hover:border-cyan-400
        transition-all
        duration-300
      "
      >

        <FaCloudUploadAlt
          className="text-7xl text-cyan-400 mb-5"
        />

        <p className="text-2xl font-semibold text-white">
          Drag & Drop your CSV file
        </p>

        <p className="text-gray-400 mt-3 text-center">
          Browse your local files or drag a dataset here to begin AI-powered fraud analysis.
        </p>

        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />

      </label>

      {file && (

        <div className="mt-6 bg-slate-900 border border-green-500/30 p-5 rounded-2xl">
          <p className="text-green-400 font-semibold">
            ✓ Dataset Ready
          </p>

          <p className="mt-2 text-gray-300">
            {file.name}
          </p>

        </div>

      )}

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="
          mt-6
          w-full
          bg-cyan-500
          hover:bg-cyan-600
          disabled:bg-slate-700
          disabled:cursor-not-allowed
          py-4
          rounded-2xl
          font-bold
          text-lg
          transition-all
          duration-300
        "
      >
        {loading ? "Analyzing Dataset..." : "Analyze Fraud"}
      </button>
      <DatasetPreview data={previewData} />
    </div>
  );
};

export default UploadSection;
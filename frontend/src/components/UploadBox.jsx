import { useState } from "react";
import API from "../services/api";

const UploadBox = ({ setSummary }) => {

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select CSV file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await API.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setSummary(response.data);

      alert("Fraud analysis completed");

    } catch (error) {

      console.log(error);

      alert("Upload failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Upload Transaction Dataset
      </h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="mb-6"
      />

      <br />

      <button
        onClick={handleUpload}
        className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold"
      >
        {loading
          ? "Processing..."
          : "Analyze Fraud"}
      </button>

    </div>
  );
};

export default UploadBox;
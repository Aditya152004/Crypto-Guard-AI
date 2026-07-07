from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd
import numpy as np
import joblib

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# LOAD MODELS
scaler = joblib.load("scaler.pkl")
pca = joblib.load("pca.pkl")
iso = joblib.load("iso.pkl")
kmeans = joblib.load("kmeans.pkl")
feature_columns = joblib.load("features.pkl")


@app.get("/")
def home():

    return {
        "message": "AI Fraud Backend Running"
    }


@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):

    try:

        # READ CSV
        df = pd.read_csv(file.file)

        if df.empty:

            return {
                "error": "Empty dataset"
            }

        # KEEP NUMERIC
        df = df.select_dtypes(
            include=[np.number]
        )

        # MATCH TRAINING FEATURES
        df = df.reindex(
            columns=feature_columns,
            fill_value=0
        )

        # HANDLE NULLS
        df.fillna(
            df.median(),
            inplace=True
        )

        # SCALE
        X_scaled = scaler.transform(df)

        # PCA
        X_pca = pca.transform(X_scaled)

        # ISOLATION FOREST
        iso_labels = iso.predict(X_pca)

        anomalies = np.where(
            iso_labels == -1,
            1,
            0
        )

        # KMEANS PREDICTION
        cluster_labels = kmeans.predict(X_pca)

        # DISTANCES
        distances = kmeans.transform(X_pca)

        fraud_score = np.min(
            distances,
            axis=1
        )

        # NORMALIZE SCORE
        fraud_score = (
            fraud_score /
            fraud_score.max()
        ) * 100

        # DYNAMIC THRESHOLD
        threshold = np.percentile(
            fraud_score,
            95
        )

        # FINAL FRAUD LABELS
        final_fraud = np.where(
            (fraud_score >= threshold)
            | (anomalies == 1),
            1,
            0
        )

        # SUMMARY
        total_transactions = len(df)

        fraud_transactions = int(
            final_fraud.sum()
        )

        fraud_percentage = round(
            (
                fraud_transactions
                / total_transactions
            ) * 100,
            2
        )

        # FRAUD RESULTS
        fraud_indices = np.where(
            final_fraud == 1
        )[0]

        fraud_results = []

        for idx in fraud_indices[:10]:

            fraud_results.append({

                "transaction_id":
                int(idx),

                "fraud_score":
                round(
                    float(fraud_score[idx]),
                    2
                ),

                "status":
                "High Risk"

            })

        # PIE CHART
        chart_data = [

            {
                "name": "Fraud",
                "value": fraud_transactions
            },

            {
                "name": "Safe",
                "value":
                total_transactions
                - fraud_transactions
            }

        ]

        # NORMALIZE PCA VALUES

        x_values = X_pca[:, 0]
        y_values = X_pca[:, 1]

        x_min = x_values.min()
        x_max = x_values.max()

        y_min = y_values.min()
        y_max = y_values.max()

        # PCA SCATTER DATA

        pca_points = []

        for i in range(min(300, len(X_pca))):

            pca_points.append({

                "x":
                round(float(X_pca[i][0]), 2),

                "y":
                round(float(X_pca[i][1]), 2),

                "fraud":
                int(final_fraud[i]),

                "cluster":
                int(cluster_labels[i])

        })

        # HISTOGRAM BINS

        histogram_bins = [
            "0-20",
            "20-40",
            "40-60",
            "60-80",
            "80-100"
        ]

        histogram_counts = [0] * 5

        for score in fraud_score:

            if score < 20:

                histogram_counts[0] += 1

            elif score < 40:

                histogram_counts[1] += 1

            elif score < 60:

                histogram_counts[2] += 1

            elif score < 80:

                histogram_counts[3] += 1

            else:

                histogram_counts[4] += 1

        histogram_data = []

        for i in range(5):

            histogram_data.append({

                "range":
                histogram_bins[i],

                "count":
                histogram_counts[i]

            })

        # CLUSTER COUNTS

        cluster_counts = []

        unique_clusters = np.unique(
            cluster_labels
        )

        for cluster in unique_clusters:

            count = int(
                np.sum(
                    cluster_labels
                    == cluster
                )
            )

            cluster_counts.append({

                "cluster":
                f"Cluster {cluster}",

                "count":
                count

            })

        # FINAL RESPONSE

        return {

            "total_transactions":
            total_transactions,

            "fraud_transactions":
            fraud_transactions,

            "fraud_percentage":
            fraud_percentage,

            "fraud_results":
            fraud_results,

            "chart_data":
            chart_data,

            "pca_points":
            pca_points,

            "histogram_data":
            histogram_data,

            "cluster_counts":
            cluster_counts

        }

    except Exception as e:

        return {
            "error": str(e)
        }
import pandas as pd
import numpy as np
import joblib

from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.ensemble import IsolationForest
from sklearn.cluster import KMeans

# LOAD DATASET
df = pd.read_csv("btc_dataset.csv")

# KEEP ONLY NUMERIC COLUMNS
df = df.select_dtypes(include=[np.number])

# HANDLE NULL VALUES
df.fillna(df.median(), inplace=True)

# SAVE FEATURE NAMES
feature_columns = df.columns.tolist()

# SCALING
scaler = StandardScaler()

X_scaled = scaler.fit_transform(df)

# PCA (FOR VISUALIZATION)
pca = PCA(n_components=2)

X_pca = pca.fit_transform(X_scaled)

# ISOLATION FOREST
iso = IsolationForest(
    contamination=0.02,
    random_state=42
)

iso.fit(X_pca)

# KMEANS
kmeans = KMeans(
    n_clusters=3,
    random_state=42
)

kmeans.fit(X_pca)

# SAVE EVERYTHING
joblib.dump(scaler, "scaler.pkl")
joblib.dump(pca, "pca.pkl")
joblib.dump(iso, "iso.pkl")
joblib.dump(kmeans, "kmeans.pkl")
joblib.dump(feature_columns, "features.pkl")

print("Models trained successfully")
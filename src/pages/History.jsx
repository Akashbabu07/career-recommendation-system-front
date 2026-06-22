import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PredictionCard from "../components/PredictionCard";
import { getPredictionHistory } from "../api/predictionApi";

function History() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { fetchHistory(); }, []);

    const fetchHistory = async () => {
        try {
            const data = await getPredictionHistory();
            setHistory(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div style={{ marginBottom: "1.75rem" }}>
                <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Prediction History
                </h1>
                <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    {history.length} prediction{history.length !== 1 ? "s" : ""} made so far
                </p>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", padding: "3rem", color: "#94a3b8" }}>Loading...</div>
            ) : history.length === 0 ? (
                <div style={{
                    background: "white",
                    borderRadius: "0.875rem",
                    padding: "3rem",
                    textAlign: "center",
                    border: "1px solid #f1f5f9"
                }}>
                    <p style={{ fontSize: "2rem", margin: "0 0 0.5rem" }}>📋</p>
                    <p style={{ fontWeight: 600, color: "#0f172a", margin: 0 }}>No predictions yet</p>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", margin: "0.25rem 0 0" }}>
                        Go to Predict Career to get your first recommendation
                    </p>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {history.map(item => (
                        <PredictionCard key={item.id} prediction={item} />
                    ))}
                </div>
            )}
        </DashboardLayout>
    );
}

export default History;

function PredictionCard({ prediction }) {
    return (
        <div style={{
            background: "white",
            borderRadius: "0.875rem",
            padding: "1.25rem 1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            border: "1px solid #f1f5f9",
            borderLeft: "4px solid #4f46e5"
        }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", margin: 0 }}>
                    {prediction.prediction}
                </h3>
                <span style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    background: "#f8fafc",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2rem",
                    border: "1px solid #e2e8f0",
                    whiteSpace: "nowrap"
                }}>
                    {new Date(prediction.timestamp).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric"
                    })}
                </span>
            </div>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem", color: "#64748b" }}>
                <span style={{ fontWeight: 500 }}>Skills:</span> {prediction.skillsUsed}
            </p>
        </div>
    );
}

export default PredictionCard;

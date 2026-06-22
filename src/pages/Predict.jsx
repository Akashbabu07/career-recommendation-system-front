import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { predictCareer } from "../api/predictionApi";
import { FaBrain, FaRocket } from "react-icons/fa";

function Predict() {
    const [skills, setSkills] = useState("");
    const [prediction, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await predictCareer(skills);
            setPrediction(response.prediction);
        } catch (error) {
            setError("Failed to get prediction. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div style={{ marginBottom: "1.75rem" }}>
                <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Career Predictor
                </h1>
                <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    Enter your skills and let AI find the best career match
                </p>
            </div>

            <div style={{
                background: "white",
                borderRadius: "0.875rem",
                padding: "1.75rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                border: "1px solid #f1f5f9",
                marginBottom: "1.5rem"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                    <div style={{
                        background: "#eef2ff",
                        borderRadius: "0.5rem",
                        padding: "0.4rem",
                        display: "flex",
                        color: "#4f46e5"
                    }}>
                        <FaBrain size={18} />
                    </div>
                    <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", margin: 0 }}>
                        Enter your skills
                    </h2>
                </div>

                {error && (
                    <div style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: "0.5rem",
                        padding: "0.75rem 1rem",
                        color: "#dc2626",
                        fontSize: "0.875rem",
                        marginBottom: "1rem"
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <textarea
                        rows="5"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="e.g. Java, Spring Boot, MongoDB, Docker, REST APIs"
                        required
                        style={{
                            width: "100%",
                            padding: "0.875rem",
                            border: "1.5px solid #e2e8f0",
                            borderRadius: "0.6rem",
                            fontSize: "0.9rem",
                            outline: "none",
                            resize: "vertical",
                            fontFamily: "inherit",
                            boxSizing: "border-box",
                            transition: "border-color 0.15s"
                        }}
                        onFocus={e => e.target.style.borderColor = "#4f46e5"}
                        onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            marginTop: "1rem",
                            padding: "0.7rem 1.5rem",
                            background: loading ? "#a5b4fc" : "linear-gradient(135deg, #4f46e5, #4338ca)",
                            color: "white",
                            border: "none",
                            borderRadius: "0.6rem",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            cursor: loading ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}
                    >
                        <FaRocket size={14} />
                        {loading ? "Analysing..." : "Predict Career"}
                    </button>
                </form>
            </div>

            {prediction && (
                <div style={{
                    background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
                    borderRadius: "0.875rem",
                    padding: "1.75rem",
                    color: "white"
                }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.8, margin: "0 0 0.5rem" }}>
                        Recommended Career
                    </p>
                    <p style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
                        {prediction}
                    </p>
                </div>
            )}
        </DashboardLayout>
    );
}

export default Predict;

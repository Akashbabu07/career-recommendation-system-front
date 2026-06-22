import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { getProfile } from "../api/userApi";
import { getPredictionHistory } from "../api/predictionApi";
import { FaBrain, FaCode, FaProjectDiagram } from "react-icons/fa";

function Dashboard() {
    const [profile, setProfile] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => { loadDashboard(); }, []);

    const loadDashboard = async () => {
        try {
            const [profileData, historyData] = await Promise.all([getProfile(), getPredictionHistory()]);
            setProfile(profileData);
            setHistory(historyData);
        } catch (error) { console.error(error); }
    };

    return (
        <DashboardLayout>
            <div style={{ marginBottom: "1.75rem" }}>
                <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    Dashboard
                </h1>
                <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    Here's a snapshot of your career profile
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
                <StatCard title="Predictions" value={history.length} icon={<FaBrain />} color="#4f46e5" />
                <StatCard title="Skills" value={profile?.skills?.length || 0} icon={<FaCode />} color="#06b6d4" />
                <StatCard title="Projects" value={profile?.projects?.length || 0} icon={<FaProjectDiagram />} color="#10b981" />
            </div>

            <div style={{
                background: "white",
                borderRadius: "0.875rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                border: "1px solid #f1f5f9"
            }}>
                <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", margin: "0 0 1rem" }}>
                    Latest Prediction
                </h2>

                {history.length > 0 ? (
                    <div style={{
                        background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
                        borderRadius: "0.75rem",
                        padding: "1.25rem 1.5rem"
                    }}>
                        <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4f46e5", margin: 0 }}>
                            {history[0].prediction}
                        </p>
                        <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "0.5rem 0 0" }}>
                            <span style={{ fontWeight: 500 }}>Skills used:</span> {history[0].skillsUsed}
                        </p>
                    </div>
                ) : (
                    <div style={{
                        textAlign: "center",
                        padding: "2rem",
                        color: "#94a3b8"
                    }}>
                        <p style={{ fontSize: "2rem", margin: "0 0 0.5rem" }}>🎯</p>
                        <p style={{ margin: 0, fontWeight: 500 }}>No predictions yet</p>
                        <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>Head to Predict Career to get started</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;

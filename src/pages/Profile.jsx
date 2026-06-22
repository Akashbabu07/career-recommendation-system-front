import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getProfile } from "../api/userApi";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => { fetchProfile(); }, []);

    const fetchProfile = async () => {
        try {
            const data = await getProfile();
            setUser(data);
        } catch (error) { console.error(error); }
    };

    if (!user) return <DashboardLayout><div style={{ padding: "2rem", color: "#64748b" }}>Loading profile...</div></DashboardLayout>;

    const tagStyle = {
        display: "inline-block",
        padding: "0.25rem 0.65rem",
        borderRadius: "2rem",
        fontSize: "0.8rem",
        fontWeight: 500,
        margin: "0.2rem"
    };

    return (
        <DashboardLayout>
            <div style={{ marginBottom: "1.75rem" }}>
                <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    My Profile
                </h1>
            </div>

            {/* Avatar + basic info */}
            <div style={{
                background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                borderRadius: "0.875rem",
                padding: "1.75rem",
                color: "white",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap"
            }}>
                <div style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    flexShrink: 0
                }}>
                    {user.name?.[0]?.toUpperCase()}
                </div>
                <div>
                    <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>{user.name}</p>
                    <p style={{ margin: "0.2rem 0 0", opacity: 0.85, fontSize: "0.875rem" }}>{user.email}</p>
                    <p style={{ margin: "0.2rem 0 0", opacity: 0.75, fontSize: "0.8rem" }}>CGPA: {user.cgpa}</p>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                {[
                    { label: "Skills", items: user.skills, color: "#4f46e5", bg: "#eef2ff" },
                    { label: "Interests", items: user.interests, color: "#06b6d4", bg: "#e0f9ff" },
                    { label: "Projects", items: user.projects, color: "#10b981", bg: "#d1fae5" },
                ].map(({ label, items, color, bg }) => (
                    <div key={label} style={{
                        background: "white",
                        borderRadius: "0.875rem",
                        padding: "1.25rem 1.5rem",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                        border: "1px solid #f1f5f9"
                    }}>
                        <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a", margin: "0 0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            {label}
                        </h3>
                        <div>
                            {items?.length > 0 ? items.map((item, i) => (
                                <span key={i} style={{ ...tagStyle, background: bg, color }}>
                                    {item}
                                </span>
                            )) : (
                                <span style={{ color: "#94a3b8", fontSize: "0.875rem" }}>None added</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
}

export default Profile;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await loginUser(formData);
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f0f4ff 0%, #e0f2fe 100%)",
            padding: "1rem"
        }}>
            <div style={{ width: "100%", maxWidth: "400px" }}>
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "3rem",
                        height: "3rem",
                        background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                        borderRadius: "0.875rem",
                        marginBottom: "0.75rem"
                    }}>
                        <span style={{ fontSize: "1.4rem" }}>🎯</span>
                    </div>
                    <h1 style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "#0f172a",
                        margin: 0
                    }}>CareerAI</h1>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                        Sign in to your account
                    </p>
                </div>

                {/* Card */}
                <div style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "2rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
                }}>
                    {error && (
                        <div style={{
                            background: "#fef2f2",
                            border: "1px solid #fecaca",
                            borderRadius: "0.5rem",
                            padding: "0.75rem 1rem",
                            color: "#dc2626",
                            fontSize: "0.875rem",
                            marginBottom: "1.25rem"
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.65rem 0.875rem",
                                    border: "1.5px solid #e2e8f0",
                                    borderRadius: "0.6rem",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    transition: "border-color 0.15s",
                                    boxSizing: "border-box"
                                }}
                                onFocus={e => e.target.style.borderColor = "#4f46e5"}
                                onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                            />
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.65rem 0.875rem",
                                    border: "1.5px solid #e2e8f0",
                                    borderRadius: "0.6rem",
                                    fontSize: "0.9rem",
                                    outline: "none",
                                    transition: "border-color 0.15s",
                                    boxSizing: "border-box"
                                }}
                                onFocus={e => e.target.style.borderColor = "#4f46e5"}
                                onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                background: loading ? "#a5b4fc" : "linear-gradient(135deg, #4f46e5, #4338ca)",
                                color: "white",
                                border: "none",
                                borderRadius: "0.6rem",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                cursor: loading ? "not-allowed" : "pointer",
                                transition: "opacity 0.15s"
                            }}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.875rem", color: "#64748b" }}>
                        New here?{" "}
                        <Link to="/register" style={{ color: "#4f46e5", fontWeight: 600, textDecoration: "none" }}>
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

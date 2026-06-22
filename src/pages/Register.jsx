import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "", email: "", password: "", cgpa: "", skills: "", interests: "", projects: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
            cgpa: Number(formData.cgpa),
            skills: formData.skills.split(",").map(s => s.trim()).filter(Boolean),
            interests: formData.interests ? formData.interests.split(",").map(s => s.trim()).filter(Boolean) : [],
            projects: formData.projects ? formData.projects.split(",").map(s => s.trim()).filter(Boolean) : []
        };
        try {
            await registerUser(payload);
            alert("Registration Successful");
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        width: "100%",
        padding: "0.65rem 0.875rem",
        border: "1.5px solid #e2e8f0",
        borderRadius: "0.6rem",
        fontSize: "0.875rem",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.15s"
    };

    const labelStyle = {
        display: "block",
        fontSize: "0.78rem",
        fontWeight: 600,
        color: "#374151",
        marginBottom: "0.35rem"
    };

    const fields = [
        { name: "name", label: "Full Name", type: "text", placeholder: "Akash Babu", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
        { name: "password", label: "Password", type: "password", placeholder: "••••••••", required: true },
        { name: "cgpa", label: "CGPA", type: "number", placeholder: "8.5", required: true, step: "0.1" },
        { name: "skills", label: "Skills", type: "text", placeholder: "Java, Python, React (comma separated)", required: true },
        { name: "interests", label: "Interests (optional)", type: "text", placeholder: "AI, Web Dev, Cloud" },
        { name: "projects", label: "Projects (optional)", type: "text", placeholder: "Portfolio site, Chat app" },
    ];

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f0f4ff 0%, #e0f2fe 100%)",
            padding: "1.5rem 1rem"
        }}>
            <div style={{ width: "100%", maxWidth: "460px" }}>
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
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
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#0f172a",
                        margin: 0
                    }}>Create your account</h1>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                        Get personalised career recommendations
                    </p>
                </div>

                <div style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "1.75rem",
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
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                            {fields.map(({ name, label, type, placeholder, required, step }) => (
                                <div key={name} style={{
                                    gridColumn: ["skills", "interests", "projects"].includes(name) ? "1 / -1" : "auto"
                                }}>
                                    <label style={labelStyle}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        placeholder={placeholder}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        required={required}
                                        step={step}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = "#4f46e5"}
                                        onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: "100%",
                                marginTop: "1.25rem",
                                padding: "0.75rem",
                                background: loading ? "#a5b4fc" : "linear-gradient(135deg, #4f46e5, #4338ca)",
                                color: "white",
                                border: "none",
                                borderRadius: "0.6rem",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                cursor: loading ? "not-allowed" : "pointer"
                            }}
                        >
                            {loading ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.875rem", color: "#64748b" }}>
                        Already have an account?{" "}
                        <Link to="/" style={{ color: "#4f46e5", fontWeight: 600, textDecoration: "none" }}>
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;

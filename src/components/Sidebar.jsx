import { FaHome, FaUser, FaBrain, FaHistory, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Sidebar({ onClose }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/");
    };

    const links = [
        { to: "/dashboard", icon: <FaHome size={16} />, label: "Dashboard" },
        { to: "/profile", icon: <FaUser size={16} />, label: "Profile" },
        { to: "/predict", icon: <FaBrain size={16} />, label: "Predict Career" },
        { to: "/history", icon: <FaHistory size={16} />, label: "History" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0.75rem"
        }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
                {links.map(({ to, icon, label }) => (
                    <Link
                        key={to}
                        to={to}
                        onClick={onClose}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.65rem 0.85rem",
                            borderRadius: "0.6rem",
                            textDecoration: "none",
                            fontWeight: isActive(to) ? 600 : 500,
                            fontSize: "0.875rem",
                            color: isActive(to) ? "#4f46e5" : "#475569",
                            background: isActive(to) ? "#eef2ff" : "transparent",
                            transition: "all 0.15s"
                        }}
                        onMouseEnter={e => {
                            if (!isActive(to)) e.currentTarget.style.background = "#f1f5f9";
                        }}
                        onMouseLeave={e => {
                            if (!isActive(to)) e.currentTarget.style.background = "transparent";
                        }}
                    >
                        <span style={{ color: isActive(to) ? "#4f46e5" : "#94a3b8" }}>
                            {icon}
                        </span>
                        {label}
                    </Link>
                ))}
            </nav>

            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "0.75rem" }}>
                <button
                    onClick={handleLogout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "0.6rem",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        color: "#ef4444",
                        width: "100%",
                        transition: "background 0.15s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fef2f2"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                    <FaSignOutAlt size={16} />
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Sidebar;

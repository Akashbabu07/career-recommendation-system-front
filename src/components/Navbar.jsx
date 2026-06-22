import { FaBars, FaRobot } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ onMenuClick }) {
    const { user } = useContext(AuthContext) || {};

    return (
        <nav style={{
            height: "4rem",
            background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.5rem",
            position: "sticky",
            top: 0,
            zIndex: 40,
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Hamburger - mobile only */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden"
                    style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "none",
                        borderRadius: "0.5rem",
                        padding: "0.4rem 0.5rem",
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <FaBars size={18} />
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{
                        background: "rgba(255,255,255,0.2)",
                        borderRadius: "0.5rem",
                        padding: "0.35rem",
                        display: "flex"
                    }}>
                        <FaRobot size={18} color="white" />
                    </div>
                    <span style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "white",
                        letterSpacing: "-0.01em"
                    }}>
                        CareerAI
                    </span>
                </div>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "2rem",
                padding: "0.35rem 0.75rem"
            }}>
                <div style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "white"
                }}>
                    {user?.name?.[0]?.toUpperCase() || "U"}
                </div>
                <span style={{
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    display: "none"
                }} className="sm:inline">
                    {user?.name || "Welcome"}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;

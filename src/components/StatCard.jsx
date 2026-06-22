function StatCard({ title, value, icon, color = "#4f46e5" }) {
    return (
        <div style={{
            background: "white",
            borderRadius: "0.875rem",
            padding: "1.25rem 1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
            border: "1px solid #f1f5f9",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
        }}>
            {icon && (
                <div style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.6rem",
                    background: color + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color,
                    fontSize: "1.1rem",
                    flexShrink: 0
                }}>
                    {icon}
                </div>
            )}
            <div>
                <p style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 500, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {title}
                </p>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", margin: "0.15rem 0 0" }}>
                    {value}
                </p>
            </div>
        </div>
    );
}

export default StatCard;

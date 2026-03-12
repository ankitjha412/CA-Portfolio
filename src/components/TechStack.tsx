const toolkit = [
  {
    title: "Accounting & ERP",
    items: ["SAP / Oracle", "Tally", "Zoho / other ERPs", "Banking portals"],
  },
  {
    title: "Reporting & Analysis",
    items: ["Advanced Excel", "Power Query", "Power BI / dashboards", "MIS packs"],
  },
  {
    title: "Compliance & Filings",
    items: ["GST & TDS utilities", "ROC & XBRL", "Income Tax", "SEBI / LODR (if listed)"],
  },
  {
    title: "Governance & Collaboration",
    items: ["Policies & SOPs", "Internal controls / IFC", "Audit management", "Board & investor decks"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Finance Toolkit</h2>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "min(900px, 90%)",
        }}
      >
        {toolkit.map((group) => (
          <div
            key={group.title}
            style={{
              borderRadius: "18px",
              padding: "18px 20px",
              border: "1px solid rgba(255,255,255,0.2)",
              background:
                "radial-gradient(circle at top left, rgba(45,212,191,0.18), transparent 55%)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(18px)",
            }}
          >
            <h3
              style={{
                margin: 0,
                marginBottom: 10,
                fontSize: 18,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#5eead4",
              }}
            >
              {group.title}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 13,
                    padding: "4px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(226,232,240,0.35)",
                    backgroundColor: "rgba(15,23,42,0.7)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

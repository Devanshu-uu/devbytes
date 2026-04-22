import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built using React & Tailwind.",
  },
  {
    title: "Data Analysis Project",
    desc: "Analyzed datasets using Python & Pandas.",
  },
  {
    title: "YouTube Automation",
    desc: "Created content workflow for gaming videos.",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#0a0a0a", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        
        <p style={{ color: "#737373", letterSpacing: "2px", fontSize: 12 }}>
          MY WORK
        </p>

        <h2 style={{ fontSize: 36, color: "white", marginTop: 10 }}>
          My <span style={{ color: "#ef4444" }}>Projects</span>
        </h2>

        <div style={{
          marginTop: 50,
          display: "grid",
          gap: 20
        }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              padding: 20,
              borderRadius: 12,
              border: "1px solid #262626",
              background: "linear-gradient(135deg, #1a1a1a, #0f0f0f)",
              transition: "0.3s"
            }}>
              <h3 style={{ color: "white", marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: "#a3a3a3" }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

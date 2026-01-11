import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience"
      style={{
        padding: "100px 20px",
      //  background: "linear-gradient(135deg, #1e3a8a, #020617)",
      backgroundColor:"#6366f1",
        color: "#fff",
      }}
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.6rem",
          textAlign: "center",
          fontWeight: 800,
          color: "#ffffffff",
        }}
      >
        Professional Experience
      </motion.h2>

      {/* EXPERIENCE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: "950px",
          margin: "50px auto 0",
          background: "#020617",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(15,23,42,0.85)",
          border: "1px solid #1e293b",
        }}
      >
        {/* COMPANY HEADER */}
        <div style={{ marginBottom: "18px" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            VSoft Technologies Pvt. Ltd.
          </h3>

          <p style={{ color: "#38bdf8", marginBottom: "4px" }}>
            Jr. Engineer – Development (MEAN Stack)
          </p>

          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            Hyderabad • Feb 2025 – Present
          </p>
        </div>

        {/* PROJECT INFO */}
        <p
          style={{
            marginBottom: "14px",
            color: "#c7d2fe",
            fontWeight: 600,
          }}
        >
          Project: <span style={{ color: "#818cf8" }}>
            Arya Net Banking Application (FinTech Domain)
          </span>
        </p>

        {/* RESPONSIBILITIES */}
        <ul
          style={{
            lineHeight: 1.9,
            color: "#cbd5f5",
            paddingLeft: "18px",
          }}
        >
          <li>
            Developed <strong>core banking modules</strong> including user onboarding,
            transactions, dashboards, and profile management.
          </li>

          <li>
            Implemented <strong>secure authentication & authorization</strong> using
            JWT, Angular Guards, Interceptors, and Role-Based Access Control (RBAC).
          </li>

          <li>
            Designed and built <strong>scalable RESTful APIs</strong> using
            Node.js and Express.js with optimized MongoDB schemas.
          </li>

          <li>
            Built responsive and reusable UI components using
            Angular, Angular Material, and Bootstrap.
          </li>

          <li>
            Improved application performance by optimizing API responses
            and frontend rendering strategies.
          </li>

          <li>
            Collaborated with QA and backend teams in
            <strong> Agile / Scrum development cycles</strong>.
          </li>
        </ul>

        {/* SKILL TAGS */}
        <div
          style={{
            marginTop: "22px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "MEAN Stack",
            "FinTech",
            "JWT",
            "RBAC",
            "REST APIs",
            "MongoDB",
            "Angular",
            "Node.js",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#1e293b",
                color: "#a5b4fc",
                fontSize: "0.85rem",
                border: "1px solid #334155",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about"
      style={{
        padding: "100px 20px",
        backgroundColor:"#6366f1",
        // background: "linear-gradient(135deg, #1e3a8a, #020617)",

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
          color: "#f7f7f7ff",
        }}
      >
        About Me
      </motion.h2>

      {/* ABOUT CARD */}
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
        <p
          style={{
            lineHeight: 1.9,
            fontSize: "1.05rem",
            color: "#cbd5f5",
            marginBottom: "16px",
          }}
        >
          I am a <strong>Jr. Engineer – Development</strong> with
          <strong> over 1 year of professional experience</strong> at
          <strong> VSoft Technologies</strong>, where I work on
          <strong> FinTech banking applications</strong> focused on security,
          performance, and scalability.
        </p>

        <p
          style={{
            lineHeight: 1.9,
            fontSize: "1.05rem",
            color: "#cbd5f5",
            marginBottom: "16px",
          }}
        >
          My day-to-day work involves designing and developing
          <strong> RESTful APIs</strong>, implementing
          <strong> JWT-based authentication</strong>,
          <strong> role-based access control (RBAC)</strong>, and building
          responsive user interfaces using
          <strong> Angular and React</strong>.
        </p>

        <p
          style={{
            lineHeight: 1.9,
            fontSize: "1.05rem",
            color: "#cbd5f5",
          }}
        >
          Alongside full-stack development, I am actively exploring
          <strong> AI-powered solutions</strong> using
          <strong> LangChain</strong>, integrating intelligent workflows
          into modern web applications to deliver smarter user experiences.
        </p>

        {/* HIGHLIGHTS */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "FinTech Domain",
            "MEAN Stack",
            "JWT & RBAC",
            "REST APIs",
            "Angular & React",
            "AI (LangChain)",
          ].map((item) => (
            <span
              key={item}
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#1e293b",
                color: "#a5b4fc",
                fontSize: "0.85rem",
                border: "1px solid #334155",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

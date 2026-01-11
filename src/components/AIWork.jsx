import { motion } from "framer-motion";

export default function AIWork() {
  const branches = [
    {
      title: "React Practice",
      desc: [
        "Build reusable UI components and animations using React & Framer Motion.",
        "Experiment with routing, state management, and performance optimization.",
        "Integrate APIs, dashboards, and modern UI patterns.",
      ],
      tags: ["React", "Hooks", "UI Design", "Performance"],
      github: "https://github.com/SUBBARAOKUNCHALA/React_Practice",
    },
    {
      title: "LangChain / AI Practice ",
      desc: [
        "Build AI-powered workflows using LangChain.",
        "Practice prompt engineering and LLM chaining.",
        "Integrate AI features into SaaS-style applications.",
      ],
      tags: ["LangChain", "Prompt Engineering", "LLM", "AI + SaaS"],
      github: "https://github.com/SUBBARAOKUNCHALA/langchain-lessons",
    },
    {
      title: "Python Practice",
      desc: [
        "Practice Python fundamentals for automation and backend logic.",
        "Build APIs and scripts supporting AI workflows.",
        "Explore Python integration with LLMs and services.",
      ],
      tags: ["Python", "APIs", "Automation"],
      github: "https://github.com/SUBBARAOKUNCHALA/Simple_Banking_Python_Script",
    },
  ];

  return (
    <section id='aiwork'
      style={{
        padding: "100px 20px",
        backgroundColor: "#6366f1",
        color: "#fff",
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.6rem",
          textAlign: "center",
          fontWeight: 800,
        }}
      >
        Learning & Practice (GitHub Branches)
      </motion.h2>

      {/* CARDS */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "60px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {branches.map((branch, index) => (
          <motion.div
            key={branch.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            style={{
              background: "#020617",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 25px 60px rgba(15,23,42,0.85)",
              border: "1px solid #1e293b",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {branch.title}
              </h3>

              <ul
                style={{
                  color: "#cbd5f5",
                  lineHeight: 1.8,
                  paddingLeft: "18px",
                  marginBottom: "18px",
                }}
              >
                {branch.desc.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

              {/* TAGS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                {branch.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "999px",
                      background: "#1e293b",
                      color: "#a5b4fc",
                      fontSize: "0.85rem",
                      border: "1px solid #334155",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GITHUB LINK */}
            <a
              href={branch.github}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: "auto",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "#6366f1",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View GitHub Branch →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

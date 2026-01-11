import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "Angular",
        "React.js",
        "Angular Material",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript (ES6+)",
        "TypeScript",
      ],
    },
    {
      title: "Backend & AI",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "Django REST Framework",
        "LangChain",
        "REST APIs",
        "JWT Authentication",
        "RBAC",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Vercel",
        "Render",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        backgroundColor: "#6366f1",
        color: "#fff",
      }}
    >
      {/* ===== SECTION TITLE ===== */}
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
        Technical Skills
      </motion.h2>

      {/* ===== SKILLS CONTAINER ===== */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "50px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "26px",
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            style={{
              background: "#020617",
              borderRadius: "22px",
              padding: "28px",
              boxShadow: "0 25px 60px rgba(15,23,42,0.85)",
              border: "1px solid #1e293b",
            }}
          >
            {/* CATEGORY TITLE */}
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#e0e7ff",
              }}
            >
              {category.title}
            </h3>

            {/* SKILLS TAGS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "999px",
                    background: "#1e293b",
                    color: "#a5b4fc",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    border: "1px solid #334155",
                    cursor: "default",
                    boxShadow: "0 10px 20px rgba(99,102,241,0.25)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

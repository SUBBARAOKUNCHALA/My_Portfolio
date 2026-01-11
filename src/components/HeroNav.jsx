import { motion } from "framer-motion";

export default function HeroNav() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "My Efforts", id: "aiwork" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
      }}
      style={{
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
      }}
    >
      {navItems.map((btn) => (
        <motion.button
          key={btn.label}
          onClick={() => scrollTo(btn.id)}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            y: -4,
            boxShadow: "0 0 25px rgba(99,102,241,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            background: "#020617",
            color: "#fff",
            fontWeight: 600,
            border: "1px solid #334155",
            cursor: "pointer",
          }}
        >
          {btn.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

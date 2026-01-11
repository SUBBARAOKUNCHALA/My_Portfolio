import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id='contact'
      style={{
        position: "relative",
        padding: "100px 20px",
        backgroundColor: "#6366f1",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ===== RIGHT DIAGONAL DECORATION ===== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          background: "linear-gradient(135deg, #1e3a8a, #020617)",
          clipPath: "polygon(160% 0%, 100% 0%, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
      />

      {/* ===== CONTENT WRAPPER ===== */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{
            fontSize: "2.6rem",
            textAlign: "center",
            fontWeight: 800,
          }}
        >
          Contact
        </motion.h2>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            maxWidth: "700px",
            margin: "50px auto 0",
            background: "#020617",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 25px 60px rgba(15,23,42,0.85)",
            border: "1px solid #1e293b",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              color: "#cbd5f5",
              marginBottom: "16px",
            }}
          >
            Interested in working together or discussing opportunities?
          </p>

          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              color: "#38bdf8",
              marginBottom: "28px",
            }}
          >
            subbaraokunchala1128@gmail.com <br />
            +91 8501892849
          </p>

          {/* CTA BUTTON */}
          <motion.a
            href="mailto:subbaraokunchala1128@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "14px",
              background: "#6366f1",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* FOOTER */}
        <p
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#e3e7ee",
          }}
        >
          © {new Date().getFullYear()} Subbarao Kunchala · All Rights Reserved
        </p>
      </div>
    </section>
  );
}

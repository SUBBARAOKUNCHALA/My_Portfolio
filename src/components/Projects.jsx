import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Arya Banking Images
import img1 from "../assets/projectimage1.jpeg";
import img2 from "../assets/projectimage2.jpeg";
import img3 from "../assets/projectimage3.jpeg";
import img4 from "../assets/projectimage4.jpeg";
import img5 from "../assets/projectimage5.jpeg";
import img6 from "../assets/projectimage6.jpeg";
import img7 from "../assets/projectimage7.jpeg";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

  const projects = [
    /* ================= PROJECT 1 ================= */
    {
      id: 1,
      type: "enterprise",
      title: "Arya Digital Banking Platform",
      tech: "FinTech • Angular • Node • Secure Banking",
      desc:
        "Enterprise-grade digital banking platform developed at VSoft Technologies with dynamic theming, secure authentication, and modular admin & user portals.",
      details: [
        "Dynamic color theming & branding per bank",
        "JWT-based secure authentication",
        "Admin portal for customer & admin onboarding",
        "User portal with configurable screens & widgets",
        "NEFT & RTGS fund transfer modules",
        "FD & RD overview with maturity calculations",
        "Transaction history & account dashboards",
        "Role-Based Access Control (RBAC)",
      ],
      images: [img1, img2, img3, img4, img5, img6, img7],
    },

    /* ================= PROJECT 2 ================= */
    {
      id: 2,
      type: "personal",
      title: "Order Management SaaS",
      tech: "MEAN Stack",
      desc:
        "Role-based order management SaaS with authentication, admin controls, analytics dashboards, and scalable REST APIs.",
      details: [
        "Angular frontend with modular architecture",
        "JWT authentication & Role-Based Access Control",
        "Admin Portal for uploading & managing products (visible to users)",
        "Order lifecycle & cart management",
        "Dashboard analytics & charts",
        "Secure REST APIs using Node & Express",
        "MongoDB for scalable data storage",
      ],
      frontendGithub:
        "https://github.com/SUBBARAOKUNCHALA/Order_Management_SaaS_FRONTEND",
      backendGithub:
        "https://github.com/SUBBARAOKUNCHALA/order-management-backend",
      live: "https://order-management-saas-frontend.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: "#6366f1",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.6rem",
          textAlign: "center",
          fontWeight: 800,
        }}
      >
        Projects
      </motion.h2>

      <AnimatePresence mode="wait">
        {/* ================= GRID VIEW ================= */}
        {!activeProject && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            style={{
              maxWidth: "1100px",
              margin: "50px auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                style={{
                  background: "#020617",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 25px 60px rgba(15,23,42,0.85)",
                  border: "1px solid #1e293b",
                }}
              >
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                  {project.title}
                </h3>

                <p style={{ color: "#38bdf8", margin: "8px 0" }}>
                  {project.tech}
                </p>

                <p style={{ color: "#cbd5f5", lineHeight: 1.7 }}>
                  {project.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveProject(project)}
                  style={{
                    marginTop: "22px",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    background: "#6366f1",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
        

        {/* ================= DETAILS VIEW ================= */}
        {activeProject && (
          <motion.div
            key="details"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              maxWidth: "1000px",
              margin: "60px auto 0",
              background: "#020617",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 4px 70px rgba(15,23,42,0.95)",
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: 800 }}>
              {activeProject.title}
            </h3>

            <p style={{ color: "#38bdf8", marginBottom: "18px" }}>
              {activeProject.tech}
            </p>

            <ul style={{ color: "#cbd5f5", lineHeight: 1.9 }}>
              {activeProject.details.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>

            {/* ENTERPRISE IMAGE GALLERY */}
            {activeProject.images && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                {activeProject.images.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreviewImage(img)}
                        style={{
                            width: "100%",
                            borderRadius: "18px",
                            cursor: "pointer",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        }}
                    />

                ))}
              </div>
              
            )}
            

            {/* LINKS (PERSONAL PROJECT ONLY) */}
            {activeProject.frontendGithub && (
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  marginTop: "30px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={activeProject.frontendGithub}
                  target="_blank"
                  rel="noreferrer"
                  style={linkBtn}
                >
                  Frontend GitHub
                </a>

                <a
                  href={activeProject.backendGithub}
                  target="_blank"
                  rel="noreferrer"
                  style={backendBtn}
                >
                  Backend GitHub
                </a>

                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  style={linkBtn}
                >
                  Live Demo
                </a>
              </div>
            )}

            {/* BACK */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProject(null)}
              style={{
                marginTop: "40px",
                padding: "10px 22px",
                borderRadius: "14px",
                background: "#1e293b",
                color: "#fff",
                border: "1px solid #334155",
                cursor: "pointer",
              }}
            >
              ← Back to Projects
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
  {previewImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPreviewImage(null)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(2,6,23,0.85)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#020617",
          padding: "18px",
          borderRadius: "20px",
          maxWidth: "520px",
          width: "90%",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
          position: "relative",
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setPreviewImage(null)}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "#1e293b",
            border: "none",
            color: "#fff",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={previewImage}
          alt="Project Preview"
          style={{
            width: "100%",
            borderRadius: "14px",
          }}
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      
    </section>
  );
}

/* ================= BUTTON STYLES ================= */
const linkBtn = {
  padding: "10px 20px",
  borderRadius: "12px",
  background: "#6366f1",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
};

const backendBtn = {
  ...linkBtn,
  background: "#0ea5e9",
};

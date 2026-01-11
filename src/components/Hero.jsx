import { motion } from "framer-motion";
import ProfilePic from "../assets/profile2.jpeg";
import HeroNav from "./HeroNav";
export default function Hero() {
  const CARD_HEIGHT = 420;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#020617",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      {/* ===== DIAGONAL BACKGROUND ===== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          // background: "linear-gradient(135deg, #1e3a8a, #6366f1)",
          backgroundColor:"#6366f1",
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
        />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        <div className="row align-items-center g-4">

          {/* ================= LEFT IMAGE ON DIAGONAL ================= */}
          <div className="col-12 col-md-6 col-lg-5 col-xl-5 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(255,255,255,0.3)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                background: "#020617",
              }}
            >
              <img
                src={ProfilePic}
                alt="Subbarao Kunchala"
                style={{
                  width: "100%",
                  height: "100%",

                  objectFit: "contain", // ensures full image is visible
      objectPosition: "center", // centers the image in the container
                }}
              />
            </motion.div>
          </div>



          {/* ================= RIGHT CONTENT CARD ================= */}
          <div className="col-12 col-md-6 col-lg-7 col-xl-7">
            {/* ===== NAV BUTTONS ===== */}
                <HeroNav />


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                marginTop: "10px", // 👈 moved DOWN
                background: "#020617",
                borderRadius: "22px",
                padding: "36px",
                boxShadow: "0 30px 50px rgba(15,23,42,0.85)",
                color: "#fff",
              }}
            >
              <h1 style={{ fontWeight: 800, color: "#e0e7ff" }}>
                Subbarao Kunchala
              </h1>

              <h5 style={{ color: "#38bdf8", marginBottom: "18px" }}>
                MEAN Stack • React • AI (LangChain)
              </h5>

              <p style={{ color: "#c7d2fe", lineHeight: 1.85 }}>
                Jr. Engineer – Development with 1+ year of experience at
                VSoft Technologies, specializing in FinTech banking applications,
                secure authentication, dashboards, and scalable APIs.
              </p>

              <p style={{ color: "#c7d2fe", lineHeight: 1.85, marginTop: 10 }}>
                Strong expertise in MEAN stack, JWT authentication, RBAC,
                and performance optimization across frontend and backend systems.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

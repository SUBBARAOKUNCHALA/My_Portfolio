import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.7 }}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 25px 50px rgba(99,102,241,0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor:"black",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        {/* ARROW */}
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          ↑Up
        </motion.span>
      </motion.button>
    )
  );
}

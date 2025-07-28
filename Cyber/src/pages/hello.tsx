import { projects } from "@/data";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const hello: React.FC = () => {
  const router = useRouter();
  const darkWebProject = projects.find((project) => project.id === 1);

  const handleLinkClick = () => {
    router.push(darkWebProject?.link || "/");
  };

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(to bottom right, #ec4899, #9333ea, #3b82f6)",
        color: "white",
        padding: "1.5rem",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        style={{
          width: "100%",
          maxWidth: "768px",
          backgroundColor: "#09090b",
          borderRadius: "0.75rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          padding: "2rem",
          border: "1px solid #374151",
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "800",
            textAlign: "center",
            background: "linear-gradient(to right, #ec4899, #9333ea)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {darkWebProject?.title}
        </motion.h1>
        <motion.p
          style={{ color: "#9ca3af", textAlign: "center" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {darkWebProject?.des}
        </motion.p>

        <motion.div
          style={{
            background: "linear-gradient(to right, #ec4899, #9333ea, #3b82f6)",
            padding: "1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid #374151",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "white",
              marginBottom: "0.75rem",
            }}
          >
            🚀 How to Install & Use
          </h2>
          <ol
            style={{
              listStyleType: "decimal",
              paddingLeft: "1rem",
              color: "#d1d5db",
            }}
          >
            {[
              "Download the extension from the link below.",
              "Open Chrome and navigate to chrome://extensions.",
              "Enable Developer Mode.",
              "Click “Load unpacked” and select the extracted folder.",
              "Download & run Tor Browser in the background for security.",
              "Use the extension to scan for leaked data.",
            ].map((step, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#3b82f6")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <motion.a
            href={darkWebProject?.downloadlink}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.25rem",
              background: "linear-gradient(to right, #ec4899, #9333ea)",
              color: "white",
              fontWeight: "600",
              borderRadius: "0.5rem",
              textDecoration: "none",
              textAlign: "center",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download style={{ width: "1.25rem", height: "1.25rem" }} />
            Download Extension
          </motion.a>
        </div>

        <motion.p
          style={{
            color: "#6b7280",
            textAlign: "center",
            fontSize: "0.875rem",
            marginTop: "1rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Stay ahead of potential threats by actively monitoring your online
          presence.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default hello;

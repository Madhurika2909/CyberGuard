import { motion } from "framer-motion";
import { Download } from "lucide-react";

const thirdparty = () => {
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
          🔍 Third-Party Risk Management: Secure Your Business Ecosystem
        </motion.h1>
        <motion.p
          style={{ color: "#9ca3af", textAlign: "center" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Many businesses rely on third-party services for operations, but these
          external connections can introduce security risks. The Third-Party
          Risk Management Extension helps you assess the security of third-party
          vendors by scanning their websites for vulnerabilities and providing
          insights into potential risks.
        </motion.p>
        <motion.p
          style={{ color: "#9ca3af", textAlign: "center", marginTop: "1rem" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This tool is essential for businesses, security teams, and compliance
          officers who need to ensure that their external partners adhere to
          security best practices.
        </motion.p>
        <motion.div
          style={{
            background: "linear-gradient(to right, #ec4899, #9333ea, #3b82f6)",
            padding: "1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid #374151",
            marginTop: "1rem",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "white",
              marginBottom: "0.75rem",
            }}
          >
            📖 Step-by-Step Guide to Using the Third-Party Risk Management Tool
          </h2>
          <ol
            style={{
              listStyleType: "decimal",
              paddingLeft: "1rem",
              color: "#d1d5db",
            }}
          >
            {[
              "Visit the Website & Download the Extension.",
              "Enable Developer Mode in Chrome.",
              "Load the Extension.",
              "Enter the Website Details for Verification.",
              "View the Results and Security Assessment.",
            ].map((step, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                style={{ transition: "color 0.3s", cursor: "pointer" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#3b82f6")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>
        <motion.a
          href="#"
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
            marginTop: "1rem",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download style={{ width: "1.25rem", height: "1.25rem" }} />
          Download Extension
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default thirdparty;

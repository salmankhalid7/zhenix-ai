import React, { useState } from "react";
import axios from "axios";

const LeftsideReview = ({ setResponse, setLoading, setError }) => {
  const [code, setCode] = useState(`// Hello World Example
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Salman Khalid"));`);

  const handleReview = async () => {
    if (!code.trim()) {
      setError("Please enter some code to review.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:8000/ai/get-response", {
        prompt: code.trim(),
      });

      setResponse(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      {/* Scrollable Editor Area */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "24px",
          paddingBottom: "80px", // Space for the fixed button
        }}
      >
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          style={{
            width: "100%",
            minHeight: "100%",
            padding: "16px",
            fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#000000",
            backgroundColor: "#ffffff",
            border: "none",
            resize: "none",
            outline: "none",
          }}
        />
      </div>

      {/* Fixed Button - Always visible at bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "825px",
          zIndex: 10,
        }}
      >
        <button
          onClick={handleReview}
          disabled={!code.trim()}
          style={{
            padding: "10px 24px",
            backgroundColor: "#000000",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: !code.trim() ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            opacity: !code.trim() ? 0.5 : 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            if (code.trim()) {
              e.target.style.backgroundColor = "#333333";
            }
          }}
          onMouseLeave={(e) => {
            if (code.trim()) {
              e.target.style.backgroundColor = "#000000";
            }
          }}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default LeftsideReview;
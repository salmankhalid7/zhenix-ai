import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CodeReviewer = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setReview("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/review",
        { code }
      );

      setReview(res.data.result);
    } catch (err) {
      console.log(err);
      setReview("Error generating review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT SIDE - INPUT */}
      <div style={styles.left}>
        <h2 style={styles.heading}>Zhenix AI Reviewer</h2>

        <textarea
          style={styles.textarea}
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={handleReview} style={styles.button}>
          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </div>

      {/* RIGHT SIDE - OUTPUT */}
      <div style={styles.right}>
        <h3>AI Review</h3>

        <div style={styles.output}>
          {loading ? (
            <p>Analyzing code...</p>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {review}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewer;

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
  },

  left: {
    flex: 1,
    padding: "20px",
    borderRight: "1px solid #334155",
  },

  right: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },

  heading: {
    marginBottom: "10px",
  },

  textarea: {
    width: "100%",
    height: "70%",
    background: "#1e293b",
    color: "white",
    border: "1px solid #334155",
    padding: "10px",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#3b82f6",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },

  output: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "8px",
    minHeight: "80%",
    border: "1px solid #334155",
  },
};
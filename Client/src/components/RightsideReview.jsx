import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const RightsideReview = ({ response, loading, error }) => {
  return (
    <div style={{ 
      height: "100vh", 
      backgroundColor: "#ffffff",
      overflowY: "auto",
      padding: "24px",
    }}>
      {/* Loading State */}
      {loading && (
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          height: "100%",
          color: "#6b7280",
          fontSize: "14px",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ 
              width: "32px", 
              height: "32px", 
              border: "2px solid #e5e7eb", 
              borderTopColor: "#000000",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 12px",
            }} />
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
            Analyzing your code...
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div style={{ 
          padding: "16px", 
          backgroundColor: "#fef2f2", 
          borderLeft: "3px solid #ef4444",
          color: "#991b1b",
          fontSize: "14px",
          borderRadius: "4px",
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Response Output */}
      {!loading && !error && response && (
        <div style={{
          color: "#000000",
          fontSize: "14px",
          lineHeight: "1.6",
        }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 style={{ fontSize: "24px", fontWeight: "600", marginTop: "24px", marginBottom: "16px", borderBottom: "1px solid #e5e7eb", paddingBottom: "8px" }} {...props} />,
              h2: ({ node, ...props }) => <h2 style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px", marginBottom: "12px" }} {...props} />,
              h3: ({ node, ...props }) => <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "16px", marginBottom: "10px" }} {...props} />,
              p: ({ node, ...props }) => <p style={{ marginBottom: "16px" }} {...props} />,
              ul: ({ node, ...props }) => <ul style={{ marginBottom: "16px", paddingLeft: "24px" }} {...props} />,
              ol: ({ node, ...props }) => <ol style={{ marginBottom: "16px", paddingLeft: "24px" }} {...props} />,
              li: ({ node, ...props }) => <li style={{ marginBottom: "4px" }} {...props} />,
              code: ({ node, inline, className, children, ...props }) => {
                if (inline) {
                  return (
                    <code style={{
                      backgroundColor: "#f3f4f6",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
                      fontSize: "13px",
                      color: "#000000",
                    }} {...props}>
                      {children}
                    </code>
                  );
                }
                return (
                  <pre style={{
                    backgroundColor: "#f9fafb",
                    padding: "16px",
                    borderRadius: "6px",
                    overflowX: "auto",
                    marginBottom: "16px",
                    border: "1px solid #e5e7eb",
                  }}>
                    <code style={{
                      fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
                      fontSize: "13px",
                      lineHeight: "1.5",
                      color: "#000000",
                    }} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              blockquote: ({ node, ...props }) => (
                <blockquote style={{
                  borderLeft: "3px solid #000000",
                  paddingLeft: "16px",
                  margin: "16px 0",
                  color: "#6b7280",
                }} {...props} />
              ),
              a: ({ node, ...props }) => (
                <a style={{ color: "#000000", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer" {...props} />
              ),
            }}
          >
            {response}
          </ReactMarkdown>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && !response && (
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          height: "100%",
          color: "#9ca3af",
          fontSize: "14px",
          textAlign: "center",
        }}>
          <div>
            <p>Click "Review" to get AI feedback on your code</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightsideReview;
import React from "react";

export default function Preloader() {
  return (
    <div style={styles.container}>
      <div style={styles.loaderWrapper}>
        <div style={styles.spinner}></div>
        <div style={styles.pulseRing}></div>
        <div style={styles.pulseRing2}></div>
      </div>
      <p style={styles.loadingText}>Loading...</p>
      <div style={styles.dots}>
        <span style={{ ...styles.dot, animationDelay: '0s' }}>.</span>
        <span style={{ ...styles.dot, animationDelay: '0.2s' }}>.</span>
        <span style={{ ...styles.dot, animationDelay: '0.4s' }}>.</span>
      </div>
      <style>{keyframes}</style>
    </div>
  );
}

const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.6);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    40% {
      transform: translateY(-10px);
      opacity: 1;
    }
    60% {
      transform: translateY(-5px);
      opacity: 0.8;
    }
  }
`;

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #000000ff 0%, #060404ff 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    fontFamily: "'Arial', sans-serif",
  },
  loaderWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    border: "4px solid rgba(192, 192, 192, 0.1)",
    borderTop: "4px solid #ffffffff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
    zIndex: 2,
  },
  pulseRing: {
    position: "absolute",
    border: "3px solid rgba(179, 179, 179, 0.3)",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
    zIndex: 1,
  },
  pulseRing2: {
    position: "absolute",
    border: "2px solid rgba(190, 190, 190, 0.2)",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
    animationDelay: "0.5s",
    zIndex: 1,
  },
  loadingText: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "300",
    marginTop: "30px",
    marginBottom: "10px",
    letterSpacing: "2px",
    animation: "fadeInOut 2s ease-in-out infinite",
  },
  dots: {
    display: "flex",
    gap: "5px",
  },
  dot: {
    fontSize: "24px",
    color: "#ffffff",
    animation: "bounce 1.4s ease-in-out infinite",
    fontWeight: "bold",
  },
};
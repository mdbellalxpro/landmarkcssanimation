


import React from "react";

export default function FallingSpinners() {
  return (
    <div className="hello" style={styles.body}>
      <div style={styles.grid}>
        {/* 1 */}
        <div style={styles.box}><div style={{...styles.s1}} /></div>
        {/* 2 */}
        <div style={styles.box}><div style={{...styles.s2}} /></div>
        {/* 3 */}
        <div style={styles.box}><div style={{...styles.s3}} /></div>
        {/* 4 */}
        <div style={styles.box}><div style={{...styles.s4}} /></div>
        {/* 5 */}
        <div style={styles.box}><div style={{...styles.s5}} /></div>
        {/* 6 */}
        <div style={styles.box}><div style={{...styles.s6}} /></div>
        {/* 7 */}
        <div style={styles.box}><div style={styles.s7} /></div>
        {/* 8 */}
        <div style={styles.box}><div style={styles.s8} /></div>
        {/* 9 */}
        <div style={styles.box}><div style={styles.s9} /></div>
        {/* 10 */}
        <div style={styles.box}><div style={styles.s10} /></div>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-40px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const styles = {

  
  
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 350px)",
    gap: "25px",
  },
  box: {
    width: 70,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  s1: {
    width: 10,
    height: 10,
    background: "#00f5ff",
    borderRadius: "50%",
    animation: "fall 1s infinite",
  },
  s2: {
    width: 12,
    height: 12,
    background: "#ff00ff",
    animation: "fall 0.8s infinite",
  },
  s3: {
    width: 18,
    height: 18,
    border: "3px solid #00ff88",
    borderRadius: "50%",
    animation: "fall 1s infinite",
  },
  s4: {
    width: 5,
    height: 25,
    background: "#00f5ff",
    animation: "fall 0.7s infinite",
  },
  s5: {
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "18px solid #ff0033",
    animation: "fall 0.9s infinite",
  },
  s6: {
    width: 8,
    height: 8,
    background: "#fff",
    borderRadius: "50%",
    boxShadow: "0 0 10px #fff",
    animation: "fall 1s infinite",
  },
  s7: {
    width: 20,
    height: 20,
    position: "relative",
    animation: "fall 1.1s infinite",
  },
  s8: {
    width: 12,
    height: 12,
    background: "#00ff88",
    transform: "rotate(45deg)",
    animation: "fall 0.8s infinite",
  },
  s9: {
    width: 10,
    height: 10,
    background: "#ff00ff",
    borderRadius: "50%",
    animation: "fall 0.6s infinite",
  },
  s10: {
    width: 10,
    height: 10,
    background: "#00f5ff",
    borderRadius: "50%",
    animation: "fall 1.2s infinite",
  },
  
};

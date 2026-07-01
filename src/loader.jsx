import React, { useState } from "react";
import "./App.css";

// -------- Loader 1 --------
export function SpinnerLoader1() {
  const [copied, setCopied] = useState(false);
  const code = `
    <div className="spinner1"></div>
   
      .spinner1 {
        width: 48px;
        height: 48px;
        border: 4px solid rgba(0, 0, 0, 0.75);
        border-top: 4px solid #60a5fa;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 20px auto;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

  `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spinner Loader 1</p>

      <div className="spinner1"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
          .spinner1 {
            width: 48px;
            height: 48px;
            border: 4px solid rgba(0, 0, 0, 0.75);
            border-top: 4px solid #60a5fa;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px auto;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
    </div>
  );
}
// -------- Loader 1: Spinning Circle --------
export function SpinnerLoader2() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="spin-circle"></div>

      
        .spin-circle {
          width: 40px;
          height: 40px;
          border: 4px solid #ddd;
          border-top: 4px solid #60a5fa;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spinning Circle</p>
      <div className="spin-circle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .spin-circle {
          width: 40px;
          height: 40px;
          border: 4px solid #ddd;
          border-top: 4px solid #60a5fa;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// -------- Loader 2: Dots Bounce --------
export function SpinnerLoader3() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
   
        .dots { display: flex; justify-content: center; gap: 6px; margin: 20px; }
        .dots span {
          width: 10px; height: 10px; background: #60a5fa; border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }
   `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Bouncing Dots</p>

      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dots { display: flex; justify-content: center; gap: 6px; margin: 20px; }
        .dots span {
          width: 10px; height: 10px; background: #60a5fa; border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
}

// -------- Loader 3: Bar Grow --------
export function SpinnerLoader4() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bars">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      
        .bars { display: flex; justify-content: center; gap: 4px; margin: 20px; }
        .bars span {
          width: 6px; height: 20px; background: #60a5fa;
          animation: grow 0.6s infinite alternate;
        }
        .bars span:nth-child(2) { animation-delay: 0.2s; }
        .bars span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes grow { from { height: 10px; } to { height: 30px; } }
        `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Growing Bars</p>

      <div className="bars">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bars { display: flex; justify-content: center; gap: 4px; margin: 20px; }
        .bars span {
          width: 6px; height: 20px; background: #60a5fa;
          animation: grow 0.6s infinite alternate;
        }
        .bars span:nth-child(2) { animation-delay: 0.2s; }
        .bars span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes grow { from { height: 10px; } to { height: 30px; } }
      `}</style>
    </div>
  );
}
// -------- Loader 4: Dual Ring --------
export function SpinnerLoader5() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="dual-ring"></div>

    
     
        .dual-ring {
          width: 40px; height: 40px;
          border: 4px solid transparent;
          border-top: 4px solid #60a5fa;
          border-right: 4px solid #60a5fa;
          border-radius: 50%;
          animation: rotate 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotate { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Dual Ring</p>

      <div className="dual-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dual-ring {
          width: 40px; height: 40px;
          border: 4px solid transparent;
          border-top: 4px solid #60a5fa;
          border-right: 4px solid #60a5fa;
          border-radius: 50%;
          animation: rotate 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotate { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// -------- Loader 5: Wave --------
export function SpinnerLoader6() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      
        .wave { display: flex; justify-content: center; gap: 3px; margin: 20px; }
        .wave span {
          width: 6px; height: 20px; background: #60a5fa;
          animation: wave 1s infinite ease-in-out;
        }
        .wave span:nth-child(1) { animation-delay: 0s; }
        .wave span:nth-child(2) { animation-delay: 0.1s; }
        .wave span:nth-child(3) { animation-delay: 0.2s; }
        .wave span:nth-child(4) { animation-delay: 0.3s; }
        .wave span:nth-child(5) { animation-delay: 0.4s; }
        @keyframes wave { 0%,100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Loader</p>

      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave { display: flex; justify-content: center; gap: 3px; margin: 20px; }
        .wave span {
          width: 6px; height: 20px; background: #60a5fa;
          animation: wave 1s infinite ease-in-out;
        }
        .wave span:nth-child(1) { animation-delay: 0s; }
        .wave span:nth-child(2) { animation-delay: 0.1s; }
        .wave span:nth-child(3) { animation-delay: 0.2s; }
        .wave span:nth-child(4) { animation-delay: 0.3s; }
        .wave span:nth-child(5) { animation-delay: 0.4s; }
        @keyframes wave { 0%,100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
      `}</style>
    </div>
  );
}
// -------- Bouncing Dots --------
export function SpinnerLoader7() {
  const [copied, setCopied] = useState(false);
  const code = `

     <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
        .dots { display: flex; justify-content: center; gap: 6px; margin: 20px; }
        .dots span {
          width: 10px; height: 10px; background: #60a5fa; border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Bouncing Dots</p>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dots { display: flex; justify-content: center; gap: 6px; margin: 20px; }
        .dots span {
          width: 10px; height: 10px; background: #60a5fa; border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
}

// -------- Pulse Dot --------
export function SpinnerLoader9() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pulse-dot"></div>

       
     
        .pulse-dot {
          width: 20px; height: 20px;
          background: #60a5fa; border-radius: 50%;
          animation: pulse 1s infinite;
          margin: 20px auto;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Pulsing Dot</p>
      <div className="pulse-dot"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pulse-dot {
          width: 20px; height: 20px;
          background: #60a5fa; border-radius: 50%;
          animation: pulse 1s infinite;
          margin: 20px auto;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// -------- Loader 8: Ellipsis --------
export function SpinnerLoader10() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="ellipsis">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
    
        .ellipsis { display: flex; justify-content: center; gap: 4px; margin: 20px; }
        .ellipsis span {
          width: 6px; height: 6px; background: #60a5fa; border-radius: 50%;
          animation: ellipsis 0.8s infinite;
        }
        .ellipsis span:nth-child(2){ animation-delay:0.2s; }
        .ellipsis span:nth-child(3){ animation-delay:0.4s; }
        .ellipsis span:nth-child(4){ animation-delay:0.6s; }
        @keyframes ellipsis {
          0%{ transform: scale(1); opacity: 0.3; }
          50%{ transform: scale(1.5); opacity: 1; }
          100%{ transform: scale(1); opacity: 0.3; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Ellipsis</p>
      <div className="ellipsis">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ellipsis { display: flex; justify-content: center; gap: 4px; margin: 20px; }
        .ellipsis span {
          width: 6px; height: 6px; background: #60a5fa; border-radius: 50%;
          animation: ellipsis 0.8s infinite;
        }
        .ellipsis span:nth-child(2){ animation-delay:0.2s; }
        .ellipsis span:nth-child(3){ animation-delay:0.4s; }
        .ellipsis span:nth-child(4){ animation-delay:0.6s; }
        @keyframes ellipsis {
          0%{ transform: scale(1); opacity: 0.3; }
          50%{ transform: scale(1.5); opacity: 1; }
          100%{ transform: scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader11() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="flip-square"></div>

        .flip-square {
          width: 30px; height: 30px; background: #60a5fa;
          animation: flip 1s infinite;
          margin: 20px auto;
        }
        @keyframes flip {
          0%{ transform: rotateY(0); }
          50%{ transform: rotateY(180deg); }
          100%{ transform: rotateY(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Flipping Square</p>
      <div className="flip-square"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .flip-square {
          width: 30px; height: 30px; background: #60a5fa;
          animation: flip 1s infinite;
          margin: 20px auto;
        }
        @keyframes flip {
          0%{ transform: rotateY(0); }
          50%{ transform: rotateY(180deg); }
          100%{ transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader12() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="hourglass"></div>

     
     
        .hourglass {
          width: 0; height: 0; margin: 20px auto;
          border: 20px solid #60a5fa;
          border-color: #60a5fa transparent #60a5fa transparent;
          animation: hourglass 1.2s infinite;
        }
        @keyframes hourglass {
          0% { transform: rotate(0); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Hourglass</p>
      <div className="hourglass"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .hourglass {
          width: 0; height: 0; margin: 20px auto;
          border: 20px solid #60a5fa;
          border-color: #60a5fa transparent #60a5fa transparent;
          animation: hourglass 1.2s infinite;
        }
        @keyframes hourglass {
          0% { transform: rotate(0); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader13() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="ripple">
        <span></span>
        <span></span>
      </div>

     
        .ripple { position: relative; width: 40px; height: 40px; margin: 20px auto; }
        .ripple span {
          position: absolute; border: 4px solid #60a5fa;
          border-radius: 50%; animation: ripple 1.2s infinite;
          inset: 0;
        }
        .ripple span:nth-child(2) { animation-delay: -0.6s; }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Ripple</p>
      <div className="ripple">
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ripple { position: relative; width: 40px; height: 40px; margin: 20px auto; }
        .ripple span {
          position: absolute; border: 4px solid #60a5fa;
          border-radius: 50%; animation: ripple 1.2s infinite;
          inset: 0;
        }
        .ripple span:nth-child(2) { animation-delay: -0.6s; }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader14() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="dash"></div>

      
   
        .dash {
          width: 40px; height: 40px; border: 4px dashed #60a5fa;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Dashed Loader</p>
      <div className="dash"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dash {
          width: 40px; height: 40px; border: 4px dashed #60a5fa;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader15() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="triangle"></div>

      
        .triangle {
          width: 0; height: 0; margin: 20px auto;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #60a5fa;
          animation: rotate 1s linear infinite;
        }
        @keyframes rotate { 100% { transform: rotate(360deg); } }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rotating Triangle</p>
      <div className="triangle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .triangle {
          width: 0; height: 0; margin: 20px auto;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #60a5fa;
          animation: rotate 1s linear infinite;
        }
        @keyframes rotate { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader16() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="cube"></div>

     
    
        .cube {
          width: 30px; height: 30px; background: #60a5fa;
          animation: cube-spin 1.2s infinite linear;
          margin: 20px auto;
        }
        @keyframes cube-spin {
          0%{ transform: rotate(0); }
          50%{ transform: rotate(180deg); }
          100%{ transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Cube Spin</p>
      <div className="cube"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cube {
          width: 30px; height: 30px; background: #60a5fa;
          animation: cube-spin 1.2s infinite linear;
          margin: 20px auto;
        }
        @keyframes cube-spin {
          0%{ transform: rotate(0); }
          50%{ transform: rotate(180deg); }
          100%{ transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader17() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="zigzag"></div>

        .zigzag {
          width: 40px; height: 4px; background: #60a5fa;
          position: relative; animation: zigzag 1s infinite;
          margin: 20px auto;
        }
        @keyframes zigzag {
          0% { transform: translateX(0); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(0); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Zigzag Loader</p>
      <div className="zigzag"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .zigzag {
          width: 40px; height: 4px; background: #60a5fa;
          position: relative; animation: zigzag 1s infinite;
          margin: 20px auto;
        }
        @keyframes zigzag {
          0% { transform: translateX(0); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader18() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="skew"></div>

      
      
        .skew {
          width: 40px; height: 8px; background: #60a5fa;
          animation: skew 1s infinite alternate;
          margin: 20px auto;
        }
        @keyframes skew {
          from { transform: skewX(0); }
          to { transform: skewX(30deg); }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Skew Bars</p>
      <div className="skew"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .skew {
          width: 40px; height: 8px; background: #60a5fa;
          animation: skew 1s infinite alternate;
          margin: 20px auto;
        }
        @keyframes skew {
          from { transform: skewX(0); }
          to { transform: skewX(30deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader19() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="ring-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      
        .ring-dots {
          position: relative; width: 40px; height: 40px; margin: 20px auto;
        }
        .ring-dots span {
          position: absolute; top: 50%; left: 50%;
          width: 6px; height: 6px; background: #60a5fa; border-radius: 50%;
          transform-origin: -12px;
          animation: spin 1s linear infinite;
        }
        .ring-dots span:nth-child(2){ transform-origin: 12px; }
        .ring-dots span:nth-child(3){ transform-origin: 0 -12px; }
        .ring-dots span:nth-child(4){ transform-origin: 0 12px; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Ring Dots</p>
      <div className="ring-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ring-dots {
          position: relative; width: 40px; height: 40px; margin: 20px auto;
        }
        .ring-dots span {
          position: absolute; top: 50%; left: 50%;
          width: 6px; height: 6px; background: #60a5fa; border-radius: 50%;
          transform-origin: -12px;
          animation: spin 1s linear infinite;
        }
        .ring-dots span:nth-child(2){ transform-origin: 12px; }
        .ring-dots span:nth-child(3){ transform-origin: 0 -12px; }
        .ring-dots span:nth-child(4){ transform-origin: 0 12px; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader20() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="heart"></div>

     
        .heart {
          width: 30px; height: 30px;
          background: #60a5fa;
          clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%);
          animation: beat 1s infinite;
          margin: 20px auto;
        }
        @keyframes beat {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Heart Beat</p>
      <div className="heart"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .heart {
          width: 30px; height: 30px;
          background: #60a5fa;
          clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%);
          animation: beat 1s infinite;
          margin: 20px auto;
        }
        @keyframes beat {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader21() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pacman">
        <div className="mouth"></div>
      </div>

    
     
        .pacman {
          width: 0; height: 0; margin: 20px auto;
          border: 20px solid #60a5fa;
          border-right-color: transparent;
          border-radius: 50%;
          position: relative;
          animation: spin 1s infinite linear;
        }
        .pacman .mouth {
          width: 20px; height: 20px; background: #fff;
          position: absolute; top: 10px; left: 20px;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Pacman</p>
      <div className="pacman">
        <div className="mouth"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pacman {
          width: 0; height: 0; margin: 20px auto;
          border: 20px solid #60a5fa;
          border-right-color: transparent;
          border-radius: 50%;
          position: relative;
          animation: spin 1s infinite linear;
        }
        .pacman .mouth {
          width: 20px; height: 20px; background: #fff;
          position: absolute; top: 10px; left: 20px;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader22() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="progress">
        <div></div>
      </div>

      
      
        .progress {
          width: 100px; height: 8px; background: #eee;
          margin: 20px auto; overflow: hidden; border-radius: 4px;
        }
        .progress div {
          width: 0; height: 100%; background: #60a5fa;
          animation: progress 2s infinite;
        }
        @keyframes progress {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Progress Bar</p>
      <div className="progress">
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .progress {
          width: 100px; height: 8px; background: #eee;
          margin: 20px auto; overflow: hidden; border-radius: 4px;
        }
        .progress div {
          width: 0; height: 100%; background: #60a5fa;
          animation: progress 2s infinite;
        }
        @keyframes progress {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader23() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="dl">
        <div className="arrow"></div>
      </div>

      
     
        .dl { width:44px; height:44px; border-radius:10px; background: linear-gradient(135deg,#00c6ff,#0072ff); display:inline-flex; align-items:center; justify-content:center; margin:0 auto; }
        .dl .arrow {
          width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent;
          border-top:12px solid #fff; transform-origin:center;
          animation: drop 1s infinite ease-in-out;
        }
        @keyframes drop {
          0% { transform: translateY(-6px) scale(0.9); opacity:0.6; }
          50% { transform: translateY(0) scale(1); opacity:1; }
          100% { transform: translateY(-6px) scale(0.9); opacity:0.6; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Arrow</p>
      <div className="dl">
        <div className="arrow"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dl { width:44px; height:44px; border-radius:10px; background: linear-gradient(135deg,#00c6ff,#0072ff); display:inline-flex; align-items:center; justify-content:center; margin:0 auto; }
        .dl .arrow {
          width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent;
          border-top:12px solid #fff; transform-origin:center;
          animation: drop 1s infinite ease-in-out;
        }
        @keyframes drop {
          0% { transform: translateY(-6px) scale(0.9); opacity:0.6; }
          50% { transform: translateY(0) scale(1); opacity:1; }
          100% { transform: translateY(-6px) scale(0.9); opacity:0.6; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader24() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rocket">
        <div className="body"></div>
        <div className="flame"></div>
      </div>

     
    
        .rocket { width:48px; height:80px; position:relative; margin:0 auto; }
        .rocket .body {
          width:24px; height:48px; background: linear-gradient(180deg,#ff8a00,#ff3d00);
          margin:0 auto; border-radius:12px 12px 6px 6px; position:relative; z-index:2;
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          transform-origin:center;
          animation: rocket-bob 1.2s infinite ease-in-out;
        }
        .rocket .flame {
          width:12px; height:18px; background: radial-gradient(circle at 50% 30%, #fff2, #ffd700);
          margin:4px auto 0; border-radius:50% 50% 50% 50%;
          transform-origin:top center;
          animation: flame 0.5s infinite;
        }
        @keyframes rocket-bob {
          0%{ transform: translateY(0); }
          50%{ transform: translateY(-6px); }
          100%{ transform: translateY(0); }
        }
        @keyframes flame {
          0%{ transform: scaleY(0.8); opacity:0.7; }
          50%{ transform: scaleY(1.3); opacity:1; }
          100%{ transform: scaleY(0.8); opacity:0.7; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rocket Launch</p>
      <div className="rocket">
        <div className="body"></div>
        <div className="flame"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rocket { width:48px; height:80px; position:relative; margin:0 auto; }
        .rocket .body {
          width:24px; height:48px; background: linear-gradient(180deg,#ff8a00,#ff3d00);
          margin:0 auto; border-radius:12px 12px 6px 6px; position:relative; z-index:2;
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          transform-origin:center;
          animation: rocket-bob 1.2s infinite ease-in-out;
        }
        .rocket .flame {
          width:12px; height:18px; background: radial-gradient(circle at 50% 30%, #fff2, #ffd700);
          margin:4px auto 0; border-radius:50% 50% 50% 50%;
          transform-origin:top center;
          animation: flame 0.5s infinite;
        }
        @keyframes rocket-bob {
          0%{ transform: translateY(0); }
          50%{ transform: translateY(-6px); }
          100%{ transform: translateY(0); }
        }
        @keyframes flame {
          0%{ transform: scaleY(0.8); opacity:0.7; }
          50%{ transform: scaleY(1.3); opacity:1; }
          100%{ transform: scaleY(0.8); opacity:0.7; }
        }
      `}</style>
    </div>
  );
}

// -------- Loader 8: Ellipsis --------
export function SpinnerLoader25() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="paper">
        <div />
      </div>

      
        .paper { width:48px; height:48px; perspective:600px; margin:0 auto; }
        .paper div {
          width:100%; height:100%; background: linear-gradient(180deg,#ffd1dc,#ff6fa3);
          transform-origin: left center; border-radius:6px;
          animation: flip 1s infinite ease-in-out;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }
        @keyframes flip {
          0%{ transform: rotateY(0deg); }
          50%{ transform: rotateY(-140deg); }
          100%{ transform: rotateY(0deg); }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Paper Flip</p>
      <div className="paper">
        <div />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .paper { width:48px; height:48px; perspective:600px; margin:0 auto; }
        .paper div {
          width:100%; height:100%; background: linear-gradient(180deg,#ffd1dc,#ff6fa3);
          transform-origin: left center; border-radius:6px;
          animation: flip 1s infinite ease-in-out;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }
        @keyframes flip {
          0%{ transform: rotateY(0deg); }
          50%{ transform: rotateY(-140deg); }
          100%{ transform: rotateY(0deg); }
        }
      `}</style>
    </div>
  );
}

// -------- Loader 8: Ellipsis --------
export function SpinnerLoader27() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="heart"></div>

      
     
        .heart {
          position: relative;
          width: 40px; height: 40px;
          background: #ff4b91;
          transform: rotate(45deg);
          animation: beat 1s infinite;
          margin: 20px auto;
        }
        .heart::before, .heart::after {
          content: "";
          position: absolute;
          width: 40px; height: 40px;
          background: #ff4b91;
          border-radius: 50%;
        }
        .heart::before { top: -20px; left: 0; }
        .heart::after { left: -20px; top: 0; }
        @keyframes beat {
          0%, 100% { transform: scale(1) rotate(45deg); }
          50% { transform: scale(1.2) rotate(45deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Heart Beat</p>
      <div className="heart"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .heart {
          position: relative;
          width: 40px; height: 40px;
          background: #ff4b91;
          transform: rotate(45deg);
          animation: beat 1s infinite;
          margin: 20px auto;
        }
        .heart::before, .heart::after {
          content: "";
          position: absolute;
          width: 40px; height: 40px;
          background: #ff4b91;
          border-radius: 50%;
        }
        .heart::before { top: -20px; left: 0; }
        .heart::after { left: -20px; top: 0; }
        @keyframes beat {
          0%, 100% { transform: scale(1) rotate(45deg); }
          50% { transform: scale(1.2) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader28() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="cube"></div>

      

        .cube {
          width: 40px; height: 40px;
          background: #38bdf8;
          margin: 20px auto;
          transform-style: preserve-3d;
          animation: rotateCube 2s infinite linear;
        }
        @keyframes rotateCube {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rotating Cube</p>
      <div className="cube"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cube {
          width: 40px; height: 40px;
          background: #38bdf8;
          margin: 20px auto;
          transform-style: preserve-3d;
          animation: rotateCube 2s infinite linear;
        }
        @keyframes rotateCube {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader29() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wave-text">
        {"LOADING".split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>

    
     
        .wave-text {
          display: flex;
          justify-content: center;
          gap: 4px;
        }
        .wave-text span {
          font-size: 24px;
          color: #22d3ee;
          animation: wave 1.2s infinite ease-in-out;
          display: inline-block;
        }
        .wave-text span:nth-child(odd) {
          animation-delay: 0.2s;
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
   `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text</p>
      <div className="wave-text">
        {"LOADING".split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text {
          display: flex;
          justify-content: center;
          gap: 4px;
        }
        .wave-text span {
          font-size: 24px;
          color: #22d3ee;
          animation: wave 1.2s infinite ease-in-out;
          display: inline-block;
        }
        .wave-text span:nth-child(odd) {
          animation-delay: 0.2s;
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader30() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rocket">
        <div className="flame"></div>
      </div>

      
        .rocket {
          width: 20px; height: 40px;
          background: #facc15;
          margin: 20px auto;
          border-radius: 10px 10px 0 0;
          position: relative;
          animation: fly 1.5s infinite ease-in-out;
        }
        .flame {
          width: 10px; height: 10px;
          background: #f87171;
          border-radius: 50%;
          position: absolute;
          left: 5px; bottom: -10px;
          animation: flame 0.5s infinite alternate;
        }
        @keyframes fly {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes flame {
          0% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(1.5); opacity: 0.6; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rocket Launch</p>
      <div className="rocket">
        <div className="flame"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rocket {
          width: 20px; height: 40px;
          background: #facc15;
          margin: 20px auto;
          border-radius: 10px 10px 0 0;
          position: relative;
          animation: fly 1.5s infinite ease-in-out;
        }
        .flame {
          width: 10px; height: 10px;
          background: #f87171;
          border-radius: 50%;
          position: absolute;
          left: 5px; bottom: -10px;
          animation: flame 0.5s infinite alternate;
        }
        @keyframes fly {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes flame {
          0% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(1.5); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader31() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="arrow-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>

     
      
        .arrow-loader {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 20px auto;
        }
        .arrow-loader div {
          width: 12px; height: 12px;
          border-right: 2px solid #34d399;
          border-bottom: 2px solid #34d399;
          transform: rotate(45deg);
          animation: moveArrow 1s infinite;
        }
        .arrow-loader div:nth-child(2) { animation-delay: 0.2s; }
        .arrow-loader div:nth-child(3) { animation-delay: 0.4s; }
        @keyframes moveArrow {
          0% { opacity: 0.3; transform: translateX(0) rotate(45deg); }
          50% { opacity: 1; transform: translateX(10px) rotate(45deg); }
          100% { opacity: 0.3; transform: translateX(0) rotate(45deg); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Arrow Progress</p>
      <div className="arrow-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .arrow-loader {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 20px auto;
        }
        .arrow-loader div {
          width: 12px; height: 12px;
          border-right: 2px solid #34d399;
          border-bottom: 2px solid #34d399;
          transform: rotate(45deg);
          animation: moveArrow 1s infinite;
        }
        .arrow-loader div:nth-child(2) { animation-delay: 0.2s; }
        .arrow-loader div:nth-child(3) { animation-delay: 0.4s; }
        @keyframes moveArrow {
          0% { opacity: 0.3; transform: translateX(0) rotate(45deg); }
          50% { opacity: 1; transform: translateX(10px) rotate(45deg); }
          100% { opacity: 0.3; transform: translateX(0) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader32() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

     
      
        .typing {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin: 20px auto;
        }
        .typing span {
          width: 10px;
          height: 10px;
          background: #fb923c;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.2; }
          40% { opacity: 1; }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Typing Dots</p>
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .typing {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin: 20px auto;
        }
        .typing span {
          width: 10px;
          height: 10px;
          background: #fb923c;
          border-radius: 50%;
          animation: blink 1s infinite;
        }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0.2; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader33() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="flower">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      
        .flower {
          position: relative;
          width: 20px; height: 20px;
          margin: 20px auto;
          animation: spinFlower 2s linear infinite;
        }
        .flower div {
          position: absolute;
          width: 10px; height: 10px;
          background: #ec4899;
          border-radius: 50%;
        }
        .flower div:nth-child(1) { top: -15px; left: 5px; }
        .flower div:nth-child(2) { top: 5px; left: 25px; }
        .flower div:nth-child(3) { top: 25px; left: 5px; }
        .flower div:nth-child(4) { top: 5px; left: -15px; }
        @keyframes spinFlower {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spinning Flower</p>
      <div className="flower">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .flower {
          position: relative;
          width: 20px; height: 20px;
          margin: 20px auto;
          animation: spinFlower 2s linear infinite;
        }
        .flower div {
          position: absolute;
          width: 10px; height: 10px;
          background: #ec4899;
          border-radius: 50%;
        }
        .flower div:nth-child(1) { top: -15px; left: 5px; }
        .flower div:nth-child(2) { top: 5px; left: 25px; }
        .flower div:nth-child(3) { top: 25px; left: 5px; }
        .flower div:nth-child(4) { top: 5px; left: -15px; }
        @keyframes spinFlower {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader34() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      
        .bars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin: 20px auto;
          align-items: flex-end;
        }
        .bars div {
          width: 6px;
          height: 10px;
          background: #f43f5e;
          border-radius: 3px;
          animation: barUpDown 1s infinite;
        }
        .bars div:nth-child(2) { animation-delay: 0.1s; }
        .bars div:nth-child(3) { animation-delay: 0.2s; }
        .bars div:nth-child(4) { animation-delay: 0.3s; }
        @keyframes barUpDown {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Zigzag Bars</p>
      <div className="bars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin: 20px auto;
          align-items: flex-end;
        }
        .bars div {
          width: 6px;
          height: 10px;
          background: #f43f5e;
          border-radius: 3px;
          animation: barUpDown 1s infinite;
        }
        .bars div:nth-child(2) { animation-delay: 0.1s; }
        .bars div:nth-child(3) { animation-delay: 0.2s; }
        .bars div:nth-child(4) { animation-delay: 0.3s; }
        @keyframes barUpDown {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
      `}</style>
    </div>
  );
}

// -------- Loader 8: Ellipsis --------
export function SpinnerLoader35() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="triangle"></div>

      
     
        .triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #a855f7;
          margin: 20px auto;
          animation: spinTriangle 1.2s infinite linear;
        }
        @keyframes spinTriangle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rotating Triangle</p>
      <div className="triangle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #a855f7;
          margin: 20px auto;
          animation: spinTriangle 1.2s infinite linear;
        }
        @keyframes spinTriangle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader36() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="spiral"></div>

      
      
        .spiral {
          width: 40px; height: 40px;
          border: 4px dashed #06b6d4;
          border-radius: 50%;
          margin: 20px auto;
          animation: rotateSpiral 1s infinite linear;
        }
        @keyframes rotateSpiral {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spiral Spinner</p>
      <div className="spiral"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .spiral {
          width: 40px; height: 40px;
          border: 4px dashed #06b6d4;
          border-radius: 50%;
          margin: 20px auto;
          animation: rotateSpiral 1s infinite linear;
        }
        @keyframes rotateSpiral {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader37() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="gradient-ring"></div>

      
      
        .gradient-ring {
          width: 50px; height: 50px;
          border-radius: 50%;
          margin: 20px auto;
          border: 6px solid transparent;
          border-top: 6px solid #f87171;
          border-right: 6px solid #34d399;
          border-bottom: 6px solid #60a5fa;
          border-left: 6px solid #fbbf24;
          animation: rotateRing 1.2s infinite linear;
        }
        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Gradient Ring</p>
      <div className="gradient-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-ring {
          width: 50px; height: 50px;
          border-radius: 50%;
          margin: 20px auto;
          border: 6px solid transparent;
          border-top: 6px solid #f87171;
          border-right: 6px solid #34d399;
          border-bottom: 6px solid #60a5fa;
          border-left: 6px solid #fbbf24;
          animation: rotateRing 1.2s infinite linear;
        }
        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader38() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="lightning"></div>

      
      
        .lightning {
          width: 20px; height: 40px;
          background: linear-gradient(45deg, #fde047, #facc15);
          clip-path: polygon(50% 0%, 60% 40%, 40% 40%, 50% 100%, 0% 60%, 40% 60%);
          margin: 20px auto;
          animation: zap 0.7s infinite;
        }
        @keyframes zap {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Lightning Pulse</p>
      <div className="lightning"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .lightning {
          width: 20px; height: 40px;
          background: linear-gradient(45deg, #fde047, #facc15);
          clip-path: polygon(50% 0%, 60% 40%, 40% 40%, 50% 100%, 0% 60%, 40% 60%);
          margin: 20px auto;
          animation: zap 0.7s infinite;
        }
        @keyframes zap {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader39() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="hourglass"></div>

      
     
        .hourglass {
          width: 24px; height: 24px;
          border: 4px solid #22d3ee;
          border-radius: 50%;
          border-top-color: transparent;
          margin: 20px auto;
          animation: spinGlass 1.5s infinite ease-in-out;
        }
        @keyframes spinGlass {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Hourglass Flip</p>
      <div className="hourglass"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .hourglass {
          width: 24px; height: 24px;
          border: 4px solid #22d3ee;
          border-radius: 50%;
          border-top-color: transparent;
          margin: 20px auto;
          animation: spinGlass 1.5s infinite ease-in-out;
        }
        @keyframes spinGlass {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader40() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="download">
        <div className="arrow"></div>
        <div className="bar"></div>
      </div>

      
     
        .download {
          position: relative;
          width: 30px; height: 40px;
          margin: 20px auto;
        }
        .arrow {
          width: 10px; height: 20px;
          background: #3b82f6;
          margin: 0 auto;
          animation: moveDown 1s infinite;
        }
        .arrow::after {
          content: "";
          position: absolute;
          left: 10px; bottom: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #3b82f6;
        }
        .bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 6px;
          background: #3b82f6;
          border-radius: 3px;
        }
        @keyframes moveDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Arrow</p>
      <div className="download">
        <div className="arrow"></div>
        <div className="bar"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download {
          position: relative;
          width: 30px; height: 40px;
          margin: 20px auto;
        }
        .arrow {
          width: 10px; height: 20px;
          background: #3b82f6;
          margin: 0 auto;
          animation: moveDown 1s infinite;
        }
        .arrow::after {
          content: "";
          position: absolute;
          left: 10px; bottom: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #3b82f6;
        }
        .bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 6px;
          background: #3b82f6;
          border-radius: 3px;
        }
        @keyframes moveDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader41() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bubbles">
        <div></div>
        <div></div>
        <div></div>
      </div>

    
        .bubbles {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px auto;
        }
        .bubbles div {
          width: 14px; height: 14px;
          background: #67e8f9;
          border-radius: 50%;
          animation: bubbleUp 1.5s infinite ease-in-out;
        }
        .bubbles div:nth-child(2) { animation-delay: 0.2s; }
        .bubbles div:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bubbleUp {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-15px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Bubble Rise</p>
      <div className="bubbles">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bubbles {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px auto;
        }
        .bubbles div {
          width: 14px; height: 14px;
          background: #67e8f9;
          border-radius: 50%;
          animation: bubbleUp 1.5s infinite ease-in-out;
        }
        .bubbles div:nth-child(2) { animation-delay: 0.2s; }
        .bubbles div:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bubbleUp {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-15px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader42() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="flip-square"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      
        .flip-square {
          width: 40px; height: 40px;
          background: #f97316;
          margin: 20px auto;
          animation: flip 1.2s infinite ease-in-out;
        }
        @keyframes flip {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); background: #fb923c; }
          100% { transform: rotateY(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Flip Square</p>
      <div className="flip-square"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .flip-square {
          width: 40px; height: 40px;
          background: #f97316;
          margin: 20px auto;
          animation: flip 1.2s infinite ease-in-out;
        }
        @keyframes flip {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); background: #fb923c; }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader43() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="sound">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
     
        .sound {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 4px;
          margin: 20px auto;
        }
        .sound div {
          width: 5px;
          height: 10px;
          background: #22c55e;
          border-radius: 3px;
          animation: waveSound 1s infinite ease-in-out;
        }
        .sound div:nth-child(2) { animation-delay: 0.1s; }
        .sound div:nth-child(3) { animation-delay: 0.2s; }
        .sound div:nth-child(4) { animation-delay: 0.3s; }
        .sound div:nth-child(5) { animation-delay: 0.4s; }
        @keyframes waveSound {
          0%,100% { height: 10px; }
          50% { height: 25px; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Sound Waves</p>
      <div className="sound">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .sound {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 4px;
          margin: 20px auto;
        }
        .sound div {
          width: 5px;
          height: 10px;
          background: #22c55e;
          border-radius: 3px;
          animation: waveSound 1s infinite ease-in-out;
        }
        .sound div:nth-child(2) { animation-delay: 0.1s; }
        .sound div:nth-child(3) { animation-delay: 0.2s; }
        .sound div:nth-child(4) { animation-delay: 0.3s; }
        .sound div:nth-child(5) { animation-delay: 0.4s; }
        @keyframes waveSound {
          0%,100% { height: 10px; }
          50% { height: 25px; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader44() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="orbit">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      
    
        .orbit {
          position: relative;
          width: 60px; height: 60px;
          margin: 20px auto;
          animation: spinOrbit 1.5s linear infinite;
        }
        .dot {
          position: absolute;
          top: 50%; left: 50%;
          width: 10px; height: 10px;
          border-radius: 50%;
          transform-origin: -20px;
        }
        .dot:nth-child(1) { background: #3b82f6; transform: rotate(0deg) translateX(20px); }
        .dot:nth-child(2) { background: #f43f5e; transform: rotate(120deg) translateX(20px); }
        .dot:nth-child(3) { background: #facc15; transform: rotate(240deg) translateX(20px); }
        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Orbiting Dots</p>
      <div className="orbit">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .orbit {
          position: relative;
          width: 60px; height: 60px;
          margin: 20px auto;
          animation: spinOrbit 1.5s linear infinite;
        }
        .dot {
          position: absolute;
          top: 50%; left: 50%;
          width: 10px; height: 10px;
          border-radius: 50%;
          transform-origin: -20px;
        }
        .dot:nth-child(1) { background: #3b82f6; transform: rotate(0deg) translateX(20px); }
        .dot:nth-child(2) { background: #f43f5e; transform: rotate(120deg) translateX(20px); }
        .dot:nth-child(3) { background: #facc15; transform: rotate(240deg) translateX(20px); }
        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader45() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="brain"></div>

     
      
        .brain {
          width: 50px; height: 30px;
          background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 70%);
          border-radius: 50% 50% 40% 40%;
          margin: 20px auto;
          animation: pulseBrain 1.3s infinite ease-in-out;
        }
        @keyframes pulseBrain {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Brain Pulse</p>
      <div className="brain"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .brain {
          width: 50px; height: 30px;
          background: radial-gradient(circle, #a78bfa 0%, #8b5cf6 70%);
          border-radius: 50% 50% 40% 40%;
          margin: 20px auto;
          animation: pulseBrain 1.3s infinite ease-in-out;
        }
        @keyframes pulseBrain {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader46() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="globe"></div>

      
      
        .globe {
          width: 50px; height: 50px;
          border-radius: 50%;
          margin: 20px auto;
          background: linear-gradient(90deg, #0ea5e9 0%, #22d3ee 50%, #0ea5e9 100%);
          background-size: 200% 100%;
          animation: spinGlobe 1.5s infinite linear;
        }
        @keyframes spinGlobe {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spinning Globe</p>
      <div className="globe"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .globe {
          width: 50px; height: 50px;
          border-radius: 50%;
          margin: 20px auto;
          background: linear-gradient(90deg, #0ea5e9 0%, #22d3ee 50%, #0ea5e9 100%);
          background-size: 200% 100%;
          animation: spinGlobe 1.5s infinite linear;
        }
        @keyframes spinGlobe {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader48() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="fade-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      
     
        .fade-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin: 20px auto;
        }
        .fade-dots span {
          width: 10px; height: 10px;
          background: #3b82f6;
          border-radius: 50%;
          opacity: 0.4;
          animation: fade 1.2s infinite ease-in-out;
        }
        .fade-dots span:nth-child(2){ animation-delay: 0.2s; }
        .fade-dots span:nth-child(3){ animation-delay: 0.4s; }
        @keyframes fade {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Fade Dots</p>
      <div className="fade-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fade-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin: 20px auto;
        }
        .fade-dots span {
          width: 10px; height: 10px;
          background: #3b82f6;
          border-radius: 50%;
          opacity: 0.4;
          animation: fade 1.2s infinite ease-in-out;
        }
        .fade-dots span:nth-child(2){ animation-delay: 0.2s; }
        .fade-dots span:nth-child(3){ animation-delay: 0.4s; }
        @keyframes fade {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader49() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bar-loader">
        <span></span>
      </div>

        .bar-loader {
          width: 80px; height: 4px;
          background: #e5e7eb;
          overflow: hidden;
          border-radius: 4px;
          margin: 20px auto;
        }
        .bar-loader span {
          display: block;
          height: 100%;
          width: 40%;
          background: #10b981;
          animation: barRun 1s linear infinite;
        }
        @keyframes barRun {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Minimal Bar Loader</p>
      <div className="bar-loader">
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bar-loader {
          width: 80px; height: 4px;
          background: #e5e7eb;
          overflow: hidden;
          border-radius: 4px;
          margin: 20px auto;
        }
        .bar-loader span {
          display: block;
          height: 100%;
          width: 40%;
          background: #10b981;
          animation: barRun 1s linear infinite;
        }
        @keyframes barRun {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader50() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="circle-border"></div>

      
      
        .circle-border {
          width: 40px; height: 40px;
          border: 3px solid #e5e7eb;
          border-top-color: #6366f1;
          border-radius: 50%;
          margin: 20px auto;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Circle Rotate Border</p>
      <div className="circle-border"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .circle-border {
          width: 40px; height: 40px;
          border: 3px solid #e5e7eb;
          border-top-color: #6366f1;
          border-radius: 50%;
          margin: 20px auto;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader51() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pulse-dot"></div>

      
     
        .pulse-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #f59e0b;
          margin: 20px auto;
          animation: pulseDot 1.4s infinite ease-in-out;
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Pulse Dot</p>
      <div className="pulse-dot"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pulse-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #f59e0b;
          margin: 20px auto;
          animation: pulseDot 1.4s infinite ease-in-out;
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader52() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="line-bounce">
        <div></div>
        <div></div>
        <div></div>
      </div>

     
      
        .line-bounce {
          display: flex; gap: 6px;
          justify-content: center;
          align-items: end;
          margin: 20px auto;
        }
        .line-bounce div {
          width: 4px; height: 16px;
          background: #0ea5e9;
          animation: bounceLine 1.1s infinite ease-in-out;
        }
        .line-bounce div:nth-child(2){ animation-delay: 0.1s; }
        .line-bounce div:nth-child(3){ animation-delay: 0.2s; }
        @keyframes bounceLine {
          0%,100% { height: 16px; }
          50% { height: 28px; }
        }
   `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Clean Line Bounce</p>
      <div className="line-bounce">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .line-bounce {
          display: flex; gap: 6px;
          justify-content: center;
          align-items: end;
          margin: 20px auto;
        }
        .line-bounce div {
          width: 4px; height: 16px;
          background: #0ea5e9;
          animation: bounceLine 1.1s infinite ease-in-out;
        }
        .line-bounce div:nth-child(2){ animation-delay: 0.1s; }
        .line-bounce div:nth-child(3){ animation-delay: 0.2s; }
        @keyframes bounceLine {
          0%,100% { height: 16px; }
          50% { height: 28px; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader53() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="soft-glow"></div>

      
        .soft-glow {
          width: 18px; height: 18px;
          background: #22d3ee;
          border-radius: 50%;
          margin: 20px auto;
          box-shadow: 0 0 0 0 rgba(34,211,238,0.6);
          animation: glow 1.3s infinite;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(34,211,238,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Soft Glow Loader</p>
      <div className="soft-glow"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .soft-glow {
          width: 18px; height: 18px;
          background: #22d3ee;
          border-radius: 50%;
          margin: 20px auto;
          box-shadow: 0 0 0 0 rgba(34,211,238,0.6);
          animation: glow 1.3s infinite;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(34,211,238,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader54() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="dual-ring"></div>
 
        .dual-ring {
          width: 40px; height: 40px;
          border: 3px solid transparent;
          border-top: 3px solid #10b981;
          border-right: 3px solid #10b981;
          border-radius: 50%;
          margin: 20px auto;
          animation: rotateDual 1s linear infinite;
        }
        @keyframes rotateDual {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Dual Ring</p>
      <div className="dual-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dual-ring {
          width: 40px; height: 40px;
          border: 3px solid transparent;
          border-top: 3px solid #10b981;
          border-right: 3px solid #10b981;
          border-radius: 50%;
          margin: 20px auto;
          animation: rotateDual 1s linear infinite;
        }
        @keyframes rotateDual {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader55() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bar-pulse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      
        .bar-pulse {
          display: flex; gap: 3px;
          justify-content: center;
          align-items: center;
          margin: 20px auto;
        }
        .bar-pulse span {
          width: 5px; height: 15px;
          background: #f43f5e;
          animation: barPulse 1s ease-in-out infinite;
        }
        .bar-pulse span:nth-child(2){ animation-delay: 0.1s; }
        .bar-pulse span:nth-child(3){ animation-delay: 0.2s; }
        .bar-pulse span:nth-child(4){ animation-delay: 0.3s; }
        @keyframes barPulse {
          0%,100% { height: 15px; opacity: 0.5; }
          50% { height: 25px; opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Elegant Bar Pulse</p>
      <div className="bar-pulse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bar-pulse {
          display: flex; gap: 3px;
          justify-content: center;
          align-items: center;
          margin: 20px auto;
        }
        .bar-pulse span {
          width: 5px; height: 15px;
          background: #f43f5e;
          animation: barPulse 1s ease-in-out infinite;
        }
        .bar-pulse span:nth-child(2){ animation-delay: 0.1s; }
        .bar-pulse span:nth-child(3){ animation-delay: 0.2s; }
        .bar-pulse span:nth-child(4){ animation-delay: 0.3s; }
        @keyframes barPulse {
          0%,100% { height: 15px; opacity: 0.5; }
          50% { height: 25px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader56() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="ring-fade"></div>

     
      
        .ring-fade {
          width: 40px; height: 40px;
          border: 3px solid #60a5fa;
          border-radius: 50%;
          opacity: 0.5;
          margin: 20px auto;
          animation: fadeRing 1.2s infinite ease-in-out;
        }
        @keyframes fadeRing {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 1; }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Ring Fade</p>
      <div className="ring-fade"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ring-fade {
          width: 40px; height: 40px;
          border: 3px solid #60a5fa;
          border-radius: 50%;
          opacity: 0.5;
          margin: 20px auto;
          animation: fadeRing 1.2s infinite ease-in-out;
        }
        @keyframes fadeRing {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader57() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="minimal-spinner"></div>

  
        .minimal-spinner {
          width: 30px; height: 30px;
          border: 3px solid #d1d5db;
          border-top: 3px solid #64748b;
          border-radius: 50%;
          margin: 20px auto;
          animation: spinMini 1s linear infinite;
        }
        @keyframes spinMini {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Minimal Spinner</p>
      <div className="minimal-spinner"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .minimal-spinner {
          width: 30px; height: 30px;
          border: 3px solid #d1d5db;
          border-top: 3px solid #64748b;
          border-radius: 50%;
          margin: 20px auto;
          animation: spinMini 1s linear infinite;
        }
        @keyframes spinMini {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader58() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="gradient-spinner"></div>

      
      
        .gradient-spinner {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: conic-gradient(#3b82f6, #10b981, #f59e0b, #3b82f6);
          animation: rotateGradient 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Gradient Spinner</p>
      <div className="gradient-spinner"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-spinner {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: conic-gradient(#3b82f6, #10b981, #f59e0b, #3b82f6);
          animation: rotateGradient 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader59() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="progress-circle">
        <div></div>
      </div>

      
        .progress-circle {
          width: 50px; height: 50px;
          border-radius: 50%;
          border: 3px solid #e5e7eb;
          overflow: hidden;
          position: relative;
          margin: 20px auto;
        }
        .progress-circle div {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 0%;
          background: #3b82f6;
          animation: fillProgress 1.5s ease-in-out infinite;
        }
        @keyframes fillProgress {
          0%,100% { width: 0%; }
          50% { width: 100%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Progress Circle</p>
      <div className="progress-circle">
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .progress-circle {
          width: 50px; height: 50px;
          border-radius: 50%;
          border: 3px solid #e5e7eb;
          overflow: hidden;
          position: relative;
          margin: 20px auto;
        }
        .progress-circle div {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 0%;
          background: #3b82f6;
          animation: fillProgress 1.5s ease-in-out infinite;
        }
        @keyframes fillProgress {
          0%,100% { width: 0%; }
          50% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader60() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pulse-ring"></div>

      
        .pulse-ring {
          width: 20px; height: 20px;
          background: #10b981;
          border-radius: 50%;
          margin: 20px auto;
          position: relative;
        }
        .pulse-ring::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 50%;
          background: rgba(16,185,129,0.5);
          animation: pulseRing 1.5s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Pulse Ring</p>
      <div className="pulse-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pulse-ring {
          width: 20px; height: 20px;
          background: #10b981;
          border-radius: 50%;
          margin: 20px auto;
          position: relative;
        }
        .pulse-ring::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 50%;
          background: rgba(16,185,129,0.5);
          animation: pulseRing 1.5s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader61() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="shimmer"></div>

    
        .shimmer {
          width: 120px; height: 8px;
          border-radius: 4px;
          background: linear-gradient(90deg, #e5e7eb, #f3f4f6, #e5e7eb);
          background-size: 200%;
          animation: shimmerMove 1.5s linear infinite;
          margin: 20px auto;
        }
        @keyframes shimmerMove {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Linear Shimmer</p>
      <div className="shimmer"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .shimmer {
          width: 120px; height: 8px;
          border-radius: 4px;
          background: linear-gradient(90deg, #e5e7eb, #f3f4f6, #e5e7eb);
          background-size: 200%;
          animation: shimmerMove 1.5s linear infinite;
          margin: 20px auto;
        }
        @keyframes shimmerMove {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader62() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="rotating-square"></div>

        .rotating-square {
          width: 24px; height: 24px;
          background: #f43f5e;
          margin: 20px auto;
          animation: rotateSquare 1.2s ease-in-out infinite;
        }
        @keyframes rotateSquare {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); border-radius: 6px; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rotating Square</p>
      <div className="rotating-square"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rotating-square {
          width: 24px; height: 24px;
          background: #f43f5e;
          margin: 20px auto;
          animation: rotateSquare 1.2s ease-in-out infinite;
        }
        @keyframes rotateSquare {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); border-radius: 6px; }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader63() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="soft-line"></div>

     
     
        .soft-line {
          width: 100px; height: 4px;
          background: #10b981;
          margin: 20px auto;
          animation: softLine 1.5s ease-in-out infinite;
        }
        @keyframes softLine {
          0%,100% { opacity: 0.4; transform: scaleX(0.7); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Soft Pulse Line</p>
      <div className="soft-line"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .soft-line {
          width: 100px; height: 4px;
          background: #10b981;
          margin: 20px auto;
          animation: softLine 1.5s ease-in-out infinite;
        }
        @keyframes softLine {
          0%,100% { opacity: 0.4; transform: scaleX(0.7); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
// -------- Loader 8: Ellipsis --------
export function SpinnerLoader64() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="dot-flow">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

     
        .dot-flow {
          display: flex; gap: 6px;
          justify-content: center;
          margin: 20px auto;
        }
        .dot-flow span {
          width: 8px; height: 8px;
          background: #6366f1;
          border-radius: 50%;
          animation: flowDots 1.2s infinite ease-in-out;
        }
        .dot-flow span:nth-child(2){ animation-delay: 0.15s; }
        .dot-flow span:nth-child(3){ animation-delay: 0.3s; }
        .dot-flow span:nth-child(4){ animation-delay: 0.45s; }
        @keyframes flowDots {
          0%,100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-8px); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Dot Flow</p>
      <div className="dot-flow">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .dot-flow {
          display: flex; gap: 6px;
          justify-content: center;
          margin: 20px auto;
        }
        .dot-flow span {
          width: 8px; height: 8px;
          background: #6366f1;
          border-radius: 50%;
          animation: flowDots 1.2s infinite ease-in-out;
        }
        .dot-flow span:nth-child(2){ animation-delay: 0.15s; }
        .dot-flow span:nth-child(3){ animation-delay: 0.3s; }
        .dot-flow span:nth-child(4){ animation-delay: 0.45s; }
        @keyframes flowDots {
          0%,100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader65() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="thin-spinner"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      
        .thin-spinner {
          width: 36px; height: 36px;
          border: 2px solid #e5e7eb;
          border-top-color: #3b82f6;
          border-radius: 50%;
          margin: 20px auto;
          animation: spinThin 1s linear infinite;
        }
        @keyframes spinThin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Thin Spinner</p>
      <div className="thin-spinner"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .thin-spinner {
          width: 36px; height: 36px;
          border: 2px solid #e5e7eb;
          border-top-color: #3b82f6;
          border-radius: 50%;
          margin: 20px auto;
          animation: spinThin 1s linear infinite;
        }
        @keyframes spinThin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader66() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="wave-line">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    
      
        .wave-line {
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 4px;
          margin: 20px auto;
        }
        .wave-line span {
          width: 4px; height: 10px;
          background: #8b5cf6;
          border-radius: 2px;
          animation: waveHeight 1.2s ease-in-out infinite;
        }
        .wave-line span:nth-child(2){ animation-delay: 0.1s; }
        .wave-line span:nth-child(3){ animation-delay: 0.2s; }
        .wave-line span:nth-child(4){ animation-delay: 0.3s; }
        .wave-line span:nth-child(5){ animation-delay: 0.4s; }
        @keyframes waveHeight {
          0%,100% { height: 10px; opacity: 0.5; }
          50% { height: 25px; opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Line</p>
      <div className="wave-line">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-line {
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 4px;
          margin: 20px auto;
        }
        .wave-line span {
          width: 4px; height: 10px;
          background: #8b5cf6;
          border-radius: 2px;
          animation: waveHeight 1.2s ease-in-out infinite;
        }
        .wave-line span:nth-child(2){ animation-delay: 0.1s; }
        .wave-line span:nth-child(3){ animation-delay: 0.2s; }
        .wave-line span:nth-child(4){ animation-delay: 0.3s; }
        .wave-line span:nth-child(5){ animation-delay: 0.4s; }
        @keyframes waveHeight {
          0%,100% { height: 10px; opacity: 0.5; }
          50% { height: 25px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader67() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="mini-circle"></div>

      
        .mini-circle {
          width: 14px; height: 14px;
          background: #14b8a6;
          border-radius: 50%;
          margin: 20px auto;
          animation: miniPulse 1.3s infinite ease-in-out;
        }
        @keyframes miniPulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Minimal Pulse Circle</p>
      <div className="mini-circle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .mini-circle {
          width: 14px; height: 14px;
          background: #14b8a6;
          border-radius: 50%;
          margin: 20px auto;
          animation: miniPulse 1.3s infinite ease-in-out;
        }
        @keyframes miniPulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader68() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wave-text" style={{ fontSize: 40 }}>
        Loading...
      </div>

     
        .wave-text {
          font-size: 2px;
          letter-spacing: 2px;
          color: #3b82f6;
          animation: waveMove 1.5s ease-in-out infinite;
        }
        @keyframes waveMove {
          0%,10% { transform: translateY(0); }
          20% { transform: translateY(-1px); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 1</p>
      <div className="wave-text" style={{ fontSize: 40 }}>
        Loading...
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text {
          font-size: 2px;
          letter-spacing: 2px;
          color: #3b82f6;
          animation: waveMove 1.5s ease-in-out infinite;
        }
        @keyframes waveMove {
          0%,10% { transform: translateY(0); }
          20% { transform: translateY(-1px); }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader69() {
  const [copied, setCopied] = useState(false);
  const code = `      <div
        className="gradient-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Loading...
      </div>

      
        .gradient-wave {
          font-size: 22px;
          font-weight: 600;
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);
          background-clip: text;
          color: transparent;
          animation: waveGradient 2s linear infinite;
          background-size: 200%;
        }
        @keyframes waveGradient {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="loader">
      <p>Wave Text 2</p>
      <div
        className="gradient-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Loading...
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-wave {
          font-size: 22px;
          font-weight: 600;
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);
          background-clip: text;
          color: transparent;
          animation: waveGradient 2s linear infinite;
          background-size: 200%;
        }
        @keyframes waveGradient {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader71() {
  const [copied, setCopied] = useState(false);
  const code = ` <div
        className="float-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Please Wait...
      </div>
    
        .float-text {
          font-size: 20px;
          color: #f97316;
          letter-spacing: 1px;
          animation: floatText 2s ease-in-out infinite;
        }
        @keyframes floatText {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 4</p>
      <div
        className="float-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Please Wait...
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .float-text {
          font-size: 20px;
          color: #f97316;
          letter-spacing: 1px;
          animation: floatText 2s ease-in-out infinite;
        }
        @keyframes floatText {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader72() {
  const [copied, setCopied] = useState(false);
  const code = `<div
        className="ripple-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Syncing...
      </div>

     
      
        .ripple-text {
          font-size: 22px;
          font-weight: 500;
          color: #14b8a6;
          position: relative;
          animation: rippleText 1.5s ease-in-out infinite;
        }
        .ripple-text::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #14b8a6;
          animation: rippleLine 1.5s ease-in-out infinite;
        }
        @keyframes rippleText {
          0%,100% { letter-spacing: 1px; opacity: 0.8; }
          50% { letter-spacing: 3px; opacity: 1; }
        }
        @keyframes rippleLine {
          0%,100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 5</p>
      <div
        className="ripple-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Syncing...
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ripple-text {
          font-size: 22px;
          font-weight: 500;
          color: #14b8a6;
          position: relative;
          animation: rippleText 1.5s ease-in-out infinite;
        }
        .ripple-text::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #14b8a6;
          animation: rippleLine 1.5s ease-in-out infinite;
        }
        @keyframes rippleText {
          0%,100% { letter-spacing: 1px; opacity: 0.8; }
          50% { letter-spacing: 3px; opacity: 1; }
        }
        @keyframes rippleLine {
          0%,100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader73() {
  const [copied, setCopied] = useState(false);
  const code = `<div
        className="neon-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Loading...
      </div>
     
        .neon-wave {
          font-size: 20px;
          color: #3b82f6;
          text-shadow: 0 0 5px #60a5fa, 0 0 10px #3b82f6;
          animation: neonPulse 1.2s ease-in-out infinite;
        }
        @keyframes neonPulse {
          0%,100% { opacity: 0.8; text-shadow: 0 0 5px #60a5fa; }
          50% { opacity: 1; text-shadow: 0 0 15px #3b82f6; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 6</p>
      <div
        className="neon-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Loading...
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-wave {
          font-size: 20px;
          color: #3b82f6;
          text-shadow: 0 0 5px #60a5fa, 0 0 10px #3b82f6;
          animation: neonPulse 1.2s ease-in-out infinite;
        }
        @keyframes neonPulse {
          0%,100% { opacity: 0.8; text-shadow: 0 0 5px #60a5fa; }
          50% { opacity: 1; text-shadow: 0 0 15px #3b82f6; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader74() {
  const [copied, setCopied] = useState(false);
  const code = `<div
        className="underline-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Fetching Data...
      </div>

      
        .underline-wave {
          font-size: 20px;
          font-weight: 500;
          color: #8b5cf6;
          position: relative;
        }
        .underline-wave::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #8b5cf6, #6366f1, #8b5cf6);
          background-size: 200%;
          animation: underlineFlow 1.5s linear infinite;
        }
        @keyframes underlineFlow {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 7</p>
      <div
        className="underline-wave"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Fetching Data...
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .underline-wave {
          font-size: 20px;
          font-weight: 500;
          color: #8b5cf6;
          position: relative;
        }
        .underline-wave::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #8b5cf6, #6366f1, #8b5cf6);
          background-size: 200%;
          animation: underlineFlow 1.5s linear infinite;
        }
        @keyframes underlineFlow {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader75() {
  const [copied, setCopied] = useState(false);
  const code = `
      
  
      
  `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 8</p>
      <div
        className="fade-letters"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {"Loading".split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            {ch}
          </span>
        ))}
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fade-letters span {
          display: inline-block;
          color: #22d3ee;
          font-size: 22px;
          animation: fadeWave 1.5s infinite ease-in-out;
        }
        @keyframes fadeWave {
          0%,100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader76() {
  const [copied, setCopied] = useState(false);
  const code = ` <div
        className="stretch-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Processing...
      </div>

      
        .stretch-text {
          font-size: 20px;
          color: #f43f5e;
          animation: stretchText 1.6s ease-in-out infinite;
        }
        @keyframes stretchText {
          0%,100% { letter-spacing: 1px; opacity: 0.7; }
          50% { letter-spacing: 5px; opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Wave Text 9</p>
      <div
        className="stretch-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Processing...
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .stretch-text {
          font-size: 20px;
          color: #f43f5e;
          animation: stretchText 1.6s ease-in-out infinite;
        }
        @keyframes stretchText {
          0%,100% { letter-spacing: 1px; opacity: 0.7; }
          50% { letter-spacing: 5px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader77() {
  const [copied, setCopied] = useState(false);
  const code = `
         <div
        className="stretch-text"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Processing...
      </div>
        .rs1 {
          width: 48px; height: 48px;
          background: linear-gradient(135deg,#60a5fa,#3b82f6);
          border-radius: 6px;
          box-shadow: 0 8px 20px rgba(224, 231, 241, 0.34);
          animation: rs1-rot 1.05s cubic-bezier(.2,.9,.3,.99) infinite;
        }
        @keyframes rs1-rot {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(-6px); }
          100% { transform: rotate(360deg) translateY(0); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS1 — Smooth 2D Rotate
      </div>
      <div className="rs1" style={{ margin: "0 auto", marginTop: 20 }}></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs1 {
          width: 48px; height: 48px;
          background: linear-gradient(135deg,#60a5fa,#3b82f6);
          border-radius: 6px;
          box-shadow: 0 8px 20px rgba(224, 231, 241, 0.34);
          animation: rs1-rot 1.05s cubic-bezier(.2,.9,.3,.99) infinite;
        }
        @keyframes rs1-rot {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(-6px); }
          100% { transform: rotate(360deg) translateY(0); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader78() {
  const [copied, setCopied] = useState(false);
  const code = `<div style={{ marginTop: -50, marginLeft: 20, color: "#999393ff" }}>
        RS2 — 3D Flip Cube
      </div>
      <div className="rs2" aria-hidden="true">
        <div className="face"></div>
      </div>

        .rs2 {
          width: 44px; height: 44px;
          perspective: 600px;
          margin: 0 auto;
        }
        .rs2 .face {
          width: 100%; height: 100%;
          background: linear-gradient(135deg,#34d399,#10b981);
          border-radius: 6px;
          transform-style: preserve-3d;
          animation: rs2-flip 1.4s cubic-bezier(.22,.9,.2,1) infinite;
          box-shadow: 0 10px 24px rgba(16,185,129,0.14);
          margin-top: 20px;
        }
        @keyframes rs2-flip {
          0% { transform: rotateX(0) rotateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ marginTop: -50, marginLeft: 20, color: "#999393ff" }}>
        RS2 — 3D Flip Cube
      </div>
      <div className="rs2" aria-hidden="true">
        <div className="face"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs2 {
          width: 44px; height: 44px;
          perspective: 600px;
          margin: 0 auto;
        }
        .rs2 .face {
          width: 100%; height: 100%;
          background: linear-gradient(135deg,#34d399,#10b981);
          border-radius: 6px;
          transform-style: preserve-3d;
          animation: rs2-flip 1.4s cubic-bezier(.22,.9,.2,1) infinite;
          box-shadow: 0 10px 24px rgba(16,185,129,0.14);
          margin-top: 20px;
        }
        @keyframes rs2-flip {
          0% { transform: rotateX(0) rotateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader79() {
  const [copied, setCopied] = useState(false);
  const code = ` <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS3 — Dual Frame
      </div>
      <div className="rs3">
        <div className="inner"></div>
      </div>

     
      
        .rs3 {
          width: 62px; height: 62px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          background: linear-gradient(180deg,#f97316 0%, transparent 100%);
          animation: rs3-outer 1.8s linear infinite;
          margin-top: 30px;
        }
        .rs3 .inner {
          width: 36px; height: 36px;
          background: linear-gradient(135deg,#fb7185,#ef4444);
          border-radius: 6px;
          animation: rs3-inner 1s linear infinite reverse;
          box-shadow: 0 6px 18px rgba(239,68,68,0.12);
        }
        @keyframes rs3-outer { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes rs3-inner { 0%{transform:rotate(0)} 100%{transform:rotate(-360deg)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS3 — Dual Frame
      </div>
      <div className="rs3">
        <div className="inner"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs3 {
          width: 62px; height: 62px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          background: linear-gradient(180deg,#f97316 0%, transparent 100%);
          animation: rs3-outer 1.8s linear infinite;
          margin-top: 30px;
        }
        .rs3 .inner {
          width: 36px; height: 36px;
          background: linear-gradient(135deg,#fb7185,#ef4444);
          border-radius: 6px;
          animation: rs3-inner 1s linear infinite reverse;
          box-shadow: 0 6px 18px rgba(239,68,68,0.12);
        }
        @keyframes rs3-outer { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes rs3-inner { 0%{transform:rotate(0)} 100%{transform:rotate(-360deg)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader80() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs4"></div>

      
     
        .rs4 {
          width: 54px; height: 54px;
          border-radius: 8px;
          background: linear-gradient(135deg,#8b5cf6,#06b6d4);
          box-shadow: 0 6px 20px rgba(99,102,241,0.18), 0 0 18px rgba(6,182,212,0.12);
          position: relative;
          animation: rs4-rot 1.25s cubic-bezier(.25,.8,.25,1) infinite;
          margin: 0 auto;
          margin-top: 30px;
        }
        .rs4::after{
          content:"";
          position:absolute; inset:6px;
          border-radius:6px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), transparent);
          mix-blend-mode: overlay;
        }
        @keyframes rs4-rot { 0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(1.02)}100%{transform:rotate(360deg)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ marginLeft: 20, color: "#999393ff" }}>RS4 — Neon Glow</div>
      <div className="rs4"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs4 {
          width: 54px; height: 54px;
          border-radius: 8px;
          background: linear-gradient(135deg,#8b5cf6,#06b6d4);
          box-shadow: 0 6px 20px rgba(99,102,241,0.18), 0 0 18px rgba(6,182,212,0.12);
          position: relative;
          animation: rs4-rot 1.25s cubic-bezier(.25,.8,.25,1) infinite;
          margin: 0 auto;
          margin-top: 30px;
        }
        .rs4::after{
          content:"";
          position:absolute; inset:6px;
          border-radius:6px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), transparent);
          mix-blend-mode: overlay;
        }
        @keyframes rs4-rot { 0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(1.02)}100%{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader81() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="rs5"></div>

        .rs5 {
          width: 50px; height: 50px;
          border-radius: 8px;
          background: linear-gradient(135deg,#f472b6,#fb7185);
          animation: rs5-elastic 1.1s cubic-bezier(.34,1.56,.64,1) infinite;
          box-shadow: 0 8px 20px rgba(244,114,182,0.14);
          margin: 0 auto;
          margin-top: 20px;
        }
        @keyframes rs5-elastic {
          0% { transform: rotate(0) scale(1); }
          30% { transform: rotate(120deg) scale(1.06); }
          60% { transform: rotate(240deg) scale(0.96); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS5 — Elastic Rotate
      </div>
      <div className="rs5"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs5 {
          width: 50px; height: 50px;
          border-radius: 8px;
          background: linear-gradient(135deg,#f472b6,#fb7185);
          animation: rs5-elastic 1.1s cubic-bezier(.34,1.56,.64,1) infinite;
          box-shadow: 0 8px 20px rgba(244,114,182,0.14);
          margin: 0 auto;
          margin-top: 20px;
        }
        @keyframes rs5-elastic {
          0% { transform: rotate(0) scale(1); }
          30% { transform: rotate(120deg) scale(1.06); }
          60% { transform: rotate(240deg) scale(0.96); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader82() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs6">
        <div className="orb or1"></div>
        <div className="orb or2"></div>
        <div className="orb or3"></div>
      </div>
     
        .rs6 {
          width: 68px; height: 68px;
          position: relative;
          margin: 0 auto;
        }
        .rs6::before {
          content:"";
          width: 40px; height: 40px;
          background: linear-gradient(135deg,#06b6d4,#3b82f6);
          border-radius: 8px;
          position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          box-shadow: 0 10px 22px rgba(59,130,246,0.12);
          animation: rs6-main 1.6s linear infinite;
         
        }
        .orb {
          width: 10px; height: 10px; position:absolute; border-radius:2px;
        }
        .or1 { background:#facc15; top:8px; left:50%; transform:translateX(-50%); animation: o1 1.2s linear infinite; }
        .or2 { background:#fb7185; top:50%; left:8px; transform:translateY(-50%); animation: o2 1.2s linear infinite; }
        .or3 { background:#34d399; top:50%; right:8px; transform:translateY(-50%); animation: o3 1.2s linear infinite; }
        @keyframes rs6-main { 0%{transform: translate(-50%,-50%) rotate(0)} 100%{transform: translate(-50%,-50%) rotate(360deg)} }
        @keyframes o1 { 0%{transform:translate(-50%,0) rotate(0)} 100%{transform:translate(-50%,0) rotate(360deg)} }
        @keyframes o2 { 0%{transform:translate(0,-50%) rotate(0)} 100%{transform:translate(0,-50%) rotate(-360deg)} }
        @keyframes o3 { 0%{transform:translate(0,-50%) rotate(0)} 100%{transform:translate(0,-50%) rotate(360deg)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS6 — Orbiting Mini Squares
      </div>
      <div className="rs6">
        <div className="orb or1"></div>
        <div className="orb or2"></div>
        <div className="orb or3"></div>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs6 {
          width: 68px; height: 68px;
          position: relative;
          margin: 0 auto;
        }
        .rs6::before {
          content:"";
          width: 40px; height: 40px;
          background: linear-gradient(135deg,#06b6d4,#3b82f6);
          border-radius: 8px;
          position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
          box-shadow: 0 10px 22px rgba(59,130,246,0.12);
          animation: rs6-main 1.6s linear infinite;
         
        }
        .orb {
          width: 10px; height: 10px; position:absolute; border-radius:2px;
        }
        .or1 { background:#facc15; top:8px; left:50%; transform:translateX(-50%); animation: o1 1.2s linear infinite; }
        .or2 { background:#fb7185; top:50%; left:8px; transform:translateY(-50%); animation: o2 1.2s linear infinite; }
        .or3 { background:#34d399; top:50%; right:8px; transform:translateY(-50%); animation: o3 1.2s linear infinite; }
        @keyframes rs6-main { 0%{transform: translate(-50%,-50%) rotate(0)} 100%{transform: translate(-50%,-50%) rotate(360deg)} }
        @keyframes o1 { 0%{transform:translate(-50%,0) rotate(0)} 100%{transform:translate(-50%,0) rotate(360deg)} }
        @keyframes o2 { 0%{transform:translate(0,-50%) rotate(0)} 100%{transform:translate(0,-50%) rotate(-360deg)} }
        @keyframes o3 { 0%{transform:translate(0,-50%) rotate(0)} 100%{transform:translate(0,-50%) rotate(360deg)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader83() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs7" style={{}}></div>

      
        .rs7 {
          width: 56px; height: 56px;
          border-radius: 10px;
          background: #111827;
          position: relative;
          box-shadow: inset 0 0 0 3px rgba(255,255,255,0.03);
          margin: 0 auto ;
          margin-top : 20px;
        }
        .rs7::before {
          content:"";
          position:absolute; inset:4px;
          border-radius:8px;
          border: 3px dashed #60a5fa;
          animation: rs7-dash 1.2s linear infinite;
        }
        @keyframes rs7-dash { 0%{transform:rotate(0)}100%{transform:rotate(360deg)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS7 — Dashed Border Rotate
      </div>
      <div className="rs7" style={{}}></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs7 {
          width: 56px; height: 56px;
          border-radius: 10px;
          background: #111827;
          position: relative;
          box-shadow: inset 0 0 0 3px rgba(255,255,255,0.03);
          margin: 0 auto ;
          margin-top : 20px;
        }
        .rs7::before {
          content:"";
          position:absolute; inset:4px;
          border-radius:8px;
          border: 3px dashed #60a5fa;
          animation: rs7-dash 1.2s linear infinite;
        }
        @keyframes rs7-dash { 0%{transform:rotate(0)}100%{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader84() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs8"></div>

        .rs8 {
          width: 50px; height: 50px;
          background: linear-gradient(135deg,#8b5cf6,#a78bfa);
          border-radius: 8px;
          animation: rs8-skew 1.15s cubic-bezier(.25,.8,.25,1) infinite;
          box-shadow: 0 8px 22px rgba(139,92,246,0.12);
          margin: 0 auto ;
          margin-top: 20px;
        }
        @keyframes rs8-skew {
          0% { transform: rotate(0) skew(0deg); }
          25% { transform: rotate(90deg) skew(6deg); }
          50% { transform: rotate(180deg) skew(0deg); }
          75% { transform: rotate(270deg) skew(-6deg); }
          100% { transform: rotate(360deg) skew(0deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS8 — Skew & Rotate
      </div>
      <div className="rs8"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs8 {
          width: 50px; height: 50px;
          background: linear-gradient(135deg,#8b5cf6,#a78bfa);
          border-radius: 8px;
          animation: rs8-skew 1.15s cubic-bezier(.25,.8,.25,1) infinite;
          box-shadow: 0 8px 22px rgba(139,92,246,0.12);
          margin: 0 auto ;
          margin-top: 20px;
        }
        @keyframes rs8-skew {
          0% { transform: rotate(0) skew(0deg); }
          25% { transform: rotate(90deg) skew(6deg); }
          50% { transform: rotate(180deg) skew(0deg); }
          75% { transform: rotate(270deg) skew(-6deg); }
          100% { transform: rotate(360deg) skew(0deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader85() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs9">
        <div className="a"></div>
        <div className="b"></div>
      </div>

        .rs9 {
          width: 72px; height: 72px;
          position: relative;
          margin: 0 auto;
        }
        .rs9 .a, .rs9 .b {
          width: 44px; height: 44px; position:absolute; left:14px; top:14px; border-radius:8px;
        }
        .rs9 .a { background: linear-gradient(135deg,#34d399,#10b981); animation: r9a 1.6s linear infinite; box-shadow: 0 8px 20px rgba(16,185,129,0.12); }
        .rs9 .b { background: linear-gradient(135deg,#60a5fa,#3b82f6); animation: r9b 1.6s linear infinite; box-shadow: 0 8px 20px rgba(59,130,246,0.12); }
        @keyframes r9a { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes r9b { 0%{transform:rotate(0)} 100%{transform:rotate(-360deg)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS9 — Mirror Double Square
      </div>
      <div className="rs9">
        <div className="a"></div>
        <div className="b"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs9 {
          width: 72px; height: 72px;
          position: relative;
          margin: 0 auto;
        }
        .rs9 .a, .rs9 .b {
          width: 44px; height: 44px; position:absolute; left:14px; top:14px; border-radius:8px;
        }
        .rs9 .a { background: linear-gradient(135deg,#34d399,#10b981); animation: r9a 1.6s linear infinite; box-shadow: 0 8px 20px rgba(16,185,129,0.12); }
        .rs9 .b { background: linear-gradient(135deg,#60a5fa,#3b82f6); animation: r9b 1.6s linear infinite; box-shadow: 0 8px 20px rgba(59,130,246,0.12); }
        @keyframes r9a { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes r9b { 0%{transform:rotate(0)} 100%{transform:rotate(-360deg)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader86() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rs10"></div>
      
        .rs10 {
          width: 58px; height: 58px;
          margin: 0 auto;
          margin-top: 20px;
          background: linear-gradient(135deg,#f59e0b,#f97316);
          animation: rs10-morph 1.5s ease-in-out infinite;
          box-shadow: 0 10px 26px rgba(249,115,22,0.12);
        }
        @keyframes rs10-morph {
          0% { border-radius: 8px; transform: rotate(0) scale(1); }
          33% { border-radius: 28px; transform: rotate(120deg) scale(0.95); }
          66% { border-radius: 50%; transform: rotate(240deg) scale(1.06); }
          100% { border-radius: 8px; transform: rotate(360deg) scale(1); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 8,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        RS10 — Morphing Square
      </div>
      <div className="rs10"></div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rs10 {
          width: 58px; height: 58px;
          margin: 0 auto;
          margin-top: 20px;
          background: linear-gradient(135deg,#f59e0b,#f97316);
          animation: rs10-morph 1.5s ease-in-out infinite;
          box-shadow: 0 10px 26px rgba(249,115,22,0.12);
        }
        @keyframes rs10-morph {
          0% { border-radius: 8px; transform: rotate(0) scale(1); }
          33% { border-radius: 28px; transform: rotate(120deg) scale(0.95); }
          66% { border-radius: 50%; transform: rotate(240deg) scale(1.06); }
          100% { border-radius: 8px; transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader87() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download1"></div>
     
        .download1 {
          width: 0; 
          height: 0; 
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 25px solid #3b82f6;
          position: relative;
          animation: moveDown1 1.5s infinite ease-in-out;
          margin: 20px auto;
        }
        @keyframes moveDown1 {
          0% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.6; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 1</p>
      <div className="download1"></div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download1 {
          width: 0; 
          height: 0; 
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 25px solid #3b82f6;
          position: relative;
          animation: moveDown1 1.5s infinite ease-in-out;
          margin: 20px auto;
        }
        @keyframes moveDown1 {
          0% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader89() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download2"></div>

        .download2 {
          width: 30px; height: 30px;
          border: 3px solid #22c55e;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin2 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download2::after {
          content: '';
          position: absolute;
          top: 9px; left: 10px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #22c55e;
          animation: bounceArrow 1s infinite alternate;
        }
        @keyframes spin2 { 100% { transform: rotate(360deg); } }
        @keyframes bounceArrow { 0% { transform: translateY(0); } 100% { transform: translateY(5px); } }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 2</p>
      <div className="download2"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download2 {
          width: 30px; height: 30px;
          border: 3px solid #22c55e;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin2 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download2::after {
          content: '';
          position: absolute;
          top: 9px; left: 10px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #22c55e;
          animation: bounceArrow 1s infinite alternate;
        }
        @keyframes spin2 { 100% { transform: rotate(360deg); } }
        @keyframes bounceArrow { 0% { transform: translateY(0); } 100% { transform: translateY(5px); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader90() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download3"></div>

        .download3 {
          width: 25px; height: 25px;
          border: 3px solid #f97316;
          border-radius: 50%;
          animation: fillCircle 1.5s ease-in-out infinite;
          position: relative;
          margin: 20px auto;
        }
        .download3::after {
          content: '';
          position: absolute;
          top: 5px; left: 7px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #f97316;
        }
        @keyframes fillCircle {
          0% { transform: scale(0.8); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.7; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 3</p>
      <div className="download3"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download3 {
          width: 25px; height: 25px;
          border: 3px solid #f97316;
          border-radius: 50%;
          animation: fillCircle 1.5s ease-in-out infinite;
          position: relative;
          margin: 20px auto;
        }
        .download3::after {
          content: '';
          position: absolute;
          top: 5px; left: 7px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #f97316;
        }
        @keyframes fillCircle {
          0% { transform: scale(0.8); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader91() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download4"></div>

        .download4 {
          position: relative;
          width: 10px;
          height: 40px;
          background: #8b5cf6;
          animation: stretch 1s ease-in-out infinite;
          margin: 20px auto;
        }
        .download4::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: -5px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #8b5cf6;
        }
        @keyframes stretch {
          0%,100% { height: 20px; opacity: 0.6; }
          50% { height: 40px; opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 4</p>
      <div className="download4"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download4 {
          position: relative;
          width: 10px;
          height: 40px;
          background: #8b5cf6;
          animation: stretch 1s ease-in-out infinite;
          margin: 20px auto;
        }
        .download4::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: -5px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #8b5cf6;
        }
        @keyframes stretch {
          0%,100% { height: 20px; opacity: 0.6; }
          50% { height: 40px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader92() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download5"></div>

        .download5 {
          width: 32px;
          height: 32px;
          border: 3px solid #ec4899;
          border-radius: 50%;
          border-bottom-color: transparent;
          animation: rotate5 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download5::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #ec4899;
        }
        @keyframes rotate5 { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 5</p>
      <div className="download5"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download5 {
          width: 32px;
          height: 32px;
          border: 3px solid #ec4899;
          border-radius: 50%;
          border-bottom-color: transparent;
          animation: rotate5 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download5::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #ec4899;
        }
        @keyframes rotate5 { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader93() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="download6"></div>
     
        .download6 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px dashed #10b981;
          animation: rotateDashed 1.2s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download6::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #10b981;
          animation: arrowPulse 1s ease-in-out infinite;
        }
        @keyframes rotateDashed { 100% { transform: rotate(360deg); } }
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 6</p>
      <div className="download6"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download6 {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px dashed #10b981;
          animation: rotateDashed 1.2s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download6::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #10b981;
          animation: arrowPulse 1s ease-in-out infinite;
        }
        @keyframes rotateDashed { 100% { transform: rotate(360deg); } }
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader94() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download7">
        <div></div>
      </div>

        .download7 {
          width: 40px; height: 40px;
          border: 2px solid #f59e0b;
          border-radius: 50%;
          position: relative;
          margin: 20px auto;
          animation: spinRing 1.2s infinite linear;
        }
        .download7 div {
          position: absolute;
          top: 12px; left: 14px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #f59e0b;
        }
        @keyframes spinRing { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 7</p>
      <div className="download7">
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <style>{`
        .download7 {
          width: 40px; height: 40px;
          border: 2px solid #f59e0b;
          border-radius: 50%;
          position: relative;
          margin: 20px auto;
          animation: spinRing 1.2s infinite linear;
        }
        .download7 div {
          position: absolute;
          top: 12px; left: 14px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #f59e0b;
        }
        @keyframes spinRing { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader95() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download8">
        <span></span>
        <span></span>
        <span></span>
      </div>

     
      
        .download8 {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 4px;
          margin: 20px auto;
        }
        .download8 span {
          width: 6px;
          height: 10px;
          background: #ef4444;
          animation: barJump 1s infinite ease-in-out;
        }
        .download8 span:nth-child(2) { animation-delay: 0.1s; }
        .download8 span:nth-child(3) { animation-delay: 0.2s; }
        @keyframes barJump {
          0%, 100% { height: 10px; }
          50% { height: 25px; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 8</p>
      <div className="download8">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download8 {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 4px;
          margin: 20px auto;
        }
        .download8 span {
          width: 6px;
          height: 10px;
          background: #ef4444;
          animation: barJump 1s infinite ease-in-out;
        }
        .download8 span:nth-child(2) { animation-delay: 0.1s; }
        .download8 span:nth-child(3) { animation-delay: 0.2s; }
        @keyframes barJump {
          0%, 100% { height: 10px; }
          50% { height: 25px; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader96() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download9"></div>

        .download9 {
          width: 32px;
          height: 32px;
          background: conic-gradient(#3b82f6 0 25%, transparent 25% 100%);
          border-radius: 50%;
          animation: spinPie 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download9::after {
          content: '';
          position: absolute;
          top: 8px; left: 10px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #3b82f6;
        }
        @keyframes spinPie { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 9</p>
      <div className="download9"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download9 {
          width: 32px;
          height: 32px;
          background: conic-gradient(#3b82f6 0 25%, transparent 25% 100%);
          border-radius: 50%;
          animation: spinPie 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download9::after {
          content: '';
          position: absolute;
          top: 8px; left: 10px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #3b82f6;
        }
        @keyframes spinPie { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader97() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download10"></div>

        .download10 {
          width: 30px; height: 30px;
          border: 3px solid #6366f1;
          border-radius: 50%;
          border-bottom: 3px solid transparent;
          animation: rotateBounce 1.2s ease-in-out infinite;
          position: relative;
          margin: 20px auto;
        }
        .download10::after {
          content: '';
          position: absolute;
          top: 8px; left: 9px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #6366f1;
        }
        @keyframes rotateBounce {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 10</p>
      <div className="download10"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download10 {
          width: 30px; height: 30px;
          border: 3px solid #6366f1;
          border-radius: 50%;
          border-bottom: 3px solid transparent;
          animation: rotateBounce 1.2s ease-in-out infinite;
          position: relative;
          margin: 20px auto;
        }
        .download10::after {
          content: '';
          position: absolute;
          top: 8px; left: 9px;
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #6366f1;
        }
        @keyframes rotateBounce {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader98() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download11"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      
        .download11 {
          width: 40px; height: 40px;
          border: 4px solid transparent;
          border-top: 4px solid #06b6d4;
          border-radius: 50%;
          animation: rotate11 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download11::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #06b6d4;
          animation: bounce11 1s ease-in-out infinite;
        }
        @keyframes rotate11 { 100% { transform: rotate(360deg); } }
        @keyframes bounce11 { 0%,100%{transform:translateY(0);}50%{transform:translateY(5px);} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 11</p>
      <div className="download11"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download11 {
          width: 40px; height: 40px;
          border: 4px solid transparent;
          border-top: 4px solid #06b6d4;
          border-radius: 50%;
          animation: rotate11 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download11::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #06b6d4;
          animation: bounce11 1s ease-in-out infinite;
        }
        @keyframes rotate11 { 100% { transform: rotate(360deg); } }
        @keyframes bounce11 { 0%,100%{transform:translateY(0);}50%{transform:translateY(5px);} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader99() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download12"></div>
      
        .download12 {
          width: 30px; height: 30px;
          background: linear-gradient(45deg, #a855f7, #3b82f6);
          clip-path: polygon(50% 0%, 100% 70%, 75% 70%, 75% 100%, 25% 100%, 25% 70%, 0% 70%);
          animation: bounce12 1.2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes bounce12 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 12</p>
      <div className="download12"></div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download12 {
          width: 30px; height: 30px;
          background: linear-gradient(45deg, #a855f7, #3b82f6);
          clip-path: polygon(50% 0%, 100% 70%, 75% 70%, 75% 100%, 25% 100%, 25% 70%, 0% 70%);
          animation: bounce12 1.2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes bounce12 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader100() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="download13"></div>

        .download13 {
          position: relative;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: conic-gradient(#84cc16 0 270deg, transparent 270deg);
          animation: spin13 1.5s linear infinite;
          margin: 20px auto;
        }
        .download13::before {
          content: '';
          position: absolute;
          top: 12px; left: 14px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #84cc16;
        }
        @keyframes spin13 { 100% { transform: rotate(360deg); } }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 13</p>
      <div className="download13"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <style>{`
        .download13 {
          position: relative;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: conic-gradient(#84cc16 0 270deg, transparent 270deg);
          animation: spin13 1.5s linear infinite;
          margin: 20px auto;
        }
        .download13::before {
          content: '';
          position: absolute;
          top: 12px; left: 14px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #84cc16;
        }
        @keyframes spin13 { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader104() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download14"></div>

     
        .download14 {
          width: 8px; height: 40px;
          background: #ef4444;
          margin: 20px auto;
          animation: grow14 1s infinite ease-in-out;
          position: relative;
        }
        .download14::after {
          content: '';
          position: absolute;
          bottom: -10px; left: -6px;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #ef4444;
        }
        @keyframes grow14 {
          0%,100% { height: 20px; opacity: 0.7; }
          50% { height: 40px; opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 14</p>
      <div className="download14"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download14 {
          width: 8px; height: 40px;
          background: #ef4444;
          margin: 20px auto;
          animation: grow14 1s infinite ease-in-out;
          position: relative;
        }
        .download14::after {
          content: '';
          position: absolute;
          bottom: -10px; left: -6px;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #ef4444;
        }
        @keyframes grow14 {
          0%,100% { height: 20px; opacity: 0.7; }
          50% { height: 40px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader101() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download15"></div>
        .download15 {
          width: 40px;
          height: 40px;
          border: 4px solid #facc15;
          border-bottom-color: transparent;
          border-radius: 50%;
          animation: spin15 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download15::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #facc15;
        }
        @keyframes spin15 { 100% { transform: rotate(360deg); } }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 15</p>
      <div className="download15"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download15 {
          width: 40px;
          height: 40px;
          border: 4px solid #facc15;
          border-bottom-color: transparent;
          border-radius: 50%;
          animation: spin15 1s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download15::after {
          content: '';
          position: absolute;
          top: 10px; left: 12px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #facc15;
        }
        @keyframes spin15 { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader102() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download16">
        <div className="arrow"></div>
      </div>
        .download16 {
          width: 50px;
          height: 6px;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          border-radius: 5px;
          overflow: hidden;
          animation: progress16 2s infinite;
          margin: 20px auto;
          position: relative;
        }
        .download16 .arrow {
          position: absolute;
          top: -8px;
          left: 45%;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #3b82f6;
          animation: moveArrow16 2s infinite;
        }
        @keyframes progress16 {
          0% { background-position: 0 0; }
          100% { background-position: 50px 0; }
        }
        @keyframes moveArrow16 {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(5px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 16</p>
      <div className="download16">
        <div className="arrow"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download16 {
          width: 50px;
          height: 6px;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          border-radius: 5px;
          overflow: hidden;
          animation: progress16 2s infinite;
          margin: 20px auto;
          position: relative;
        }
        .download16 .arrow {
          position: absolute;
          top: -8px;
          left: 45%;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #3b82f6;
          animation: moveArrow16 2s infinite;
        }
        @keyframes progress16 {
          0% { background-position: 0 0; }
          100% { background-position: 50px 0; }
        }
        @keyframes moveArrow16 {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(5px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader103() {
  const [copied, setCopied] = useState(false);
  const code = `      <div className="download17"></div>

        .download17 {
          width: 30px; height: 30px;
          border: 3px solid #a3e635;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin17 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download17::after {
          content: '';
          position: absolute;
          top: 9px; left: 10px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #a3e635;
          animation: bounce17 1s infinite alternate;
        }
        @keyframes spin17 { 100% { transform: rotate(360deg); } }
        @keyframes bounce17 { 0% { transform: translateY(0);}100%{transform:translateY(5px);} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 17</p>
      <div className="download17"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download17 {
          width: 30px; height: 30px;
          border: 3px solid #a3e635;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin17 1s linear infinite;
          position: relative;
          margin: 20px auto;
        }
        .download17::after {
          content: '';
          position: absolute;
          top: 9px; left: 10px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #a3e635;
          animation: bounce17 1s infinite alternate;
        }
        @keyframes spin17 { 100% { transform: rotate(360deg); } }
        @keyframes bounce17 { 0% { transform: translateY(0);}100%{transform:translateY(5px);} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader105() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download18"></div>

        .download18 {
          width: 40px; height: 40px;
          border: 4px dotted #9333ea;
          border-radius: 50%;
          animation: spin18 1.4s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download18::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #9333ea;
        }
        @keyframes spin18 { 100% { transform: rotate(360deg); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 18</p>
      <div className="download18"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download18 {
          width: 40px; height: 40px;
          border: 4px dotted #9333ea;
          border-radius: 50%;
          animation: spin18 1.4s linear infinite;
          margin: 20px auto;
          position: relative;
        }
        .download18::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #9333ea;
        }
        @keyframes spin18 { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export function SpinnerLoader106() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download19"></div>

        .download19 {
          width: 32px;
          height: 32px;
          background: radial-gradient(circle at 50% 30%, #f472b6, #ec4899);
          border-radius: 50%;
          animation: pulse19 1.2s infinite ease-in-out;
          position: relative;
          margin: 20px auto;
        }
        .download19::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid white;
        }
        @keyframes pulse19 {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 19</p>
      <div className="download19"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download19 {
          width: 32px;
          height: 32px;
          background: radial-gradient(circle at 50% 30%, #f472b6, #ec4899);
          border-radius: 50%;
          animation: pulse19 1.2s infinite ease-in-out;
          position: relative;
          margin: 20px auto;
        }
        .download19::after {
          content: '';
          position: absolute;
          top: 9px; left: 11px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid white;
        }
        @keyframes pulse19 {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader107() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="download20"></div>

  
        .download20 {
          width: 40px; height: 40px;
          border: 3px solid #0ea5e9;
          border-top: 3px solid transparent;
          border-radius: 50%;
          animation: spin20 1.2s ease-in-out infinite;
          margin: 20px auto;
          position: relative;
        }
        .download20::after {
          content: '';
          position: absolute;
          top: 8px; left: 10px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #0ea5e9;
        }
        @keyframes spin20 { 100% { transform: rotate(360deg); } }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Download Loader 20</p>
      <div className="download20"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .download20 {
          width: 40px; height: 40px;
          border: 3px solid #0ea5e9;
          border-top: 3px solid transparent;
          border-radius: 50%;
          animation: spin20 1.2s ease-in-out infinite;
          margin: 20px auto;
          position: relative;
        }
        .download20::after {
          content: '';
          position: absolute;
          top: 8px; left: 10px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #0ea5e9;
        }
        @keyframes spin20 { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader108() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="neon-pulse" aria-hidden="true">
        <div className="arrow" />
      </div>

        .neon-pulse {
          width: 64px; height: 64px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(99,102,241,0.14), transparent 40%);
          display: grid; place-items: center;
          box-shadow: 0 8px 28px rgba(59,130,246,0.12), 0 0 32px rgba(99,102,241,0.06) inset;
          animation: neon-glow 1.6s ease-in-out infinite;
          margin: 0 auto;
        }
        .neon-pulse .arrow {
          width: 0; height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 18px solid #60a5fa;
          filter: drop-shadow(0 6px 10px rgba(96,165,250,0.25));
          transform-origin: 50% 50%;
          animation: neon-pulse-arrow 1.2s ease-in-out infinite;
        }
        @keyframes neon-glow {
          0% { box-shadow: 0 8px 28px rgba(99,102,241,0.06), 0 0 0 rgba(96,165,250,0); transform: scale(1); }
          50% { box-shadow: 0 12px 36px rgba(99,102,241,0.16), 0 0 18px rgba(96,165,250,0.16); transform: scale(1.03); }
          100% { box-shadow: 0 8px 28px rgba(99,102,241,0.06), 0 0 0 rgba(96,165,250,0); transform: scale(1); }
        }
        @keyframes neon-pulse-arrow {
          0% { transform: translateY(0) scale(1); opacity: 1 }
          50% { transform: translateY(6px) scale(0.95); opacity: 0.8 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Neon Pulse Download
      </div>
      <div className="neon-pulse" aria-hidden="true">
        <div className="arrow" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-pulse {
          width: 64px; height: 64px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(99,102,241,0.14), transparent 40%);
          display: grid; place-items: center;
          box-shadow: 0 8px 28px rgba(59,130,246,0.12), 0 0 32px rgba(99,102,241,0.06) inset;
          animation: neon-glow 1.6s ease-in-out infinite;
          margin: 0 auto;
        }
        .neon-pulse .arrow {
          width: 0; height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 18px solid #60a5fa;
          filter: drop-shadow(0 6px 10px rgba(96,165,250,0.25));
          transform-origin: 50% 50%;
          animation: neon-pulse-arrow 1.2s ease-in-out infinite;
        }
        @keyframes neon-glow {
          0% { box-shadow: 0 8px 28px rgba(99,102,241,0.06), 0 0 0 rgba(96,165,250,0); transform: scale(1); }
          50% { box-shadow: 0 12px 36px rgba(99,102,241,0.16), 0 0 18px rgba(96,165,250,0.16); transform: scale(1.03); }
          100% { box-shadow: 0 8px 28px rgba(99,102,241,0.06), 0 0 0 rgba(96,165,250,0); transform: scale(1); }
        }
        @keyframes neon-pulse-arrow {
          0% { transform: translateY(0) scale(1); opacity: 1 }
          50% { transform: translateY(6px) scale(0.95); opacity: 0.8 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader109() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="liquid-drop">
        <div className="drop" />
      </div>

        .liquid-drop {
          width: 60px; height: 72px;
          display: grid; place-items: start center;
          margin: 0 auto;
          margin-top: 30px;
          
        }
        .liquid-drop .drop {
          width: 34px; height: 44px;
          background: linear-gradient(180deg,#06b6d4,#22c1c3);
          border-radius: 50% 50% 40% 40%;
          position: relative;
          transform-origin: center top;
          animation: drop-morph 1.4s ease-in-out infinite;
        }
        .liquid-drop .drop::after {
          content: "";
          position: absolute;
          left: 50%; bottom: -12px;
          transform: translateX(-50%);
          width: 0; height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid #22c1c3;
        }
        @keyframes drop-morph {
          0% { transform: scaleY(1) translateY(0); border-radius: 50% 50% 40% 40%; }
          45% { transform: scaleY(0.9) translateY(6px); border-radius: 46% 46% 36% 36%; }
          85% { transform: scaleY(1.05) translateY(-2px); border-radius: 30% 30% 20% 20%; }
          100% { transform: scaleY(1) translateY(0); border-radius: 50% 50% 40% 40%; }
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginTop: -70,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Liquid Drop Download
      </div>
      <div className="liquid-drop">
        <div className="drop" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <style>{`
        .liquid-drop {
          width: 60px; height: 72px;
          display: grid; place-items: start center;
          margin: 0 auto;
          margin-top: 30px;
          
        }
        .liquid-drop .drop {
          width: 34px; height: 44px;
          background: linear-gradient(180deg,#06b6d4,#22c1c3);
          border-radius: 50% 50% 40% 40%;
          position: relative;
          transform-origin: center top;
          animation: drop-morph 1.4s ease-in-out infinite;
        }
        .liquid-drop .drop::after {
          content: "";
          position: absolute;
          left: 50%; bottom: -12px;
          transform: translateX(-50%);
          width: 0; height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid #22c1c3;
        }
        @keyframes drop-morph {
          0% { transform: scaleY(1) translateY(0); border-radius: 50% 50% 40% 40%; }
          45% { transform: scaleY(0.9) translateY(6px); border-radius: 46% 46% 36% 36%; }
          85% { transform: scaleY(1.05) translateY(-2px); border-radius: 30% 30% 20% 20%; }
          100% { transform: scaleY(1) translateY(0); border-radius: 50% 50% 40% 40%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader111() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="pixel-download" aria-hidden="true">
        <div className="col c1" />
        <div className="col c2" />
        <div className="col c3" />
      </div>
          .pixel-download { width: 72px; display:flex; justify-content:center; gap:6px; margin:0 auto; }
          .pixel-download .col { width:12px; display:flex; flex-direction:column; gap:6px; align-items:center;}
          .pixel-download .col::before { content:''; width:12px; height:12px; background:#ef4444; display:block; border-radius:2px; animation: pixelDrop 1s infinite; }
          .pixel-download .c2::before { background:#f97316; animation-delay: 0.12s; }
          .pixel-download .c3::before { background:#60a5fa; animation-delay: 0.24s; }
          @keyframes pixelDrop {
          0% { transform: translateY(-14px); opacity: 0; }
          40% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-2px); opacity: 0.6; }
          }
      }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 100,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Pixel Download Loader
      </div>
      <div className="pixel-download" aria-hidden="true">
        <div className="col c1" />
        <div className="col c2" />
        <div className="col c3" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <style>
        {`
          .pixel-download { width: 72px; display:flex; justify-content:center; gap:6px; margin:0 auto; }
          .pixel-download .col { width:12px; display:flex; flex-direction:column; gap:6px; align-items:center;}
          .pixel-download .col::before { content:''; width:12px; height:12px; background:#ef4444; display:block; border-radius:2px; animation: pixelDrop 1s infinite; }
          .pixel-download .c2::before { background:#f97316; animation-delay: 0.12s; }
          .pixel-download .c3::before { background:#60a5fa; animation-delay: 0.24s; }
          @keyframes pixelDrop {
          0% { transform: translateY(-14px); opacity: 0; }
          40% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-2px); opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
}

export function SpinnerLoader112() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="cyber-tech">
        <div className="hex">
          <div className="arrow" />
        </div>
      </div>
  
        .cyber-tech { width: 72px; height: 72px; display:grid; place-items:center; margin:0 auto; }
        .cyber-tech .hex {
          width: 56px; height: 48px; background: linear-gradient(135deg,#7c3aed,#06b6d4);
          clip-path: polygon(25% 0%, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          display:grid; place-items:center;
          box-shadow: 0 12px 28px rgba(124,58,237,0.12);
          animation: hex-rotate 1.6s linear infinite;
        }
        .cyber-tech .arrow {
          width: 0; height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 14px solid rgba(255,255,255,0.95);
          filter: drop-shadow(0 6px 10px rgba(7,89,133,0.12));
          animation: arrow-bob 0.9s ease-in-out infinite;
        }
        @keyframes hex-rotate { 0%{transform:rotate(0deg)}100%{transform:rotate(360deg)} }
        @keyframes arrow-bob { 0%{transform:translateY(0)}50%{transform:translateY(6px)}100%{transform:translateY(0)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 40,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Cyber Tech Download
      </div>
      <div className="cyber-tech">
        <div className="hex">
          <div className="arrow" />
        </div>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cyber-tech { width: 72px; height: 72px; display:grid; place-items:center; margin:0 auto; }
        .cyber-tech .hex {
          width: 56px; height: 48px; background: linear-gradient(135deg,#7c3aed,#06b6d4);
          clip-path: polygon(25% 0%, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          display:grid; place-items:center;
          box-shadow: 0 12px 28px rgba(124,58,237,0.12);
          animation: hex-rotate 1.6s linear infinite;
        }
        .cyber-tech .arrow {
          width: 0; height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 14px solid rgba(255,255,255,0.95);
          filter: drop-shadow(0 6px 10px rgba(7,89,133,0.12));
          animation: arrow-bob 0.9s ease-in-out infinite;
        }
        @keyframes hex-rotate { 0%{transform:rotate(0deg)}100%{transform:rotate(360deg)} }
        @keyframes arrow-bob { 0%{transform:translateY(0)}50%{transform:translateY(6px)}100%{transform:translateY(0)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader113() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="gradient-flow">
        <div className="arrow" />
      </div>

      
        .gradient-flow {
          width: 68px; height: 68px; border-radius: 50%;
          background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          display:grid; place-items:center;
          background-size: 200% 200%;
          animation: gradient-spin 2.2s linear infinite;
          margin: 0 auto;
        }
        .gradient-flow .arrow {
          width: 0; height: 0;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
          border-top: 20px solid white;
          filter: drop-shadow(0 8px 18px rgba(8,145,178,0.12));
          animation: arrow-pulse 1.1s ease-in-out infinite;
        }
        @keyframes gradient-spin {
          0% { background-position: 0% 50% }
          100% { background-position: 100% 50% }
        }
        @keyframes arrow-pulse { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Gradient Flow Download
      </div>
      <div className="gradient-flow">
        <div className="arrow" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-flow {
          width: 68px; height: 68px; border-radius: 50%;
          background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          display:grid; place-items:center;
          background-size: 200% 200%;
          animation: gradient-spin 2.2s linear infinite;
          margin: 0 auto;
        }
        .gradient-flow .arrow {
          width: 0; height: 0;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
          border-top: 20px solid white;
          filter: drop-shadow(0 8px 18px rgba(8,145,178,0.12));
          animation: arrow-pulse 1.1s ease-in-out infinite;
        }
        @keyframes gradient-spin {
          0% { background-position: 0% 50% }
          100% { background-position: 100% 50% }
        }
        @keyframes arrow-pulse { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader114() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="crystal-shard">
        <div className="shard" />
      </div>

      
        .crystal-shard { width: 64px; height: 64px; display:grid; place-items:center; margin:0 auto; }
        .crystal-shard .shard {
          width: 34px; height: 34px;
          background: linear-gradient(135deg,#a78bfa,#60a5fa 60%);
          clip-path: polygon(50% 0, 85% 30%, 70% 70%, 30% 70%, 15% 30%);
          animation: shard-tilt 1.6s ease-in-out infinite;
          box-shadow: 0 12px 32px rgba(96,165,250,0.12), inset 0 -6px 20px rgba(255,255,255,0.06);
          position: relative;
        }
        .crystal-shard .shard::after {
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
          mix-blend-mode: overlay;
          animation: shimmer 1.6s linear infinite;
        }
        @keyframes shard-tilt { 0%{transform:rotate(0) translateY(0)}50%{transform:rotate(8deg) translateY(6px)}100%{transform:rotate(0) translateY(0)} }
        @keyframes shimmer { 0%{transform:translateX(-100%)}100%{transform:translateX(100%)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Crystal Shard Download
      </div>
      <div className="crystal-shard">
        <div className="shard" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .crystal-shard { width: 64px; height: 64px; display:grid; place-items:center; margin:0 auto; }
        .crystal-shard .shard {
          width: 34px; height: 34px;
          background: linear-gradient(135deg,#a78bfa,#60a5fa 60%);
          clip-path: polygon(50% 0, 85% 30%, 70% 70%, 30% 70%, 15% 30%);
          animation: shard-tilt 1.6s ease-in-out infinite;
          box-shadow: 0 12px 32px rgba(96,165,250,0.12), inset 0 -6px 20px rgba(255,255,255,0.06);
          position: relative;
        }
        .crystal-shard .shard::after {
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
          mix-blend-mode: overlay;
          animation: shimmer 1.6s linear infinite;
        }
        @keyframes shard-tilt { 0%{transform:rotate(0) translateY(0)}50%{transform:rotate(8deg) translateY(6px)}100%{transform:rotate(0) translateY(0)} }
        @keyframes shimmer { 0%{transform:translateX(-100%)}100%{transform:translateX(100%)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader115() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="digital-circuit" aria-hidden="true">
        <span className="line l1" />
        <span className="line l2" />
        <span className="line l3" />
      </div>

      
        .digital-circuit { width: 72px; height: 64px; display:grid; place-items:center; gap:6px; margin:0 auto; }
        .digital-circuit .line {
          width: 56px; height: 6px; background: linear-gradient(90deg,#06b6d4,#06b6d4);
          position: relative; border-radius: 4px; overflow: visible;
        }
        .digital-circuit .line::after {
          content: ""; position:absolute; right: -10px; top: -9px;
          width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent;
          border-top: 10px solid #06b6d4; opacity:0; transform: translateY(0);
          animation: dashArrow 1.2s linear infinite;
        }
        .digital-circuit .l2 { animation: pulseLine 1.2s ease-in-out infinite; animation-delay:0.08s }
        .digital-circuit .l3 { animation: pulseLine 1.2s ease-in-out infinite; animation-delay:0.16s }
        @keyframes pulseLine { 0%{transform:scaleX(0.6); opacity:0.6}50%{transform:scaleX(1); opacity:1}100%{transform:scaleX(0.6); opacity:0.6} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Digital Circuit Download
      </div>
      <div className="digital-circuit" aria-hidden="true">
        <span className="line l1" />
        <span className="line l2" />
        <span className="line l3" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .digital-circuit { width: 72px; height: 64px; display:grid; place-items:center; gap:6px; margin:0 auto; }
        .digital-circuit .line {
          width: 56px; height: 6px; background: linear-gradient(90deg,#06b6d4,#06b6d4);
          position: relative; border-radius: 4px; overflow: visible;
        }
        .digital-circuit .line::after {
          content: ""; position:absolute; right: -10px; top: -9px;
          width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent;
          border-top: 10px solid #06b6d4; opacity:0; transform: translateY(0);
          animation: dashArrow 1.2s linear infinite;
        }
        .digital-circuit .l2 { animation: pulseLine 1.2s ease-in-out infinite; animation-delay:0.08s }
        .digital-circuit .l3 { animation: pulseLine 1.2s ease-in-out infinite; animation-delay:0.16s }
        @keyframes pulseLine { 0%{transform:scaleX(0.6); opacity:0.6}50%{transform:scaleX(1); opacity:1}100%{transform:scaleX(0.6); opacity:0.6} }
        @keyframes dashArrow { 0%{opacity:0; transform:translateY(-6px)}50%{opacity:1; transform:translateY(0)}100%{opacity:0; transform:translateY(6px)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader116() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="soft-cloud">
        <div className="cloud" />
        <div className="arrow" />
      </div>

      
        .soft-cloud { width: 92px; height: 72px; display:grid; place-items:center; margin:0 auto; position:relative; }
        .soft-cloud .cloud {
          width: 64px; height: 36px;
          background: linear-gradient(180deg,#f0f9ff,#e6f7ff);
          border-radius: 999px;
          position: absolute; top: 8px;
          box-shadow: 0 8px 22px rgba(14,165,233,0.08);
          animation: cloud-breath 2.6s ease-in-out infinite;
        }
        .soft-cloud .arrow {
          width: 0; height: 0;
          border-left: 12px solid transparent; border-right: 12px solid transparent;
          border-top: 18px solid #0ea5e9;
          position:absolute; top: 36px;
          animation: cloud-arrow 1.2s ease-in-out infinite;
        }
        @keyframes cloud-breath { 0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)} }
        @keyframes cloud-arrow { 0%{transform:translateY(-2px); opacity:0.8}50%{transform:translateY(8px); opacity:1}100%{transform:translateY(-2px); opacity:0.8} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Soft Cloud Download
      </div>
      <div className="soft-cloud">
        <div className="cloud" />
        <div className="arrow" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .soft-cloud { width: 92px; height: 72px; display:grid; place-items:center; margin:0 auto; position:relative; }
        .soft-cloud .cloud {
          width: 64px; height: 36px;
          background: linear-gradient(180deg,#f0f9ff,#e6f7ff);
          border-radius: 999px;
          position: absolute; top: 8px;
          box-shadow: 0 8px 22px rgba(14,165,233,0.08);
          animation: cloud-breath 2.6s ease-in-out infinite;
        }
        .soft-cloud .arrow {
          width: 0; height: 0;
          border-left: 12px solid transparent; border-right: 12px solid transparent;
          border-top: 18px solid #0ea5e9;
          position:absolute; top: 36px;
          animation: cloud-arrow 1.2s ease-in-out infinite;
        }
        @keyframes cloud-breath { 0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)} }
        @keyframes cloud-arrow { 0%{transform:translateY(-2px); opacity:0.8}50%{transform:translateY(8px); opacity:1}100%{transform:translateY(-2px); opacity:0.8} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader117() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="infinity-loop">
        <div className="loop" />
        <div className="arrow" />
      </div>
      
        .infinity-loop { width: 80px; height: 44px; display:grid; place-items:center; margin:0 auto; position:relative; }
        .infinity-loop .loop {
          width: 72px; height: 20px; border-radius: 999px; background: linear-gradient(90deg,#fb7185,#f59e0b);
          position:absolute; opacity:0.95;
          transform-origin:center; animation: loop-rotate 2s linear infinite;
        }
        .infinity-loop .arrow {
          position:absolute; top:6px; left: calc(50% - 8px);
          width:0; height:0;
          border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid white;
          animation: inf-arrow 1s ease-in-out infinite;
        }
        @keyframes loop-rotate { 0%{transform:scaleX(1) rotate(0)}50%{transform:scaleX(0.95) rotate(180deg)}100%{transform:scaleX(1) rotate(360deg)} }
        @keyframes inf-arrow { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Infinity Loop Download
      </div>
      <div className="infinity-loop">
        <div className="loop" />
        <div className="arrow" />
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .infinity-loop { width: 80px; height: 44px; display:grid; place-items:center; margin:0 auto; position:relative; }
        .infinity-loop .loop {
          width: 72px; height: 20px; border-radius: 999px; background: linear-gradient(90deg,#fb7185,#f59e0b);
          position:absolute; opacity:0.95;
          transform-origin:center; animation: loop-rotate 2s linear infinite;
        }
        .infinity-loop .arrow {
          position:absolute; top:6px; left: calc(50% - 8px);
          width:0; height:0;
          border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid white;
          animation: inf-arrow 1s ease-in-out infinite;
        }
        @keyframes loop-rotate { 0%{transform:scaleX(1) rotate(0)}50%{transform:scaleX(0.95) rotate(180deg)}100%{transform:scaleX(1) rotate(360deg)} }
        @keyframes inf-arrow { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader118() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="aurora-beam">
        <div className="beam" />
        <div className="arrow" />
      </div>

     
        .aurora-beam { width: 72px; height: 72px; display:grid; place-items:center; margin:0 auto; position:relative; overflow:hidden; border-radius:10px; }
        .aurora-beam .beam {
          width: 180%; height: 40%;
          background: linear-gradient(90deg, rgba(99,102,241,0.9), rgba(96,165,250,0.9), rgba(34,197,94,0.9));
          position: absolute; top: 10%; left: -40%;
          transform: skewX(-20deg);
          animation: aurora-sweep 1.8s linear infinite;
          filter: blur(8px);
          opacity: 0.9;
        }
        .aurora-beam .arrow {
          position: absolute; width:0; height:0;
          border-left:12px solid transparent; border-right:12px solid transparent; border-top:18px solid white;
          bottom: 12px;
          animation: aurora-bob 1.2s ease-in-out infinite;
        }
        @keyframes aurora-sweep { 0%{left:-60%}100%{left:60%} }
        @keyframes aurora-bob { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Aurora Beam Download
      </div>
      <div className="aurora-beam">
        <div className="beam" />
        <div className="arrow" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aurora-beam { width: 72px; height: 72px; display:grid; place-items:center; margin:0 auto; position:relative; overflow:hidden; border-radius:10px; }
        .aurora-beam .beam {
          width: 180%; height: 40%;
          background: linear-gradient(90deg, rgba(99,102,241,0.9), rgba(96,165,250,0.9), rgba(34,197,94,0.9));
          position: absolute; top: 10%; left: -40%;
          transform: skewX(-20deg);
          animation: aurora-sweep 1.8s linear infinite;
          filter: blur(8px);
          opacity: 0.9;
        }
        .aurora-beam .arrow {
          position: absolute; width:0; height:0;
          border-left:12px solid transparent; border-right:12px solid transparent; border-top:18px solid white;
          bottom: 12px;
          animation: aurora-bob 1.2s ease-in-out infinite;
        }
        @keyframes aurora-sweep { 0%{left:-60%}100%{left:60%} }
        @keyframes aurora-bob { 0%{transform:translateY(0)}50%{transform:translateY(8px)}100%{transform:translateY(0)} }
      `}</style>
    </div>
  );
}

export function SpinnerLoader119() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr1" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

    
        .wr1 { width: 84px; height: 84px; position: relative; margin: 0 auto; }
        .wr1 span {
          position: absolute; inset:0; border-radius:50%;
          border: 4px solid rgba(59,130,246,0.16);
          animation: wr1-r 1.6s infinite ease-out;
        }
        .wr1 span:nth-child(2){ border-color: rgba(59,130,246,0.12); animation-delay: 0.15s; }
        .wr1 span:nth-child(3){ border-color: rgba(59,130,246,0.08); animation-delay: 0.3s; }
        @keyframes wr1-r {
          0%{ transform: scale(0.6); opacity: 0.95; }
          70%{ transform: scale(1.15); opacity: 0.22; }
          100%{ transform: scale(1.3); opacity: 0; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Concentric Ripples
      </div>
      <div className="wr1" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr1 { width: 84px; height: 84px; position: relative; margin: 0 auto; }
        .wr1 span {
          position: absolute; inset:0; border-radius:50%;
          border: 4px solid rgba(59,130,246,0.16);
          animation: wr1-r 1.6s infinite ease-out;
        }
        .wr1 span:nth-child(2){ border-color: rgba(59,130,246,0.12); animation-delay: 0.15s; }
        .wr1 span:nth-child(3){ border-color: rgba(59,130,246,0.08); animation-delay: 0.3s; }
        @keyframes wr1-r {
          0%{ transform: scale(0.6); opacity: 0.95; }
          70%{ transform: scale(1.15); opacity: 0.22; }
          100%{ transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader120() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr2">
        <div className="ring"></div>
      </div>
      
        .wr2 { width: 84px; height: 84px; display:grid; place-items:center; margin:0 auto; }
        .wr2 .ring {
          width: 72px; height: 72px; border-radius:50%;
          background: conic-gradient(#06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
          animation: wr2-spin 2.2s linear infinite;
          filter: blur(6px);
        }
        @keyframes wr2-spin { 0% { background-position:0% 50% } 100% { background-position:100% 50% } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Gradient Wave Ring
      </div>
      <div className="wr2">
        <div className="ring"></div>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr2 { width: 84px; height: 84px; display:grid; place-items:center; margin:0 auto; }
        .wr2 .ring {
          width: 72px; height: 72px; border-radius:50%;
          background: conic-gradient(#06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
          animation: wr2-spin 2.2s linear infinite;
          filter: blur(6px);
        }
        @keyframes wr2-spin { 0% { background-position:0% 50% } 100% { background-position:100% 50% } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader121() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr3">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

        .wr3 { width: 92px; height: 92px; position: relative; margin:0 auto; }
        .wr3 i {
          position:absolute; left:50%; top:50%; width:10px; height:10px; background:#f97316; border-radius:50%;
          transform-origin:center; transform:translate(-50%,-50%) scale(0);
          animation: wr3-dot 1.2s cubic-bezier(.2,.9,.2,1) infinite;
        }
        .wr3 i:nth-child(2){ animation-delay:0.12s; background:#fb7185; transform: translate(-50%,-50%) scale(0); }
        .wr3 i:nth-child(3){ animation-delay:0.24s; background:#60a5fa; }
        .wr3 i:nth-child(4){ animation-delay:0.36s; background:#34d399; }
        @keyframes wr3-dot {
          0%{ transform: translate(-50%,-50%) scale(0); opacity:0; }
          40%{ transform: translate(-50%,-120%) scale(1); opacity:1; }
          100%{ transform: translate(-50%,-160%) scale(0.6); opacity:0; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Ripple Dots
      </div>
      <div className="wr3">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr3 { width: 92px; height: 92px; position: relative; margin:0 auto; }
        .wr3 i {
          position:absolute; left:50%; top:50%; width:10px; height:10px; background:#f97316; border-radius:50%;
          transform-origin:center; transform:translate(-50%,-50%) scale(0);
          animation: wr3-dot 1.2s cubic-bezier(.2,.9,.2,1) infinite;
        }
        .wr3 i:nth-child(2){ animation-delay:0.12s; background:#fb7185; transform: translate(-50%,-50%) scale(0); }
        .wr3 i:nth-child(3){ animation-delay:0.24s; background:#60a5fa; }
        .wr3 i:nth-child(4){ animation-delay:0.36s; background:#34d399; }
        @keyframes wr3-dot {
          0%{ transform: translate(-50%,-50%) scale(0); opacity:0; }
          40%{ transform: translate(-50%,-120%) scale(1); opacity:1; }
          100%{ transform: translate(-50%,-160%) scale(0.6); opacity:0; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader110() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="wr4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
        .wr4 { display:flex; gap:6px; justify-content:center; align-items:flex-end; margin:0 auto; width:120px; height:40px; }
        .wr4 span { width:8px; background:linear-gradient(180deg,#34d399,#10b981); border-radius:3px; animation: wr4-b 1.2s ease-in-out infinite; }
        .wr4 span:nth-child(2){ animation-delay:0.12s }
        .wr4 span:nth-child(3){ animation-delay:0.24s }
        .wr4 span:nth-child(4){ animation-delay:0.36s }
        @keyframes wr4-b { 0%,100%{height:8px}50%{height:30px} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 70,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Soft Wave Bars
      </div>
      <div className="wr4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr4 { display:flex; gap:6px; justify-content:center; align-items:flex-end; margin:0 auto; width:120px; height:40px; }
        .wr4 span { width:8px; background:linear-gradient(180deg,#34d399,#10b981); border-radius:3px; animation: wr4-b 1.2s ease-in-out infinite; }
        .wr4 span:nth-child(2){ animation-delay:0.12s }
        .wr4 span:nth-child(3){ animation-delay:0.24s }
        .wr4 span:nth-child(4){ animation-delay:0.36s }
        @keyframes wr4-b { 0%,100%{height:8px}50%{height:30px} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader122() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr5">
        <div className="pulse"></div>
        <div className="center">•</div>
      </div>

      
        .wr5 { width:80px; height:80px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr5 .pulse { position:absolute; width:72px; height:72px; border-radius:50%; background:rgba(139,92,246,0.12); animation:wr5-p 1.6s ease-out infinite; }
        .wr5 .center{ font-size:26px; color:#8b5cf6; position:relative; z-index:2; }
        @keyframes wr5-p { 0%{transform:scale(0.8); opacity:1}70%{transform:scale(1.2); opacity:0.18}100%{transform:scale(1.3); opacity:0} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ fontSize: 13, marginBottom: 8, color: "#999393ff" }}>
        Pulse + Center
      </div>
      <div className="wr5">
        <div className="pulse"></div>
        <div className="center">•</div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr5 { width:80px; height:80px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr5 .pulse { position:absolute; width:72px; height:72px; border-radius:50%; background:rgba(139,92,246,0.12); animation:wr5-p 1.6s ease-out infinite; }
        .wr5 .center{ font-size:26px; color:#8b5cf6; position:relative; z-index:2; }
        @keyframes wr5-p { 0%{transform:scale(0.8); opacity:1}70%{transform:scale(1.2); opacity:0.18}100%{transform:scale(1.3); opacity:0} }
      `}</style>
    </div>
  );
}

/*------- folt 123 -------- */

export function SpinnerLoader123() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Wave Text Flow
      </div>
      <div
        className="wr6"
        aria-hidden="true"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {"Loading".split("").map((c, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            {c}
          </span>
        ))}
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <style>{`
        .wr6 { font-size:20px; letter-spacing:1px; color:#06b6d4; display:inline-block; }
        .wr6 span { display:inline-block; animation: wr6-wave 1.2s ease-in-out infinite; }
        @keyframes wr6-wave { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader124() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr7">
        <div></div>
        <div></div>
        <div></div>
      </div>

        .wr7 { width:96px; height:96px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr7 div { position:absolute; border-radius:50%; border:6px solid transparent; animation:wr7-r 2s infinite; }
        .wr7 div:nth-child(1){ width:88px; height:88px; border-color:rgba(34,211,238,0.12); animation-delay:0s; }
        .wr7 div:nth-child(2){ width:64px; height:64px; border-color:rgba(59,130,246,0.12); animation-delay:0.2s; }
        .wr7 div:nth-child(3){ width:40px; height:40px; border-color:rgba(99,102,241,0.16); animation-delay:0.4s; }
        @keyframes wr7-r { 0%{transform:scale(0.7); opacity:1}70%{transform:scale(1.12); opacity:0.18}100%{opacity:0} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ fontSize: 13, marginBottom: 8, color: "#999393ff" }}>
        Layered Water Ripples
      </div>
      <div className="wr7">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr7 { width:96px; height:96px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr7 div { position:absolute; border-radius:50%; border:6px solid transparent; animation:wr7-r 2s infinite; }
        .wr7 div:nth-child(1){ width:88px; height:88px; border-color:rgba(34,211,238,0.12); animation-delay:0s; }
        .wr7 div:nth-child(2){ width:64px; height:64px; border-color:rgba(59,130,246,0.12); animation-delay:0.2s; }
        .wr7 div:nth-child(3){ width:40px; height:40px; border-color:rgba(99,102,241,0.16); animation-delay:0.4s; }
        @keyframes wr7-r { 0%{transform:scale(0.7); opacity:1}70%{transform:scale(1.12); opacity:0.18}100%{opacity:0} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader125() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr8">
        <span></span>
      </div>

      
        .wr8 { width:80px; height:80px; display:grid; place-items:center; margin:0 auto; }
        .wr8 span { width:68px; height:68px; border-radius:50%; box-shadow:0 0 12px rgba(99,102,241,0.6); background:radial-gradient(circle,#7c3aed, #06b6d4); animation:wr8-n 1.4s ease-in-out infinite; }
        @keyframes wr8-n { 0%{transform:scale(0.95); opacity:0.9}50%{transform:scale(1.06); opacity:0.7}100%{transform:scale(0.95); opacity:0.9} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ fontSize: 13, marginBottom: 8, color: "#999393ff" }}>
        Neon Ripple Ring
      </div>
      <div className="wr8">
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr8 { width:80px; height:80px; display:grid; place-items:center; margin:0 auto; }
        .wr8 span { width:68px; height:68px; border-radius:50%; box-shadow:0 0 12px rgba(99,102,241,0.6); background:radial-gradient(circle,#7c3aed, #06b6d4); animation:wr8-n 1.4s ease-in-out infinite; }
        @keyframes wr8-n { 0%{transform:scale(0.95); opacity:0.9}50%{transform:scale(1.06); opacity:0.7}100%{transform:scale(0.95); opacity:0.9} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader126() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="wr9">
        <div className="c1"></div>
        <div className="c2"></div>
      </div>

      
        .wr9 { width:80px; height:80px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr9 .c1, .wr9 .c2 { position:absolute; border-radius:50%; }
        .wr9 .c1 { width:66px; height:66px; background:rgba(249,115,22,0.08); animation:wr9-a 1.8s infinite; }
        .wr9 .c2 { width:44px; height:44px; background:rgba(236,72,153,0.12); animation:wr9-b 1.2s infinite; }
        @keyframes wr9-a { 0%{transform:scale(0.9);}50%{transform:scale(1.06);}100%{transform:scale(0.9);} }
        @keyframes wr9-b { 0%{transform:translateY(0)}50%{transform:translateY(6px)}100%{transform:translateY(0)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ fontSize: 13, marginBottom: 8, color: "#999393ff" }}>
        Soft Circular Wave
      </div>
      <div className="wr9">
        <div className="c1"></div>
        <div className="c2"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr9 { width:80px; height:80px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr9 .c1, .wr9 .c2 { position:absolute; border-radius:50%; }
        .wr9 .c1 { width:66px; height:66px; background:rgba(249,115,22,0.08); animation:wr9-a 1.8s infinite; }
        .wr9 .c2 { width:44px; height:44px; background:rgba(236,72,153,0.12); animation:wr9-b 1.2s infinite; }
        @keyframes wr9-a { 0%{transform:scale(0.9);}50%{transform:scale(1.06);}100%{transform:scale(0.9);} }
        @keyframes wr9-b { 0%{transform:translateY(0)}50%{transform:translateY(6px)}100%{transform:translateY(0)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader127() {
  const [copied, setCopied] = useState(false);
  const code = ` <div className="wr10">
        <div className="outer"></div>
        <div className="inner"></div>
      </div>

        .wr10 { width:88px; height:88px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr10 .outer { width:76px; height:76px; border-radius:50%; border:6px solid rgba(96,165,250,0.14); animation:wr10-o 1.6s infinite; position:absolute; }
        .wr10 .inner { width:34px; height:34px; border-radius:50%; background:linear-gradient(180deg,#60a5fa,#3b82f6); animation:wr10-i 1.2s infinite; position:relative; box-shadow:0 8px 20px rgba(59,130,246,0.12); }
        @keyframes wr10-o { 0%{transform:scale(0.85); opacity:0.9}70%{transform:scale(1.1); opacity:0.18}100%{opacity:0} }
        @keyframes wr10-i { 0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div style={{ fontSize: 13, marginBottom: 8, color: "#999393ff" }}>
        Water Ripple Pulse
      </div>
      <div className="wr10">
        <div className="outer"></div>
        <div className="inner"></div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wr10 { width:88px; height:88px; position:relative; margin:0 auto; display:grid; place-items:center; }
        .wr10 .outer { width:76px; height:76px; border-radius:50%; border:6px solid rgba(96,165,250,0.14); animation:wr10-o 1.6s infinite; position:absolute; }
        .wr10 .inner { width:34px; height:34px; border-radius:50%; background:linear-gradient(180deg,#60a5fa,#3b82f6); animation:wr10-i 1.2s infinite; position:relative; box-shadow:0 8px 20px rgba(59,130,246,0.12); }
        @keyframes wr10-o { 0%{transform:scale(0.85); opacity:0.9}70%{transform:scale(1.1); opacity:0.18}100%{opacity:0} }
        @keyframes wr10-i { 0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader128() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="rotating-square"></div>

        .rotating-square {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          animation: rotate 1.5s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Rotating Square Loader</p>
      <div className="rotating-square"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rotating-square {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          animation: rotate 1.5s linear infinite;
          margin: 20px auto;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader129() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="bouncing-triangle"></div>

      
        .bouncing-triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #f97316;
          animation: bounce 1s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Bouncing Triangle Loader</p>
      <div className="bouncing-triangle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bouncing-triangle {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid #f97316;
          animation: bounce 1s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader130() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="expanding-diamond"></div>

        .expanding-diamond {
          width: 40px;
          height: 40px;
          background: #10b981;
          transform: rotate(45deg);
          animation: expand 1.2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes expand {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 1; }
          50% { transform: rotate(45deg) scale(1.5); opacity: 0.6; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Expanding Diamond Loader</p>
      <div className="expanding-diamond"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .expanding-diamond {
          width: 40px;
          height: 40px;
          background: #10b981;
          transform: rotate(45deg);
          animation: expand 1.2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes expand {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 1; }
          50% { transform: rotate(45deg) scale(1.5); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader131() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="hexagon"></div>

      
        .hexagon {
          width: 60px;
          aspect-ratio: 1.155;
          background: conic-gradient(from 180deg, #a855f7, #6366f1, #a855f7);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%);
          animation: morph 2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes morph {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(60deg) scale(1.2); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Morphing Hexagon Loader</p>
      <div className="hexagon"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .hexagon {
          width: 60px;
          aspect-ratio: 1.155;
          background: conic-gradient(from 180deg, #a855f7, #6366f1, #a855f7);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%);
          animation: morph 2s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes morph {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(60deg) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader132() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="spiral-circle"></div>

        .spiral-circle {
          width: 40px;
          height: 40px;
          border: 5px solid #3b82f6;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
    
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Spiral Circle Loader</p>
      <div className="spiral-circle"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .spiral-circle {
          width: 40px;
          height: 40px;
          border: 5px solid #3b82f6;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader133() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pulsing-pentagon"></div>

      
        .pulsing-pentagon {
          width: 60px;
          aspect-ratio: 1;
          background: linear-gradient(135deg, #f43f5e, #ec4899);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          animation: pulse 1.3s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Pulsing Pentagon Loader</p>
      <div className="pulsing-pentagon"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pulsing-pentagon {
          width: 60px;
          aspect-ratio: 1;
          background: linear-gradient(135deg, #f43f5e, #ec4899);
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          animation: pulse 1.3s ease-in-out infinite;
          margin: 20px auto;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader134() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="zigzag-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

     
        .zigzag-loader {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin: 20px auto;
        }
        .zigzag-loader span {
          width: 6px;
          height: 30px;
          background: #8b5cf6;
          animation: zigzag 1.2s infinite ease-in-out;
        }
        .zigzag-loader span:nth-child(2) { animation-delay: 0.1s; }
        .zigzag-loader span:nth-child(3) { animation-delay: 0.2s; }
        .zigzag-loader span:nth-child(4) { animation-delay: 0.3s; }
        @keyframes zigzag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Zigzag Bars Loader</p>
      <div className="zigzag-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .zigzag-loader {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin: 20px auto;
        }
        .zigzag-loader span {
          width: 6px;
          height: 30px;
          background: #8b5cf6;
          animation: zigzag 1.2s infinite ease-in-out;
        }
        .zigzag-loader span:nth-child(2) { animation-delay: 0.1s; }
        .zigzag-loader span:nth-child(3) { animation-delay: 0.2s; }
        .zigzag-loader span:nth-child(4) { animation-delay: 0.3s; }
        @keyframes zigzag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader135() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="floating-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

     
        .floating-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 20px auto;
        }
        .floating-dots span {
          width: 12px;
          height: 12px;
          background: #22d3ee;
          border-radius: 50%;
          animation: float 1s ease-in-out infinite;
        }
        .floating-dots span:nth-child(2) { animation-delay: 0.2s; }
        .floating-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-12px); opacity: 0.6; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Floating Dots Loader</p>
      <div className="floating-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .floating-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 20px auto;
        }
        .floating-dots span {
          width: 12px;
          height: 12px;
          background: #22d3ee;
          border-radius: 50%;
          animation: float 1s ease-in-out infinite;
        }
        .floating-dots span:nth-child(2) { animation-delay: 0.2s; }
        .floating-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-12px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader136() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="starburst"></div>
        .starburst {
          width: 50px;
          height: 50px;
          background: conic-gradient(from 0deg, #f59e0b, #f43f5e, #3b82f6, #10b981, #f59e0b);
          mask: radial-gradient(transparent 45%, black 46%);
          border-radius: 50%;
          animation: spin 1.4s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Starburst Loader</p>
      <div className="starburst"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .starburst {
          width: 50px;
          height: 50px;
          background: conic-gradient(from 0deg, #f59e0b, #f43f5e, #3b82f6, #10b981, #f59e0b);
          mask: radial-gradient(transparent 45%, black 46%);
          border-radius: 50%;
          animation: spin 1.4s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader137() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="infinity-loader">
        <span></span>
        <span></span>
      </div>
      
        .infinity-loader {
          position: relative;
          width: 60px;
          height: 30px;
          margin: 20px auto;
        }
        .infinity-loader span {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid #6366f1;
          border-radius: 50%;
          animation: move 1.5s linear infinite;
        }
        .infinity-loader span:nth-child(2) {
          left: 30px;
          animation-delay: 0.75s;
        }
        @keyframes move {
          0% { transform: translateX(0) scale(1); }
          25% { transform: translateX(15px) scale(0.9); }
          50% { transform: translateX(30px) scale(1); }
          75% { transform: translateX(15px) scale(0.9); }
          100% { transform: translateX(0) scale(1); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Infinity Spin Loader</p>
      <div className="infinity-loader">
        <span></span>
        <span></span>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .infinity-loader {
          position: relative;
          width: 60px;
          height: 30px;
          margin: 20px auto;
        }
        .infinity-loader span {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid #6366f1;
          border-radius: 50%;
          animation: move 1.5s linear infinite;
        }
        .infinity-loader span:nth-child(2) {
          left: 30px;
          animation-delay: 0.75s;
        }
        @keyframes move {
          0% { transform: translateX(0) scale(1); }
          25% { transform: translateX(15px) scale(0.9); }
          50% { transform: translateX(30px) scale(1); }
          75% { transform: translateX(15px) scale(0.9); }
          100% { transform: translateX(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader138() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="gradient-3d"></div>
      
        .gradient-3d {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff7eb3, #6c63ff);
          animation: rotate3d 1.2s linear infinite;
        }
        @keyframes rotate3d {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>3D Gradient Loader</p>
      <div className="gradient-3d"></div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-3d {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff7eb3, #6c63ff);
          animation: rotate3d 1.2s linear infinite;
        }
        @keyframes rotate3d {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader139() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="neural-glow"></div>

        .neural-glow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, #00ffe0, #0070f3, #000);
          box-shadow: 0 0 20px #00ffe0, 0 0 40px #0070f3;
          animation: neural-pulse 1.5s ease-in-out infinite;
        }
        @keyframes neural-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
  `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>AI Neural Glow Loader</p>
      <div className="neural-glow"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neural-glow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, #00ffe0, #0070f3, #000);
          box-shadow: 0 0 20px #00ffe0, 0 0 40px #0070f3;
          animation: neural-pulse 1.5s ease-in-out infinite;
        }
        @keyframes neural-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader140() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="glass-spinner"></div>

     
        .glass-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255,255,255,0.2);
          border-top-color: #ffffff80;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Glassmorphism Spinner</p>
      <div className="glass-spinner"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .glass-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255,255,255,0.2);
          border-top-color: #ffffff80;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader141() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="liquid-drop"></div>

      
        .liquid-drop {
          width: 20px;
          height: 20px;
          background: #00bfff;
          border-radius: 50%;
          animation: drip 1s ease-in-out infinite;
        }
        @keyframes drip {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.2); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Liquid Drop Loader</p>
      <div className="liquid-drop"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .liquid-drop {
          width: 20px;
          height: 20px;
          background: #00bfff;
          border-radius: 50%;
          animation: drip 1s ease-in-out infinite;
        }
        @keyframes drip {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader142() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="neon-ring"></div>

        .neon-ring {
          width: 64px;
          height: 64px;
          border: 3px solid #0ff;
          border-radius: 50%;
          box-shadow: 0 0 20px #0ff, inset 0 0 10px #0ff;
          animation: pulse-ring 1.5s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <p>Neon Pulse Rings</p>
      <div className="neon-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-ring {
          width: 64px;
          height: 64px;
          border: 3px solid #0ff;
          border-radius: 50%;
          box-shadow: 0 0 20px #0ff, inset 0 0 10px #0ff;
          animation: pulse-ring 1.5s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader143() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="bhm">Hover me</button>

        .bhm{
          position:relative;
          padding:10px 18px;
          background:#0ea5e9;
          color:#fff;
          border-radius:12px;
          border:none;
          font-weight:600;
          cursor:pointer;
          transition:transform .18s ease;
          box-shadow: 0 6px 18px rgba(14,165,233,0.14);
          overflow:hidden;
          margin: 0px 20px;
        }
        .bhm::before{
          content:"";
          position:absolute; inset:0; border-radius:12px;
          background: linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0));
          transform: translateX(-110%);
          transition:transform .45s cubic-bezier(.2,.9,.2,1);
        }
        .bhm:hover{ transform: translateY(-4px); }
        .bhm:hover::before{ transform: translateX(0%); }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Button Hover Magic
      </div>
      <button className="bhm">Hover me</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bhm{
          position:relative;
          padding:10px 18px;
          background:#0ea5e9;
          color:#fff;
          border-radius:12px;
          border:none;
          font-weight:600;
          cursor:pointer;
          transition:transform .18s ease;
          box-shadow: 0 6px 18px rgba(14,165,233,0.14);
          overflow:hidden;
          margin: 0px 20px;
        }
        .bhm::before{
          content:"";
          position:absolute; inset:0; border-radius:12px;
          background: linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0));
          transform: translateX(-110%);
          transition:transform .45s cubic-bezier(.2,.9,.2,1);
        }
        .bhm:hover{ transform: translateY(-4px); }
        .bhm:hover::before{ transform: translateX(0%); }
      `}</style>
    </div>
  );
}
export function SpinnerLoader144() {
  const [copied, setCopied] = useState(false);
  const code = `<div
        className="flip-card"
        role="button"
        tabIndex="0"
        style={{ height: 50 }}
      >
        <div className="face front">Front</div>
        <div className="face back">Back</div>
      </div>

        .flip-card { width:160px; height:100px; perspective:1000px; margin:0 auto; cursor:pointer; }
        .flip-card .face {
          width:100%; height:100%; position:absolute; left:0; top:0; border-radius:10px;
          display:flex; align-items:center; justify-content:center; font-weight:600;
          backface-visibility:hidden; transition: transform .8s cubic-bezier(.2,.9,.2,1);
        }
        .flip-card .front { background: linear-gradient(135deg,#f97316,#fb7185); color:white; transform: rotateY(0deg); }
        .flip-card .back { background: linear-gradient(135deg,#60a5fa,#3b82f6); color:white; transform: rotateY(180deg); }
        .flip-card:hover .front{ transform: rotateY(-180deg); }
        .flip-card:hover .back{ transform: rotateY(0deg); }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Card Flip Effect
      </div>
      <div
        className="flip-card"
        role="button"
        tabIndex="0"
        style={{ height: 50 }}
      >
        <div className="face front">Front</div>
        <div className="face back">Back</div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .flip-card { width:160px; height:100px; perspective:1000px; margin:0 auto; cursor:pointer; }
        .flip-card .face {
          width:100%; height:100%; position:absolute; left:0; top:0; border-radius:10px;
          display:flex; align-items:center; justify-content:center; font-weight:600;
          backface-visibility:hidden; transition: transform .8s cubic-bezier(.2,.9,.2,1);
        }
        .flip-card .front { background: linear-gradient(135deg,#f97316,#fb7185); color:white; transform: rotateY(0deg); }
        .flip-card .back { background: linear-gradient(135deg,#60a5fa,#3b82f6); color:white; transform: rotateY(180deg); }
        .flip-card:hover .front{ transform: rotateY(-180deg); }
        .flip-card:hover .back{ transform: rotateY(0deg); }
      `}</style>
    </div>
  );
}
export function SpinnerLoader145() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="glass">Modal content</div>

      
        .glass{
          width:220px; padding:14px; border-radius:12px; color:#0f172a;
          background: rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px) saturate(1.1);
          box-shadow: 0 8px 30px rgba(2,6,23,0.18);
          transform: translateY(10px); opacity:0; animation: glass-in .6s forwards;
          margin: 0px 15px;
          color: #fff;
        }
        @keyframes glass-in { to{ transform: translateY(0); opacity:1; } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Glassmorphism Modal
      </div>
      <div className="glass">Modal content</div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .glass{
          width:220px; padding:14px; border-radius:12px; color:#0f172a;
          background: rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px) saturate(1.1);
          box-shadow: 0 8px 30px rgba(2,6,23,0.18);
          transform: translateY(10px); opacity:0; animation: glass-in .6s forwards;
          margin: 0px 15px;
          color: #fff;
        }
        @keyframes glass-in { to{ transform: translateY(0); opacity:1; } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader146() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="pw">
        <div className="fill" />
      </div>

        .pw { width:200px; height:14px; background:#e6eef6; border-radius:999px; overflow:hidden; margin:0 auto; }
        .pw .fill { width:40%; height:100%; background: linear-gradient(90deg,#06b6d4,#3b82f6); border-radius:999px;
          animation: wave-fill 2s infinite linear;
          background-size:200% 100%;
        }
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Progress Wave
      </div>
      <div className="pw">
        <div className="fill" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pw { width:200px; height:14px; background:#e6eef6; border-radius:999px; overflow:hidden; margin:0 auto; }
        .pw .fill { width:40%; height:100%; background: linear-gradient(90deg,#06b6d4,#3b82f6); border-radius:999px;
          animation: wave-fill 2s infinite linear;
          background-size:200% 100%;
        }
        @keyframes wave-fill { 0%{ transform: translateX(-30%);}50%{ transform: translateX(10%);}100%{transform:translateX(-30%);} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader147() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="type">
        <span className="txt">Hello, world</span>
        <span className="cursor">!</span>
      </div>

    
        .type { font-size:18px; color:tomato; display:inline-flex; gap:6px; align-items:center; margin-left: 60px }
        .type .txt { display:inline-block; white-space:nowrap; overflow:hidden; max-width:0; animation: typing 3s steps(18) infinite; }
        .type .cursor { color:#green; opacity:1; animation: blink .8s steps(1) infinite; }
        @keyframes typing { 0%{ max-width:0 } 50%{ max-width:120px } 100%{ max-width:0 } }
        @keyframes blink { 0%, 50% { opacity:1 } 51%, 100% { opacity:0 } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Text Typing
      </div>
      <div className="type">
        <span className="txt">Hello, world</span>
        <span className="cursor">!</span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .type { font-size:18px; color:tomato; display:inline-flex; gap:6px; align-items:center; margin-left: 60px }
        .type .txt { display:inline-block; white-space:nowrap; overflow:hidden; max-width:0; animation: typing 3s steps(18) infinite; }
        .type .cursor { color:#green; opacity:1; animation: blink .8s steps(1) infinite; }
        @keyframes typing { 0%{ max-width:0 } 50%{ max-width:120px } 100%{ max-width:0 } }
        @keyframes blink { 0%, 50% { opacity:1 } 51%, 100% { opacity:0 } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader148() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="gs">Content</div>
        .gs { width:220px; padding:14px; border-radius:10px; color:#fff; font-weight:600;
          background: linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6);
          background-size: 300% 100%;
          animation: gs-shift 6s linear infinite;
          margin: 15px;
        }
        @keyframes gs-shift { 0%{ background-position:0% 50% } 100%{ background-position:100% 50% } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 60,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Gradient Background Shift
      </div>
      <div className="gs">Content</div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gs { width:220px; padding:14px; border-radius:10px; color:#fff; font-weight:600;
          background: linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6);
          background-size: 300% 100%;
          animation: gs-shift 6s linear infinite;
          margin: 15px;
        }
        @keyframes gs-shift { 0%{ background-position:0% 50% } 100%{ background-position:100% 50% } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader149() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="btn17">Rainbow</button>

   
        .btn17 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          background: linear-gradient(270deg, #ff0066, #ffcc00, #33ccff, #ff00ff);
          background-size: 600% 600%;
          animation: rainbow 6s infinite alternate;
          margin: 20px;
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn17">Rainbow</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn17 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          background: linear-gradient(270deg, #ff0066, #ffcc00, #33ccff, #ff00ff);
          background-size: 600% 600%;
          animation: rainbow 6s infinite alternate;
          margin: 20px;
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader150() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="btn16">Bubble Pop</button>

      
        .btn16 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #ff3399;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: 0.2s;
          margin: 20px;
        }
        .btn16:active {
          transform: scale(0.9);
          background: #ff66b2;
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn16">Bubble Pop</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn16 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #ff3399;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: 0.2s;
          margin: 20px;
        }
        .btn16:active {
          transform: scale(0.9);
          background: #ff66b2;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader151() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn15">Metallic</button>

        .btn15 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: linear-gradient(145deg, #aaa, #333);
          border: 1px solid #888;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: inset 2px 2px 6px #111, inset -2px -2px 6px #666;
          transition: 0.3s;
          margin: 20px;
        }
        .btn15:hover {
          background: linear-gradient(145deg, #fff, #666);
          color: black;
        }
      `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn15">Metallic</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn15 {
          padding: 14px 34px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: linear-gradient(145deg, #aaa, #333);
          border: 1px solid #888;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: inset 2px 2px 6px #111, inset -2px -2px 6px #666;
          transition: 0.3s;
          margin: 20px;
        }
        .btn15:hover {
          background: linear-gradient(145deg, #fff, #666);
          color: black;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader152() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="orbit">
        <div className="dot d1" />
        <div className="dot d2" />
        <div className="dot d3" />
      </div>

      
        .orbit { width:140px; height:140px; position:relative; margin:0 auto; }
        .orbit .dot{ width:14px; height:14px; background:#3b82f6; border-radius:50%; position:absolute; left:50%; top:50%; transform-origin:-42px 0; }
        .orbit .d1{ animation: o1 2.4s linear infinite; }
        .orbit .d2{ animation: o2 2.4s linear infinite; animation-delay:.4s; background:#f97316 }
        .orbit .d3{ animation: o3 2.4s linear infinite; animation-delay:.8s; background:#10b981 }
        @keyframes o1 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
        @keyframes o2 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
        @keyframes o3 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 0,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Orbiting Elements
      </div>
      <div className="orbit">
        <div className="dot d1" />
        <div className="dot d2" />
        <div className="dot d3" />
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .orbit { width:140px; height:140px; position:relative; margin:0 auto; }
        .orbit .dot{ width:14px; height:14px; background:#3b82f6; border-radius:50%; position:absolute; left:50%; top:50%; transform-origin:-42px 0; }
        .orbit .d1{ animation: o1 2.4s linear infinite; }
        .orbit .d2{ animation: o2 2.4s linear infinite; animation-delay:.4s; background:#f97316 }
        .orbit .d3{ animation: o3 2.4s linear infinite; animation-delay:.8s; background:#10b981 }
        @keyframes o1 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
        @keyframes o2 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
        @keyframes o3 { 0%{ transform: rotate(0) translateX(-42px)} 100%{ transform: rotate(360deg) translateX(-42px)} }
      `}</style>
    </div>
  );
}
export function SpinnerLoader153() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="btn13">Cyberpunk</button>
      
        .btn13 {
          padding: 14px 32px;
          font-size: 16px;
          font-weight: bold;
          color: #0ff;
          border: 2px solid #0ff;
          border-radius: 8px;
          background: black;
          text-shadow: 0 0 10px #0ff, 0 0 20px #f0f;
          cursor: pointer;
          transition: 0.4s;
          margin: 50px 20px;
        }
        .btn13:hover {
          background: #0ff;
          color: black;
          box-shadow: 0 0 20px #0ff, 0 0 40px #f0f;
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn13">Cyberpunk</button>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn13 {
          padding: 14px 32px;
          font-size: 16px;
          font-weight: bold;
          color: #0ff;
          border: 2px solid #0ff;
          border-radius: 8px;
          background: black;
          text-shadow: 0 0 10px #0ff, 0 0 20px #f0f;
          cursor: pointer;
          transition: 0.4s;
          margin: 50px 20px;
        }
        .btn13:hover {
          background: #0ff;
          color: black;
          box-shadow: 0 0 20px #0ff, 0 0 40px #f0f;
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader154() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn11">Shiny Sweep</button>
      
        .btn11 {
          position: relative;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: #ff3c3c;
          border: none;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          margin: 50px 20px;
        }
        .btn11::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75px;
          width: 50px;
          height: 100%;
          background: rgba(255,255,255,0.4);
          transform: skewX(-25deg);
        }
        .btn11:hover::after {
          animation: shine 1s forwards;
        }
        @keyframes shine {
          from { left: -75px; }
          to { left: 120%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn11">Shiny Sweep</button>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn11 {
          position: relative;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: #ff3c3c;
          border: none;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          margin: 50px 20px;
        }
        .btn11::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75px;
          width: 50px;
          height: 100%;
          background: rgba(255,255,255,0.4);
          transform: skewX(-25deg);
        }
        .btn11:hover::after {
          animation: shine 1s forwards;
        }
        @keyframes shine {
          from { left: -75px; }
          to { left: 120%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader155() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn5">Outline Fill</button>

        .btn5 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: #ff0066;
          background: transparent;
          border: 2px solid #ff0066;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.4s;
          margin: 50px 20px;
        }
        .btn5:hover {
          background: #ff0066;
          color: white;
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn5">Outline Fill</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn5 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: #ff0066;
          background: transparent;
          border: 2px solid #ff0066;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.4s;
          margin: 50px 20px;
        }
        .btn5:hover {
          background: #ff0066;
          color: white;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader156() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn6">Ripple</button>

     
        .btn6 {
          position: relative;
          padding: 12px 28px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: #6c63ff;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          margin: 20px; 
        }
        .btn6::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
        }
        .btn6:active::after {
          width: 200px;
          height: 200px;
       }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn6">Ripple</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn6 {
          position: relative;
          padding: 12px 28px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: #6c63ff;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          margin: 20px; 
        }
        .btn6::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
        }
        .btn6:active::after {
          width: 200px;
          height: 200px;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader157() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn8">Gradient Border</button>
        .btn8 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 25px;
          background-image: linear-gradient(#000, #000),
            linear-gradient(90deg, #ff00cc, #3333ff);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: 0.3s;
          margin: 20px;
        }
        .btn8:hover {
          background-image: linear-gradient(90deg, #ff00cc, #3333ff),
            linear-gradient(90deg, #ff00cc, #3333ff);
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn8">Gradient Border</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn8 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 25px;
          background-image: linear-gradient(#000, #000),
            linear-gradient(90deg, #ff00cc, #3333ff);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: 0.3s;
          margin: 20px;
        }
        .btn8:hover {
          background-image: linear-gradient(90deg, #ff00cc, #3333ff),
            linear-gradient(90deg, #ff00cc, #3333ff);
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader158() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="btn4">Glass Button</button>

     
        .btn4 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: 0.3s;
          margin: 20px;
        }
        .btn4:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.05);
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn4">Glass Button</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn4 {
          padding: 12px 26px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: 0.3s;
          margin: 20px;
        }
        .btn4:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader159() {
  const [copied, setCopied] = useState(false);
  const code = `<div className="network">
        <span></span>
        <span></span>
        <span></span>
      </div>
        .network{ width:160px; height:100px; position:relative; margin:0 auto; }
        .network span{ position:absolute; width:10px; height:10px; background:#60a5fa; border-radius:50%; box-shadow:0 0 12px #60a5fa; }
        .network span:nth-child(1){ left:20%; top:40%; animation: pulseN 1.8s infinite }
        .network span:nth-child(2){ left:50%; top:20%; background:#8b5cf6; animation: pulseN 1.9s infinite .2s }
        .network span:nth-child(3){ left:80%; top:55%; background:#34d399; animation: pulseN 1.6s infinite .4s }
        .network::before{ content:''; position:absolute; left:24%; top:44%; width:52%; height:1px; background:linear-gradient(90deg,#60a5fa,#34d399); transform-origin:left; opacity:0.7; animation: lineFlow 2s linear infinite; }
        @keyframes pulseN { 0%{ transform:scale(1)}50%{ transform:scale(1.4)}100%{ transform:scale(1)} }
        @keyframes lineFlow { 0%{ filter:blur(0); } 50%{ filter:blur(3px); } 100%{ filter:blur(0); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 0,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        AI Brain Network
      </div>
      <div className="network">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .network{ width:160px; height:100px; position:relative; margin:0 auto; }
        .network span{ position:absolute; width:10px; height:10px; background:#60a5fa; border-radius:50%; box-shadow:0 0 12px #60a5fa; }
        .network span:nth-child(1){ left:20%; top:40%; animation: pulseN 1.8s infinite }
        .network span:nth-child(2){ left:50%; top:20%; background:#8b5cf6; animation: pulseN 1.9s infinite .2s }
        .network span:nth-child(3){ left:80%; top:55%; background:#34d399; animation: pulseN 1.6s infinite .4s }
        .network::before{ content:''; position:absolute; left:24%; top:44%; width:52%; height:1px; background:linear-gradient(90deg,#60a5fa,#34d399); transform-origin:left; opacity:0.7; animation: lineFlow 2s linear infinite; }
        @keyframes pulseN { 0%{ transform:scale(1)}50%{ transform:scale(1.4)}100%{ transform:scale(1)} }
        @keyframes lineFlow { 0%{ filter:blur(0); } 50%{ filter:blur(3px); } 100%{ filter:blur(0); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader160() {
  const [copied, setCopied] = useState(false);
  const code = `  <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
        .city{ width:220px; height:88px; position:relative; margin:0 auto; display:flex; align-items:end; gap:12px; padding:12px; }
        .city span{ width:28px; background:linear-gradient(180deg,#0ea5e9,#3b82f6); height:40px; border-radius:4px; opacity:.9; transform-origin:bottom center; animation: blink 2s infinite; box-shadow:0 6px 16px rgba(14,165,233,0.12); }
        .city span:nth-child(1){ height:28px; animation-delay:0s }
        .city span:nth-child(2){ height:58px; animation-delay:.2s; background:linear-gradient(180deg,#f472b6,#fb7185) }
        .city span:nth-child(3){ height:44px; animation-delay:.4s; background:linear-gradient(180deg,#34d399,#10b981) }
        .city span:nth-child(4){ height:72px; animation-delay:.6s; background:linear-gradient(180deg,#f59e0b,#f97316) }
        @keyframes blink`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        sstyle={{
          fontSize: 13,
          marginBottom: 50,
          marginLeft: 20,
          color: "#999393bb",
        }}
      ></div>
      <div className="city">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .city{ width:220px; height:88px; position:relative; margin:0 auto; display:flex; align-items:end; gap:12px; padding:12px; }
        .city span{ width:28px; background:linear-gradient(180deg,#0ea5e9,#3b82f6); height:40px; border-radius:4px; opacity:.9; transform-origin:bottom center; animation: blink 2s infinite; box-shadow:0 6px 16px rgba(14,165,233,0.12); }
        .city span:nth-child(1){ height:28px; animation-delay:0s }
        .city span:nth-child(2){ height:58px; animation-delay:.2s; background:linear-gradient(180deg,#f472b6,#fb7185) }
        .city span:nth-child(3){ height:44px; animation-delay:.4s; background:linear-gradient(180deg,#34d399,#10b981) }
        .city span:nth-child(4){ height:72px; animation-delay:.6s; background:linear-gradient(180deg,#f59e0b,#f97316) }
        @keyframes blink { 0%{ opacity:.6 } 50%{ opacity:1; transform: translateY(-6px) } 100%{ opacity:.6 } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader161() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="neon-btn">Try me</button>

      
        .neon-btn{
          position:relative; padding:12px 22px; border-radius:12px; border:none; color:#0b1020;
          font-weight:700; background:linear-gradient(90deg,#a78bfa,#60a5fa);
          box-shadow: 0 12px 30px rgba(96,165,250,0.12), 0 0 30px rgba(167,139,250,0.06);
          overflow:hidden; cursor:pointer;
          margin: 20px ;
        }
        .neon-btn::before{
          content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0)); transform:translateX(-110%); transition:transform .55s cubic-bezier(.2,.9,.2,1);
        }
        .neon-btn:hover{ transform: translateY(-4px); }
        .neon-btn:hover::before{ transform:translateX(0%); }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div
        style={{
          fontSize: 13,
          marginBottom: 50,
          marginLeft: 20,
          color: "#999393ff",
        }}
      >
        Neon Button Hover
      </div>
      <button className="neon-btn">Try me</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-btn{
          position:relative; padding:12px 22px; border-radius:12px; border:none; color:#0b1020;
          font-weight:700; background:linear-gradient(90deg,#a78bfa,#60a5fa);
          box-shadow: 0 12px 30px rgba(96,165,250,0.12), 0 0 30px rgba(167,139,250,0.06);
          overflow:hidden; cursor:pointer;
          margin: 20px ;
        }
        .neon-btn::before{
          content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0)); transform:translateX(-110%); transition:transform .55s cubic-bezier(.2,.9,.2,1);
        }
        .neon-btn:hover{ transform: translateY(-4px); }
        .neon-btn:hover::before{ transform:translateX(0%); }
      `}</style>
    </div>
  );
}
export function SpinnerLoader162() {
  const [copied, setCopied] = useState(false);
  const code = ` <button className="btn3">3D Press</button>

      
        .btn3 {
          padding: 14px 30px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px #0056b3;
          cursor: pointer;
          transition: 0.2s;
          margin: 20px ;
        }
        .btn3:active {
          transform: translateY(4px);
          box-shadow: 0 2px #004080;
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn3">3D Press</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn3 {
          padding: 14px 30px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px #0056b3;
          cursor: pointer;
          transition: 0.2s;
          margin: 20px ;
        }
        .btn3:active {
          transform: translateY(4px);
          box-shadow: 0 2px #004080;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader163() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn2">Neon Glow</button>

      
        .btn2 {
          padding: 12px 28px;
          font-size: 16px;
          font-weight: bold;
          color: #0ff;
          background: transparent;
          border: 2px solid #0ff;
          border-radius: 10px;
          cursor: pointer;
          text-shadow: 0 0 5px #0ff;
          transition: 0.3s;
          margin: 20px ;
        }
        .btn2:hover {
          box-shadow: 0 0 20px #0ff, 0 0 40px #0ff;
          background: rgba(0,255,255,0.1);
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn2">Neon Glow</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn2 {
          padding: 12px 28px;
          font-size: 16px;
          font-weight: bold;
          color: #0ff;
          background: transparent;
          border: 2px solid #0ff;
          border-radius: 10px;
          cursor: pointer;
          text-shadow: 0 0 5px #0ff;
          transition: 0.3s;
          margin: 20px ;
        }
        .btn2:hover {
          box-shadow: 0 0 20px #0ff, 0 0 40px #0ff;
          background: rgba(0,255,255,0.1);
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader164() {
  const [copied, setCopied] = useState(false);
  const code = `<button className="btn1">Gradient Hover</button>

     
        .btn1 {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: linear-gradient(90deg, #ff0066, #ffcc00);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          margin: 20px ;
        }
        .btn1:hover {
          background: linear-gradient(90deg, #00ccff, #00ff99);
          transform: scale(1.05);
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <button className="btn1">Gradient Hover</button>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .btn1 {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background: linear-gradient(90deg, #ff0066, #ffcc00);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          margin: 20px ;
        }
        .btn1:hover {
          background: linear-gradient(90deg, #00ccff, #00ff99);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader165() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="neon-text" style={{ fontSize: 40 }}>
        Neon Glow
      </h2>

      
        .neon-text {
          color: #fff;
          font-size: 10px;
          padding: 20px 10px ;
          text-align: center;
          text-shadow: 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #0ff;
          animation: glowPulse 2s infinite;
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px #0ff; }
          50% { text-shadow: 0 0 20px #0ff, 0 0 40px #0ff; }
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="neon-text" style={{ fontSize: 40 }}>
        Neon Glow
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-text {
          color: #fff;
          font-size: 10px;
          padding: 20px 10px ;
          text-align: center;
          text-shadow: 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #0ff;
          animation: glowPulse 2s infinite;
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px #0ff; }
          50% { text-shadow: 0 0 20px #0ff, 0 0 40px #0ff; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader166() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="glitch" data-text="GLITCH" style={{ fontSize: 40 }}>
        GLITCH
      </h2>

        .glitch {
          color: white;
          position: relative;
          font-size: 40px;
          text-transform: uppercase;
          text-align: center;
          margin-left: 20px ;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
        }
        .glitch::before {
          color: #f00;
          animation: glitch-anim 0.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 80% );
        }
        .glitch::after {
          color: #0ff;
          animation: glitch-anim2 0.5s infinite;
          clip-path: polygon(0 60%, 100% 66%, 100% 100%, 0 100%);
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-anim2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
     `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="glitch" data-text="GLITCH" style={{ fontSize: 40 }}>
        GLITCH
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .glitch {
          color: white;
          position: relative;
          font-size: 40px;
          text-transform: uppercase;
          text-align: center;
          margin-left: 20px ;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
        }
        .glitch::before {
          color: #f00;
          animation: glitch-anim 0.5s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 80% );
        }
        .glitch::after {
          color: #0ff;
          animation: glitch-anim2 0.5s infinite;
          clip-path: polygon(0 60%, 100% 66%, 100% 100%, 0 100%);
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-anim2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader167() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="gradient-text" style={{ fontSize: 30 }}>
        Gradient Flow
      </h2>

     
        .gradient-text {
          font-size: 48px;
          text-align: center;
          background: linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s infinite linear;
          background-size: 200%;
          margin: 50px 0px ;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="gradient-text" style={{ fontSize: 30 }}>
        Gradient Flow
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gradient-text {
          font-size: 48px;
          text-align: center;
          background: linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s infinite linear;
          background-size: 200%;
          margin: 50px 0px ;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader168() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="scan-text" style={{ fontSize: 30 }}>
        SCANNING...
      </h2>

      
        .scan-text {
          font-size: 30px;
          font-weight: 700;
          color: transparent;
          background: linear-gradient(90deg, #00f0ff, #0077ff);
          background-size: 200%;
          -webkit-background-clip: text;
          animation: scan 2s infinite linear;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 2px;
          margin: 50px 0px ;
        }
        @keyframes scan {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="scan-text" style={{ fontSize: 30 }}>
        SCANNING...
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .scan-text {
          font-size: 30px;
          font-weight: 700;
          color: transparent;
          background: linear-gradient(90deg, #00f0ff, #0077ff);
          background-size: 200%;
          -webkit-background-clip: text;
          animation: scan 2s infinite linear;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 2px;
          margin: 50px 0px ;
        }
        @keyframes scan {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader169() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="holo-text" style={{ fontSize: 25 }}>
        HOLOGRAPHIC
      </h2>

      
        .holo-text {
          font-size: 20px;
          text-align: center;
          background: linear-gradient(45deg, #00f, #0ff, #f0f, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: holo 4s ease-in-out infinite;
          background-size: 400%;
        }
        @keyframes holo {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="holo-text" style={{ fontSize: 25 }}>
        HOLOGRAPHIC
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .holo-text {
          font-size: 20px;
          text-align: center;
          background: linear-gradient(45deg, #00f, #0ff, #f0f, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: holo 4s ease-in-out infinite;
          background-size: 400%;
        }
        @keyframes holo {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader170() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="fly-text">
        {"FLY-IN".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fly-text {
          text-align: center;
          font-size: 48px;
          display: inline-block;
        }
        .fly-text span {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px);
          animation: flyUp 0.5s ease forwards;
        }
        @keyframes flyUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader171() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="slide-text">REVEAL</h2>

     
        .slide-text {
          font-size: 30px;
          color: #fff;
          position: relative;
          text-align: center;
          overflow: hidden;
        }
        .slide-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, #cc1470ff, #00f0ff);
          animation: slideReveal 3s infinite;
          border-radius:10px;
        }
        @keyframes slideReveal {
          0% { left: -100%; }
          50% { left: 0; }
          100% { left: 100%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="slide-text">REVEAL</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .slide-text {
          font-size: 30px;
          color: #fff;
          position: relative;
          text-align: center;
          overflow: hidden;
        }
        .slide-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, #cc1470ff, #00f0ff);
          animation: slideReveal 3s infinite;
          border-radius:10px;
        }
        @keyframes slideReveal {
          0% { left: -100%; }
          50% { left: 0; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader172() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="ai-text">AI PULSE</h2>

      
        .ai-text {
          font-size: 30px;
          font-weight: 700;
          text-align: center;
          color: #0ff;
          text-shadow: 0 0 10px #00ffff, 0 0 30px #0088ff;
          animation: aiPulse 2s infinite ease-in-out;
        }
        @keyframes aiPulse {
          0%, 100% { text-shadow: 0 0 10px #00ffff; transform: scale(1); }
          50% { text-shadow: 0 0 40px #00ffff, 0 0 80px #0088ff; transform: scale(1.1); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="ai-text">AI PULSE</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ai-text {
          font-size: 30px;
          font-weight: 700;
          text-align: center;
          color: #0ff;
          text-shadow: 0 0 10px #00ffff, 0 0 30px #0088ff;
          animation: aiPulse 2s infinite ease-in-out;
        }
        @keyframes aiPulse {
          0%, 100% { text-shadow: 0 0 10px #00ffff; transform: scale(1); }
          50% { text-shadow: 0 0 40px #00ffff, 0 0 80px #0088ff; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader173() {
  const [copied, setCopied] = useState(false);
  const code = `
      
        .tilt-text {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          color: #fff;
          text-shadow: 2px 2px 8px rgba(0,255,255,0.8);
          transform-style: preserve-3d;
          animation: tilt 4s infinite linear;
          margin: 50px 0px ;
        }
        @keyframes tilt {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="tilt-text">3D GLOW</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .tilt-text {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          color: #fff;
          text-shadow: 2px 2px 8px rgba(0,255,255,0.8);
          transform-style: preserve-3d;
          animation: tilt 4s infinite linear;
          margin: 50px 0px ;
        }
        @keyframes tilt {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader174() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="wave-text">
        {"WAVE FLOW".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text {
          font-size: 20px;
          text-align: center;
          display: inline-block;
          color: #00e0ff;
        }
        .wave-text span {
          display: inline-block;
          animation: wave 1.5s infinite ease-in-out;
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); color: #ff00ff; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader175() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="reflect-text">REFLECTION</h2>

     
        .reflect-text {
          font-size: 20px;
          color: #fff;
          text-align: center;
          position: relative;
        }
        .reflect-text::after {
          content: "REFLECTION";
          position: absolute;
          left: 0;
          top: 100%;
          transform: scaleY(-1);
          opacity: 0.3;
          background: linear-gradient(transparent, rgba(255,255,255,0.1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="reflect-text">REFLECTION</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .reflect-text {
          font-size: 20px;
          color: #fff;
          text-align: center;
          position: relative;
        }
        .reflect-text::after {
          content: "REFLECTION";
          position: absolute;
          left: 0;
          top: 100%;
          transform: scaleY(-1);
          opacity: 0.3;
          background: linear-gradient(transparent, rgba(255,255,255,0.1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader176() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="wave-text1">
        {"WAVE FLOW".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text1 {
          font-size: 28px;
          font-weight: bold;
          color: #00e0ff;
          margin-left: 30px;
        }
        .wave-text1 span {
          display: inline-block;
          animation: wave1 1.5s infinite ease-in-out;
        }
        @keyframes wave1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); color: #ff00ff; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader177() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="typing-text1">Typing</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
     
        .typing-text1 {
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #ff6600;
          color: transparent;
          background: linear-gradient(90deg, #ff6600, #ffdd00, #ff8800);
          background-size: 30%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: typing1 5s steps(25, end) forwards, gradient1 6s linear infinite;
          margin-left: 30px ;
        }
        @keyframes typing1 { from { width: 0; } to { width: 28ch; } }
        @keyframes gradient1 { 0% { background-position: 0% 0%; } 00% { background-position: 00% 0%; } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="typing-text1">Typing</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .typing-text1 {
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #ff6600;
          color: transparent;
          background: linear-gradient(90deg, #ff6600, #ffdd00, #ff8800);
          background-size: 30%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: typing1 5s steps(25, end) forwards, gradient1 6s linear infinite;
          margin-left: 30px ;
        }
        @keyframes typing1 { from { width: 0; } to { width: 28ch; } }
        @keyframes gradient1 { 0% { background-position: 0% 0%; } 00% { background-position: 00% 0%; } }
      `}</style>
    </div>
  );
}

export function SpinnerLoader178() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text" style={{ fontSize: 30 }}>
        Rainbow Flow
      </h2>

    
        .rainbow-text {
          font-size: 30px;
          font-weight: bold;
          margin-left: 20px ;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="rainbow-text" style={{ fontSize: 30 }}>
        Rainbow Flow
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rainbow-text {
          font-size: 30px;
          font-weight: bold;
          margin-left: 20px ;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader179() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="wave-text3">
        {"NEON WAVE".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text3 {
          font-size: 30px;
          font-weight: bold;
          margin-left: 25px ;
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
        }
        .wave-text3 span {
          display: inline-block;
          animation: wave3 1.2s infinite ease-in-out;
        }
        @keyframes wave3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); color: #fff; text-shadow: 0 0 20px #0ff, 0 0 50px #00f; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader180() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="neon-text">Neon Flicker</h2>

      
        .neon-text {
          font-size: 30px;
          font-weight: bold;
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
          animation: flicker2 1.5s infinite alternate;
        }
        @keyframes flicker2 {
          0% { opacity: 1; text-shadow: 0 0 5px #0ff, 0 0 15px #0ff; }
          50% { opacity: 0.6; text-shadow: 0 0 20px #00f, 0 0 50px #0ff; }
          100% { opacity: 1; text-shadow: 0 0 15px #0ff, 0 0 40px #00f; }
        }
      `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="loader">
      <h2 className="neon-text">Neon Flicker</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neon-text {
          font-size: 30px;
          font-weight: bold;
          color: #0ff;
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
          animation: flicker2 1.5s infinite alternate;
        }
        @keyframes flicker2 {
          0% { opacity: 1; text-shadow: 0 0 5px #0ff, 0 0 15px #0ff; }
          50% { opacity: 0.6; text-shadow: 0 0 20px #00f, 0 0 50px #0ff; }
          100% { opacity: 1; text-shadow: 0 0 15px #0ff, 0 0 40px #00f; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader181() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="glitch-text" data-text="GLITCH EFFECT">
        GLITCH EFFECT
      </h2>

        .glitch-text {
          position: relative;
          font-size: 25px;
          margin: 50px 20px ;
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: transparent;
        }
        .glitch-text::before {
          left: 2px; text-shadow: -2px 0 red;
          animation: glitch1 1s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px; text-shadow: -2px 0 blue;
          animation: glitch2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch1 { 0% { clip-path: inset(10% 0 85% 0); } 100% { clip-path: inset(80% 0 5% 0); } }
        @keyframes glitch2 { 0% { clip-path: inset(80% 0 5% 0); } 100% { clip-path: inset(10% 0 85% 0); } }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="glitch-text" data-text="GLITCH EFFECT">
        GLITCH EFFECT
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .glitch-text {
          position: relative;
          font-size: 25px;
          margin: 50px 20px ;
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: transparent;
        }
        .glitch-text::before {
          left: 2px; text-shadow: -2px 0 red;
          animation: glitch1 1s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px; text-shadow: -2px 0 blue;
          animation: glitch2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch1 { 0% { clip-path: inset(10% 0 85% 0); } 100% { clip-path: inset(80% 0 5% 0); } }
        @keyframes glitch2 { 0% { clip-path: inset(80% 0 5% 0); } 100% { clip-path: inset(10% 0 85% 0); } }
      `}</style>
    </div>
  );
}
export function SpinnerLoader182() {
  const [copied, setCopied] = useState(false);
  const code = `<div class="spinner1"></div>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="bounce-text">
        {"BOUNCE TEXT".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bounce-text span {
          display: inline-block;
          font-size: 18px;
          margin-left: 10px ;
          font-weight: bold;
          animation: bounce4 1s infinite ease-in-out;
          color: #ff0099;
        }
        @keyframes bounce4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); color: #00ffcc; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader183() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="fade-text">Fade In-Out</h2>
      
        .fade-text {
          font-size: 30px;
          margin-left: 20px ;
          font-weight: bold;
          color: #ffcc00;
          animation: fade5 3s infinite ease-in-out;
        }
        @keyframes fade5 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="fade-text">Fade In-Out</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fade-text {
          font-size: 30px;
          margin-left: 20px ;
          font-weight: bold;
          color: #ffcc00;
          animation: fade5 3s infinite ease-in-out;
        }
        @keyframes fade5 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader184() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="shimmer-text">Shimmer Text</h2>

      
        .shimmer-text {
          font-size: 30px;
          font-weight: bold;
          margin-left: 20px ;
          background: linear-gradient(90deg, #444, #fff, #444);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer6 3s infinite linear;
        }
        @keyframes shimmer6 {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="shimmer-text">Shimmer Text</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .shimmer-text {
          font-size: 30px;
          font-weight: bold;
          margin-left: 20px ;
          background: linear-gradient(90deg, #444, #fff, #444);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer6 3s infinite linear;
        }
        @keyframes shimmer6 {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader185() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="pulse-text">Pulse Glow</h2>
      
        .pulse-text {
          font-size: 30px ;
          margin-left: 50px ;
          font-weight: bold;
          color: #ff3366;
          animation: pulse7 2s infinite ease-in-out;
        }
        @keyframes pulse7 {
          0%, 100% { text-shadow: 0 0 5px #ff3366, 0 0 10px #ff6699; }
          50% { text-shadow: 0 0 20px #ff0033, 0 0 40px #ff66cc; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="pulse-text">Pulse Glow</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pulse-text {
          font-size: 30px ;
          margin-left: 50px ;
          font-weight: bold;
          color: #ff3366;
          animation: pulse7 2s infinite ease-in-out;
        }
        @keyframes pulse7 {
          0%, 100% { text-shadow: 0 0 5px #ff3366, 0 0 10px #ff6699; }
          50% { text-shadow: 0 0 20px #ff0033, 0 0 40px #ff66cc; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader186() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="rotate-text">Rotating Text</h2>
     
        .rotate-text {
          font-size: 30px ;
          margin-left: 20px ;
          font-weight: bold;
          color: #00ffcc;
          display: inline-block;
          animation: rotate8 4s infinite linear;
        }
        @keyframes rotate8 {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="rotate-text">Rotating Text</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rotate-text {
          font-size: 30px ;
          margin-left: 20px ;
          font-weight: bold;
          color: #00ffcc;
          display: inline-block;
          animation: rotate8 4s infinite linear;
        }
        @keyframes rotate8 {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader187() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="zoom-text">Zoom Effect</h2>
     
        .zoom-text {
         font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ffcc00;
          animation: zoom9 3s infinite ease-in-out;
        }
        @keyframes zoom9 {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="zoom-text">Zoom Effect</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .zoom-text {
         font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ffcc00;
          animation: zoom9 3s infinite ease-in-out;
        }
        @keyframes zoom9 {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader188() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="split-text">Split Reveal</h2>
      
        .split-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .split-text::before, .split-text::after {
          content: "Split Reveal";
          position: absolute;
          left: 0; right: 0;
          overflow: hidden;
        }
        .split-text::before {
          color: #ff3300;
          clip-path: inset(0 50% 0 0);
          animation: slide10 2s infinite alternate;
        }
        .split-text::after {
          color: #00ccff;
          clip-path: inset(0 0 0 50%);
          animation: slide10 2s infinite alternate-reverse;
        }
        @keyframes slide10 {
          from { transform: translateX(-10px); }
          to { transform: translateX(10px); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="split-text">Split Reveal</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .split-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .split-text::before, .split-text::after {
          content: "Split Reveal";
          position: absolute;
          left: 0; right: 0;
          overflow: hidden;
        }
        .split-text::before {
          color: #ff3300;
          clip-path: inset(0 50% 0 0);
          animation: slide10 2s infinite alternate;
        }
        .split-text::after {
          color: #00ccff;
          clip-path: inset(0 0 0 50%);
          animation: slide10 2s infinite alternate-reverse;
        }
        @keyframes slide10 {
          from { transform: translateX(-10px); }
          to { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader189() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="fire-text">Fire Glow</h2>
      
        .fire-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ffdd00;
          text-shadow: 
            0 0 5px #ff4000, 
            0 0 10px #ff6600, 
            0 0 20px #ff0000;
          animation: flicker11 1.5s infinite;
        }
        @keyframes flicker11 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; text-shadow: 0 0 15px #ff3300, 0 0 30px #ff0000; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="fire-text">Fire Glow</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fire-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ffdd00;
          text-shadow: 
            0 0 5px #ff4000, 
            0 0 10px #ff6600, 
            0 0 20px #ff0000;
          animation: flicker11 1.5s infinite;
        }
        @keyframes flicker11 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; text-shadow: 0 0 15px #ff3300, 0 0 30px #ff0000; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader190() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="ice-text">Ice Shine</h2>

     
        .ice-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #00ffff, #ffffff, #00ccff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ice12 4s infinite linear;
        }
        @keyframes ice12 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="ice-text">Ice Shine</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ice-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #00ffff, #ffffff, #00ccff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ice12 4s infinite linear;
        }
        @keyframes ice12 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader191() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="matrix-text">MATRIX</h2>

        .matrix-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #00ff00;
          text-shadow: 0 0 5px #00ff00, 0 0 15px #00cc00;
          animation: matrix13 2s infinite steps(2);
        }
        @keyframes matrix13 {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="matrix-text">MATRIX</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .matrix-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #00ff00;
          text-shadow: 0 0 5px #00ff00, 0 0 15px #00cc00;
          animation: matrix13 2s infinite steps(2);
        }
        @keyframes matrix13 {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader192() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="galaxy-text">Galaxy</h2>

      
        .galaxy-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ffff00);
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: galaxy14 6s infinite ease-in-out;
        }
        @keyframes galaxy14 {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="galaxy-text">Galaxy</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .galaxy-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ffff00);
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: galaxy14 6s infinite ease-in-out;
        }
        @keyframes galaxy14 {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader193() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="metal-text">3D Metal</h2>

        .metal-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: silver;
          text-shadow: 
            1px 1px 0 #999,
            2px 2px 0 #777,
            3px 3px 5px rgba(0,0,0,0.7);
          animation: shine15 3s infinite linear;
        }
        @keyframes shine15 {
          0% { color: #ccc; }
          50% { color: #fff; }
          100% { color: #ccc; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="metal-text">3D Metal</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .metal-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: silver;
          text-shadow: 
            1px 1px 0 #999,
            2px 2px 0 #777,
            3px 3px 5px rgba(0,0,0,0.7);
          animation: shine15 3s infinite linear;
        }
        @keyframes shine15 {
          0% { color: #ccc; }
          50% { color: #fff; }
          100% { color: #ccc; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader194() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="pixel-text">PIXEL</h2>

        .pixel-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ff4444;
          animation: glitch16 1s infinite;
        }
        @keyframes glitch16 {
          0% { transform: translate(0,0); }
          20% { transform: translate(-2px,2px); }
          40% { transform: translate(2px,-2px); }
          60% { transform: translate(-1px,1px); }
          80% { transform: translate(1px,-1px); }
          100% { transform: translate(0,0); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="pixel-text">PIXEL</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .pixel-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #ff4444;
          animation: glitch16 1s infinite;
        }
        @keyframes glitch16 {
          0% { transform: translate(0,0); }
          20% { transform: translate(-2px,2px); }
          40% { transform: translate(2px,-2px); }
          60% { transform: translate(-1px,1px); }
          80% { transform: translate(1px,-1px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader195() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="cursor-text">Typing Cursor |</h2>

      
        .cursor-text {
          font-size: 30px ;
          margin: 50px 40px ;
          color: #fff;
          position: relative;
        }
        .cursor-text::after {
          content: '|';
          margin-left: 5px;
          animation: blink22 1s infinite;
        }
        @keyframes blink22 {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
       `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="cursor-text">Typing Cursor |</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cursor-text {
          font-size: 30px ;
          margin: 50px 40px ;
          color: #fff;
          position: relative;
        }
        .cursor-text::after {
          content: '|';
          margin-left: 5px;
          animation: blink22 1s infinite;
        }
        @keyframes blink22 {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader196() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="wave-text">Wave Distortion</h2>
     
        .wave-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #0099ff;
          display: inline-block;
          animation: wave17 3s infinite ease-in-out;
        }
        @keyframes wave17 {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(15deg); }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="wave-text">Wave Distortion</h2>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wave-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: #0099ff;
          display: inline-block;
          animation: wave17 3s infinite ease-in-out;
        }
        @keyframes wave17 {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(15deg); }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader197() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="holo-text">Hologram</h2>

        .holo-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #0ff, #fff, #0ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          animation: holo18 3s infinite linear;
        }
        @keyframes holo18 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="holo-text">Hologram</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .holo-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #0ff, #fff, #0ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          animation: holo18 3s infinite linear;
        }
        @keyframes holo18 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader198() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="outline-text">Outline Stroke</h2>

        .outline-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: transparent;
          -webkit-text-stroke: 2px #ff00cc;
          animation: outline19 2s infinite alternate;
        }
        @keyframes outline19 {
          from { -webkit-text-stroke: 2px #ff00cc; }
          to { -webkit-text-stroke: 2px #00ccff; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="outline-text">Outline Stroke</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .outline-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          color: transparent;
          -webkit-text-stroke: 2px #ff00cc;
          animation: outline19 2s infinite alternate;
        }
        @keyframes outline19 {
          from { -webkit-text-stroke: 2px #ff00cc; }
          to { -webkit-text-stroke: 2px #00ccff; }
        }
      `}</style>
    </div>
  );
}
export function SpinnerLoader199() {
  const [copied, setCopied] = useState(false);
  const code = `<h2 className="liquid-text">Liquid Flow</h2>

     
        .liquid-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #00f, #0ff, #00f);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquid20 5s infinite linear;
        }
        @keyframes liquid20 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="liquid-text">Liquid Flow</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .liquid-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(90deg, #00f, #0ff, #00f);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquid20 5s infinite linear;
        }
        @keyframes liquid20 {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader200() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h2 className="rainbow-text">Rainbow Flow</h2>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </div>
  );
}

export function SpinnerLoader201() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="400" height="120">
        <text x="50" y="80" class="logo-menvo">
          MENVO
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .logo-menvo{
    font-size:30px;
    font-weight:bold;
    letter-spacing:5px;
    fill:none;
    stroke:#00ffcc;
    stroke-width:2;
    stroke-dasharray:500;
    stroke-dashoffset:500;
    animation: draw 3s linear forwards, glow 2s ease-in-out infinite alternate;
  }

  @keyframes draw{
    to{
      stroke-dashoffset:0;
    }
  }

  @keyframes glow{
    from{
      filter: drop-shadow(0 0 5px #00ffcc);
    }
    to{
      filter: drop-shadow(0 0 20px #00ffcc);
    }
  }

  .container{
    text-align:center;
  }

  .sub{
    color:white;
    margin-top:20px;
    opacity:0;
    animation: fade 2s 2.5s forwards;
  }

  @keyframes fade{
    to{opacity:1;}
  }
      `}</style>
    </div>
  );
}

// components---------------------------------------------------------202---------------------------------------------------------------------------------//
export function SpinnerLoader202() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h1 class="liquid">HELLO BOSS </h1>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .liquid {
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(270deg,#3b82f6,#ec4899,#22c55e,#f59e0b);
  background-size: 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: liquid 6s ease infinite;
}

@keyframes liquid {
  0% { background-position: 0% }
  50% { background-position: 100% }
  100% { background-position: 0% }
}
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------203---------------------------------------------------------------------------------//
export function SpinnerLoader203() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="wrapper">
        <h1 class="text" data-text="MENVO SHOP">
          MENVO SHOP
        </h1>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* container */
.wrapper {
  text-align: center;
}

/* main text */
.text {
  font-size: 30px;
  font-weight: 700;
  background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #22c55e);
  background-size: 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 8s ease infinite;
  letter-spacing: 2px;
}

/* subtitle */
.sub {
  margin-top: 15px;
  font-size: 18px;
  color: #94a3b8;
  animation: fadeUp 1.5s ease forwards;
  opacity: 0;
}

/* glow blur effect */
.text::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  filter: blur(25px);
  opacity: 0.6;
}

/* animations */
@keyframes gradientMove {
  0% { background-position: 0% }
  50% { background-position: 100% }
  100% { background-position: 0% }
}

@keyframes fadeUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------204---------------------------------------------------------------------------------//
export function SpinnerLoader204() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <h1 class="gradient-text">ROUNDED</h1>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .gradient-text {
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #ec4899, #22c55e);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: move 3s linear infinite;
}

@keyframes move {
  100% {
    background-position: 200%;
  }
}
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------205---------------------------------------------------------------------------------//
export function SpinnerLoader205() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="250" height="100" viewBox="0 0 700 200">
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="50%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#ec4899" />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          class="logo-2"
        >
          ZENVORA
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* text style */
.logo-2 {
  font-size: 70px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  fill: transparent;
  stroke: url(#grad);
  stroke-width: 2;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 3s ease forwards, fill 1.5s ease forwards 2.5s;
}

/* draw animation */
@keyframes draw {
  to { stroke-dashoffset: 0; }
}

/* fill animation */
@keyframes fill {
  to { fill: url(#grad); }
}

/* glow */
svg {
  filter: drop-shadow(0 0 15px #8b5cf6);
}
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------206---------------------------------------------------------------------------------//
export function SpinnerLoader206() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="200" height="150">
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          MENVO
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
      
svg text {
  font-size: 40px;
  font-weight: bold;
  fill: none;
  stroke: #38bdf8;
  stroke-width: 2;

  stroke-dasharray: 400;
  stroke-dashoffset: 400;

  animation: drawLoop 3s linear infinite;
}

/* ANIMATION */
@keyframes drawLoop {
  0% {
    stroke-dashoffset: 400;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 400;
  }
}



      `}</style>
    </div>
  );
}
// components---------------------------------------------------------207---------------------------------------------------------------------------------//
export function SpinnerLoader207() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg viewBox="0 0 700 150">
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          MENVO
        </text>

        <rect class="rect" width="700" height="150" />
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
         .text {
  font-size: 40px;
  font-weight: bold;
  fill: white;
}
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------208---------------------------------------------------------------------------------//
export function SpinnerLoader208() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="400" height="120">
        <text x="50" y="80" class="logo-menvo">
          MENVO
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .logo-menvo{
    font-size:30px;
    font-weight:bold;
    letter-spacing:5px;
    fill:none;
    stroke:#00ffcc;
    stroke-width:2;
    stroke-dasharray:500;
    stroke-dashoffset:500;
    animation: draw 3s linear forwards, glow 2s ease-in-out infinite alternate;
  }

  @keyframes draw{
    to{
      stroke-dashoffset:0;
    }
  }

  @keyframes glow{
    from{
      filter: drop-shadow(0 0 5px #00ffcc);
    }
    to{
      filter: drop-shadow(0 0 20px #00ffcc);
    }
  }

  .container{
    text-align:center;
  }

  .sub{
    color:white;
    margin-top:20px;
    opacity:0;
    animation: fade 2s 2.5s forwards;
  }

  @keyframes fade{
    to{opacity:1;}
  }
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------209---------------------------------------------------------------------------------//
export function SpinnerLoader209() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="400" height="120">
        <text x="50" y="80" class="logo-menvo">
          MENVO
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .logo-menvo{
    font-size:30px;
    font-weight:bold;
    letter-spacing:5px;
    fill:none;
    stroke:#00ffcc;
    stroke-width:2;
    stroke-dasharray:500;
    stroke-dashoffset:500;
    animation: draw 3s linear forwards, glow 2s ease-in-out infinite alternate;
  }

  @keyframes draw{
    to{
      stroke-dashoffset:0;
    }
  }

  @keyframes glow{
    from{
      filter: drop-shadow(0 0 5px #00ffcc);
    }
    to{
      filter: drop-shadow(0 0 20px #00ffcc);
    }
  }

  .container{
    text-align:center;
  }

  .sub{
    color:white;
    margin-top:20px;
    opacity:0;
    animation: fade 2s 2.5s forwards;
  }

  @keyframes fade{
    to{opacity:1;}
  }
      `}</style>
    </div>
  );
}
// components---------------------------------------------------------210---------------------------------------------------------------------------------//
export function SpinnerLoader210() {
  const [copied, setCopied] = useState(false);
  const code = ` <h2 className="rainbow-text">Rainbow Flow</h2>

      
        .rainbow-text {
          font-size: 30px ;
          margin: 50px 40px ;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red, orange, yellow, green, cyan, blue, violet
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow21 6s infinite linear;
        }
        @keyframes rainbow21 {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <svg width="400" height="120">
        <text x="50" y="80" class="logo-menvo">
          MENVO
        </text>
      </svg>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .logo-menvo{
    font-size:30px;
    font-weight:bold;
    letter-spacing:5px;
    fill:none;
    stroke:#00ffcc;
    stroke-width:2;
    stroke-dasharray:500;
    stroke-dashoffset:500;
    animation: draw 3s linear forwards, glow 2s ease-in-out infinite alternate;
  }

  @keyframes draw{
    to{
      stroke-dashoffset:0;
    }
  }

  @keyframes glow{
    from{
      filter: drop-shadow(0 0 5px #00ffcc);
    }
    to{
      filter: drop-shadow(0 0 20px #00ffcc);
    }
  }

  .container{
    text-align:center;
  }

  .sub{
    color:white;
    margin-top:20px;
    opacity:0;
    animation: fade 2s 2.5s forwards;
  }

  @keyframes fade{
    to{opacity:1;}
  }
      `}</style>
    </div>
  );
}

// components---------------------------------------------------------210---------------------------------------------------------------------------------//
export function SpinnerLoader211() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="ux-grid-spin-loader"></div>

        .ux-grid-spin-loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  --c: #00bfff;

  background:
    linear-gradient(0deg ,color-mix(in srgb, var(--c) 50%, transparent) 30%,#0000 0 70%,var(--c) 0) 50%/8% 100%,
    linear-gradient(90deg,color-mix(in srgb, var(--c) 25%, transparent) 30%,#0000 0 70%,color-mix(in srgb, var(--c) 75%, transparent) 0) 50%/100% 8%;

  background-repeat: no-repeat;
  animation: uxGridSpinAnim 1s infinite steps(12);
}

.ux-grid-spin-loader::before,
.ux-grid-spin-loader::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}

.ux-grid-spin-loader::after {
   opacity: 0.83;
   transform: rotate(60deg);
}

@keyframes uxGridSpinAnim {
  100% { transform: rotate(1turn); }
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="ux-grid-spin-loader"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ux-grid-spin-loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  --c: #00bfff;
  margin-left:100px;
  background:
    linear-gradient(0deg ,color-mix(in srgb, var(--c) 50%, transparent) 30%,#0000 0 70%,var(--c) 0) 50%/8% 100%,
    linear-gradient(90deg,color-mix(in srgb, var(--c) 25%, transparent) 30%,#0000 0 70%,color-mix(in srgb, var(--c) 75%, transparent) 0) 50%/100% 8%;

  background-repeat: no-repeat;
  animation: uxGridSpinAnim 1s infinite steps(12);
}

.ux-grid-spin-loader::before,
.ux-grid-spin-loader::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}

.ux-grid-spin-loader::after {
   opacity: 0.83;
   transform: rotate(60deg);
}

@keyframes uxGridSpinAnim {
  100% { transform: rotate(1turn); }
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader212() {
  const [copied, setCopied] = useState(false);
  const code = ` 
 <div class="neo-spin-ring"></div>

          .neo-spin-ring {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid transparent;
  border-right-color: #8e44ff;
  border-radius: 50%;
  animation: neoSpinMain 1s infinite linear;
}

.neo-spin-ring::before,
.neo-spin-ring::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: neoSpinSlow 2s infinite ease-in-out;
}

.neo-spin-ring::after {
  margin: 8px;
  border-right-color: #00d4ff;
  animation-duration: 3s;
  opacity: 0.85;
}

/* animations */
@keyframes neoSpinMain {
  100% { transform: rotate(1turn); }
}

@keyframes neoSpinSlow {
  0% { transform: rotate(0deg); opacity: 0.6; }
  50% { opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.6; }
}
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="neo-spin-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neo-spin-ring {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid transparent;
  border-right-color: #8e44ff;
  border-radius: 50%;
  animation: neoSpinMain 1s infinite linear;
  margin-left:100px;
}

.neo-spin-ring::before,
.neo-spin-ring::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: neoSpinSlow 2s infinite ease-in-out;
}

.neo-spin-ring::after {
  margin: 8px;
  border-right-color: #00d4ff;
  animation-duration: 3s;
  opacity: 0.85;
}

/* animations */
@keyframes neoSpinMain {
  100% { transform: rotate(1turn); }
}

@keyframes neoSpinSlow {
  0% { transform: rotate(0deg); opacity: 0.6; }
  50% { opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.6; }
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader213() {
  const [copied, setCopied] = useState(false);
  const code = ` 
 <div class="ux-loader-ring"></div>

   .ux-loader-ring {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid transparent;

  border-color: #6c5ce7 transparent;
  border-radius: 50%;
  animation: uxSpinMain 1s infinite linear;
}

.ux-loader-ring::before,
.ux-loader-ring::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}

/* middle ring */
.ux-loader-ring::before {
  border-color: #00d2d3 transparent;
  animation: uxSpinMain .5s infinite linear reverse;
}

/* inner ring */
.ux-loader-ring::after {
  margin: 8px;
  border-color: #ff6b6b transparent;
  opacity: 0.8;
}

@keyframes uxSpinMain {
  100% {
    transform: rotate(1turn);
  }
}
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="ux-loader-ring"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ux-loader-ring {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid transparent;
  margin-left:100px;
  border-color: #6c5ce7 transparent;
  border-radius: 50%;
  animation: uxSpinMain 1s infinite linear;
}

.ux-loader-ring::before,
.ux-loader-ring::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}

/* middle ring */
.ux-loader-ring::before {
  border-color: #00d2d3 transparent;
  animation: uxSpinMain .5s infinite linear reverse;
}

/* inner ring */
.ux-loader-ring::after {
  margin: 8px;
  border-color: #ff6b6b transparent;
  opacity: 0.8;
}

@keyframes uxSpinMain {
  100% {
    transform: rotate(1turn);
  }
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader214() {
  const [copied, setCopied] = useState(false);
  const code = ` 
<div class="ux-loader"></div>
   .ux-loader {
      --d:22px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      color: #ff4d6d;
    
      box-shadow: 
        calc(1*var(--d))      calc(0*var(--d))      0 0,
        calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
        calc(0*var(--d))      calc(1*var(--d))      0 2px,
        calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
        calc(-1*var(--d))     calc(0*var(--d))      0 4px,
        calc(-0.707*var(--d)) calc(-0.707*var(--d)) 0 5px,
        calc(0*var(--d))      calc(-1*var(--d))     0 6px;

      animation: ux-spin 1s infinite steps(8);
    }

    /* UNIQUE ANIMATION NAME */
    @keyframes ux-spin {
      100% {
        transform: rotate(1turn);
      }
    }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="ux-loader"></div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
          /* UNIQUE LOADER CLASS */
    .ux-loader {
      --d:22px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      color: #ff4d6d;
      margin-left:120px;
      box-shadow: 
        calc(1*var(--d))      calc(0*var(--d))      0 0,
        calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
        calc(0*var(--d))      calc(1*var(--d))      0 2px,
        calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
        calc(-1*var(--d))     calc(0*var(--d))      0 4px,
        calc(-0.707*var(--d)) calc(-0.707*var(--d)) 0 5px,
        calc(0*var(--d))      calc(-1*var(--d))     0 6px;

      animation: ux-spin 1s infinite steps(8);
    }

    /* UNIQUE ANIMATION NAME */
    @keyframes ux-spin {
      100% {
        transform: rotate(1turn);
      }
    }
      `}</style>
    </div>
  );
}
export function SpinnerLoader215() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="px_loader_wrap">
  <div class="px_loader_core"></div>
  <div class="px_loader_dot"></div>
</div>

  /* Wrapper (unique) */
  .px_loader_wrap{
    position:relative;
    width:140px;
    height:140px;
    display:flex;
    align-items:center;
    justify-content:center;
   
  }

  /* Glow Ring */
  .px_loader_wrap::before{
    content:"";
    position:absolute;
    inset:-20px;
    border-radius:50%;
    background:conic-gradient(
      #ff0066,
      #7c3aed,
      #00c2ff,
      #00ff99,
      #ff0066
    );
    filter:blur(25px);
    opacity:.7;
    animation:px_glow 3s linear infinite;
  }

  /* Loader core */
  .px_loader_core{
    width:90px;
    aspect-ratio:1;
    position:relative;
    display:grid;
    border-radius:50%;
    -webkit-mask:
      radial-gradient(circle 8px,#0000 94%,#000),
      conic-gradient(#000 0 0);
    animation:px_spin 1s infinite linear;
  }

  .px_loader_core,
  .px_loader_core::before,
  .px_loader_core::after{
    background:
      radial-gradient(closest-side at 50% 12.5%,
      #ffffff 96%,#0000) 50% 0/18% 80% repeat-y,

      radial-gradient(closest-side at 12.5% 50%,
      #00e5ff 96%,#0000) 0 50%/80% 18% repeat-x;
  }

  .px_loader_core::before,
  .px_loader_core::after{
    content:"";
    grid-area:1/1;
    border-radius:50%;
  }

  .px_loader_core::before{
    transform:rotate(30deg);
  }

  .px_loader_core::after{
    transform:rotate(60deg);
  }

  /* Center dot */
  .px_loader_dot{
    position:absolute;
    width:18px;
    height:18px;
    border-radius:50%;
    background:#fff;
    box-shadow:
      0 0 10px #fff,
      0 0 25px #00e5ff,
      0 0 45px #7c3aed;
    z-index:2;
    animation:px_pulse 1.5s ease-in-out infinite;
  }

  /* Animations */
  @keyframes px_spin{
    100%{ transform:rotate(360deg); }
  }

  @keyframes px_glow{
    100%{ transform:rotate(360deg); }
  }

  @keyframes px_pulse{
    0%,100%{ transform:scale(1); }
    50%{ transform:scale(1.4); }
  }
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="px_loader_wrap">
        <div class="px_loader_core"></div>
        <div class="px_loader_dot"></div>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
         /* Wrapper (unique) */
  .px_loader_wrap{
    position:relative;
    width:140px;
    height:140px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:50px;
  }

  /* Glow Ring */
  .px_loader_wrap::before{
    content:"";
    position:absolute;
    inset:-20px;
    border-radius:50%;
    background:conic-gradient(
      #ff0066,
      #7c3aed,
      #00c2ff,
      #00ff99,
      #ff0066
    );
    filter:blur(25px);
    opacity:.7;
    animation:px_glow 3s linear infinite;
  }

  /* Loader core */
  .px_loader_core{
    width:90px;
    aspect-ratio:1;
    position:relative;
    display:grid;
    border-radius:50%;
    -webkit-mask:
      radial-gradient(circle 8px,#0000 94%,#000),
      conic-gradient(#000 0 0);
    animation:px_spin 1s infinite linear;
  }

  .px_loader_core,
  .px_loader_core::before,
  .px_loader_core::after{
    background:
      radial-gradient(closest-side at 50% 12.5%,
      #ffffff 96%,#0000) 50% 0/18% 80% repeat-y,

      radial-gradient(closest-side at 12.5% 50%,
      #00e5ff 96%,#0000) 0 50%/80% 18% repeat-x;
  }

  .px_loader_core::before,
  .px_loader_core::after{
    content:"";
    grid-area:1/1;
    border-radius:50%;
  }

  .px_loader_core::before{
    transform:rotate(30deg);
  }

  .px_loader_core::after{
    transform:rotate(60deg);
  }

  /* Center dot */
  .px_loader_dot{
    position:absolute;
    width:18px;
    height:18px;
    border-radius:50%;
    background:#fff;
    box-shadow:
      0 0 10px #fff,
      0 0 25px #00e5ff,
      0 0 45px #7c3aed;
    z-index:2;
    animation:px_pulse 1.5s ease-in-out infinite;
  }

  /* Animations */
  @keyframes px_spin{
    100%{ transform:rotate(360deg); }
  }

  @keyframes px_glow{
    100%{ transform:rotate(360deg); }
  }

  @keyframes px_pulse{
    0%,100%{ transform:scale(1); }
    50%{ transform:scale(1.4); }
  }
      `}</style>
    </div>
  );
}

// import css
import "./loader.css";
export default function AllLoaders() {
  return (
    <div className="loading">
      <div className="main">
        <br />
        <div className="main-loader">
          <SpinnerLoader211 />
          <SpinnerLoader212 />
          <SpinnerLoader213 />
          <SpinnerLoader214 />
          <SpinnerLoader215 />
          <SpinnerLoader1 />
          <SpinnerLoader2 />
          <SpinnerLoader3 />
          <SpinnerLoader5 />
          <SpinnerLoader6 />
          <SpinnerLoader7 />
          <SpinnerLoader9 />
          <SpinnerLoader10 />
          <SpinnerLoader11 />
          <SpinnerLoader12 />
          <SpinnerLoader13 />
          <SpinnerLoader14 />
          <SpinnerLoader15 />
          <SpinnerLoader16 />
          <SpinnerLoader17 />
          <SpinnerLoader18 />
          <SpinnerLoader19 />
          <SpinnerLoader21 />
          <SpinnerLoader22 />
          <SpinnerLoader23 />
          <SpinnerLoader24 />
          <SpinnerLoader25 />
          <SpinnerLoader27 />
          <SpinnerLoader28 />
          <SpinnerLoader29 />
          <SpinnerLoader30 />
          <SpinnerLoader31 />
          <SpinnerLoader32 />
          <SpinnerLoader33 />
          <SpinnerLoader34 />
          <SpinnerLoader35 />
          <SpinnerLoader36 />
          <SpinnerLoader37 />
          <SpinnerLoader38 />
          <SpinnerLoader39 />
          <SpinnerLoader40 />
          <SpinnerLoader41 />
          <SpinnerLoader42 />
          <SpinnerLoader43 />
          <SpinnerLoader44 />
          <SpinnerLoader45 />
          <SpinnerLoader46 />
          <SpinnerLoader48 />
          <SpinnerLoader49 />
          <SpinnerLoader50 />
          <SpinnerLoader51 />
          <SpinnerLoader52 />
          <SpinnerLoader53 />
          <SpinnerLoader54 />
          <SpinnerLoader55 />
          <SpinnerLoader56 />
          <SpinnerLoader57 />
          <SpinnerLoader58 />
          <SpinnerLoader59 />
          <SpinnerLoader60 />
          <SpinnerLoader61 />
          <SpinnerLoader62 />
          <SpinnerLoader63 />
          <SpinnerLoader64 />
          <SpinnerLoader65 />
          <SpinnerLoader66 />
          <SpinnerLoader67 />
          <SpinnerLoader68 />
          <SpinnerLoader67 />
          <SpinnerLoader69 />
          <SpinnerLoader71 />
          <SpinnerLoader72 />
          <SpinnerLoader73 />
          <SpinnerLoader74 />
          <SpinnerLoader75 />
          <SpinnerLoader76 />
          <SpinnerLoader77 />
          <SpinnerLoader78 />
          <SpinnerLoader79 />
          <SpinnerLoader80 />
          <SpinnerLoader81 />
          <SpinnerLoader82 />
          <SpinnerLoader83 />
          <SpinnerLoader84 />
          <SpinnerLoader85 />
          <SpinnerLoader86 />
          <SpinnerLoader87 />
          <SpinnerLoader89 />
          <SpinnerLoader90 />
          <SpinnerLoader90 />
          <SpinnerLoader91 />
          <SpinnerLoader92 />
          <SpinnerLoader93 />
          <SpinnerLoader94 />
          <SpinnerLoader95 />
          <SpinnerLoader96 />
          <SpinnerLoader97 />
          <SpinnerLoader98 />
          <SpinnerLoader99 />
          <SpinnerLoader100 />
          <SpinnerLoader101 />
          <SpinnerLoader102 />
          <SpinnerLoader103 />
          <SpinnerLoader104 />
          <SpinnerLoader105 />
          <SpinnerLoader106 />
          <SpinnerLoader107 />
          <SpinnerLoader108 />
          <SpinnerLoader109 />
          <SpinnerLoader110 />
          <SpinnerLoader111 />
          <SpinnerLoader112 />
          <SpinnerLoader113 />
          <SpinnerLoader114 />
          <SpinnerLoader115 />
          <SpinnerLoader116 />
          <SpinnerLoader117 />
          <SpinnerLoader118 />
          <SpinnerLoader119 />
          <SpinnerLoader120 />
          <SpinnerLoader121 />
          <SpinnerLoader122 />
          <SpinnerLoader123 />
          <SpinnerLoader124 />
          <SpinnerLoader125 />
          <SpinnerLoader126 />
          <SpinnerLoader127 />
          <SpinnerLoader128 />
          <SpinnerLoader129 />
          <SpinnerLoader130 />
          <SpinnerLoader131 />
          <SpinnerLoader132 />
          <SpinnerLoader133 />
          <SpinnerLoader134 />
          <SpinnerLoader135 />
          <SpinnerLoader136 />
          <SpinnerLoader137 />
          <SpinnerLoader138 />
          <SpinnerLoader139 />
          <SpinnerLoader140 />
          <SpinnerLoader141 />
          <SpinnerLoader142 />
          <SpinnerLoader143 />
          <SpinnerLoader144 />
          <SpinnerLoader145 />
          <SpinnerLoader146 />
          <SpinnerLoader147 />
          <SpinnerLoader148 />
          <SpinnerLoader149 />
          <SpinnerLoader150 />
          <SpinnerLoader151 />
          <SpinnerLoader152 />
          <SpinnerLoader153 />
          <SpinnerLoader154 />
          <SpinnerLoader155 />
          <SpinnerLoader156 />
          <SpinnerLoader157 />
          <SpinnerLoader158 />
          <SpinnerLoader159 />
          <SpinnerLoader160 />
          <SpinnerLoader161 />
          <SpinnerLoader162 />
          <SpinnerLoader163 />
          <SpinnerLoader164 />
          <SpinnerLoader165 />
          <SpinnerLoader166 />
          <SpinnerLoader167 />
          <SpinnerLoader168 />
          <SpinnerLoader169 />
          <SpinnerLoader170 />
          <SpinnerLoader171 />
          <SpinnerLoader172 />
          <SpinnerLoader173 />
          <SpinnerLoader174 />
          <SpinnerLoader175 />
          <SpinnerLoader176 />
          <SpinnerLoader177 />
          <SpinnerLoader178 />
          <SpinnerLoader179 />
          <SpinnerLoader180 />
          <SpinnerLoader181 />
          <SpinnerLoader182 />
          <SpinnerLoader183 />
          <SpinnerLoader184 />
          <SpinnerLoader185 />
          <SpinnerLoader186 />
          <SpinnerLoader187 />
          <SpinnerLoader188 />
          <SpinnerLoader189 />
          <SpinnerLoader190 />
          <SpinnerLoader191 />
          <SpinnerLoader192 />
          <SpinnerLoader193 />
          <SpinnerLoader194 />
          <SpinnerLoader195 />
          <SpinnerLoader196 />
          <SpinnerLoader197 />
          <SpinnerLoader198 />
          <SpinnerLoader199 />
          <SpinnerLoader200 />
          <SpinnerLoader201 />
          <SpinnerLoader202 />
          <SpinnerLoader203 />
          <SpinnerLoader204 />
          <SpinnerLoader205 />
          <SpinnerLoader206 />
          <SpinnerLoader207 />
          <SpinnerLoader208 />
          <SpinnerLoader209 />
        </div>
      </div>
    </div>
  );
}

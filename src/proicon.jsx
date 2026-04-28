import React, { useState } from "react";

export function SpinnerLoader1() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       
      <div class="logo-5 orbit-2">
        <div class="shape-1">
          <span>A</span>
        </div>
        <h3>
          Axo<span className="span">nix</span>
        </h3>
      </div>

      .logo-5{
  text-align:center;
  color:white;
}

/* SMALLER SHAPE */
.shape-1{
  width:80px;
  height:80px;
  margin:40px auto;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;

  background: radial-gradient(circle, #06b6d4, #22c55e);
  position:relative;

  box-shadow:
    0 0 15px #06b6d4,
    0 0 40px #22c55e,
    inset 0 0 15px rgba(255,255,255,0.2);

  transition:0.4s;
}

/* RINGS SMALL */
.shape-1::before{
  content:"";
  position:absolute;
  width:130%;
  height:130%;
  border-radius:50%;
  border:1.5px dashed rgba(255,255,255,0.4);
  animation: spin 8s linear infinite;
}

.shape-1::after{
  content:"";
  position:absolute;
  width:115%;
  height:115%;
  border-radius:50%;
  border:1.5px solid rgba(255,255,255,0.2);
  animation: spinReverse 6s linear infinite;
}

/* LETTER SMALL */
.shape-1  span{
  font-size:30px;
  font-weight:900;
  color:white;
  text-shadow:0 0 8px white;
  z-index:2;
}

/* TEXT SMALL */
.orbit-2 h3{
  font-size:30px;
  font-weight:800;
  margin-top:-20px;
}

.orbit-2 h3 .span{
  color:#22c55e;
  text-shadow:0 0 6px #22c55e;
}

/* HOVER */
.shape-1:hover{
  transform: scale(1.1);
  box-shadow:
    0 0 30px #06b6d4,
    0 0 60px #22c55e;
}

/* ANIMATION */
@keyframes spin{
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
}

@keyframes spinReverse{
  from{ transform: rotate(360deg); }
  to{ transform: rotate(0deg); }
}
      

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="logo-5 orbit-2">
        <div class="shape-1">
          <span>A</span>
        </div>
        <h3>
          Axo<span className="span">nix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
   
.logo-5{
  text-align:center;
  color:white;
}

/* SMALLER SHAPE */
.shape-1{
  width:80px;
  height:80px;
  margin:40px auto;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;

  background: radial-gradient(circle, #06b6d4, #22c55e);
  position:relative;

  box-shadow:
    0 0 15px #06b6d4,
    0 0 40px #22c55e,
    inset 0 0 15px rgba(255,255,255,0.2);

  transition:0.4s;
}

/* RINGS SMALL */
.shape-1::before{
  content:"";
  position:absolute;
  width:130%;
  height:130%;
  border-radius:50%;
  border:1.5px dashed rgba(255,255,255,0.4);
  animation: spin 8s linear infinite;
}

.shape-1::after{
  content:"";
  position:absolute;
  width:115%;
  height:115%;
  border-radius:50%;
  border:1.5px solid rgba(255,255,255,0.2);
  animation: spinReverse 6s linear infinite;
}

/* LETTER SMALL */
.shape-1  span{
  font-size:30px;
  font-weight:900;
  color:white;
  text-shadow:0 0 8px white;
  z-index:2;
}

/* TEXT SMALL */
.orbit-2 h3{
  font-size:30px;
  font-weight:800;
  margin-top:-20px;
}

.orbit-2 h3 .span{
  color:#22c55e;
  text-shadow:0 0 6px #22c55e;
}

/* HOVER */
.shape-1:hover{
  transform: scale(1.1);
  box-shadow:
    0 0 30px #06b6d4,
    0 0 60px #22c55e;
}

/* ANIMATION */
@keyframes spin{
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
}

@keyframes spinReverse{
  from{ transform: rotate(360deg); }
  to{ transform: rotate(0deg); }
}
    `}</style>
    </div>
  );
}

export function SpinnerLoader2() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="zyron-wrap">
        <div class="zyron-orb">
          <div class="zyron-letter">Z</div>
        </div>
        <div class="zyron-text">
          Zy<span class="zyron-highlight">ron</span>
        </div>
      </div>

      .zyron-wrap{
  text-align:center;
  color:white;
}

/* ORB */
.zyron-orb{
  width:100px;
  height:100px;
  border-radius:50%;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  box-shadow: 
    0 0 20px rgba(56,189,248,0.4),
    inset 0 0 10px rgba(255,255,255,0.1);
}

/* GLOW EFFECT */
.zyron-orb::before{
  content:'';
  position:absolute;
  width:120%;
  height:120%;
  border-radius:50%;
  background:linear-gradient(45deg,#38bdf8,#06b6d4,#3b82f6);
  filter:blur(30px);
  opacity:0.5;
  z-index:-1;
  animation: zyronGlowSpin 6s linear infinite;
}

@keyframes zyronGlowSpin{
  0%{ transform:rotate(0deg);}
  100%{ transform:rotate(360deg);}
}

/* LETTER */
.zyron-letter{
  font-size:34px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TEXT */
.zyron-text{
  margin-top:15px;
  font-size:28px;
  letter-spacing:2px;
}

/* HIGHLIGHT */
.zyron-highlight{
  color:#38bdf8;
}

/* HOVER */
.zyron-wrap:hover .zyron-orb{
  box-shadow: 
    0 0 35px rgba(56,189,248,0.8),
    inset 0 0 15px rgba(255,255,255,0.2);
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zyron-wrap">
        <div class="zyron-orb">
          <div class="zyron-letter">Z</div>
        </div>
        <div class="zyron-text">
          Zy<span class="zyron-highlight">ron</span>
        </div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* MAIN WRAP */
.zyron-wrap{
  text-align:center;
  color:white;
}

/* ORB */
.zyron-orb{
  width:100px;
  height:100px;
  border-radius:50%;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  box-shadow: 
    0 0 20px rgba(56,189,248,0.4),
    inset 0 0 10px rgba(255,255,255,0.1);
}

/* GLOW EFFECT */
.zyron-orb::before{
  content:'';
  position:absolute;
  width:120%;
  height:120%;
  border-radius:50%;
  background:linear-gradient(45deg,#38bdf8,#06b6d4,#3b82f6);
  filter:blur(30px);
  opacity:0.5;
  z-index:-1;
  animation: zyronGlowSpin 6s linear infinite;
}

@keyframes zyronGlowSpin{
  0%{ transform:rotate(0deg);}
  100%{ transform:rotate(360deg);}
}

/* LETTER */
.zyron-letter{
  font-size:34px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TEXT */
.zyron-text{
  margin-top:15px;
  font-size:28px;
  letter-spacing:2px;
}

/* HIGHLIGHT */
.zyron-highlight{
  color:#38bdf8;
}

/* HOVER */
.zyron-wrap:hover .zyron-orb{
  box-shadow: 
    0 0 35px rgba(56,189,248,0.8),
    inset 0 0 15px rgba(255,255,255,0.2);
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader3() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="zr-wrapper">
        <div class="zr-orb">
          <div class="zr-letter">Z</div>
        </div>
        <div class="zr-brand">
          Zy<span class="zr-accent">ron</span>
        </div>
      </div>
         
       /* WRAPPER */
.zr-wrapper{
  text-align:center;
  color:white;
}

/* ORB */
.zr-orb{
  width:105px;
  height:105px;
  border-radius:50%;
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.15);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  margin-top:30px;
  animation: zrFloatPulse 4s ease-in-out infinite;

  box-shadow: 
    0 0 25px rgba(56,189,248,0.35),
    inset 0 0 12px rgba(255,255,255,0.08);
}

/* FLOAT + PULSE */
@keyframes zrFloatPulse{
  0%{
    transform: translateY(0px) scale(1);
  }
  50%{
    transform: translateY(-8px) scale(1.08);
  }
  100%{
    transform: translateY(0px) scale(1);
  }
}

/* GLOW RING */
.zr-orb::before{
  content:'';
  position:absolute;
  width:140%;
  height:140%;
  border-radius:50%;
  background: radial-gradient(circle,#38bdf8,transparent 70%);
  filter:blur(35px);
  opacity:0.35;
  z-index:-1;
  animation: zrSoftGlow 5s ease-in-out infinite;
}

@keyframes zrSoftGlow{
  0%,100%{ opacity:0.3; }
  50%{ opacity:0.6; }
}

/* GLASS LIGHT */
.zr-orb::after{
  content:'';
  position:absolute;
  top:10%;
  width:60%;
  height:30%;
  background:rgba(255,255,255,0.25);
  filter:blur(10px);
  border-radius:50%;
  opacity:0.4;
}

/* LETTER */
.zr-letter{
  font-size:36px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* BRAND TEXT */
.zr-brand{
  margin-top:18px;
  font-size:30px;
  letter-spacing:2px;
}

/* ACCENT */
.zr-accent{
  color:#38bdf8;
}
     
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zr-wrapper">
        <div class="zr-orb">
          <div class="zr-letter">Z</div>
        </div>
        <div class="zr-brand">
          Zy<span class="zr-accent">ron</span>
        </div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* WRAPPER */
.zr-wrapper{
  text-align:center;
  color:white;
}

/* ORB */
.zr-orb{
  width:105px;
  height:105px;
  border-radius:50%;
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.15);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  margin-top:30px;
  animation: zrFloatPulse 4s ease-in-out infinite;

  box-shadow: 
    0 0 25px rgba(56,189,248,0.35),
    inset 0 0 12px rgba(255,255,255,0.08);
}

/* FLOAT + PULSE */
@keyframes zrFloatPulse{
  0%{
    transform: translateY(0px) scale(1);
  }
  50%{
    transform: translateY(-8px) scale(1.08);
  }
  100%{
    transform: translateY(0px) scale(1);
  }
}

/* GLOW RING */
.zr-orb::before{
  content:'';
  position:absolute;
  width:140%;
  height:140%;
  border-radius:50%;
  background: radial-gradient(circle,#38bdf8,transparent 70%);
  filter:blur(35px);
  opacity:0.35;
  z-index:-1;
  animation: zrSoftGlow 5s ease-in-out infinite;
}

@keyframes zrSoftGlow{
  0%,100%{ opacity:0.3; }
  50%{ opacity:0.6; }
}

/* GLASS LIGHT */
.zr-orb::after{
  content:'';
  position:absolute;
  top:10%;
  width:60%;
  height:30%;
  background:rgba(255,255,255,0.25);
  filter:blur(10px);
  border-radius:50%;
  opacity:0.4;
}

/* LETTER */
.zr-letter{
  font-size:36px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* BRAND TEXT */
.zr-brand{
  margin-top:18px;
  font-size:30px;
  letter-spacing:2px;
}

/* ACCENT */
.zr-accent{
  color:#38bdf8;
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader4() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="qx-wrap">
        <div class="qx-circle">
          <span class="qx-letter">Z</span>
        </div>
        <div class="qx-text">
          Zy<span class="qx-accent">ron</span>
        </div>
      </div>

      /* WRAP */
.qx-wrap{
  text-align:center;
  color:white;
}

/* CIRCLE */
.qx-circle{
  width:100px;
  height:100px;
  border-radius:50%;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;

  /* SAME ANIMATION */
  animation: pulse 3s ease-in-out infinite;

  box-shadow: 
    0 0 20px rgba(56,189,248,0.4),
    inset 0 0 10px rgba(255,255,255,0.1);
}

/* SAME ANIMATION */
@keyframes pulse{
  0%{ transform: scale(1); }
  50%{ transform: scale(1.12); }
  100%{ transform: scale(1); }
}

/* GLOW */
.qx-circle::before{
  content:'';
  position:absolute;
  width:120%;
  height:120%;
  border-radius:50%;
  background:linear-gradient(45deg,#38bdf8,#06b6d4,#3b82f6);
  filter:blur(30px);
  opacity:0.5;
  z-index:-1;
  animation: rotateGlow 6s linear infinite;
}

@keyframes rotateGlow{
  0%{ transform:rotate(0deg);}
  100%{ transform:rotate(360deg);}
}

/* LETTER */
.qx-letter{
  font-size:34px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TEXT */
.qx-text{
  margin-top:15px;
  font-size:28px;
  letter-spacing:2px;
}

/* ACCENT */
.qx-accent{
  color:#38bdf8;
}
    

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="qx-wrap">
        <div class="qx-circle">
          <span class="qx-letter">Z</span>
        </div>
        <div class="qx-text">
          Zy<span class="qx-accent">ron</span>
        </div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* WRAP */
.qx-wrap{
  text-align:center;
  color:white;
}

/* CIRCLE */
.qx-circle{
  width:100px;
  height:100px;
  border-radius:50%;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;

  /* SAME ANIMATION */
  animation: pulse 3s ease-in-out infinite;

  box-shadow: 
    0 0 20px rgba(56,189,248,0.4),
    inset 0 0 10px rgba(255,255,255,0.1);
}

/* SAME ANIMATION */
@keyframes pulse{
  0%{ transform: scale(1); }
  50%{ transform: scale(1.12); }
  100%{ transform: scale(1); }
}

/* GLOW */
.qx-circle::before{
  content:'';
  position:absolute;
  width:120%;
  height:120%;
  border-radius:50%;
  background:linear-gradient(45deg,#38bdf8,#06b6d4,#3b82f6);
  filter:blur(30px);
  opacity:0.5;
  z-index:-1;
  animation: rotateGlow 6s linear infinite;
}

@keyframes rotateGlow{
  0%{ transform:rotate(0deg);}
  100%{ transform:rotate(360deg);}
}

/* LETTER */
.qx-letter{
  font-size:34px;
  font-weight:800;
  background: linear-gradient(45deg,#38bdf8,#ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TEXT */
.qx-text{
  margin-top:15px;
  font-size:28px;
  letter-spacing:2px;
}

/* ACCENT */
.qx-accent{
  color:#38bdf8;
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader5() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       
 <div class="tri-logo">
        <div class="tri-shape">
          <span class="tri-letter">V</span>
        </div>
        <h3 class="tri-text">
          Ve<span class="tri-accent">cta</span>
        </h3>
      </div>

      .tri-shape{
  width:0;
  height:0;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:100px solid;
  border-bottom-color:transparent;
  position:relative;
  margin:auto;
  transition:0.4s ease;
}

/* Gradient Fill */
.tri-shape::before{
  content:"";
  position:absolute;
  left:-55px;
  top:0;
  width:0;
  height:0;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:100px solid;
  border-image:linear-gradient(145deg,#ff4d6d,#ff0080,#7c3aed) 1;
  filter:drop-shadow(0 10px 25px rgba(255,0,100,0.25));
}

/* Inner Glow */
.tri-shape::after{
  content:"";
  position:absolute;
  left:-35px;
  top:20px;
  width:70px;
  height:50px;
  background:radial-gradient(circle,rgba(255,255,255,0.25),transparent);
  border-radius:50%;
}

/* Letter */
.tri-letter{
  position:absolute;
  top:34px;
  left:-11px;
  color:white;
  font-size:28px;
  font-weight:800;
  letter-spacing:3px;
}

/* Text */
.tri-text{
  margin-top:18px;
  font-size:32px;
  text-align:center;
  color:#e5e7eb;
  letter-spacing:2px;
}

.tri-accent{
  background:linear-gradient(90deg,#ff4d6d,#7c3aed);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover */
.tri-shape:hover{
  transform:scale(1.08) translateY(-4px);
}

.tri-shape:hover::before{
  filter:drop-shadow(0 15px 35px rgba(255,0,120,0.45));
}

/* Floating */
.tri-shape{
  animation:triFloat 4s ease-in-out infinite;
}

@keyframes triFloat{
  0%,100%{ transform:translateY(0);}
  50%{ transform:translateY(-6px);}
}
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="tri-logo">
        <div class="tri-shape">
          <span class="tri-letter">V</span>
        </div>
        <h3 class="tri-text">
          Ve<span class="tri-accent">cta</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
         /* Triangle Base */
.tri-shape{
  width:0;
  height:0;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:100px solid;
  border-bottom-color:transparent;
  position:relative;
  margin:auto;
  transition:0.4s ease;
}

/* Gradient Fill */
.tri-shape::before{
  content:"";
  position:absolute;
  left:-55px;
  top:0;
  width:0;
  height:0;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:100px solid;
  border-image:linear-gradient(145deg,#ff4d6d,#ff0080,#7c3aed) 1;
  filter:drop-shadow(0 10px 25px rgba(255,0,100,0.25));
}

/* Inner Glow */
.tri-shape::after{
  content:"";
  position:absolute;
  left:-35px;
  top:20px;
  width:70px;
  height:50px;
  background:radial-gradient(circle,rgba(255,255,255,0.25),transparent);
  border-radius:50%;
}

/* Letter */
.tri-letter{
  position:absolute;
  top:34px;
  left:-11px;
  color:white;
  font-size:28px;
  font-weight:800;
  letter-spacing:3px;
}

/* Text */
.tri-text{
  margin-top:18px;
  font-size:32px;
  text-align:center;
  color:#e5e7eb;
  letter-spacing:2px;
}

.tri-accent{
  background:linear-gradient(90deg,#ff4d6d,#7c3aed);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover */
.tri-shape:hover{
  transform:scale(1.08) translateY(-4px);
}

.tri-shape:hover::before{
  filter:drop-shadow(0 15px 35px rgba(255,0,120,0.45));
}

/* Floating */
.tri-shape{
  animation:triFloat 4s ease-in-out infinite;
}

@keyframes triFloat{
  0%,100%{ transform:translateY(0);}
  50%{ transform:translateY(-6px);}
}
     `}</style>
    </div>
  );
}
export function SpinnerLoader6() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="logo-tri-x">
        <div class="triangle-x">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      .triangle-x{
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-bottom-color: transparent;
  position:relative;
  margin:auto;
  filter: drop-shadow(0 0 15px rgba(244,63,94,0.5));
}

/* Gradient Triangle */
.triangle-x::before{
  content:"";
  position:absolute;
  left:-60px;
  top:0;
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-image: linear-gradient(135deg,#f43f5e,#ec4899,#8b5cf6) 1;
}

/* Glass Shine Effect */
.triangle-x::after{
  content:"";
  position:absolute;
  left:-40px;
  top:15px;
  width:80px;
  height:60px;
  background:linear-gradient(120deg,rgba(255,255,255,0.4),transparent);
  transform:skewY(-20deg);
  border-radius:10px;
}

/* V Letter */
.triangle-x span{
  position:absolute;
  top:35px;
  left:-12px;
  color:white;
  font-size:30px;
  font-weight:900;
  letter-spacing:2px;
  text-shadow:0 0 10px rgba(255,255,255,0.8);
}

/* Text */
.logo-tri-x h3{
  margin-top:20px;
  font-size:34px;
  color:white;
  text-align:center;
  letter-spacing:2px;
}

.logo-tri-x h3 span{
  background:linear-gradient(90deg,#f43f5e,#8b5cf6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover Animation */
.triangle-x:hover{
  transform:scale(1.1) rotate(2deg);
  transition:0.4s ease;
  filter: drop-shadow(0 0 25px rgba(244,63,94,0.9));
}

.triangle-x:hover span{
  transform:scale(1.2);
  transition:0.3s;
}

/* Floating Animation */
.triangle-x{
  animation:float-x 3s ease-in-out infinite;
}

@keyframes float-x{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
}
    
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="logo-tri-x">
        <div class="triangle-x">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
/* Triangle Logo */
.triangle-x{
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-bottom-color: transparent;
  position:relative;
  margin:auto;
  filter: drop-shadow(0 0 15px rgba(244,63,94,0.5));
}

/* Gradient Triangle */
.triangle-x::before{
  content:"";
  position:absolute;
  left:-60px;
  top:0;
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-image: linear-gradient(135deg,#f43f5e,#ec4899,#8b5cf6) 1;
}

/* Glass Shine Effect */
.triangle-x::after{
  content:"";
  position:absolute;
  left:-40px;
  top:15px;
  width:80px;
  height:60px;
  background:linear-gradient(120deg,rgba(255,255,255,0.4),transparent);
  transform:skewY(-20deg);
  border-radius:10px;
}

/* V Letter */
.triangle-x span{
  position:absolute;
  top:35px;
  left:-12px;
  color:white;
  font-size:30px;
  font-weight:900;
  letter-spacing:2px;
  text-shadow:0 0 10px rgba(255,255,255,0.8);
}

/* Text */
.logo-tri-x h3{
  margin-top:20px;
  font-size:34px;
  color:white;
  text-align:center;
  letter-spacing:2px;
}

.logo-tri-x h3 span{
  background:linear-gradient(90deg,#f43f5e,#8b5cf6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover Animation */
.triangle-x:hover{
  transform:scale(1.1) rotate(2deg);
  transition:0.4s ease;
  filter: drop-shadow(0 0 25px rgba(244,63,94,0.9));
}

.triangle-x:hover span{
  transform:scale(1.2);
  transition:0.3s;
}

/* Floating Animation */
.triangle-x{
  animation:float-x 3s ease-in-out infinite;
}

@keyframes float-x{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader7() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="vx-logo-tri">
        <div class="vx-triangle-shape">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      .vx-triangle-shape{
  width:120px;
  height:110px;
  background:linear-gradient(145deg,#ff4d6d,#ff0080,#7c3aed);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  border-radius:20px;
  position:relative;
  margin:auto;
  box-shadow:0 15px 35px rgba(255,0,120,0.25);
  transition:0.4s ease;
  animation:vx-float 4s ease-in-out infinite;
}

/* Glass highlight */
.vx-triangle-shape::after{
  content:"";
  position:absolute;
  top:15px;
  left:25px;
  width:70px;
  height:50px;
  background:linear-gradient(120deg,rgba(255,255,255,0.3),transparent);
  border-radius:20px;
}

/* Letter */
.vx-triangle-shape span{
  position:absolute;
  top:35px;
  left:50%;
  transform:translateX(-50%);
  color:white;
  font-size:30px;
  font-weight:800;
  letter-spacing:3px;
}

/* Text */
.vx-logo-tri h3{
  margin-top:18px;
  font-size:32px;
  text-align:center;
  color:#e5e7eb;
  letter-spacing:2px;
}

.vx-logo-tri h3 span{
  background:linear-gradient(90deg,#ff4d6d,#7c3aed);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover */
.vx-triangle-shape:hover{
  transform:scale(1.08) translateY(-5px);
  box-shadow:0 20px 45px rgba(255,0,120,0.4);
}

/* Floating animation */
@keyframes vx-float{
  0%,100%{ transform:translateY(0);}
  50%{ transform:translateY(-6px);}
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="vx-logo-tri">
        <div class="vx-triangle-shape">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* Rounded Triangle */
.vx-triangle-shape{
  width:120px;
  height:110px;
  background:linear-gradient(145deg,#ff4d6d,#ff0080,#7c3aed);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  border-radius:20px;
  position:relative;
  margin:auto;
  box-shadow:0 15px 35px rgba(255,0,120,0.25);
  transition:0.4s ease;
  animation:vx-float 4s ease-in-out infinite;
}

/* Glass highlight */
.vx-triangle-shape::after{
  content:"";
  position:absolute;
  top:15px;
  left:25px;
  width:70px;
  height:50px;
  background:linear-gradient(120deg,rgba(255,255,255,0.3),transparent);
  border-radius:20px;
}

/* Letter */
.vx-triangle-shape span{
  position:absolute;
  top:35px;
  left:50%;
  transform:translateX(-50%);
  color:white;
  font-size:30px;
  font-weight:800;
  letter-spacing:3px;
}

/* Text */
.vx-logo-tri h3{
  margin-top:18px;
  font-size:32px;
  text-align:center;
  color:#e5e7eb;
  letter-spacing:2px;
}

.vx-logo-tri h3 span{
  background:linear-gradient(90deg,#ff4d6d,#7c3aed);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Hover */
.vx-triangle-shape:hover{
  transform:scale(1.08) translateY(-5px);
  box-shadow:0 20px 45px rgba(255,0,120,0.4);
}

/* Floating animation */
@keyframes vx-float{
  0%,100%{ transform:translateY(0);}
  50%{ transform:translateY(-6px);}
}  `}</style>
    </div>
  );
}
export function SpinnerLoader8() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="nx-logo-wrap">
        <div class="nx-outer-box">
          <div class="nx-inner-box">
            <span>N</span>
          </div>
        </div>
        <h3 class="nx-title">
          Nex<span>ora</span>
        </h3>
      </div>
      
      .nx-logo-wrap{
  text-align:center;
  color:white;
  cursor:pointer;
}

/* OUTER */
.nx-outer-box{
  width:110px;
  height:110px;
  transform:rotate(45deg);
  background:linear-gradient(135deg,#6366f1,#8b5cf6);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  border-radius:20px;
  position:relative;
  overflow:hidden;
  margin-top:30px;

  box-shadow:
    0 0 20px #6366f1,
    0 0 60px rgba(99,102,241,0.6);

  transition:0.4s;
}

/* SHINE */
.nx-outer-box::before{
  content:"";
  position:absolute;
  width:150%;
  height:100%;
  background:linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent);
  left:-150%;
  animation:nx-shine 3s infinite;
}

/* INNER */
.nx-inner-box{
  width:70px;
  height:70px;
  background:rgba(6,182,212,0.2);
  backdrop-filter: blur(10px);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:15px;
}

/* LETTER */
.nx-inner-box span{
  transform:rotate(-45deg);
  font-size:34px;
  font-weight:800;
  letter-spacing:2px;
}

/* TITLE */
.nx-title{
  margin-top:18px;
  font-size:26px;
  letter-spacing:1px;
}

.nx-title span{
  color:#06b6d4;
  text-shadow:0 0 10px #06b6d4;
}

/* HOVER */
.nx-logo-wrap:hover .nx-outer-box{
  transform:rotate(45deg) scale(1.1);
  box-shadow:
    0 0 40px #6366f1,
    0 0 80px rgba(99,102,241,1);
}

/* ANIMATION */
@keyframes nx-shine{
  100%{ left:150%; }
} 
         `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="nx-logo-wrap">
        <div class="nx-outer-box">
          <div class="nx-inner-box">
            <span>N</span>
          </div>
        </div>
        <h3 class="nx-title">
          Nex<span>ora</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* LOGO WRAP */
.nx-logo-wrap{
  text-align:center;
  color:white;
  cursor:pointer;
}

/* OUTER */
.nx-outer-box{
  width:110px;
  height:110px;
  transform:rotate(45deg);
  background:linear-gradient(135deg,#6366f1,#8b5cf6);
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  border-radius:20px;
  position:relative;
  overflow:hidden;
  margin-top:30px;

  box-shadow:
    0 0 20px #6366f1,
    0 0 60px rgba(99,102,241,0.6);

  transition:0.4s;
}

/* SHINE */
.nx-outer-box::before{
  content:"";
  position:absolute;
  width:150%;
  height:100%;
  background:linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent);
  left:-150%;
  animation:nx-shine 3s infinite;
}

/* INNER */
.nx-inner-box{
  width:70px;
  height:70px;
  background:rgba(6,182,212,0.2);
  backdrop-filter: blur(10px);
  border:1px solid rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:15px;
}

/* LETTER */
.nx-inner-box span{
  transform:rotate(-45deg);
  font-size:34px;
  font-weight:800;
  letter-spacing:2px;
}

/* TITLE */
.nx-title{
  margin-top:18px;
  font-size:26px;
  letter-spacing:1px;
}

.nx-title span{
  color:#06b6d4;
  text-shadow:0 0 10px #06b6d4;
}

/* HOVER */
.nx-logo-wrap:hover .nx-outer-box{
  transform:rotate(45deg) scale(1.1);
  box-shadow:
    0 0 40px #6366f1,
    0 0 80px rgba(99,102,241,1);
}

/* ANIMATION */
@keyframes nx-shine{
  100%{ left:150%; }
}   `}</style>
    </div>
  );
}

export function SpinnerLoader9() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="nx-logo">
        <div class="nx-box">
          <span>X</span>
        </div>
        <h3>
          Xen<span>tra</span>
        </h3>
      </div>

      .nx-logo{
  text-align:center;
  color:white;
  cursor:pointer;
}

/* NEON SQUARE */
.nx-box{
  width:100px;
  height:100px;
  border-radius:25px;
  border:2px solid #0ea5e9;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  overflow:hidden;

  box-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9,
    0 0 80px rgba(14,165,233,0.8);

  transition:0.4s;
}

/* INNER LIGHT */
.nx-box::before{
  content:"";
  position:absolute;
  width:150%;
  height:150%;
  background:radial-gradient(circle, rgba(14,165,233,0.4), transparent 70%);
  animation:nxPulse 3s infinite;
}

/* MOVING LIGHT LINE */
.nx-box::after{
  content:"";
  position:absolute;
  width:200%;
  height:100%;
  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
  left:-200%;
  animation:nxShine 2.5s linear infinite;
}

/* TEXT */
.nx-box span{
  font-size:36px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9;
}

/* BRAND */
.nx-logo h3{
  margin-top:18px;
  font-size:28px;
  letter-spacing:1px;
}

.nx-logo h3 span{
  color:#0ea5e9;
  text-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9;
}

/* HOVER EFFECT */
.nx-logo:hover .nx-box{
  transform:scale(1.1) rotate(3deg);
  box-shadow:
    0 0 20px #0ea5e9,
    0 0 60px #0ea5e9,
    0 0 120px rgba(14,165,233,1);
}

/* ANIMATION */
@keyframes nxShine{
  100%{ left:200%; }
}

@keyframes nxPulse{
  0%,100%{ transform:scale(1); opacity:0.6; }
  50%{ transform:scale(1.3); opacity:1; }
}
    

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="nx-logo">
        <div class="nx-box">
          <span>X</span>
        </div>
        <h3>
          Xen<span>tra</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* LOGO */
.nx-logo{
  text-align:center;
  color:white;
  cursor:pointer;
}

/* NEON SQUARE */
.nx-box{
  width:100px;
  height:100px;
  border-radius:25px;
  border:2px solid #0ea5e9;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  position:relative;
  overflow:hidden;

  box-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9,
    0 0 80px rgba(14,165,233,0.8);

  transition:0.4s;
}

/* INNER LIGHT */
.nx-box::before{
  content:"";
  position:absolute;
  width:150%;
  height:150%;
  background:radial-gradient(circle, rgba(14,165,233,0.4), transparent 70%);
  animation:nxPulse 3s infinite;
}

/* MOVING LIGHT LINE */
.nx-box::after{
  content:"";
  position:absolute;
  width:200%;
  height:100%;
  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
  left:-200%;
  animation:nxShine 2.5s linear infinite;
}

/* TEXT */
.nx-box span{
  font-size:36px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9;
}

/* BRAND */
.nx-logo h3{
  margin-top:18px;
  font-size:28px;
  letter-spacing:1px;
}

.nx-logo h3 span{
  color:#0ea5e9;
  text-shadow:
    0 0 10px #0ea5e9,
    0 0 30px #0ea5e9;
}

/* HOVER EFFECT */
.nx-logo:hover .nx-box{
  transform:scale(1.1) rotate(3deg);
  box-shadow:
    0 0 20px #0ea5e9,
    0 0 60px #0ea5e9,
    0 0 120px rgba(14,165,233,1);
}

/* ANIMATION */
@keyframes nxShine{
  100%{ left:200%; }
}

@keyframes nxPulse{
  0%,100%{ transform:scale(1); opacity:0.6; }
  50%{ transform:scale(1.3); opacity:1; }
}
      `}</style>
    </div>
  );
}

export function SpinnerLoader10() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="vx-logo-wrap">
        <div class="vx-tri-shape">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      .vx-tri-shape{
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid transparent;
  position:relative;
  margin:auto;
}

/* GRADIENT LAYER */
.vx-tri-shape::before{
  content:"";
  position:absolute;
  top:0;
  left:-60px;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-bottom-color:transparent;
  background:linear-gradient(135deg,#f43f5e,#fb7185);
  -webkit-mask:
    linear-gradient(#000 0 0) top/100% 100% no-repeat;
  clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
  
  box-shadow:
    0 0 20px #f43f5e,
    0 0 60px rgba(244,63,94,0.7);
}

/* INNER GLASS */
.vx-tri-shape::after{
  content:"";
  position:absolute;
  top:20px;
  left:-40px;
  border-left:40px solid transparent;
  border-right:40px solid transparent;
  border-bottom:75px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
}

/* LETTER */
.vx-tri-shape span{
  position:absolute;
  top:38px;
  left:-12px;
  font-size:32px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #fff,
    0 0 30px #f43f5e;
}

/* BRAND TEXT */
.vx-logo-wrap h3{
  margin-top:20px;
  font-size:28px;
  letter-spacing:1px;
}

.vx-logo-wrap h3 span{
  color:#f43f5e;
  text-shadow:
    0 0 10px #f43f5e,
    0 0 30px #f43f5e;
}

/* HOVER */
.vx-logo-wrap:hover .vx-tri-shape{
  transform:translateY(-5px) scale(1.08);
  transition:0.4s;
}

/* ANIMATION */
@keyframes vxGlowPulse{
  0%,100%{ filter:brightness(1); }
  50%{ filter:brightness(1.4); }
}

.vx-tri-shape::before{
  animation:vxGlowPulse 3s infinite;
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="vx-logo-wrap">
        <div class="vx-tri-shape">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       
/* TRIANGLE SHAPE */
.vx-tri-shape{
  width:0;
  height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid transparent;
  position:relative;
  margin:auto;
}

/* GRADIENT LAYER */
.vx-tri-shape::before{
  content:"";
  position:absolute;
  top:0;
  left:-60px;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:110px solid;
  border-bottom-color:transparent;
  background:linear-gradient(135deg,#f43f5e,#fb7185);
  -webkit-mask:
    linear-gradient(#000 0 0) top/100% 100% no-repeat;
  clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
  
  box-shadow:
    0 0 20px #f43f5e,
    0 0 60px rgba(244,63,94,0.7);
}

/* INNER GLASS */
.vx-tri-shape::after{
  content:"";
  position:absolute;
  top:20px;
  left:-40px;
  border-left:40px solid transparent;
  border-right:40px solid transparent;
  border-bottom:75px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
}

/* LETTER */
.vx-tri-shape span{
  position:absolute;
  top:38px;
  left:-12px;
  font-size:32px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #fff,
    0 0 30px #f43f5e;
}

/* BRAND TEXT */
.vx-logo-wrap h3{
  margin-top:20px;
  font-size:28px;
  letter-spacing:1px;
}

.vx-logo-wrap h3 span{
  color:#f43f5e;
  text-shadow:
    0 0 10px #f43f5e,
    0 0 30px #f43f5e;
}

/* HOVER */
.vx-logo-wrap:hover .vx-tri-shape{
  transform:translateY(-5px) scale(1.08);
  transition:0.4s;
}

/* ANIMATION */
@keyframes vxGlowPulse{
  0%,100%{ filter:brightness(1); }
  50%{ filter:brightness(1.4); }
}

.vx-tri-shape::before{
  animation:vxGlowPulse 3s infinite;
}
      `}</style>
    </div>
  );
}

export function SpinnerLoader11() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="zx-logo-box">
        <div class="zx-tri-core">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      .zx-logo-box{
  text-align:center;
  color:white;
  cursor:pointer;
  position:relative;
}

/* MAIN TRIANGLE */
.zx-tri-core{
  width:0;
  height:0;
  border-left:70px solid transparent;
  border-right:70px solid transparent;
  border-bottom:120px solid #f43f5e;
  position:relative;
  margin:auto;
  filter: drop-shadow(0 0 25px rgba(244,63,94,0.8));
  transition:0.5s;
  margin-top:20px;
}

/* 3D INNER LAYER */
.zx-tri-core::before{
  content:"";
  position:absolute;
  top:15px;
  left:-55px;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:95px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
}

/* EDGE GLOW LINE */
.zx-tri-core::after{
  content:"";
  position:absolute;
  top:0;
  left:-70px;
  width:0;
  height:0;
  border-left:70px solid transparent;
  border-right:70px solid transparent;
  border-bottom:120px solid transparent;
  outline:2px solid rgba(255,255,255,0.15);
}

/* LETTER */
.zx-tri-core span{
  position:absolute;
  top:45px;
  left:-14px;
  font-size:36px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #fff,
    0 0 40px #f43f5e,
    0 0 80px #f43f5e;
}

/* BRAND TEXT */
.zx-logo-box h3{
  margin-top:22px;
  font-size:30px;
  letter-spacing:2px;
}

.zx-logo-box h3 span{
  color:#f43f5e;
  text-shadow:
    0 0 10px #f43f5e,
    0 0 30px #f43f5e,
    0 0 60px #f43f5e;
}

/* ANIMATION */
.zx-tri-core::before{
  animation:zxGlassMove 4s infinite alternate;
}

@keyframes zxGlassMove{
  0%{ transform:translateY(0); opacity:0.6;}
  100%{ transform:translateY(-5px); opacity:1;}
}

/* HOVER EFFECT */
.zx-logo-box:hover .zx-tri-core{
  transform: scale(1.12) translateY(-8px) rotateX(10deg);
  filter: drop-shadow(0 0 50px rgba(244,63,94,1));
}

/* BACKGROUND GLOW */
.zx-logo-box::after{
  content:"";
  position:absolute;
  width:200px;
  height:200px;
  background: radial-gradient(circle, rgba(244,63,94,0.25), transparent 70%);
  filter: blur(40px);
  z-index:-1;
  left:50%;
  transform:translateX(-50%);
  top:20px;
  animation:zxPulse 3s infinite;
}

@keyframes zxPulse{
  0%,100%{ opacity:0.5; }
  50%{ opacity:1; }
} 
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zx-logo-box">
        <div class="zx-tri-core">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* LOGO */
.zx-logo-box{
  text-align:center;
  color:white;
  cursor:pointer;
  position:relative;
}

/* MAIN TRIANGLE */
.zx-tri-core{
  width:0;
  height:0;
  border-left:70px solid transparent;
  border-right:70px solid transparent;
  border-bottom:120px solid #f43f5e;
  position:relative;
  margin:auto;
  filter: drop-shadow(0 0 25px rgba(244,63,94,0.8));
  transition:0.5s;
  margin-top:20px;
}

/* 3D INNER LAYER */
.zx-tri-core::before{
  content:"";
  position:absolute;
  top:15px;
  left:-55px;
  border-left:55px solid transparent;
  border-right:55px solid transparent;
  border-bottom:95px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
}

/* EDGE GLOW LINE */
.zx-tri-core::after{
  content:"";
  position:absolute;
  top:0;
  left:-70px;
  width:0;
  height:0;
  border-left:70px solid transparent;
  border-right:70px solid transparent;
  border-bottom:120px solid transparent;
  outline:2px solid rgba(255,255,255,0.15);
}

/* LETTER */
.zx-tri-core span{
  position:absolute;
  top:45px;
  left:-14px;
  font-size:36px;
  font-weight:900;
  z-index:2;
  text-shadow:
    0 0 10px #fff,
    0 0 40px #f43f5e,
    0 0 80px #f43f5e;
}

/* BRAND TEXT */
.zx-logo-box h3{
  margin-top:22px;
  font-size:30px;
  letter-spacing:2px;
}

.zx-logo-box h3 span{
  color:#f43f5e;
  text-shadow:
    0 0 10px #f43f5e,
    0 0 30px #f43f5e,
    0 0 60px #f43f5e;
}

/* ANIMATION */
.zx-tri-core::before{
  animation:zxGlassMove 4s infinite alternate;
}

@keyframes zxGlassMove{
  0%{ transform:translateY(0); opacity:0.6;}
  100%{ transform:translateY(-5px); opacity:1;}
}

/* HOVER EFFECT */
.zx-logo-box:hover .zx-tri-core{
  transform: scale(1.12) translateY(-8px) rotateX(10deg);
  filter: drop-shadow(0 0 50px rgba(244,63,94,1));
}

/* BACKGROUND GLOW */
.zx-logo-box::after{
  content:"";
  position:absolute;
  width:200px;
  height:200px;
  background: radial-gradient(circle, rgba(244,63,94,0.25), transparent 70%);
  filter: blur(40px);
  z-index:-1;
  left:50%;
  transform:translateX(-50%);
  top:20px;
  animation:zxPulse 3s infinite;
}

@keyframes zxPulse{
  0%,100%{ opacity:0.5; }
  50%{ opacity:1; }
} `}</style>
    </div>
  );
}

export function SpinnerLoader12() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="nv-logo-wrap">
        <div class="nv-shape-box">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>


      .nv-logo-wrap{
  text-align:center;
  color:#e5e7eb;
}

/* SMALL SHAPE */
.nv-shape-box{
  width:85px;
  height:85px;
  margin:auto;
  position:relative;

  clip-path: polygon(
    50% 5%,
    88% 70%,
    65% 100%,
    35% 100%,
    12% 70%
  );

  background: linear-gradient(145deg,
    #e0f2fe,
    #bae6fd,
    #7dd3fc,
    #e0f2fe
  );

  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:18px;

  box-shadow:
    0 10px 25px rgba(0,0,0,0.5),
    inset 0 2px 6px rgba(255,255,255,0.6),
    inset 0 -6px 15px rgba(0,0,0,0.2);

  animation: nvFloat 5s ease-in-out infinite;
}

/* GLASS LIGHT */
.nv-shape-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:18px;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.6),
    transparent
  );
  opacity:0.5;
}

/* LETTER */
.nv-shape-box span{
  font-size:26px;
  font-weight:700;
  color:#0b1120;
}

/* TEXT */
.nv-logo-wrap h3{
  margin-top:14px;
  font-size:22px;
  font-weight:600;
}

.nv-logo-wrap h3 span{
  color:#7dd3fc;
}

/* FLOAT */
@keyframes nvFloat{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-5px); }
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="nv-logo-wrap">
        <div class="nv-shape-box">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* LOGO */
.nv-logo-wrap{
  text-align:center;
  color:#e5e7eb;
}

/* SMALL SHAPE */
.nv-shape-box{
  width:85px;
  height:85px;
  margin:auto;
  position:relative;

  clip-path: polygon(
    50% 5%,
    88% 70%,
    65% 100%,
    35% 100%,
    12% 70%
  );

  background: linear-gradient(145deg,
    #e0f2fe,
    #bae6fd,
    #7dd3fc,
    #e0f2fe
  );

  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:18px;

  box-shadow:
    0 10px 25px rgba(0,0,0,0.5),
    inset 0 2px 6px rgba(255,255,255,0.6),
    inset 0 -6px 15px rgba(0,0,0,0.2);

  animation: nvFloat 5s ease-in-out infinite;
}

/* GLASS LIGHT */
.nv-shape-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:18px;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.6),
    transparent
  );
  opacity:0.5;
}

/* LETTER */
.nv-shape-box span{
  font-size:26px;
  font-weight:700;
  color:#0b1120;
}

/* TEXT */
.nv-logo-wrap h3{
  margin-top:14px;
  font-size:22px;
  font-weight:600;
}

.nv-logo-wrap h3 span{
  color:#7dd3fc;
}

/* FLOAT */
@keyframes nvFloat{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-5px); }
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader13() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="qx-logo-wrap">
        <div class="qx-diamond-box">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      .qx-diamond-box{
  width:80px;
  height:80px;
  margin:auto;
  position:relative;

  transform:rotate(45deg);
  border-radius:16px;

  background: linear-gradient(145deg,
    #e0f2fe 0%,
    #bae6fd 30%,
    #7dd3fc 50%,
    #bae6fd 70%,
    #e0f2fe 100%
  );

  display:flex;
  justify-content:center;
  align-items:center;

  box-shadow:
    0 8px 20px rgba(0,0,0,0.5),
    inset 0 2px 8px rgba(255,255,255,0.7),
    inset 0 -6px 15px rgba(0,0,0,0.2);

  transition:0.4s ease;
}

/* 💎 FACET LIGHT */
.qx-diamond-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:16px;

  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.7) 0%,
    transparent 40%,
    rgba(255,255,255,0.4) 60%,
    transparent 100%
  );
}

/* 💎 EDGE SHINE */
.qx-diamond-box::after{
  content:"";
  position:absolute;
  width:120%;
  height:120%;
  top:-10%;
  left:-10%;
  background: radial-gradient(circle at top left,
    rgba(255,255,255,0.6),
    transparent 60%);
  opacity:0.6;
}

/* LETTER */
.qx-diamond-box span{
  transform:rotate(-45deg);
  font-size:26px;
  font-weight:700;
  color:#0b1120;
}

/* TEXT */
.qx-logo-wrap h3{
  margin-top:14px;
  font-size:22px;
  font-weight:600;
}

.qx-logo-wrap h3 span{
  color:#7dd3fc;
}

/* HOVER */
.qx-logo-wrap:hover .qx-diamond-box{
  transform:rotate(45deg) scale(1.06);
  box-shadow:
    0 12px 30px rgba(0,0,0,0.6),
    inset 0 3px 10px rgba(255,255,255,0.8);
}
    

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="qx-logo-wrap">
        <div class="qx-diamond-box">
          <span>V</span>
        </div>
        <h3>
          Ve<span>cta</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* 💎 DIAMOND */
.qx-diamond-box{
  width:80px;
  height:80px;
  margin:auto;
  position:relative;

  transform:rotate(45deg);
  border-radius:16px;

  background: linear-gradient(145deg,
    #e0f2fe 0%,
    #bae6fd 30%,
    #7dd3fc 50%,
    #bae6fd 70%,
    #e0f2fe 100%
  );

  display:flex;
  justify-content:center;
  align-items:center;

  box-shadow:
    0 8px 20px rgba(0,0,0,0.5),
    inset 0 2px 8px rgba(255,255,255,0.7),
    inset 0 -6px 15px rgba(0,0,0,0.2);

  transition:0.4s ease;
}

/* 💎 FACET LIGHT */
.qx-diamond-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:16px;

  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.7) 0%,
    transparent 40%,
    rgba(255,255,255,0.4) 60%,
    transparent 100%
  );
}

/* 💎 EDGE SHINE */
.qx-diamond-box::after{
  content:"";
  position:absolute;
  width:120%;
  height:120%;
  top:-10%;
  left:-10%;
  background: radial-gradient(circle at top left,
    rgba(255,255,255,0.6),
    transparent 60%);
  opacity:0.6;
}

/* LETTER */
.qx-diamond-box span{
  transform:rotate(-45deg);
  font-size:26px;
  font-weight:700;
  color:#0b1120;
}

/* TEXT */
.qx-logo-wrap h3{
  margin-top:14px;
  font-size:22px;
  font-weight:600;
}

.qx-logo-wrap h3 span{
  color:#7dd3fc;
}

/* HOVER */
.qx-logo-wrap:hover .qx-diamond-box{
  transform:rotate(45deg) scale(1.06);
  box-shadow:
    0 12px 30px rgba(0,0,0,0.6),
    inset 0 3px 10px rgba(255,255,255,0.8);
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader14() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="orbitix-wrap">
        <div class="orbitix-ring">
          <span>O</span>
        </div>
        <h3>
          Orbi<span class="orbitix-brand">tix</span>
        </h3>
      </div>

      .orbitix-wrap {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Main Ring */
.orbitix-ring {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:70px;
  margin-bottom:10px;
  margin-top:30px;
  background: conic-gradient(#06b6d4, #9333ea, #06b6d4);
  animation: orbitix-spin 6s linear infinite;

  box-shadow:
    0 0 20px #06b6d4,
    0 0 40px rgba(6,182,212,0.6);
}

/* Inner Core */
.orbitix-ring span {
  width: 70px;
  height: 70px;
  background: #0f172a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  z-index: 2;
}

/* Orbit Line */
.orbitix-ring::before {
  content: "";
  position: absolute;
  width: 130%;
  height: 130%;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  animation: orbitix-spin-reverse 10s linear infinite;
}

/* Small orbit dot */
.orbitix-ring::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: #06b6d4;
  border-radius: 50%;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #06b6d4;
}

/* Animations */
@keyframes orbitix-spin {
  100% { transform: rotate(360deg); }
}

@keyframes orbitix-spin-reverse {
  100% { transform: rotate(-360deg); }
}

/* Text */
.orbitix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.orbitix-brand {
  color: #06b6d4;
}

/* Hover */
.orbitix-wrap:hover .orbitix-ring {
  transform: scale(1.1);
  box-shadow:
    0 0 30px #06b6d4,
    0 0 60px rgba(6,182,212,0.9);
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="orbitix-wrap">
        <div class="orbitix-ring">
          <span>O</span>
        </div>
        <h3>
          Orbi<span class="orbitix-brand">tix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       /* Container */
.orbitix-wrap {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Main Ring */
.orbitix-ring {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:70px;
  margin-bottom:10px;
  margin-top:30px;
  background: conic-gradient(#06b6d4, #9333ea, #06b6d4);
  animation: orbitix-spin 6s linear infinite;

  box-shadow:
    0 0 20px #06b6d4,
    0 0 40px rgba(6,182,212,0.6);
}

/* Inner Core */
.orbitix-ring span {
  width: 70px;
  height: 70px;
  background: #0f172a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
  z-index: 2;
}

/* Orbit Line */
.orbitix-ring::before {
  content: "";
  position: absolute;
  width: 130%;
  height: 130%;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  animation: orbitix-spin-reverse 10s linear infinite;
}

/* Small orbit dot */
.orbitix-ring::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: #06b6d4;
  border-radius: 50%;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #06b6d4;
}

/* Animations */
@keyframes orbitix-spin {
  100% { transform: rotate(360deg); }
}

@keyframes orbitix-spin-reverse {
  100% { transform: rotate(-360deg); }
}

/* Text */
.orbitix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.orbitix-brand {
  color: #06b6d4;
}

/* Hover */
.orbitix-wrap:hover .orbitix-ring {
  transform: scale(1.1);
  box-shadow:
    0 0 30px #06b6d4,
    0 0 60px rgba(6,182,212,0.9);
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader15() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="bellal-wrap">
        <div class="bellal-box">
          <span>B</span>
        </div>
        <h3 class="bellal-text">
          Bellal<span class="bellal-accent">Dev</span>
        </h3>
      </div>


      .bellal-wrap {
        display: flex;
        align-items: center;
        gap: 14px;
        cursor: pointer;
    }

    .bellal-box {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        display: flex;
        justify-content: center;
        margin-left:30px;
        align-items: center;
        position: relative;
        box-shadow: 0 0 25px rgba(59,130,246,0.6);
        overflow: hidden;
    }

    /* Auto Shine Effect */
    .bellal-box::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
        top: 0;
        left: -100%;
        animation: bellal-shine 2.5s linear infinite;
    }

    @keyframes bellal-shine {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }

    .bellal-box span {
        font-size: 30px;
        font-weight: 800;
        color: white;
        text-shadow: 0 3px 10px rgba(0,0,0,0.3);
        transform: translateY(-2px);
    }

    .bellal-text {
        font-size: 28px;
        font-weight: 600;
        color: white;
    }

    .bellal-accent {
        color: #06b6d4;
    }

    /* Optional hover boost */
    .bellal-wrap:hover .bellal-box {
        transform: scale(1.1) rotate(8deg);
        box-shadow: 0 0 40px rgba(6,182,212,0.9);
    }
     

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="bellal-wrap">
        <div class="bellal-box">
          <span>B</span>
        </div>
        <h3 class="bellal-text">
          Bellal<span class="bellal-accent">Dev</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .bellal-wrap {
        display: flex;
        align-items: center;
        gap: 14px;
        cursor: pointer;
    }

    .bellal-box {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        display: flex;
        justify-content: center;
        margin-left:30px;
        align-items: center;
        position: relative;
        box-shadow: 0 0 25px rgba(59,130,246,0.6);
        overflow: hidden;
    }

    /* Auto Shine Effect */
    .bellal-box::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
        top: 0;
        left: -100%;
        animation: bellal-shine 2.5s linear infinite;
    }

    @keyframes bellal-shine {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }

    .bellal-box span {
        font-size: 30px;
        font-weight: 800;
        color: white;
        text-shadow: 0 3px 10px rgba(0,0,0,0.3);
        transform: translateY(-2px);
    }

    .bellal-text {
        font-size: 28px;
        font-weight: 600;
        color: white;
    }

    .bellal-accent {
        color: #06b6d4;
    }

    /* Optional hover boost */
    .bellal-wrap:hover .bellal-box {
        transform: scale(1.1) rotate(8deg);
        box-shadow: 0 0 40px rgba(6,182,212,0.9);
    }
      `}</style>
    </div>
  );
}

export function SpinnerLoader17() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="veltrix-wrap">
        <div class="veltrix-core">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="veltrix-accent">trix</span>
        </h3>
      </div>

      .veltrix-wrap {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Circle Shape */
.veltrix-core {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left:70px;
  align-items: center;
  font-size: 36px;
  font-weight: 800;
  color: #22c55e;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(34,197,94,0.5);
  box-shadow:
    0 0 15px #22c55e,
    inset 0 0 10px rgba(255,255,255,0.1);
  overflow: hidden;
}

/* Rotating Neon Ring */
.veltrix-core::before {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  border-radius: 50%;
  background: conic-gradient(#22c55e, transparent, #22c55e);
  animation: veltrix-rotate 4s linear infinite;
}

/* Inner dark layer */
.veltrix-core::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 80%;
  background: #0f172a;
  border-radius: 50%;
}

/* Text stays on top */
.veltrix-core span {
  position: relative;
  z-index: 2;
}

/* Animations */
@keyframes veltrix-rotate {
  100% { transform: rotate(360deg); }
}

/* Brand text */
.veltrix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.veltrix-accent {
  color: #22c55e;
}

/* Hover */
.veltrix-wrap:hover .veltrix-core {
  transform: scale(1.1);
  box-shadow:
    0 0 30px #22c55e,
    0 0 60px rgba(34,197,94,0.8);
}
   

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-wrap">
        <div class="veltrix-core">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="veltrix-accent">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* Container */
.veltrix-wrap {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Circle Shape */
.veltrix-core {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left:70px;
  align-items: center;
  font-size: 36px;
  font-weight: 800;
  color: #22c55e;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(34,197,94,0.5);
  box-shadow:
    0 0 15px #22c55e,
    inset 0 0 10px rgba(255,255,255,0.1);
  overflow: hidden;
}

/* Rotating Neon Ring */
.veltrix-core::before {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  border-radius: 50%;
  background: conic-gradient(#22c55e, transparent, #22c55e);
  animation: veltrix-rotate 4s linear infinite;
}

/* Inner dark layer */
.veltrix-core::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 80%;
  background: #0f172a;
  border-radius: 50%;
}

/* Text stays on top */
.veltrix-core span {
  position: relative;
  z-index: 2;
}

/* Animations */
@keyframes veltrix-rotate {
  100% { transform: rotate(360deg); }
}

/* Brand text */
.veltrix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.veltrix-accent {
  color: #22c55e;
}

/* Hover */
.veltrix-wrap:hover .veltrix-core {
  transform: scale(1.1);
  box-shadow:
    0 0 30px #22c55e,
    0 0 60px rgba(34,197,94,0.8);
}
      `}</style>
    </div>
  );
}
export function SpinnerLoader18() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="logo-7">
        <div class="glass-box">Z</div>
        <h3>
          Zent<span>ro</span>
        </h3>
      </div>
  
      * Container */
.logo-7 {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Glass Box */
.glass-box {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  margin-left: 70px;
  margin-bottom:20px;
  align-items: center;
  font-size: 36px;
  font-weight: 800;
  color: white;
  position: relative;

  /* Glass effect */
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);

  /* Glow */
  box-shadow:
    0 0 20px rgba(6,182,212,0.4),
    inset 0 0 20px rgba(255,255,255,0.1);

  overflow: hidden;
  transition: 0.4s;
}

/* Gradient border glow */
.glass-box::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 24px;
  background: linear-gradient(135deg, #06b6d4, #9333ea, #06b6d4);
  z-index: -1;
  filter: blur(8px);
  opacity: 0.7;
}

/* Shine effect */
.glass-box::after {
  content: "";
  position: absolute;
  width: 150%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
  left: -150%;
  animation: shine 3s linear infinite;
}

/* Animation */
@keyframes shine {
  100% { left: 150%; }
}

/* Brand text */
.logo h3 {
  margin-top: 15px;
  font-size: 28px;
}

.logo-7 span {
  color: #06b6d4;
}

/* Hover */
.logo-7:hover .glass-box {
  transform: scale(1.1) rotate(5deg);
  box-shadow:
    0 0 30px rgba(6,182,212,0.8),
    inset 0 0 25px rgba(255,255,255,0.2);
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="logo-7">
        <div class="glass-box">Z</div>
        <h3>
          Zent<span>ro</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* Container */
.logo-7 {
  text-align: center;
  color: white;
  cursor: pointer;
}

/* Glass Box */
.glass-box {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  margin-left: 70px;
  margin-bottom:20px;
  align-items: center;
  font-size: 36px;
  font-weight: 800;
  color: white;
  position: relative;

  /* Glass effect */
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);

  /* Glow */
  box-shadow:
    0 0 20px rgba(6,182,212,0.4),
    inset 0 0 20px rgba(255,255,255,0.1);

  overflow: hidden;
  transition: 0.4s;
}

/* Gradient border glow */
.glass-box::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 24px;
  background: linear-gradient(135deg, #06b6d4, #9333ea, #06b6d4);
  z-index: -1;
  filter: blur(8px);
  opacity: 0.7;
}

/* Shine effect */
.glass-box::after {
  content: "";
  position: absolute;
  width: 150%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
  left: -150%;
  animation: shine 3s linear infinite;
}

/* Animation */
@keyframes shine {
  100% { left: 150%; }
}

/* Brand text */
.logo h3 {
  margin-top: 15px;
  font-size: 28px;
}

.logo-7 span {
  color: #06b6d4;
}

/* Hover */
.logo-7:hover .glass-box {
  transform: scale(1.1) rotate(5deg);
  box-shadow:
    0 0 30px rgba(6,182,212,0.8),
    inset 0 0 25px rgba(255,255,255,0.2);
}`}</style>
    </div>
  );
}
export function SpinnerLoader19() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="zyrix-wrap">
        <div class="zyrix-blob">Z</div>
        <h3>
          Zy<span class="zyrix-accent">rix</span>
        </h3>
      </div>

      .zyrix-wrap {
  text-align: center;
  color: white;
}

/* Blob Shape */
.zyrix-blob {
  width: 120px;
  height: 120px;
  margin: auto;
  background: linear-gradient(135deg, #06b6d4, #9333ea);
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  color: white;
  box-shadow:
    0 0 30px rgba(6,182,212,0.6),
    0 0 60px rgba(147,51,234,0.5);
  animation: zyrix-morph 6s ease-in-out infinite;
  transition: 0.4s;
}

/* Morph animation */
@keyframes zyrix-morph {
  0% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 40% 60% 45% 55% / 60% 40% 60% 40%;
  }
  100% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
}

/* Text */
.zyrix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.zyrix-accent {
  color: #06b6d4;
}

/* Hover */
.zyrix-wrap:hover .zyrix-blob {
  transform: scale(1.1);
  box-shadow:
    0 0 40px rgba(6,182,212,0.9),
    0 0 80px rgba(147,51,234,0.8);
}
     

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zyrix-wrap">
        <div class="zyrix-blob">Z</div>
        <h3>
          Zy<span class="zyrix-accent">rix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       /* Container */
.zyrix-wrap {
  text-align: center;
  color: white;
}

/* Blob Shape */
.zyrix-blob {
  width: 120px;
  height: 120px;
  margin: auto;
  background: linear-gradient(135deg, #06b6d4, #9333ea);
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
  color: white;
  box-shadow:
    0 0 30px rgba(6,182,212,0.6),
    0 0 60px rgba(147,51,234,0.5);
  animation: zyrix-morph 6s ease-in-out infinite;
  transition: 0.4s;
}

/* Morph animation */
@keyframes zyrix-morph {
  0% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 40% 60% 45% 55% / 60% 40% 60% 40%;
  }
  100% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
}

/* Text */
.zyrix-wrap h3 {
  margin-top: 15px;
  font-size: 28px;
}

.zyrix-accent {
  color: #06b6d4;
}

/* Hover */
.zyrix-wrap:hover .zyrix-blob {
  transform: scale(1.1);
  box-shadow:
    0 0 40px rgba(6,182,212,0.9),
    0 0 80px rgba(147,51,234,0.8);
}
      `}</style>
    </div>
  );
}

export function SpinnerLoader20() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="zyrix-ultra-wrap">
        <div class="zyrix-ultra-blob">Z</div>
        <h3>
          Zy<span class="zyrix-ultra-accent">rix</span>
        </h3>
      </div>

      .zyrix-ultra-wrap {
  text-align: center;
  color: white;
  position: relative;
}

/* Blob Shape */
.zyrix-ultra-blob {
  width: 140px;
  height: 140px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 900;
  color: white;

  background: linear-gradient(135deg, #06b6d4, #9333ea, #06b6d4);
  background-size: 200% 200%;

  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  
  box-shadow:
    0 0 30px rgba(6,182,212,0.7),
    0 0 60px rgba(147,51,234,0.6),
    inset 0 0 25px rgba(255,255,255,0.2);

  animation: zyrix-ultra-morph 6s ease-in-out infinite,
             zyrix-ultra-gradientMove 5s ease infinite;
  overflow: hidden;
}

/* Gradient animation */
@keyframes zyrix-ultra-gradientMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Morph animation */
@keyframes zyrix-ultra-morph {
  0% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 45% 55% 60% 40% / 60% 40% 55% 45%;
  }
  100% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
}

/* Glass shine */
.zyrix-ultra-blob::before {
  content: "";
  position: absolute;
  width: 160%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
  left: -160%;
  animation: zyrix-ultra-shine 3s linear infinite;
}

@keyframes zyrix-ultra-shine {
  100% { left: 160%; }
}

/* Floating particles */
.zyrix-ultra-blob::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: #06b6d4;
  border-radius: 50%;
  top: 10%;
  left: 20%;
  box-shadow:
    40px 30px #9333ea,
    70px 60px #06b6d4,
    20px 80px #9333ea;
  animation: zyrix-ultra-float 6s ease-in-out infinite;
}

@keyframes zyrix-ultra-float {
  50% {
    transform: translateY(-10px);
  }
}

/* Text */
.zyrix-ultra-wrap h3 {
  margin-top: 20px;
  font-size: 30px;
  letter-spacing: 1px;
}

.zyrix-ultra-accent {
  background: linear-gradient(135deg, #06b6d4, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hover */
.zyrix-ultra-wrap:hover .zyrix-ultra-blob {
  transform: scale(1.1);
  box-shadow:
    0 0 50px rgba(6,182,212,1),
    0 0 100px rgba(147,51,234,1);
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zyrix-ultra-wrap">
        <div class="zyrix-ultra-blob">Z</div>
        <h3>
          Zy<span class="zyrix-ultra-accent">rix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        /* Container */
.zyrix-ultra-wrap {
  text-align: center;
  color: white;
  position: relative;
}

/* Blob Shape */
.zyrix-ultra-blob {
  width: 140px;
  height: 140px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 900;
  color: white;

  background: linear-gradient(135deg, #06b6d4, #9333ea, #06b6d4);
  background-size: 200% 200%;

  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  
  box-shadow:
    0 0 30px rgba(6,182,212,0.7),
    0 0 60px rgba(147,51,234,0.6),
    inset 0 0 25px rgba(255,255,255,0.2);

  animation: zyrix-ultra-morph 6s ease-in-out infinite,
             zyrix-ultra-gradientMove 5s ease infinite;
  overflow: hidden;
}

/* Gradient animation */
@keyframes zyrix-ultra-gradientMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Morph animation */
@keyframes zyrix-ultra-morph {
  0% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 45% 55% 60% 40% / 60% 40% 55% 45%;
  }
  100% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
}

/* Glass shine */
.zyrix-ultra-blob::before {
  content: "";
  position: absolute;
  width: 160%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
  left: -160%;
  animation: zyrix-ultra-shine 3s linear infinite;
}

@keyframes zyrix-ultra-shine {
  100% { left: 160%; }
}

/* Floating particles */
.zyrix-ultra-blob::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: #06b6d4;
  border-radius: 50%;
  top: 10%;
  left: 20%;
  box-shadow:
    40px 30px #9333ea,
    70px 60px #06b6d4,
    20px 80px #9333ea;
  animation: zyrix-ultra-float 6s ease-in-out infinite;
}

@keyframes zyrix-ultra-float {
  50% {
    transform: translateY(-10px);
  }
}

/* Text */
.zyrix-ultra-wrap h3 {
  margin-top: 20px;
  font-size: 30px;
  letter-spacing: 1px;
}

.zyrix-ultra-accent {
  background: linear-gradient(135deg, #06b6d4, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hover */
.zyrix-ultra-wrap:hover .zyrix-ultra-blob {
  transform: scale(1.1);
  box-shadow:
    0 0 50px rgba(6,182,212,1),
    0 0 100px rgba(147,51,234,1);
} `}</style>
    </div>
  );
}

export function SpinnerLoader21() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-p">
        <div class="vp-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vp-brand">trix</span>
        </h3>
      </div>

       .veltrix-p{text-align:center;color:#fff;}
.vp-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#a855f7;
  border:2px solid rgba(168,85,247,.5);
  box-shadow:0 0 15px #a855f7;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vp-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#a855f7,transparent,#a855f7);
  animation:vp-spin 4s linear infinite;
}
.vp-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vp-circle span{position:relative;z-index:2;}
@keyframes vp-spin{100%{transform:rotate(360deg);}}
.veltrix-p h3{margin-top:10px;}
.vp-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-p">
        <div class="vp-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vp-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-p{text-align:center;color:#fff;}
.vp-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#a855f7;
  border:2px solid rgba(168,85,247,.5);
  box-shadow:0 0 15px #a855f7;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vp-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#a855f7,transparent,#a855f7);
  animation:vp-spin 4s linear infinite;
}
.vp-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vp-circle span{position:relative;z-index:2;}
@keyframes vp-spin{100%{transform:rotate(360deg);}}
.veltrix-p h3{margin-top:10px;}
.vp-brand{color:#a855f7;}`}</style>
    </div>
  );
}

export function SpinnerLoader22() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-b">
        <div class="vb-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vb-brand">trix</span>
        </h3>
      </div>

       .veltrix-b{text-align:center;color:#fff;}
.vb-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#3b82f6;
  border:2px solid rgba(59,130,246,.5);
  box-shadow:0 0 15px #3b82f6;
  margin-left:70px;
  position:relative;overflow:hidden;
}
.vb-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#3b82f6,transparent,#3b82f6);
  animation:vb-spin 4s linear infinite;
}
.vb-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vb-circle span{position:relative;z-index:2;}
@keyframes vb-spin{100%{transform:rotate(360deg);}}
.veltrix-b h3{margin-top:10px;}
.vb-brand{color:#3b82f6;}
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-b">
        <div class="vb-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vb-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-b{text-align:center;color:#fff;}
.vb-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#3b82f6;
  border:2px solid rgba(59,130,246,.5);
  box-shadow:0 0 15px #3b82f6;
  margin-left:70px;
  position:relative;overflow:hidden;
}
.vb-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#3b82f6,transparent,#3b82f6);
  animation:vb-spin 4s linear infinite;
}
.vb-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vb-circle span{position:relative;z-index:2;}
@keyframes vb-spin{100%{transform:rotate(360deg);}}
.veltrix-b h3{margin-top:10px;}
.vb-brand{color:#3b82f6;}`}</style>
    </div>
  );
}

export function SpinnerLoader23() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="veltrix-r">
        <div class="vr-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vr-brand">trix</span>
        </h3>
      </div>

      .veltrix-r{text-align:center;color:#fff;}
.vr-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#ef4444;
  border:2px solid rgba(239,68,68,.5);
  box-shadow:0 0 15px #ef4444;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vr-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#ef4444,transparent,#ef4444);
  animation:vr-spin 4s linear infinite;
}
.vr-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vr-circle span{position:relative;z-index:2;}
@keyframes vr-spin{100%{transform:rotate(360deg);}}
.veltrix-r h3{margin-top:10px;}
.vr-brand{color:#ef4444;} 

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-r">
        <div class="vr-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vr-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-r{text-align:center;color:#fff;}
.vr-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#ef4444;
  border:2px solid rgba(239,68,68,.5);
  box-shadow:0 0 15px #ef4444;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vr-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#ef4444,transparent,#ef4444);
  animation:vr-spin 4s linear infinite;
}
.vr-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vr-circle span{position:relative;z-index:2;}
@keyframes vr-spin{100%{transform:rotate(360deg);}}
.veltrix-r h3{margin-top:10px;}
.vr-brand{color:#ef4444;} `}</style>
    </div>
  );
}

export function SpinnerLoader24() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-y">
        <div class="vy-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vy-brand">trix</span>
        </h3>
      </div>

      .veltrix-y{text-align:center;color:#fff;}
.vy-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#facc15;
  border:2px solid rgba(250,204,21,.5);
  box-shadow:0 0 15px #facc15;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vy-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#facc15,transparent,#facc15);
  animation:vy-spin 4s linear infinite;
}
.vy-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vy-circle span{position:relative;z-index:2;}
@keyframes vy-spin{100%{transform:rotate(360deg);}}
.veltrix-y h3{margin-top:10px;}
.vy-brand{color:#facc15;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-y">
        <div class="vy-circle">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vy-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-y{text-align:center;color:#fff;}
.vy-circle{
  width:100px;height:100px;border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  color:#facc15;
  border:2px solid rgba(250,204,21,.5);
  box-shadow:0 0 15px #facc15;
  position:relative;overflow:hidden;
  margin-left:70px;
}
.vy-circle::before{
  content:"";position:absolute;width:140%;height:140%;
  border-radius:50%;
  background:conic-gradient(#facc15,transparent,#facc15);
  animation:vy-spin 4s linear infinite;
}
.vy-circle::after{
  content:"";position:absolute;width:80%;height:80%;
  background:#0f172a;border-radius:50%;
}
.vy-circle span{position:relative;z-index:2;}
@keyframes vy-spin{100%{transform:rotate(360deg);}}
.veltrix-y h3{margin-top:10px;}
.vy-brand{color:#facc15;}`}</style>
    </div>
  );
}

export function SpinnerLoader25() {
  const [copied, setCopied] = useState(false);
  const code = ` 
      <div class="logo1">
        <span>N</span>
      </div>

      .logo1{
  width:80px;
  height:80px;
  border-radius:50%;
  border:2px solid #00f0ff;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#00f0ff;
  font-size:30px;
  margin-left:80px;
  animation:pulse 2s infinite;
}

@keyframes pulse{
  0%{ box-shadow:0 0 5px #00f0ff;}
  50%{ box-shadow:0 0 25px #00f0ff;}
  100%{ box-shadow:0 0 5px #00f0ff;}
} 

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="logo1">
        <span>N</span>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .logo1{
  width:80px;
  height:80px;
  border-radius:50%;
  border:2px solid #00f0ff;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#00f0ff;
  font-size:30px;
  margin-left:80px;
  animation:pulse 2s infinite;
}

@keyframes pulse{
  0%{ box-shadow:0 0 5px #00f0ff;}
  50%{ box-shadow:0 0 25px #00f0ff;}
  100%{ box-shadow:0 0 5px #00f0ff;}
} `}</style>
    </div>
  );
}

export function SpinnerLoader26() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="voltis">
        <div class="vl-mark"></div>
        <div class="vl-name">
          Vol<span>tis</span>
        </div>
      </div>
  
       .voltis{display:flex;align-items:center;gap:12px;cursor:pointer;}
.vl-mark{
  width:42px;height:42px;
  background:#facc15;
  clip-path:polygon(40% 0%,70% 0%,50% 50%,80% 50%,30% 100%,45% 60%,25% 60%);
  animation:pulse 1.5s infinite;
  margin-left:50px;
}
@keyframes pulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.1);}
}
.vl-name{font-size:24px;font-weight:600;color:white;}
.vl-name span{color:white;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="voltis">
        <div class="vl-mark"></div>
        <div class="vl-name">
          Vol<span>tis</span>
        </div>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .voltis{display:flex;align-items:center;gap:12px;cursor:pointer;}
.vl-mark{
  width:42px;height:42px;
  background:#facc15;
  clip-path:polygon(40% 0%,70% 0%,50% 50%,80% 50%,30% 100%,45% 60%,25% 60%);
  animation:pulse 1.5s infinite;
  margin-left:50px;
}
@keyframes pulse{
  0%,100%{transform:scale(1);}
  50%{transform:scale(1.1);}
}
.vl-name{font-size:24px;font-weight:600;color:white;}
.vl-name span{color:white;}
`}</style>
    </div>
  );
}

export function SpinnerLoader27() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="blockra">
        <div class="blk-shape">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>
          Block<span class="blk-brand">ra</span>
        </h3>
      </div>
  
      .blockra{text-align:center;color:#fff;}
.blk-shape{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-left:50px;
  margin-bottom:20px;
}
.blk-shape div{
  width:100px;height:20px;
  background:#f59e0b;
  animation:blockra-move 2s infinite alternate;
}
.blk-shape div:nth-child(2){animation-delay:.5s;}
.blk-shape div:nth-child(3){animation-delay:1s;}
@keyframes blockra-move{
  0%{transform:translateX(0);}
  100%{transform:translateX(20px);}
}
.blk-brand{color:#f59e0b;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="blockra">
        <div class="blk-shape">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>
          Block<span class="blk-brand">ra</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .blockra{text-align:center;color:#fff;}
.blk-shape{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-left:50px;
  margin-bottom:20px;
}
.blk-shape div{
  width:100px;height:20px;
  background:#f59e0b;
  animation:blockra-move 2s infinite alternate;
}
.blk-shape div:nth-child(2){animation-delay:.5s;}
.blk-shape div:nth-child(3){animation-delay:1s;}
@keyframes blockra-move{
  0%{transform:translateX(0);}
  100%{transform:translateX(20px);}
}
.blk-brand{color:#f59e0b;}
        `}</style>
    </div>
  );
}

export function SpinnerLoader28() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="helixa">
        <div class="hx-shape">
          <span>H</span>
        </div>
        <h3>
          Heli<span class="hx-brand">xa</span>
        </h3>
      </div>

       .helixa{text-align:center;color:#fff;}
.hx-shape{
  width:120px;height:120px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  margin-left:60px;
  margin-bottom:30px;
}
.hx-shape::before,
.hx-shape::after{
  content:"";
  position:absolute;
  width:4px;height:100%;
  background:#22c55e;
  border-radius:10px;
  animation:helix 2s infinite alternate;
}
.hx-shape::after{
  left:70px;
  animation-delay:1s;
}
@keyframes helix{
  0%{transform:translateY(-15px);}
  100%{transform:translateY(15px);}
}
.hx-shape span{
  font-size:28px;font-weight:800;color:#22c55e;
}
.hx-brand{color:#22c55e;} 

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="helixa">
        <div class="hx-shape">
          <span>H</span>
        </div>
        <h3>
          Heli<span class="hx-brand">xa</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .helixa{text-align:center;color:#fff;}
.hx-shape{
  width:120px;height:120px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  margin-left:60px;
  margin-bottom:30px;
}
.hx-shape::before,
.hx-shape::after{
  content:"";
  position:absolute;
  width:4px;height:100%;
  background:#22c55e;
  border-radius:10px;
  animation:helix 2s infinite alternate;
}
.hx-shape::after{
  left:70px;
  animation-delay:1s;
}
@keyframes helix{
  0%{transform:translateY(-15px);}
  100%{transform:translateY(15px);}
}
.hx-shape span{
  font-size:28px;font-weight:800;color:#22c55e;
}
.hx-brand{color:#22c55e;} `}</style>
    </div>
  );
}

export function SpinnerLoader29() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="vortix">
        <div class="vo-shape">
          <span>V</span>
        </div>
        <h3>
          Vor<span class="vo-brand">tix</span>
        </h3>
      </div>

      .vortix{text-align:center;color:#fff;}
.vo-shape{
  width:120px;height:120px;
  border-radius:50%;
  background:conic-gradient(#06b6d4,#3b82f6,#a855f7,#06b6d4);
  animation:vortix-spin 5s linear infinite;
  display:flex;justify-content:center;align-items:center;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes vortix-spin{
  100%{transform:rotate(360deg);}
}
.vo-shape span{
  font-size:30px;font-weight:800;color:#020617;
}
.vo-brand{color:#3b82f6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="vortix">
        <div class="vo-shape">
          <span>V</span>
        </div>
        <h3>
          Vor<span class="vo-brand">tix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .vortix{text-align:center;color:#fff;}
.vo-shape{
  width:120px;height:120px;
  border-radius:50%;
  background:conic-gradient(#06b6d4,#3b82f6,#a855f7,#06b6d4);
  animation:vortix-spin 5s linear infinite;
  display:flex;justify-content:center;align-items:center;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes vortix-spin{
  100%{transform:rotate(360deg);}
}
.vo-shape span{
  font-size:30px;font-weight:800;color:#020617;
}
.vo-brand{color:#3b82f6;}`}</style>
    </div>
  );
}

export function SpinnerLoader30() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="gearix">
        <div class="grx-shape">
          <span>G</span>
        </div>
        <h3>
          Gea<span class="grx-brand">rix</span>
        </h3>
      </div>

      .gearix{text-align:center;color:#fff;}
.grx-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:6px dashed #f59e0b;
  display:flex;justify-content:center;align-items:center;
  animation:gearix-spin 5s linear infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes gearix-spin{
  100%{transform:rotate(360deg);}
}
.grx-shape span{
  font-size:30px;font-weight:800;color:#f59e0b;
}
.grx-brand{color:#f59e0b;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="gearix">
        <div class="grx-shape">
          <span>G</span>
        </div>
        <h3>
          Gea<span class="grx-brand">rix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gearix{text-align:center;color:#fff;}
.grx-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:6px dashed #f59e0b;
  display:flex;justify-content:center;align-items:center;
  animation:gearix-spin 5s linear infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes gearix-spin{
  100%{transform:rotate(360deg);}
}
.grx-shape span{
  font-size:30px;font-weight:800;color:#f59e0b;
}
.grx-brand{color:#f59e0b;}`}</style>
    </div>
  );
}
export function SpinnerLoader31() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-d">
        <div class="vd-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vd-brand">trix</span>
        </h3>
      </div>

      .veltrix-d{text-align:center;color:#fff;}
.vd-shape{
  width:100px;height:100px;
  transform:rotate(45deg);
  display:flex;justify-content:center;align-items:center;
  border:2px solid #06b6d4;
  box-shadow:0 0 20px #06b6d4;
  position:relative;
  margin-left:70px;
  margin-top:30px;
  margin-bottom: 30px;
}
.vd-shape span{
  transform:rotate(-45deg);
  font-size:32px;font-weight:800;color:#06b6d4;
}
.veltrix-d h3{margin-top:15px;}
.vd-brand{color:#06b6d4;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-d">
        <div class="vd-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vd-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-d{text-align:center;color:#fff;}
.vd-shape{
  width:100px;height:100px;
  transform:rotate(45deg);
  display:flex;justify-content:center;align-items:center;
  border:2px solid #06b6d4;
  box-shadow:0 0 20px #06b6d4;
  position:relative;
  margin-left:70px;
  margin-top:30px;
  margin-bottom: 30px;
}
.vd-shape span{
  transform:rotate(-45deg);
  font-size:32px;font-weight:800;color:#06b6d4;
}
.veltrix-d h3{margin-top:15px;}
.vd-brand{color:#06b6d4;}`}</style>
    </div>
  );
}

export function SpinnerLoader32() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="veltrix-t">
        <div class="vt-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vt-brand">trix</span>
        </h3>
      </div>

       .veltrix-t{text-align:center;color:#fff;}
.vt-shape{
  width:0;height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:100px solid #8b5cf6;
  position:relative;
  filter:drop-shadow(0 0 15px #8b5cf6);
  margin-left:70px;
  margin-top:20px;
}
.vt-shape span{
  position:absolute;top:40px;left:-10px;
  color:white;font-weight:800;font-size:28px;
}
.veltrix-t h3{margin-top:15px;}
.vt-brand{color:#8b5cf6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-t">
        <div class="vt-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vt-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-t{text-align:center;color:#fff;}
.vt-shape{
  width:0;height:0;
  border-left:60px solid transparent;
  border-right:60px solid transparent;
  border-bottom:100px solid #8b5cf6;
  position:relative;
  filter:drop-shadow(0 0 15px #8b5cf6);
  margin-left:70px;
  margin-top:20px;
}
.vt-shape span{
  position:absolute;top:40px;left:-10px;
  color:white;font-weight:800;font-size:28px;
}
.veltrix-t h3{margin-top:15px;}
.vt-brand{color:#8b5cf6;}
`}</style>
    </div>
  );
}

export function SpinnerLoader33() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-sq">
        <div class="vsq-shape">V</div>
        <h3>
          Vel<span class="vsq-brand">trix</span>
        </h3>
      </div>

      .gearix{text-align:center;color:#fff;}
.grx-sha.veltrix-sq{text-align:center;color:#fff;}
.vsq-shape{
  width:100px;height:100px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(10px);
  border:2px solid rgba(59,130,246,.5);
  box-shadow:0 0 20px #3b82f6;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#3b82f6;
  margin-left:70px;
}
.veltrix-sq h3{margin-top:15px;}
.vsq-brand{color:#3b82f6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-sq">
        <div class="vsq-shape">V</div>
        <h3>
          Vel<span class="vsq-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gearix{text-align:center;color:#fff;}
.grx-sha.veltrix-sq{text-align:center;color:#fff;}
.vsq-shape{
  width:100px;height:100px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(10px);
  border:2px solid rgba(59,130,246,.5);
  box-shadow:0 0 20px #3b82f6;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#3b82f6;
  margin-left:70px;
}
.veltrix-sq h3{margin-top:15px;}
.vsq-brand{color:#3b82f6;}`}</style>
    </div>
  );
}

export function SpinnerLoader34() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-hx">
        <div class="vhx-shape">V</div>
        <h3>
          Vel<span class="vhx-brand">trix</span>
        </h3>
      </div>

      .veltrix-hx{text-align:center;color:#fff;}
.vhx-shape{
  width:100px;height:55px;
  background:#f59e0b;
  position:relative;
  margin:27px 0;
  display:flex;justify-content:center;align-items:center;
  color:#000;font-size:30px;font-weight:800;
  box-shadow:0 0 20px #f59e0b;
  margin-left:70px;
  margin-bottom:40px;
}
.vhx-shape:before,
.vhx-shape:after{
  content:"";
  position:absolute;
  width:0;border-left:50px solid transparent;
  border-right:50px solid transparent;
}
.vhx-shape:before{
  bottom:100%;
  border-bottom:27px solid #f59e0b;
}
.vhx-shape:after{
  top:100%;
  border-top:27px solid #f59e0b;
}
.veltrix-hx h3{margin-top:10px;}
.vhx-brand{color:#f59e0b;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-hx">
        <div class="vhx-shape">V</div>
        <h3>
          Vel<span class="vhx-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-hx{text-align:center;color:#fff;}
.vhx-shape{
  width:100px;height:55px;
  background:#f59e0b;
  position:relative;
  margin:27px 0;
  display:flex;justify-content:center;align-items:center;
  color:#000;font-size:30px;font-weight:800;
  box-shadow:0 0 20px #f59e0b;
  margin-left:70px;
  margin-bottom:40px;
}
.vhx-shape:before,
.vhx-shape:after{
  content:"";
  position:absolute;
  width:0;border-left:50px solid transparent;
  border-right:50px solid transparent;
}
.vhx-shape:before{
  bottom:100%;
  border-bottom:27px solid #f59e0b;
}
.vhx-shape:after{
  top:100%;
  border-top:27px solid #f59e0b;
}
.veltrix-hx h3{margin-top:10px;}
.vhx-brand{color:#f59e0b;}`}</style>
    </div>
  );
}

export function SpinnerLoader35() {
  const [copied, setCopied] = useState(false);
  const code = ` 
         <div class="veltrix-or">
        <div class="vor-shape">V</div>
        <h3>
          Vel<span class="vor-brand">trix</span>
        </h3>
      </div>

      .veltrix-or{text-align:center;color:#fff;}
.vor-shape{
  width:100px;height:100px;border-radius:50%;
  border:2px solid #ec4899;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;color:#ec4899;
  margin-left:70px;
  margin-top:20px;
}
.vor-shape::before{
  content:"";
  position:absolute;
  width:140%;height:2px;
  background:#ec4899;
  animation:orbit 3s linear infinite;
}
@keyframes orbit{
  100%{transform:rotate(360deg);}
}
.veltrix-or h3{margin-top:15px;}
.vor-brand{color:#ec4899;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-or">
        <div class="vor-shape">V</div>
        <h3>
          Vel<span class="vor-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .veltrix-or{text-align:center;color:#fff;}
.vor-shape{
  width:100px;height:100px;border-radius:50%;
  border:2px solid #ec4899;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;color:#ec4899;
  margin-left:70px;
  margin-top:20px;
}
.vor-shape::before{
  content:"";
  position:absolute;
  width:140%;height:2px;
  background:#ec4899;
  animation:orbit 3s linear infinite;
}
@keyframes orbit{
  100%{transform:rotate(360deg);}
}
.veltrix-or h3{margin-top:15px;}
.vor-brand{color:#ec4899;}`}</style>
    </div>
  );
}
export function SpinnerLoader36() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="veltrix-st">
        <div class="vst-shape">
          ★<span>V</span>
        </div>
        <h3>
          Vel<span class="vst-brand">trix</span>
        </h3>
      </div>

      .veltrix-st{text-align:center;color:#fff;}
.vst-shape{
  font-size:70px;
  color:#f43f5e;
  text-shadow:0 0 20px #f43f5e;
}
.vst-shape span{
  position:absolute;
  margin-left:-22px;margin-top:18px;
  font-size:24px;font-weight:800;
  color:white;
}
.veltrix-st h3{margin-top:10px;}
.vst-brand{color:#f43f5e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-st">
        <div class="vst-shape">
          ★<span>V</span>
        </div>
        <h3>
          Vel<span class="vst-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-st{text-align:center;color:#fff;}
.vst-shape{
  font-size:70px;
  color:#f43f5e;
  text-shadow:0 0 20px #f43f5e;
}
.vst-shape span{
  position:absolute;
  margin-left:-22px;margin-top:18px;
  font-size:24px;font-weight:800;
  color:white;
}
.veltrix-st h3{margin-top:10px;}
.vst-brand{color:#f43f5e;}`}</style>
    </div>
  );
}

export function SpinnerLoader37() {
  const [copied, setCopied] = useState(false);
  const code = ` 
   <div class="veltrix-orb">
        <div class="vorb-shape">V</div>
        <h3>
          Vel<span class="vorb-brand">trix</span>
        </h3>
      </div>
  
       .veltrix-orb{text-align:center;color:#fff;}
.vorb-shape{
  width:110px;height:110px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%, #38bdf8, #0f172a);
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  color:white;
  box-shadow:0 0 30px #38bdf8;
  margin-left:70px;
}
.veltrix-orb h3{margin-top:15px;}
.vorb-brand{color:#38bdf8;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-orb">
        <div class="vorb-shape">V</div>
        <h3>
          Vel<span class="vorb-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .veltrix-orb{text-align:center;color:#fff;}
.vorb-shape{
  width:110px;height:110px;border-radius:50%;
  background:radial-gradient(circle at 30% 30%, #38bdf8, #0f172a);
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  color:white;
  box-shadow:0 0 30px #38bdf8;
  margin-left:70px;
}
.veltrix-orb h3{margin-top:15px;}
.vorb-brand{color:#38bdf8;}`}</style>
    </div>
  );
}

export function SpinnerLoader38() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="veltrix-eye">
        <div class="veye-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="veye-brand">trix</span>
        </h3>
      </div>
  
      ..veltrix-eye{text-align:center;color:#fff;}
.veye-shape{
  width:140px;height:70px;
  background:#22c55e;
  border-radius:70px/35px;
  display:flex;justify-content:center;align-items:center;
  box-shadow:0 0 20px #22c55e;
  margin-left:50px;
}
.veye-shape span{
  width:40px;height:40px;
  background:#020617;
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  color:#22c55e;font-weight:800;
}
.veltrix-eye h3{margin-top:15px;}
.veye-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-eye">
        <div class="veye-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="veye-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        ..veltrix-eye{text-align:center;color:#fff;}
.veye-shape{
  width:140px;height:70px;
  background:#22c55e;
  border-radius:70px/35px;
  display:flex;justify-content:center;align-items:center;
  box-shadow:0 0 20px #22c55e;
  margin-left:50px;
}
.veye-shape span{
  width:40px;height:40px;
  background:#020617;
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  color:#22c55e;font-weight:800;
}
.veltrix-eye h3{margin-top:15px;}
.veye-brand{color:#22c55e;}`}</style>
    </div>
  );
}

export function SpinnerLoader39() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="gearix">
        <div class="grx-shape">
          <span>G</span>
        </div>
        <h3>
          Gea<span class="grx-brand">rix</span>
        </h3>
      </div>
  
      .gearix{text-align:center;color:#fff;}
.grx-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:6px dashed #f59e0b;
  display:flex;justify-content:center;align-items:center;
  animation:gearix-spin 5s linear infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes gearix-spin{
  100%{transform:rotate(360deg);}
}
.grx-shape span{
  font-size:30px;font-weight:800;color:#f59e0b;
}
.grx-brand{color:#f59e0b;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="gearix">
        <div class="grx-shape">
          <span>G</span>
        </div>
        <h3>
          Gea<span class="grx-brand">rix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gearix{text-align:center;color:#fff;}
.grx-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:6px dashed #f59e0b;
  display:flex;justify-content:center;align-items:center;
  animation:gearix-spin 5s linear infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes gearix-spin{
  100%{transform:rotate(360deg);}
}
.grx-shape span{
  font-size:30px;font-weight:800;color:#f59e0b;
}
.grx-brand{color:#f59e0b;}`}</style>
    </div>
  );
}

export function SpinnerLoader40() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="veltrix-db">
        <div class="vdb-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vdb-brand">trix</span>
        </h3>
      </div>

      .veltrix-db{text-align:center;color:#fff;}
.vdb-shape{
  width:110px;height:110px;
  border:3px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 20px #a855f7;
  margin-left:70px;
  margin-top:30px;
}
.vdb-shape::after{
  content:"";
  position:absolute;
  width:80%;height:80%;
  border:2px solid #a855f7;
}
.vdb-shape span{
  font-size:32px;font-weight:800;color:#a855f7;
}
.veltrix-db h3{margin-top:15px;}
.vdb-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-db">
        <div class="vdb-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vdb-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-db{text-align:center;color:#fff;}
.vdb-shape{
  width:110px;height:110px;
  border:3px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 20px #a855f7;
  margin-left:70px;
  margin-top:30px;
}
.vdb-shape::after{
  content:"";
  position:absolute;
  width:80%;height:80%;
  border:2px solid #a855f7;
}
.vdb-shape span{
  font-size:32px;font-weight:800;color:#a855f7;
}
.veltrix-db h3{margin-top:15px;}
.vdb-brand{color:#a855f7;}`}</style>
    </div>
  );
}

export function SpinnerLoader41() {
  const [copied, setCopied] = useState(false);
  const code = ` 
   <div class="veltrix-pz">
        <div class="vpz-shape">V</div>
        <h3>
          Vel<span class="vpz-brand">trix</span>
        </h3>
      </div>

  .veltrix-pz{text-align:center;color:#fff;}
.vpz-shape{
  width:100px;height:100px;
  background:#10b981;
  border-radius:20px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 20px #10b981;
  margin-left:70px;
}
.vpz-shape::before{
  content:"";
  position:absolute;
  width:30px;height:30px;
  background:#10b981;
  border-radius:50%;
  top:-15px;left:35px;
}
.veltrix-pz h3{margin-top:15px;}
.vpz-brand{color:#10b981;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-pz">
        <div class="vpz-shape">V</div>
        <h3>
          Vel<span class="vpz-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-pz{text-align:center;color:#fff;}
.vpz-shape{
  width:100px;height:100px;
  background:#10b981;
  border-radius:20px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 20px #10b981;
  margin-left:70px;
}
.vpz-shape::before{
  content:"";
  position:absolute;
  width:30px;height:30px;
  background:#10b981;
  border-radius:50%;
  top:-15px;left:35px;
}
.veltrix-pz h3{margin-top:15px;}
.vpz-brand{color:#10b981;}`}</style>
    </div>
  );
}

export function SpinnerLoader42() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="veltrix-sp">
        <div class="vsp-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vsp-brand">trix</span>
        </h3>
      </div>

      .veltrix-sp{text-align:center;color:#fff;}
.vsp-shape{
  width:100px;height:100px;border-radius:50%;
  border:4px solid transparent;
  border-top:4px solid #3b82f6;
  border-left:4px solid #3b82f6;
  animation:vsp-spin 2s linear infinite;
  display:flex;justify-content:center;align-items:center;
  margin-left:70px;
  margin-top:30px;
}
.vsp-shape span{
  font-size:28px;font-weight:800;color:#3b82f6;
}
@keyframes vsp-spin{100%{transform:rotate(360deg);}}
.veltrix-sp h3{margin-top:15px;}
.vsp-brand{color:#3b82f6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-sp">
        <div class="vsp-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vsp-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-sp{text-align:center;color:#fff;}
.vsp-shape{
  width:100px;height:100px;border-radius:50%;
  border:4px solid transparent;
  border-top:4px solid #3b82f6;
  border-left:4px solid #3b82f6;
  animation:vsp-spin 2s linear infinite;
  display:flex;justify-content:center;align-items:center;
  margin-left:70px;
  margin-top:30px;
}
.vsp-shape span{
  font-size:28px;font-weight:800;color:#3b82f6;
}
@keyframes vsp-spin{100%{transform:rotate(360deg);}}
.veltrix-sp h3{margin-top:15px;}
.vsp-brand{color:#3b82f6;}`}</style>
    </div>
  );
}

export function SpinnerLoader43() {
  const [copied, setCopied] = useState(false);
  const code = `
  
  <div class="veltrix-bk">
        <div class="vbk-shape">V</div>
        <h3>
          Vel<span class="vbk-brand">trix</span>
        </h3>
      </div>

      .veltrix-bk{text-align:center;color:#fff;}
.vbk-shape{
  width:110px;height:70px;
  background:#ef4444;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 20px #ef4444;
  position:relative;
  margin-left:70px;
}
.vbk-shape::before,.vbk-shape::after{
  content:"";
  position:absolute;
  width:100%;height:2px;
  background:#020617;
}
.vbk-shape::before{top:33%;}
.vbk-shape::after{top:66%;}
.veltrix-bk h3{margin-top:15px;}
.vbk-brand{color:#ef4444;}
        
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-bk">
        <div class="vbk-shape">V</div>
        <h3>
          Vel<span class="vbk-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-bk{text-align:center;color:#fff;}
.vbk-shape{
  width:110px;height:70px;
  background:#ef4444;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 20px #ef4444;
  position:relative;
  margin-left:70px;
}
.vbk-shape::before,.vbk-shape::after{
  content:"";
  position:absolute;
  width:100%;height:2px;
  background:#020617;
}
.vbk-shape::before{top:33%;}
.vbk-shape::after{top:66%;}
.veltrix-bk h3{margin-top:15px;}
.vbk-brand{color:#ef4444;}`}</style>
    </div>
  );
}

export function SpinnerLoader44() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="veltrix-rd">
        <div class="vrd-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vrd-brand">trix</span>
        </h3>
      </div>
  
      .veltrix-rd{text-align:center;color:#fff;}
.vrd-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
}
.vrd-shape::before,
.vrd-shape::after{
  content:"";
  position:absolute;
  border-radius:50%;
  border:2px solid #22c55e;
}
.vrd-shape::before{width:70%;height:70%;}
.vrd-shape::after{width:40%;height:40%;}
.vrd-shape span{
  font-size:28px;font-weight:800;color:#22c55e;
}
.veltrix-rd h3{margin-top:15px;}
.vrd-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-rd">
        <div class="vrd-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vrd-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-rd{text-align:center;color:#fff;}
.vrd-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
}
.vrd-shape::before,
.vrd-shape::after{
  content:"";
  position:absolute;
  border-radius:50%;
  border:2px solid #22c55e;
}
.vrd-shape::before{width:70%;height:70%;}
.vrd-shape::after{width:40%;height:40%;}
.vrd-shape span{
  font-size:28px;font-weight:800;color:#22c55e;
}
.veltrix-rd h3{margin-top:15px;}
.vrd-brand{color:#22c55e;}`}</style>
    </div>
  );
}

export function SpinnerLoader45() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="veltrix-dn">
        <div class="vdn-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vdn-brand">trix</span>
        </h3>
      </div>
  
      .veltrix-dn{text-align:center;color:#fff;}
.vdn-shape{
  width:100px;height:100px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  margin-left:70px;
}
.vdn-shape::before,
.vdn-shape::after{
  content:"";
  position:absolute;
  width:4px;height:100%;
  background:#a855f7;
  animation:vdn-wave 2s infinite alternate;
}
.vdn-shape::after{
  left:60px;
  animation-delay:1s;
}
.vdn-shape span{
  font-size:28px;font-weight:800;color:#a855f7;
}
@keyframes vdn-wave{
  0%{transform:translateY(-10px);}
  100%{transform:translateY(10px);}
}
.veltrix-dn h3{margin-top:15px;}
.vdn-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="veltrix-dn">
        <div class="vdn-shape">
          <span>V</span>
        </div>
        <h3>
          Vel<span class="vdn-brand">trix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .veltrix-dn{text-align:center;color:#fff;}
.vdn-shape{
  width:100px;height:100px;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  margin-left:70px;
}
.vdn-shape::before,
.vdn-shape::after{
  content:"";
  position:absolute;
  width:4px;height:100%;
  background:#a855f7;
  animation:vdn-wave 2s infinite alternate;
}
.vdn-shape::after{
  left:60px;
  animation-delay:1s;
}
.vdn-shape span{
  font-size:28px;font-weight:800;color:#a855f7;
}
@keyframes vdn-wave{
  0%{transform:translateY(-10px);}
  100%{transform:translateY(10px);}
}
.veltrix-dn h3{margin-top:15px;}
.vdn-brand{color:#a855f7;}`}</style>
    </div>
  );
}

export function SpinnerLoader46() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="zyron">
        <div class="zy-circle">Z</div>
        <h3>
          Zy<span class="zy-brand">ron</span>
        </h3>
      </div>
  
       .zyron{text-align:center;color:#fff;}
.zy-circle{
  width:110px;height:110px;border-radius:50%;
  border:2px dashed #06b6d4;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#06b6d4;
  animation:zy-spin 6s linear infinite;
  box-shadow:0 0 20px #06b6d4;
  margin-left:70px;
  margin-bottom:20px;
  margin-top:20px;
}
@keyframes zy-spin{100%{transform:rotate(360deg);}}
.zy-brand{color:#06b6d4;}}


      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="zyron">
        <div class="zy-circle">Z</div>
        <h3>
          Zy<span class="zy-brand">ron</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .zyron{text-align:center;color:#fff;}
.zy-circle{
  width:110px;height:110px;border-radius:50%;
  border:2px dashed #06b6d4;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#06b6d4;
  animation:zy-spin 6s linear infinite;
  box-shadow:0 0 20px #06b6d4;
  margin-left:70px;
  margin-bottom:20px;
  margin-top:20px;
}
@keyframes zy-spin{100%{transform:rotate(360deg);}}
.zy-brand{color:#06b6d4;}}`}</style>
    </div>
  );
}

export function SpinnerLoader47() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="nexora">
        <div class="nx-shape">N</div>
        <h3>
          Nex<span class="nx-brand">ora</span>
        </h3>
      </div>
  
      .nexora{text-align:center;color:#fff;}
.nx-shape{
  width:100px;height:100px;
  background:radial-gradient(circle,#f97316,#7c2d12);
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#fff;
  box-shadow:0 0 30px #f97316;
  margin-left:70px;
}
.nx-brand{color:#f97316;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="nexora">
        <div class="nx-shape">N</div>
        <h3>
          Nex<span class="nx-brand">ora</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .nexora{text-align:center;color:#fff;}
.nx-shape{
  width:100px;height:100px;
  background:radial-gradient(circle,#f97316,#7c2d12);
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;color:#fff;
  box-shadow:0 0 30px #f97316;
  margin-left:70px;
}
.nx-brand{color:#f97316;}`}</style>
    </div>
  );
}

export function SpinnerLoader48() {
  const [copied, setCopied] = useState(false);
  const code = ` 
   <div class="voltix">
        <div class="vx-shape">
          <span>V</span>
        </div>
        <h3>
          Vol<span class="vx-brand">tix</span>
        </h3>
      </div>
  
      .voltix{text-align:center;color:#fff;}
.vx-shape{
  width:100px;height:120px;
  background:#eab308;
  clip-path:polygon(40% 0%, 70% 0%, 50% 50%, 75% 50%, 30% 100%, 45% 60%, 25% 60%);
  display:flex;justify-content:center;align-items:center;
  box-shadow:0 0 25px #eab308;
  margin-left:70px;
  margin-top:20px;
}
.vx-shape span{
  font-size:28px;font-weight:800;color:#020617;
}
.vx-brand{color:#eab308;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="voltix">
        <div class="vx-shape">
          <span>V</span>
        </div>
        <h3>
          Vol<span class="vx-brand">tix</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .voltix{text-align:center;color:#fff;}
.vx-shape{
  width:100px;height:120px;
  background:#eab308;
  clip-path:polygon(40% 0%, 70% 0%, 50% 50%, 75% 50%, 30% 100%, 45% 60%, 25% 60%);
  display:flex;justify-content:center;align-items:center;
  box-shadow:0 0 25px #eab308;
  margin-left:70px;
  margin-top:20px;
}
.vx-shape span{
  font-size:28px;font-weight:800;color:#020617;
}
.vx-brand{color:#eab308;}`}</style>
    </div>
  );
}

export function SpinnerLoader49() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="cryon">
        <div class="cr-shape">C</div>
        <h3>
          Cr<span class="cr-brand">yon</span>
        </h3>
      </div>

       .cryon{text-align:center;color:#fff;}
.cr-shape{
  width:110px;height:110px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(15px);
  border:2px solid rgba(56,189,248,.5);
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  color:#38bdf8;
  box-shadow:0 0 25px #38bdf8;
  margin-left:70px;
}
.cr-brand{color:#38bdf8;}

        
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="cryon">
        <div class="cr-shape">C</div>
        <h3>
          Cr<span class="cr-brand">yon</span>
        </h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cryon{text-align:center;color:#fff;}
.cr-shape{
  width:110px;height:110px;
  border-radius:20px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(15px);
  border:2px solid rgba(56,189,248,.5);
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  color:#38bdf8;
  box-shadow:0 0 25px #38bdf8;
  margin-left:70px;
}
.cr-brand{color:#38bdf8;}`}</style>
    </div>
  );
}

export function SpinnerLoader50() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="aivon">
        <div class="ai-shape">
          <span>A</span>
        </div>
        <h3>
          Ai<span class="ai-brand">von</span>
        </h3>
      </div>
  
      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="aivon">
        <div class="ai-shape">
          <span>A</span>
        </div>
        <h3>
          Ai<span class="ai-brand">von</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader51() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="loopix">
        <div class="lpx-shape">
          <span>L</span>
        </div>
        <h3>
          Loo<span class="lpx-brand">pix</span>
        </h3>
      </div>
  
      .loopix{text-align:center;color:#fff;}
.lpx-shape{
  width:130px;height:100px;
  position:relative;
  margin-left:30px;
  margin-top:30px;
  
}
.lpx-shape::before,
.lpx-shape::after{
  content:"";
  position:absolute;
  width:60px;height:60px;
  border:3px solid #22c55e;
  border-radius:50%;
  animation:loopix-move 2s infinite alternate;
}
.lpx-shape::after{
  left:60px;
  animation-delay:1s;
}
@keyframes loopix-move{
  0%{transform:translateY(-10px);}
  100%{transform:translateY(10px);}
}
.lpx-shape span{
  position:absolute;top:25px;left:87px;
  font-size:28px;font-weight:800;color:#22c55e;
}
.lpx-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="loopix">
        <div class="lpx-shape">
          <span>L</span>
        </div>
        <h3>
          Loo<span class="lpx-brand">pix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .loopix{text-align:center;color:#fff;}
.lpx-shape{
  width:130px;height:100px;
  position:relative;
  margin-left:30px;
  margin-top:30px;
  
}
.lpx-shape::before,
.lpx-shape::after{
  content:"";
  position:absolute;
  width:60px;height:60px;
  border:3px solid #22c55e;
  border-radius:50%;
  animation:loopix-move 2s infinite alternate;
}
.lpx-shape::after{
  left:60px;
  animation-delay:1s;
}
@keyframes loopix-move{
  0%{transform:translateY(-10px);}
  100%{transform:translateY(10px);}
}
.lpx-shape span{
  position:absolute;top:25px;left:87px;
  font-size:28px;font-weight:800;color:#22c55e;
}
.lpx-brand{color:#22c55e;}`}</style>
    </div>
  );
}
export function SpinnerLoader52() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="glowra">
        <div class="glw-shape">
          <span>G</span>
        </div>
        <h3>
          Glo<span class="glw-brand">wra</span>
        </h3>
      </div>

      .glowra{text-align:center;color:#fff;}
.glw-shape{
  width:130px;height:130px;
  border-radius:30px;
  background:#a855f7;
  display:flex;justify-content:center;align-items:center;
  animation:glowra-pulse 2s ease-in-out infinite;
  margin-left:60px;
  margin-top:20px;
}
@keyframes glowra-pulse{
  0%,100%{box-shadow:0 0 10px #a855f7;}
  50%{box-shadow:0 0 40px #a855f7;}
}
.glw-shape span{
  font-size:34px;font-weight:800;color:white;
}
.glw-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="glowra">
        <div class="glw-shape">
          <span>G</span>
        </div>
        <h3>
          Glo<span class="glw-brand">wra</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .glowra{text-align:center;color:#fff;}
.glw-shape{
  width:130px;height:130px;
  border-radius:30px;
  background:#a855f7;
  display:flex;justify-content:center;align-items:center;
  animation:glowra-pulse 2s ease-in-out infinite;
  margin-left:60px;
  margin-top:20px;
}
@keyframes glowra-pulse{
  0%,100%{box-shadow:0 0 10px #a855f7;}
  50%{box-shadow:0 0 40px #a855f7;}
}
.glw-shape span{
  font-size:34px;font-weight:800;color:white;
}
.glw-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader53() {
  const [copied, setCopied] = useState(false);
  const code = ` 

      <div class="spinix">
        <div class="spn-box">
          <span>S</span>
        </div>
        <h3>
          Spi<span class="spn-brand">nix</span>
        </h3>
      </div>
      
    .spinix{text-align:center;color:#fff;}
    .spn-box{
      width:130px;height:130px;
      border-radius:50%;
      border:3px solid #06b6d4;
      display:flex;justify-content:center;align-items:center;
      animation:spinix-rotate 6s linear infinite;
      margin-left:60px;
      margin-bottom:10px;
    }
    @keyframes spinix-rotate{
      100%{transform:rotate(360deg);}
    }
    .spn-box span{
      font-size:34px;font-weight:800;
      color:#06b6d4;
    }
    .spn-brand{color:#06b6d4;}
       
`;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="spinix">
        <div class="spn-box">
          <span>S</span>
        </div>
        <h3>
          Spi<span class="spn-brand">nix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .spinix{text-align:center;color:#fff;}
.spn-box{
  width:130px;height:130px;
  border-radius:50%;
  border:3px solid #06b6d4;
  display:flex;justify-content:center;align-items:center;
  animation:spinix-rotate 6s linear infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes spinix-rotate{
  100%{transform:rotate(360deg);}
}
.spn-box span{
  font-size:34px;font-weight:800;
  color:#06b6d4;
}
.spn-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader54() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="frostix">
        <div class="fr-card">
          <span>F</span>
        </div>
        <h3>
          Fros<span class="fr-brand">tix</span>
        </h3>
      </div>

       .frostix{text-align:center;color:#fff;}
.fr-card{
  width:130px;height:130px;
  border-radius:25px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(15px);
  border:1px solid rgba(255,255,255,0.1);
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  position:relative;
  overflow:hidden;
  margin-left:60px;
  margin-bottom:10px;
}
.fr-card::before{
  content:"";
  position:absolute;
  width:50%;height:100%;
  background:linear-gradient(120deg,transparent,rgba(255,255,255,.4),transparent);
  left:-100%;
  animation:shine 3s infinite;
}
@keyframes shine{
  100%{left:150%;}
}
.fr-card span{color:#38bdf8;}
.fr-brand{color:#38bdf8;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="frostix">
        <div class="fr-card">
          <span>F</span>
        </div>
        <h3>
          Fros<span class="fr-brand">tix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .frostix{text-align:center;color:#fff;}
.fr-card{
  width:130px;height:130px;
  border-radius:25px;
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(15px);
  border:1px solid rgba(255,255,255,0.1);
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  position:relative;
  overflow:hidden;
  margin-left:60px;
  margin-bottom:10px;
}
.fr-card::before{
  content:"";
  position:absolute;
  width:50%;height:100%;
  background:linear-gradient(120deg,transparent,rgba(255,255,255,.4),transparent);
  left:-100%;
  animation:shine 3s infinite;
}
@keyframes shine{
  100%{left:150%;}
}
.fr-card span{color:#38bdf8;}
.fr-brand{color:#38bdf8;}`}</style>
    </div>
  );
}
export function SpinnerLoader55() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="voltara">
        <div class="vt-box">
          <span>V</span>
        </div>
        <h3>
          Vol<span class="vt-brand">tara</span>
        </h3>
      </div>

      .voltara{text-align:center;color:#fff;}
.vt-box{
  width:130px;height:130px;
  border-radius:25px;
  border:2px solid #facc15;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  position:relative;
  transition:.4s;
  margin-left:60px;
  margin-bottom:10px;
}
.vt-box:hover{
  box-shadow:0 0 30px #facc15,0 0 60px #facc15;
}
.vt-box span{color:#facc15;}
.vt-brand{color:#facc15;}
       
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="voltara">
        <div class="vt-box">
          <span>V</span>
        </div>
        <h3>
          Vol<span class="vt-brand">tara</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .voltara{text-align:center;color:#fff;}
.vt-box{
  width:130px;height:130px;
  border-radius:25px;
  border:2px solid #facc15;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  position:relative;
  transition:.4s;
  margin-left:60px;
  margin-bottom:10px;
}
.vt-box:hover{
  box-shadow:0 0 30px #facc15,0 0 60px #facc15;
}
.vt-box span{color:#facc15;}
.vt-brand{color:#facc15;}`}</style>
    </div>
  );
}
export function SpinnerLoader56() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="neuronex">
        <div class="nn-shape">
          <span>N</span>
        </div>
        <h3>
          Neuro<span class="nn-brand">nex</span>
        </h3>
      </div>
  
      .neuronex{text-align:center;color:#fff;}
.nn-shape{
  width:130px;height:130px;
  border-radius:50%;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-top:20px;
  margin-bottom:20px;
}
.nn-shape::before{
  content:"";
  position:absolute;
  width:100%;height:100%;
  border-radius:50%;
  border:2px solid #a855f7;
  animation:pulse 2s infinite;
}
@keyframes pulse{
  0%{transform:scale(1);opacity:1;}
  100%{transform:scale(1.5);opacity:0;}
}
.nn-shape span{
  font-size:34px;font-weight:800;color:#a855f7;
}
.nn-brand{color:#a855f7;}


      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="neuronex">
        <div class="nn-shape">
          <span>N</span>
        </div>
        <h3>
          Neuro<span class="nn-brand">nex</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neuronex{text-align:center;color:#fff;}
.nn-shape{
  width:130px;height:130px;
  border-radius:50%;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-top:20px;
  margin-bottom:20px;
}
.nn-shape::before{
  content:"";
  position:absolute;
  width:100%;height:100%;
  border-radius:50%;
  border:2px solid #a855f7;
  animation:pulse 2s infinite;
}
@keyframes pulse{
  0%{transform:scale(1);opacity:1;}
  100%{transform:scale(1.5);opacity:0;}
}
.nn-shape span{
  font-size:34px;font-weight:800;color:#a855f7;
}
.nn-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader57() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="chromix">
        <div class="ch-shape">
          <span>C</span>
        </div>
        <h3>
          Chro<span class="ch-brand">mix</span>
        </h3>
      </div>

   .chromix{text-align:center;color:#fff;}
.ch-shape{
  width:130px;height:130px;
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  background:linear-gradient(270deg,#06b6d4,#a855f7,#22c55e);
  background-size:400% 400%;
  animation:ch-flow 6s ease infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes ch-flow{
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}
.ch-shape span{color:#020617;}
.ch-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="chromix">
        <div class="ch-shape">
          <span>C</span>
        </div>
        <h3>
          Chro<span class="ch-brand">mix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .chromix{text-align:center;color:#fff;}
.ch-shape{
  width:130px;height:130px;
  border-radius:50%;
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  background:linear-gradient(270deg,#06b6d4,#a855f7,#22c55e);
  background-size:400% 400%;
  animation:ch-flow 6s ease infinite;
  margin-left:60px;
  margin-bottom:10px;
}
@keyframes ch-flow{
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}
.ch-shape span{color:#020617;}
.ch-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader58() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="luxora">
        <div class="lx-card">
          <span>L</span>
        </div>
        <h3>
          Lux<span class="lx-brand">ora</span>
        </h3>
      </div>

      .luxora{text-align:center;color:#fff;}
.lx-card{
  width:130px;height:130px;
  border-radius:30px;
  background:linear-gradient(135deg,#6366f1,#06b6d4);
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  box-shadow:0 15px 40px rgba(0,0,0,.6);
  transition:.4s;
  margin-left:60px;
  margin-bottom:10px;
}
.lx-card:hover{
  transform:translateY(-10px) scale(1.05);
}
.lx-card span{color:white;}
.lx-brand{color:#06b6d4;}
  

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="luxora">
        <div class="lx-card">
          <span>L</span>
        </div>
        <h3>
          Lux<span class="lx-brand">ora</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .luxora{text-align:center;color:#fff;}
.lx-card{
  width:130px;height:130px;
  border-radius:30px;
  background:linear-gradient(135deg,#6366f1,#06b6d4);
  display:flex;justify-content:center;align-items:center;
  font-size:36px;font-weight:800;
  box-shadow:0 15px 40px rgba(0,0,0,.6);
  transition:.4s;
  margin-left:60px;
  margin-bottom:10px;
}
.lx-card:hover{
  transform:translateY(-10px) scale(1.05);
}
.lx-card span{color:white;}
.lx-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader59() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="gridon">
        <div class="gd-shape">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>G</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>
          Grid<span class="gd-brand">on</span>
        </h3>
      </div>

      .gridon{text-align:center;color:#fff;}
.gd-shape{
  width:120px;height:120px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:6px;
  margin-left:60px;
  margin-bottom:10px;
}
.gd-shape div{
  background:#06b6d4;
  display:flex;justify-content:center;align-items:center;
  font-weight:800;color:#020617;
}
.gd-shape div:nth-child(5){
  background:#020617;
  color:#06b6d4;
  border:2px solid #06b6d4;
}
.gd-brand{color:#06b6d4;}
  

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="gridon">
        <div class="gd-shape">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>G</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>
          Grid<span class="gd-brand">on</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .gridon{text-align:center;color:#fff;}
.gd-shape{
  width:120px;height:120px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:6px;
  margin-left:60px;
  margin-bottom:10px;
}
.gd-shape div{
  background:#06b6d4;
  display:flex;justify-content:center;align-items:center;
  font-weight:800;color:#020617;
}
.gd-shape div:nth-child(5){
  background:#020617;
  color:#06b6d4;
  border:2px solid #06b6d4;
}
.gd-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader60() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="nexonix">
        <div class="nx2-shape">
          <span>N</span>
        </div>
        <h3>
          Nexo<span class="nx2-brand">nix</span>
        </h3>
      </div>
  
       .nexonix{text-align:center;color:#fff;}
.nx2-shape{
  width:120px;height:120px;
  background:linear-gradient(90deg,#a855f7 50%,#06b6d4 50%);
  border-radius:20px;
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 0 30px rgba(168,85,247,.5);
  margin-left:60px;
  margin-bottom:10px;
}
.nx2-shape span{color:white;}
.nx2-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="nexonix">
        <div class="nx2-shape">
          <span>N</span>
        </div>
        <h3>
          Nexo<span class="nx2-brand">nix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .nexonix{text-align:center;color:#fff;}
.nx2-shape{
  width:120px;height:120px;
  background:linear-gradient(90deg,#a855f7 50%,#06b6d4 50%);
  border-radius:20px;
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 0 30px rgba(168,85,247,.5);
  margin-left:60px;
  margin-bottom:10px;
}
.nx2-shape span{color:white;}
.nx2-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader61() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="ringra">
        <div class="rg-shape">
          <span>R</span>
        </div>
        <h3>
          Ring<span class="rg-brand">ra</span>
        </h3>
      </div>

      .ringra{text-align:center;color:#fff;}
.rg-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:3px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.rg-shape::before{
  content:"";
  position:absolute;
  width:70%;height:70%;
  border-radius:50%;
  border:2px solid #22c55e;
}
.rg-shape::after{
  content:"";
  position:absolute;
  width:40%;height:40%;
  border-radius:50%;
  border:2px solid #22c55e;
}
.rg-shape span{
  font-size:30px;font-weight:800;color:#22c55e;
}
.rg-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="ringra">
        <div class="rg-shape">
          <span>R</span>
        </div>
        <h3>
          Ring<span class="rg-brand">ra</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .ringra{text-align:center;color:#fff;}
.rg-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:3px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.rg-shape::before{
  content:"";
  position:absolute;
  width:70%;height:70%;
  border-radius:50%;
  border:2px solid #22c55e;
}
.rg-shape::after{
  content:"";
  position:absolute;
  width:40%;height:40%;
  border-radius:50%;
  border:2px solid #22c55e;
}
.rg-shape span{
  font-size:30px;font-weight:800;color:#22c55e;
}
.rg-brand{color:#22c55e;}`}</style>
    </div>
  );
}
export function SpinnerLoader62() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="cutrix">
        <div class="ctx-shape">
          <span>C</span>
        </div>
        <h3>
          Cu<span class="ctx-brand">trix</span>
        </h3>
      </div>

      .cutrix{text-align:center;color:#fff;}
.ctx-shape{
  width:120px;height:120px;
  background:#3b82f6;
  clip-path:polygon(0 0,100% 0,100% 70%,70% 100%,0 100%);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 10px 25px rgba(0,0,0,.5);
  margin-left:70px;
  margin-bottom:10px;
  margin-top:10px;
}
.ctx-shape span{color:whit

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="cutrix">
        <div class="ctx-shape">
          <span>C</span>
        </div>
        <h3>
          Cu<span class="ctx-brand">trix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cutrix{text-align:center;color:#fff;}
.ctx-shape{
  width:120px;height:120px;
  background:#3b82f6;
  clip-path:polygon(0 0,100% 0,100% 70%,70% 100%,0 100%);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 10px 25px rgba(0,0,0,.5);
  margin-left:70px;
  margin-bottom:10px;
  margin-top:10px;
}
.ctx-shape span{color:white;}
.ctx-brand{color:#3b82f6;}`}</style>
    </div>
  );
}
export function SpinnerLoader63() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="blorix">
        <div class="blx-shape">
          <span>B</span>
        </div>
        <h3>
          Blo<span class="blx-brand">rix</span>
        </h3>
      </div>

      .blorix{text-align:center;color:#fff;}
.blx-shape{
  width:120px;height:120px;
  background:linear-gradient(135deg,#06b6d4,#6366f1);
  border-radius:40% 60% 70% 30% / 30% 40% 60% 70%;
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 0 30px rgba(6,182,212,.6);
  margin-left:70px;
}
.blx-shape span{color:white;}
.blx-brand{color:#06b6d4;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="blorix">
        <div class="blx-shape">
          <span>B</span>
        </div>
        <h3>
          Blo<span class="blx-brand">rix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .blorix{text-align:center;color:#fff;}
.blx-shape{
  width:120px;height:120px;
  background:linear-gradient(135deg,#06b6d4,#6366f1);
  border-radius:40% 60% 70% 30% / 30% 40% 60% 70%;
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 0 30px rgba(6,182,212,.6);
  margin-left:70px;
}
.blx-shape span{color:white;}
.blx-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader64() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="magnetix">
        <div class="mg-shape">
          <span>M</span>
        </div>
        <h3>
          Magne<span class="mg-brand">tix</span>
        </h3>
      </div>
  
      .magnetix{text-align:center;color:#fff;}
.mg-shape{
  width:110px;height:110px;border-radius:50%;
  border:3px solid #f43f5e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:10px;
}
.mg-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:3px dashed #f43f5e;
}
.mg-shape span{
  font-size:30px;font-weight:800;color:#f43f5e;
}
.mg-brand{color:#f43f5e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="magnetix">
        <div class="mg-shape">
          <span>M</span>
        </div>
        <h3>
          Magne<span class="mg-brand">tix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .magnetix{text-align:center;color:#fff;}
.mg-shape{
  width:110px;height:110px;border-radius:50%;
  border:3px solid #f43f5e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:10px;
}
.mg-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:3px dashed #f43f5e;
}
.mg-shape span{
  font-size:30px;font-weight:800;color:#f43f5e;
}
.mg-brand{color:#f43f5e;}`}</style>
    </div>
  );
}
export function SpinnerLoader65() {
  const [copied, setCopied] = useState(false);
  const code = ` 
   <div class="hexora-1">
        <div class="hx-shape-1">H</div>
        <h3>
          Hex<span class="hx-brand-1">ora</span>
        </h3>
      </div>
  
      .hexora-1{text-align:center;color:#fff;}
.hx-shape-1{
  width:100px;height:55px;
  background:#8b5cf6;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:28px;font-weight:800;
  color:white;
  margin-left:70px;
  margin-bottom:40px;
  margin-top:20px; 
}
.hx-shape-1:before,.hx-shape-1:after{
  content:"";position:absolute;
  border-left:50px solid transparent;
  border-right:50px solid transparent;
}
.hx-shape-1:before{bottom:100%;border-bottom:27px solid #8b5cf6;}
.hx-shape-1:after{top:100%;border-top:27px solid #8b5cf6;}
.hx-brand-1{color:#8b5cf6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="hexora-1">
        <div class="hx-shape-1">H</div>
        <h3>
          Hex<span class="hx-brand-1">ora</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .hexora-1{text-align:center;color:#fff;}
.hx-shape-1{
  width:100px;height:55px;
  background:#8b5cf6;
  position:relative;
  display:flex;justify-content:center;align-items:center;
  font-size:28px;font-weight:800;
  color:white;
  margin-left:70px;
  margin-bottom:40px;
  margin-top:20px; 
}
.hx-shape-1:before,.hx-shape-1:after{
  content:"";position:absolute;
  border-left:50px solid transparent;
  border-right:50px solid transparent;
}
.hx-shape-1:before{bottom:100%;border-bottom:27px solid #8b5cf6;}
.hx-shape-1:after{top:100%;border-top:27px solid #8b5cf6;}
.hx-brand-1{color:#8b5cf6;}`}</style>
    </div>
  );
}
export function SpinnerLoader66() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="wavix">
        <div class="wv-shape">
          <span>W</span>
        </div>
        <h3>
          Wa<span class="wv-brand">vix</span>
        </h3>
      </div>

      .wavix{text-align:center;color:#fff;}
.wv-shape{
  width:120px;height:80px;
  background:linear-gradient(135deg,#06b6d4,#3b82f6);
  border-radius:50px;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 25px #06b6d4;
  margin-left:60px;
  margin-bottom:10px;
}
.wv-shape span{color:#020617;}
.wv-brand{color:#06b6d4;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="wavix">
        <div class="wv-shape">
          <span>W</span>
        </div>
        <h3>
          Wa<span class="wv-brand">vix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .wavix{text-align:center;color:#fff;}
.wv-shape{
  width:120px;height:80px;
  background:linear-gradient(135deg,#06b6d4,#3b82f6);
  border-radius:50px;
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 0 25px #06b6d4;
  margin-left:60px;
  margin-bottom:10px;
}
.wv-shape span{color:#020617;}
.wv-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader67() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="cubexa">
        <div class="cb-shape">
          <span>C</span>
        </div>
        <h3>
          Cube<span class="cb-brand">xa</span>
        </h3>
      </div>

       .cubexa{text-align:center;color:#fff;}
.cb-shape{
  width:100px;height:100px;
  background:linear-gradient(135deg,#3b82f6,#1e40af);
  transform:rotate(15deg);
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 10px 25px rgba(0,0,0,.5);
  margin-left:60px;
  margin-bottom:20px;
  margin-top:20px;
}
.cb-shape span{transform:rotate(-15deg);color:white;}
.cb-brand{color:#3b82f6;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="cubexa">
        <div class="cb-shape">
          <span>C</span>
        </div>
        <h3>
          Cube<span class="cb-brand">xa</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .cubexa{text-align:center;color:#fff;}
.cb-shape{
  width:100px;height:100px;
  background:linear-gradient(135deg,#3b82f6,#1e40af);
  transform:rotate(15deg);
  display:flex;justify-content:center;align-items:center;
  font-size:30px;font-weight:800;
  box-shadow:0 10px 25px rgba(0,0,0,.5);
  margin-left:60px;
  margin-bottom:20px;
  margin-top:20px;
}
.cb-shape span{transform:rotate(-15deg);color:white;}
.cb-brand{color:#3b82f6;}`}</style>
    </div>
  );
}
export function SpinnerLoader68() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="orbitra">
        <div class="ob-shape">
          <span>O</span>
        </div>
        <h3>
          Orbi<span class="ob-brand">tra</span>
        </h3>
      </div>

       .orbitra{text-align:center;color:#fff;}
.ob-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:20px;
  margin-top:10px;
}
.ob-shape::before{
  content:"";
  position:absolute;
  width:140%;height:2px;
  background:#22c55e;
  animation:ob-rot 4s linear infinite;
}
@keyframes ob-rot{100%{transform:rotate(360deg);}}
.ob-shape span{
  font-size:32px;font-weight:800;color:#22c55e;
}
.ob-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="orbitra">
        <div class="ob-shape">
          <span>O</span>
        </div>
        <h3>
          Orbi<span class="ob-brand">tra</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .orbitra{text-align:center;color:#fff;}
.ob-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #22c55e;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:20px;
  margin-top:10px;
}
.ob-shape::before{
  content:"";
  position:absolute;
  width:140%;height:2px;
  background:#22c55e;
  animation:ob-rot 4s linear infinite;
}
@keyframes ob-rot{100%{transform:rotate(360deg);}}
.ob-shape span{
  font-size:32px;font-weight:800;color:#22c55e;
}
.ob-brand{color:#22c55e;}`}</style>
    </div>
  );
}
export function SpinnerLoader69() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        
  <div class="webora">
        <div class="wb-shape">
          <span>W</span>
        </div>
        <h3>
          Web<span class="wb-brand">ora</span>
        </h3>
      </div>

      .webora{text-align:center;color:#fff;}
.wb-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #06b6d4;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:10px;
}
.wb-shape::before,.wb-shape::after{
  content:"";
  position:absolute;
  width:80%;height:80%;
  border-radius:50%;
  border:1px solid #06b6d4;
}
.wb-shape span{
  font-size:32px;font-weight:800;color:#06b6d4;
}
.wb-brand{color:#06b6d4;}


      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="webora">
        <div class="wb-shape">
          <span>W</span>
        </div>
        <h3>
          Web<span class="wb-brand">ora</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .webora{text-align:center;color:#fff;}
.wb-shape{
  width:110px;height:110px;border-radius:50%;
  border:2px solid #06b6d4;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:70px;
  margin-bottom:10px;
}
.wb-shape::before,.wb-shape::after{
  content:"";
  position:absolute;
  width:80%;height:80%;
  border-radius:50%;
  border:1px solid #06b6d4;
}
.wb-shape span{
  font-size:32px;font-weight:800;color:#06b6d4;
}
.wb-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader70() {
  const [copied, setCopied] = useState(false);
  const code = ` 
         <div class="brandify">
        <div class="bf-shape">B</div>
        <h3>
          Brand<span class="bf-brand">ify</span>
        </h3>
      </div>

       .brandify{text-align:center;color:#fff;}
.bf-shape{
  width:120px;height:80px;
  border:2px solid #f59e0b;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.bf-shape::before{
  content:"";
  position:absolute;
  width:40px;height:40px;
  border:2px solid #f59e0b;
  top:-20px;left:40px;
  background:#0f172a;
}
.bf-brand{color:#f59e0b;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="brandify">
        <div class="bf-shape">B</div>
        <h3>
          Brand<span class="bf-brand">ify</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .brandify{text-align:center;color:#fff;}
.bf-shape{
  width:120px;height:80px;
  border:2px solid #f59e0b;
  display:flex;justify-content:center;align-items:center;
  font-size:32px;font-weight:800;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.bf-shape::before{
  content:"";
  position:absolute;
  width:40px;height:40px;
  border:2px solid #f59e0b;
  top:-20px;left:40px;
  background:#0f172a;
}
.bf-brand{color:#f59e0b;}`}</style>
    </div>
  );
}
export function SpinnerLoader71() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="neuralix">
        <div class="nl-shape">
          <span>N</span>
        </div>
        <h3>
          Neura<span class="nl-brand">lix</span>
        </h3>
      </div>

      .neuralix{text-align:center;color:#fff;}
.nl-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.nl-shape::before,.nl-shape::after{
  content:"";
  position:absolute;
  width:60%;height:2px;
  background:#a855f7;
}
.nl-shape::after{transform:rotate(90deg);}
.nl-shape span{
  font-size:34px;font-weight:800;color:#a855f7;
}
.nl-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="neuralix">
        <div class="nl-shape">
          <span>N</span>
        </div>
        <h3>
          Neura<span class="nl-brand">lix</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .neuralix{text-align:center;color:#fff;}
.nl-shape{
  width:120px;height:120px;
  border-radius:50%;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  margin-left:60px;
  margin-bottom:10px;
}
.nl-shape::before,.nl-shape::after{
  content:"";
  position:absolute;
  width:60%;height:2px;
  background:#a855f7;
}
.nl-shape::after{transform:rotate(90deg);}
.nl-shape span{
  font-size:34px;font-weight:800;color:#a855f7;
}
.nl-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader72() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="fluxio">
        <div class="fx-shape">
          <span>F</span>
        </div>
        <h3>
          Flu<span class="fx-brand">xio</span>
        </h3>
      </div>

      .fluxio{text-align:center;color:#fff;}
.fx-shape{
  width:110px;height:110px;
  border-radius:50%;
  background:conic-gradient(#22c55e,#3b82f6,#22c55e);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  margin-left:70px;
  margin-bottom:10px;
  margin-top:10px;
}
.fx-shape span{color:#020617;}
.fx-brand{color:#22c55e;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="fluxio">
        <div class="fx-shape">
          <span>F</span>
        </div>
        <h3>
          Flu<span class="fx-brand">xio</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .fluxio{text-align:center;color:#fff;}
.fx-shape{
  width:110px;height:110px;
  border-radius:50%;
  background:conic-gradient(#22c55e,#3b82f6,#22c55e);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  margin-left:70px;
  margin-bottom:10px;
  margin-top:10px;
}
.fx-shape span{color:#020617;}
.fx-brand{color:#22c55e;}`}</style>
    </div>
  );
}
export function SpinnerLoader73() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="novatech">
        <div class="nt-box">
          <span>N</span>
        </div>
        <h3>
          Nova<span class="nt-brand">Tech</span>
        </h3>
      </div>

      .novatech{text-align:center;color:#fff;}
.nt-box{
  width:110px;height:110px;
  border-radius:20px;
  background:linear-gradient(135deg,#6366f1,#06b6d4);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 10px 30px rgba(0,0,0,.4);
  margin-left:70px;
  margin-bottom:10px;
}
.nt-box span{color:white;}
.nt-brand{color:#06b6d4;}
        
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="novatech">
        <div class="nt-box">
          <span>N</span>
        </div>
        <h3>
          Nova<span class="nt-brand">Tech</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .novatech{text-align:center;color:#fff;}
.nt-box{
  width:110px;height:110px;
  border-radius:20px;
  background:linear-gradient(135deg,#6366f1,#06b6d4);
  display:flex;justify-content:center;align-items:center;
  font-size:34px;font-weight:800;
  box-shadow:0 10px 30px rgba(0,0,0,.4);
  margin-left:70px;
  margin-bottom:10px;
}
.nt-box span{color:white;}
.nt-brand{color:#06b6d4;}`}</style>
    </div>
  );
}
export function SpinnerLoader74() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="glass-logo">
        <div class="glass-core">N</div>
        <h3>NovaCore</h3>
      </div>

       background:linear-gradient(135deg,#020617,#0f172a);
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  margin:0;
  font-family:sans-serif;
}

.glass-logo{
  text-align:center;
  color:white;
}

.glass-core{
  width:100px;
  height:100px;
  backdrop-filter:blur(20px);
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  font-weight:bold;
  margin:auto;
  box-shadow:0 0 40px rgba(0,255,255,0.2);
  animation:float 3s ease-in-out infinite;
}

@keyframes float{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-10px);}
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="glass-logo">
        <div class="glass-core">N</div>
        <h3>NovaCore</h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        background:linear-gradient(135deg,#020617,#0f172a);
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  margin:0;
  font-family:sans-serif;
}

.glass-logo{
  text-align:center;
  color:white;
}

.glass-core{
  width:100px;
  height:100px;
  backdrop-filter:blur(20px);
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  font-weight:bold;
  margin:auto;
  box-shadow:0 0 40px rgba(0,255,255,0.2);
  animation:float 3s ease-in-out infinite;
}

@keyframes float{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-10px);}
}`}</style>
    </div>
  );
}
export function SpinnerLoader75() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="energy-logo">
        <div class="ring">
          <div class="core"></div>
        </div>
        <h3>Orbitra</h3>
      </div>

      .energy-logo{
  text-align:center;
  color:white;
}

.ring{
  width:110px;
  height:110px;
  border-radius:50%;
  border:2px solid rgba(34,211,238,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
  animation:spin 6s linear infinite;
}

.core{
  width:40px;
  height:40px;
  background:#22d3ee;
  border-radius:50%;
  box-shadow:0 0 20px #22d3ee;
}

@keyframes spin{
  100%{transform:rotate(360deg);}
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="energy-logo">
        <div class="ring">
          <div class="core"></div>
        </div>
        <h3>Orbitra</h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       .energy-logo{
  text-align:center;
  color:white;
}

.ring{
  width:110px;
  height:110px;
  border-radius:50%;
  border:2px solid rgba(34,211,238,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
  animation:spin 6s linear infinite;
}

.core{
  width:40px;
  height:40px;
  background:#22d3ee;
  border-radius:50%;
  box-shadow:0 0 20px #22d3ee;
}

@keyframes spin{
  100%{transform:rotate(360deg);}
}`}</style>
    </div>
  );
}
export function SpinnerLoader76() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="orb-logo-1">
        <div class="orb-1"></div>
        <h3>Neurox</h3>
      </div>
        
      .orb-logo-1{
  text-align:center;
  color:white;
}

.orb-1{
  width:90px;
  height:90px;
  border-radius:50%;
  background: radial-gradient(circle, #22d3ee, #0ea5e9, transparent);
  box-shadow:0 0 40px #22d3ee;
  animation:pulse 2s infinite;
  margin:auto;
}

@keyframes pulse{
  0%{transform:scale(1);}
  50%{transform:scale(1.2);}
  100%{transform:scale(1);}
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="orb-logo-1">
        <div class="orb-1"></div>
        <h3>Neurox</h3>
      </div>

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
       
.orb-logo-1{
  text-align:center;
  color:white;
}

.orb-1{
  width:90px;
  height:90px;
  border-radius:50%;
  background: radial-gradient(circle, #22d3ee, #0ea5e9, transparent);
  box-shadow:0 0 40px #22d3ee;
  animation:pulse 2s infinite;
  margin:auto;
}

@keyframes pulse{
  0%{transform:scale(1);}
  50%{transform:scale(1.2);}
  100%{transform:scale(1);}
}`}</style>
    </div>
  );
}
export function SpinnerLoader77() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="portal-logo">
        <div class="portal"></div>
        <h3>Neurox</h3>
      </div>
 .portal-logo{
  text-align:center;
  color:white;
}

.portal{
  width:90px;
  height:90px;
  border-radius:50%;
  background:
    repeating-radial-gradient(circle,#22d3ee 0 2px,transparent 3px 8px);
  animation:zoom 3s linear infinite;
  box-shadow:0 0 30px #22d3ee;
  margin:auto;
}

@keyframes zoom{
  0%{transform:scale(1);}
  100%{transform:scale(1.3);}
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="portal-logo">
        <div class="portal"></div>
        <h3>Neurox</h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .portal-logo{
  text-align:center;
  color:white;
}

.portal{
  width:90px;
  height:90px;
  border-radius:50%;
  background:
    repeating-radial-gradient(circle,#22d3ee 0 2px,transparent 3px 8px);
  animation:zoom 3s linear infinite;
  box-shadow:0 0 30px #22d3ee;
  margin:auto;
}

@keyframes zoom{
  0%{transform:scale(1);}
  100%{transform:scale(1.3);}
}`}</style>
    </div>
  );
}
export function SpinnerLoader78() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06b6d4" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#g1)" />
        </svg>
      </div>

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06b6d4" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#g1)" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        `}</style>
    </div>
  );
}
export function SpinnerLoader79() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="20"
            fill="rgba(255,255,255,0.1)"
            stroke="#38bdf8"
            stroke-width="2"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="20"
            fill="rgba(255,255,255,0.1)"
            stroke="#38bdf8"
            stroke-width="2"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader80() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="20"
            fill="rgba(255,255,255,0.1)"
            stroke="#38bdf8"
            stroke-width="2"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="20"
            fill="rgba(255,255,255,0.1)"
            stroke="#38bdf8"
            stroke-width="2"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader81() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#22c55e"
            stroke-width="3"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#22c55e"
            stroke-width="3"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader82() {
  const [copied, setCopied] = useState(false);
  const code = `
  
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polygon
            points="50,10 61,38 90,38 66,58 75,85 50,68 25,85 34,58 10,38 39,38"
            fill="#facc15"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}
      
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polygon
            points="50,10 61,38 90,38 66,58 75,85 50,68 25,85 34,58 10,38 39,38"
            fill="#facc15"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader83() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="#3b82f6">
            <animate
              attributeName="r"
              values="30;40;30"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}
  

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="#3b82f6">
            <animate
              attributeName="r"
              values="30;40;30"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader84() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path fill="#8b5cf6">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
        M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z;
        M50,15 C75,5 95,35 85,55 C95,75 65,95 45,85 C25,95 5,65 15,45 C5,25 35,5 50,15 Z;
        M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z"
            />
          </path>
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path fill="#8b5cf6">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
        M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z;
        M50,15 C75,5 95,35 85,55 C95,75 65,95 45,85 C25,95 5,65 15,45 C5,25 35,5 50,15 Z;
        M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z"
            />
          </path>
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader85() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            fill="none"
            stroke="#22c55e"
            stroke-width="3"
            filter="url(#glow)"
          />
        </svg>
      </div>
  .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            fill="none"
            stroke="#22c55e"
            stroke-width="3"
            filter="url(#glow)"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader86() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path
            d="M10 50 Q25 20, 40 50 T70 50 T100 50"
            stroke="#f97316"
            stroke-width="4"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="2s"
              repeatCount="indefinite"
              values="
        M10 50 Q25 20, 40 50 T70 50 T100 50;
        M10 50 Q25 80, 40 50 T70 50 T100 50;
        M10 50 Q25 20, 40 50 T70 50 T100 50"
            />
          </path>
        </svg>
      </div>
     
       .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}


      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path
            d="M10 50 Q25 20, 40 50 T70 50 T100 50"
            stroke="#f97316"
            stroke-width="4"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="2s"
              repeatCount="indefinite"
              values="
        M10 50 Q25 20, 40 50 T70 50 T100 50;
        M10 50 Q25 80, 40 50 T70 50 T100 50;
        M10 50 Q25 20, 40 50 T70 50 T100 50"
            />
          </path>
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader87() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="#3b82f6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="180 50 50"
              dur="1.5s"
              repeatCount="indefinite"
              direction="alternate"
            />
          </rect>
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="#3b82f6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="180 50 50"
              dur="1.5s"
              repeatCount="indefinite"
              direction="alternate"
            />
          </rect>
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader88() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="g2">
              <stop offset="0%" stop-color="#60a5fa" />
              <stop offset="100%" stop-color="#1e3a8a" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#g2)" />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}
        
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="g2">
              <stop offset="0%" stop-color="#60a5fa" />
              <stop offset="100%" stop-color="#1e3a8a" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#g2)" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader89() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="80"
            stroke="#38bdf8"
            stroke-width="6"
            stroke-linecap="round"
          />
          <line
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            stroke="#38bdf8"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="80"
            stroke="#38bdf8"
            stroke-width="6"
            stroke-linecap="round"
          />
          <line
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            stroke="#38bdf8"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader90() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="12"
            transform="rotate(45 50 50)"
            fill="#22c55e"
          />
        </svg>
      </div>
  
       .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="12"
            transform="rotate(45 50 50)"
            fill="#22c55e"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader91() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="#a78bfa"
            stroke-width="6"
            opacity="0.8"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="#a78bfa"
            stroke-width="6"
            opacity="0.8"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader92() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polyline
            points="25,55 45,75 75,30"
            fill="none"
            stroke="#4ade80"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

       .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polyline
            points="25,55 45,75 75,30"
            fill="none"
            stroke="#4ade80"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader93() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="40" cy="50" r="18" fill="#3b82f6" opacity="0.8" />
          <circle cx="60" cy="50" r="18" fill="#06b6d4" opacity="0.8" />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="40" cy="50" r="18" fill="#3b82f6" opacity="0.8" />
          <circle cx="60" cy="50" r="18" fill="#06b6d4" opacity="0.8" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader94() {
  const [copied, setCopied] = useState(false);
  const code = ` 

  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="32" fill="#1e293b" />
          <polygon points="45,35 70,50 45,65" fill="#22c55e" />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}
        
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="32" fill="#1e293b" />
          <polygon points="45,35 70,50 45,65" fill="#22c55e" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader95() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path
            d="M50 20 C35 20, 30 35, 30 50 L30 65 L70 65 L70 50 C70 35, 65 20, 50 20 Z"
            fill="#a78bfa"
          />
          <circle cx="50" cy="72" r="5" fill="#a78bfa" />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}
      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path
            d="M50 20 C35 20, 30 35, 30 50 L30 65 L70 65 L70 50 C70 35, 65 20, 50 20 Z"
            fill="#a78bfa"
          />
          <circle cx="50" cy="72" r="5" fill="#a78bfa" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader96() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="10" fill="#f97316" />
          <g stroke="#f97316" stroke-width="5" stroke-linecap="round">
            <line x1="50" y1="15" x2="50" y2="30" />
            <line x1="50" y1="70" x2="50" y2="85" />
            <line x1="15" y1="50" x2="30" y2="50" />
            <line x1="70" y1="50" x2="85" y2="50" />
            <line x1="25" y1="25" x2="35" y2="35" />
            <line x1="65" y1="65" x2="75" y2="75" />
            <line x1="25" y1="75" x2="35" y2="65" />
            <line x1="65" y1="35" x2="75" y2="25" />
          </g>
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="10" fill="#f97316" />
          <g stroke="#f97316" stroke-width="5" stroke-linecap="round">
            <line x1="50" y1="15" x2="50" y2="30" />
            <line x1="50" y1="70" x2="50" y2="85" />
            <line x1="15" y1="50" x2="30" y2="50" />
            <line x1="70" y1="50" x2="85" y2="50" />
            <line x1="25" y1="25" x2="35" y2="35" />
            <line x1="65" y1="65" x2="75" y2="75" />
            <line x1="25" y1="75" x2="35" y2="65" />
            <line x1="65" y1="35" x2="75" y2="25" />
          </g>
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader97() {
  const [copied, setCopied] = useState(false);
  const code = ` 
  <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="40" cy="55" r="15" fill="#38bdf8" />
          <circle cx="60" cy="50" r="18" fill="#38bdf8" />
          <rect x="30" y="55" width="40" height="15" fill="#38bdf8" />
        </svg>
      </div>

   .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle cx="40" cy="55" r="15" fill="#38bdf8" />
          <circle cx="60" cy="50" r="18" fill="#38bdf8" />
          <rect x="30" y="55" width="40" height="15" fill="#38bdf8" />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}
export function SpinnerLoader98() {
  const [copied, setCopied] = useState(false);
  const code = ` 
       <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect x="30" y="45" width="40" height="35" rx="8" fill="#22c55e" />
          <path
            d="M35 45 V35 C35 25, 65 25, 65 35 V45"
            stroke="#22c55e"
            stroke-width="6"
            fill="none"
          />
        </svg>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="icon-box">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <rect x="30" y="45" width="40" height="35" rx="8" fill="#22c55e" />
          <path
            d="M35 45 V35 C35 25, 65 25, 65 35 V45"
            stroke="#22c55e"
            stroke-width="6"
            fill="none"
          />
        </svg>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}

export function SpinnerLoader100() {
  const [copied, setCopied] = useState(false);
  const code = ` 
        <div class="aivon">
        <div class="ai-shape">
          <span>A</span>
        </div>
        <h3>
          Ai<span class="ai-brand">von</span>
        </h3>
      </div>

      .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}

      `;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="loader">
      <div class="aivon">
        <div class="ai-shape">
          <span>A</span>
        </div>
        <h3>
          Ai<span class="ai-brand">von</span>
        </h3>
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <style>{`
        .aivon{text-align:center;color:#fff;}
.ai-shape{
  width:110px;height:110px;border-radius:50%;
  background:#111827;
  border:2px solid #a855f7;
  display:flex;justify-content:center;align-items:center;
  position:relative;
  box-shadow:0 0 25px #a855f7;
  margin-left:70px;
}
.ai-shape::before{
  content:"";
  position:absolute;
  width:60%;height:60%;
  border-radius:50%;
  border:2px dashed #a855f7;
}
.ai-shape span{
  font-size:30px;font-weight:800;color:#a855f7;
}
.ai-brand{color:#a855f7;}`}</style>
    </div>
  );
}

import "./proicon.css";
export default function Proicon() {
  return (
    <div>
      <div className="loading">
        <br />
        <div className="main">
          <div className="main-loader">
            <SpinnerLoader1 />
            <SpinnerLoader2 />
            <SpinnerLoader3 />
            <SpinnerLoader4 />
            <SpinnerLoader5 />
            <SpinnerLoader6 />
            <SpinnerLoader7 />
            <SpinnerLoader8 />
            <SpinnerLoader9 />
            <SpinnerLoader10 />
            <SpinnerLoader11 />
            <SpinnerLoader12 />
            <SpinnerLoader13 />
            <SpinnerLoader14 />
            <SpinnerLoader15 />
            
            <SpinnerLoader17 />
            <SpinnerLoader18 />
            <SpinnerLoader19 />
            <SpinnerLoader20 />
            <SpinnerLoader21 />
            <SpinnerLoader22 />
            <SpinnerLoader23 />
            <SpinnerLoader24 />
            <SpinnerLoader25 />
            <SpinnerLoader26 />
            <SpinnerLoader27 />
            <SpinnerLoader28 />
            <SpinnerLoader29 />
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
            <SpinnerLoader47 />
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
            <SpinnerLoader69 />
            <SpinnerLoader70 />
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
            <SpinnerLoader88 />
            <SpinnerLoader89 />
            <SpinnerLoader90 />
            <SpinnerLoader91 />
            <SpinnerLoader92 />
            <SpinnerLoader93 />
            <SpinnerLoader94 />
            <SpinnerLoader95 />
            <SpinnerLoader96 />
            <SpinnerLoader97 />
            <SpinnerLoader98 />
            <SpinnerLoader100 />
          </div>
        </div>
      </div>
    </div>
  );
}

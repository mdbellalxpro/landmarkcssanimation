import React, { useState } from "react";
import { iconDB } from "./search.jsx";
// components---------------------------------------------------------210---------------------------------------------------------------------------------//

import "./svgicon.css";
export default function Svgicon() {
  
  const [copied, setCopied] = useState(null);

   const handleCopy = (svg, name) => {
    navigator.clipboard.writeText(svg);
    setCopied(name);

    // 2 sec pore abar reset
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

    

  return (
    <div className="loading">
      <div className="main">
        <br />
        <div className="main-loader">
          {iconDB.map((item) => (
            <div key={item.svg} className="card">
              <div
                className="icon"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
               <p>{item.name}</p>
              <button
                onClick={() => handleCopy(item.svg, item.name)}
                style={{
                  marginTop: 6,
                  padding: "8px 10px",
                  fontSize: 12,
                  background: copied === item.name ? "#22c55e" : "#facc15",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                {copied === item.name ? "Copied ✅" : "Copy"}
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

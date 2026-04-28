// import components
import Pro from "../../src/proicon.jsx";
import Svg from "../../src/svgicon.jsx";
import Loader from "../../src/loader.jsx";

// import usetate
import { useState } from "react";

import "./category.css";
const category = () => {

    // react code writing 
    const [activeTab, setActiveTab] = useState("loader"); // default loader

  return (
    <div>
      <div className="category-container">
        <div className="categroy">
          <div className="category-content">
            {/* Tabs */}
            <div className="filter">
              <div className="icon" onClick={() => setActiveTab("loader")}>
                <h2>Loader 🔷</h2>
              </div>

              <div className="icon" onClick={() => setActiveTab("svg")}>
                <h2>SVG icon 🔥</h2>
              </div>

              <div
                className="icon premium-menu"
                onClick={() => setActiveTab("pro")}
              >
                <h2>Brand icon 💎</h2>
              </div>
            </div>

            {/* Content */}
            <div className="tab-content">
              {activeTab === "loader" && <Loader />}
              {activeTab === "svg" && <Svg />}
              {activeTab === "pro" && <Pro />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;

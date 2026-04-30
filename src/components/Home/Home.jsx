// import image

import HomeImage from "../../image/original-051635e627bd249a516e576c7e11a954.webp";
import Footer from "../../components/Footer/Footer.jsx";
// import Search-components
import Category from "../../components/category.jsx";

import { useState } from "react";
import { iconDB } from "../../search.jsx";

// import image  

import "./Home.css";
const Home = () => {

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = iconDB.filter(icon =>
        icon.name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(filtered);
      setShowResult(true);

    }
  };

   const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      setShowResult(false); // ❌ hide result
      setResult([]);
    }
  };

  const handleCopy = (svg, name) => {
    navigator.clipboard.writeText(svg);
    setCopied(name);

    // 2 sec pore abar reset
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };



  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(null);



  return (
    <div>
      <div className="home-container">
        <div className="home">
          <div className="home-content">
            <div className="animation">
              <div className="ripple">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="animation2">
              <div className="ripple">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="hero">
              <div className="left-content">
                <h2>Use The Best CSS Animation and</h2>
                <h2>Loader Of Defferent Type Desing</h2>
                <p>
                  We Provide the Best Quality CSS Animaton Loader And Other
                  Products Fully Free
                </p>
                <div className="button">
                  <button>Ai products</button>
                  <button>icons</button>
                </div>
              </div>
              <div className="right-content">
                <img src={HomeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <div className="search">
            <div className="input">
              <input
                 type="search"
                  placeholder="Type icon name & press Enter..."
                  value={search}
                  onChange={handleChange}
                  onKeyDown={handleSearch}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#facc15"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </div>
          </div>
          <div className="icon-search">
            <div className="main-search">
              {showResult && (
                <div className="search-menu">
                  {result.length > 0 ? (
                    result.map(icon => (
                      <div
                        className="search-desin"
                        key={icon.name}
                        style={{ textAlign: "center" }}
                      >
                        
                        {/* SVG Show */}
                        <div
                          className="svg-icon"
                          dangerouslySetInnerHTML={{ __html: icon.svg }}
                        />

                        <p style={{ fontSize: 14 }}>{icon.name}</p>

                        {/* 🔥 Copy Button */}
                       <button
                          onClick={() => handleCopy(icon.svg, icon.name)}
                          style={{
                            marginTop: 6,
                            padding: "4px 10px",
                            fontSize: 12,
                            background: copied === icon.name ? "#22c55e" : "#facc15",
                            border: "none",
                            borderRadius: 6,
                            cursor: "pointer"
                          }}
                        >
                          {copied === icon.name ? "Copied ✅" : "Copy"}
                      </button>

                      </div>
                    ))
                  ) : (
                    <div className="search-img">
                      <p>Your Product Search Not Found</p>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <Category />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

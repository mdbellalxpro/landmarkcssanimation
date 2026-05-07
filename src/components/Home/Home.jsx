// import image

import HomeImage from "../../image/original-051635e627bd249a516e576c7e11a954.webp";
import HomeImage2 from "../../image/ChatGPT Image May 2, 2026, 02_43_59 PM.png";
import Footer from "../../components/Footer/Footer.jsx";
// import Search-components
import Category from "../../components/category.jsx";
import Homeanimation from "../../components/homeaniamton.jsx";

import { useState } from "react";
import { Icons } from "../../search.jsx";

// import image

import "./Home.css";
const Home = () => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = Icons.filter((icon) =>
        icon.name.toLowerCase().includes(search.toLowerCase()),
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
          <Homeanimation className="home-aniamiton" />
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
                <h2><span style={{color: '#FCDD29'}}>SVG Modern!</span></h2>
                <h2 className="use"><span>Use The Best CSS</span> Animation and</h2>
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
          <div className="populer-svg-icon">
            <div className="svg-icon-menu">
              <div className="svg">
                <svg
                  viewBox="0 0 24 24"
                  stroke="#facc15"
                  fill="none"
                  stroke-width="2"
                >
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
              </div>
              <div className="svg">
                <svg
                  viewBox="0 0 24 24"
                  stroke="#facc15"
                  fill="none"
                  stroke-width="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                </svg>
              </div>
              <div className="svg">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#e11d48"
                    stroke-width="6"
                    fill="none"
                    stroke-dasharray="50 150"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="svg">
                <svg
                  viewBox="0 0 24 24"
                  stroke="#38bdf8"
                  fill="none"
                  stroke-width="2"
                >
                  <path d="M3 10L12 3L21 10" />
                  <path d="M5 10V20H19V10" />
                </svg>
              </div>
              <div className="svg">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="20" r="1.5" fill="#f59e0b" />
                  <circle cx="17" cy="20" r="1.5" fill="#f59e0b" />
                  <path
                    d="M3 4H5L7 14H18L20 7H6"
                    stroke="#f59e0b"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div className="svg svg-6">
                <svg
                  viewBox="0 0 24 24"
                  stroke="#ef4444"
                  fill="none"
                  stroke-width="2"
                >
                  <path d="M18 8A6 6 0 0 0 6 8C6 14 4 16 4 16H20C20 16 18 14 18 8Z" />
                  <path d="M13.7 21A2 2 0 0 1 10.3 21" />
                </svg>
              </div>
              <div className="svg svg-7">
                <svg viewBox="0 0 24 24" stroke="#3b82f6" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="svg svg-8">
                <svg
                  viewBox="0 0 24 24"
                  stroke="#22c55e"
                  fill="none"
                  stroke-width="2"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
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
                    result.map((icon) => (
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
                            background:
                              copied === icon.name ? "#22c55e" : "#facc15",
                            border: "none",
                            borderRadius: 6,
                            cursor: "pointer",
                          }}
                        >
                          {copied === icon.name ? "Copied ✅" : "Copy"}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="search-img">
                      <p>Your Product Search Not Found</p>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0ea5e9"
                        stroke-width="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
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

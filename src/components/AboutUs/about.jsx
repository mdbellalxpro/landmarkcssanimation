import React from "react";

import "./about.css";

const about = () => {
  return (
    <div>
      <div>
        <div class="au-wrapper">
          <div class="au-container">
            <div class="au-header">
              <h1>About Us</h1>
              <p>We build modern digital experiences for everyone.</p>
            </div>

            <div class="au-grid">
              <div class="au-left">
                <h2>Who We Are</h2>
                <p>
                  We are a creative team focused on building modern, fast, and
                  responsive web applications using React and Tailwind CSS.
                </p>

                <div class="au-features">
                  <div class="au-feature">
                    <span class="au-icon blue">✔</span>
                    <p>Clean & Modern Design</p>
                  </div>

                  <div class="au-feature">
                    <span class="au-icon green">⚡</span>
                    <p>Fast Performance</p>
                  </div>

                  <div class="au-feature">
                    <span class="au-icon purple">👤</span>
                    <p>User Friendly UI</p>
                  </div>
                </div>
              </div>

              <div class="au-right">
                <h3>Our Mission</h3>
                <p>
                  To help developers and businesses build beautiful, scalable
                  apps.
                </p>

                <div class="au-stats">
                  <div>
                    <h2>100+</h2>
                    <p>Projects</p>
                  </div>
                  <div>
                    <h2>50+</h2>
                    <p>Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

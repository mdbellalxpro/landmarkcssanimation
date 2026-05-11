
// TermsAndConditions.jsx

import React from "react";
import "./trems.css";

export default function TermsAndConditions() {
  return (
    <div className="terms-container">
      <div className="terms-card">

        {/* Header */}
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Last updated: April 2026</p>
        </div>

        {/* Intro */}
        <div className="intro-box">
          <h3>Welcome to Our Website</h3>

          <p>
            Our platform provides high-quality SVG Icons, CSS Animations,
            Animated UI Components, Brand Logos, and modern Web Design resources.
          </p>

          <p>
            By using our website, you agree to follow the terms and conditions below.
          </p>
        </div>

        {/* Section 1 */}
        <div className="terms-section">
          <h2>1. Acceptance of Terms</h2>

          <p>
            By accessing and using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="terms-section">
          <h2>2. Use of Our Services</h2>

          <p>
            You may use our SVG Icons, CSS Animations, Brand Logos,
            and design resources for personal or commercial projects,
            unless otherwise stated.
          </p>

          <p>
            You must not copy, resell, or redistribute our resources
            without permission.
          </p>
        </div>

        {/* Section 3 */}
        <div className="terms-section">
          <h2>3. Intellectual Property</h2>

          <p>
            All website content including SVG graphics, animations,
            code snippets, designs, and branding materials are protected
            by copyright and intellectual property laws.
          </p>
        </div>

        {/* Section 4 */}
        <div className="terms-section">
          <h2>4. User Responsibility</h2>

          <p>
            Users are responsible for how they use downloadable files,
            source code, animations, and design assets from our platform.
          </p>
        </div>

        {/* Section 5 */}
        <div className="terms-section">
          <h2>5. Limitation of Liability</h2>

          <p>
            We are not responsible for any damages, losses,
            or technical issues caused by using our resources or services.
          </p>
        </div>

        {/* Section 6 */}
        <div className="terms-section">
          <h2>6. Changes to Terms</h2>

          <p>
            We may update these Terms & Conditions at any time without prior notice.
            Continued use of the website means you accept the updated terms.
          </p>
        </div>

        {/* Contact */}
        <div className="contact-box">
          <h2>Contact Us</h2>

          <p>
            If you have any questions regarding these Terms & Conditions,
            contact us anytime.
          </p>

          <a href="mailto:support@yourwebsite.com">
           
          </a>
        </div>

      </div>
    </div>
  );
}
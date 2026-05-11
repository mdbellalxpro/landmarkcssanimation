// PrivacyPolicy.jsx
import React from "react";



import "./privicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-card">

        {/* Title */}
        <h1 className="privacy-title">Privacy Policy</h1>

        <p className="privacy-date">
          Last updated: April 2026
        </p>

        {/* Section 1 */}
        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, and usage data when you use our website or services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="privacy-section">
          <h2>2. How We Use Information</h2>
          <p>
            We use the collected data to improve our services, provide customer
            support, and enhance user experience.
          </p>
        </div>

        {/* Section 3 */}
        <div className="privacy-section">
          <h2>3. Cookies</h2>
          <p>
            We use cookies to analyze website traffic and improve functionality.
            You can disable cookies in your browser settings.
          </p>
        </div>

        {/* Section 4 */}
        <div className="privacy-section">
          <h2>4. Data Protection</h2>
          <p>
            We take appropriate security measures to protect your personal data
            from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        {/* Section 5 */}
        <div className="privacy-section">
          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party services (like analytics or hosting
            providers) that help us operate our website.
          </p>
        </div>

        {/* Contact */}
        <div className="privacy-contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at:
          </p>

          <a href="mailto:support@yourwebsite.com">
           
          </a>
        </div>

      </div>
    </div>
  );
}
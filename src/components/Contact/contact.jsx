import React from "react";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-wrapper-1">
      <div className="contact-container-1">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us. We usually respond within 24 hours. and any brand offer the sponsor and we ar run the add our website </p>

          <div className="info-list">

            <div className="info-item">
              <span></span>
              <span></span>
            </div>

            <div className="info-item">
              <span></span>
              <span></span>
            </div>

            <div className="info-item">
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form>

            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>
    </div>
  );
}
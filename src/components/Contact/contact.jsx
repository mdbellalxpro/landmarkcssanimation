
import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10">

        {/* Left Side - Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-500 mb-8">
            Feel free to reach out to us. We usually respond within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0H8m8 0H8M4 4h16v16H4V4z" />
              </svg>
              <span className="text-gray-700">support@yourwebsite.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7-1.5 1.5a11 11 0 005 5L14 17l7 3v2a2 2 0 01-2 2C9.716 24 0 14.284 0 2a2 2 0 012-2h2z" />
              </svg>
              <span className="text-gray-700">+880 1XXXXXXXXX</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
              </svg>
              <span className="text-gray-700">Mymensingh, Bangladesh</span>
            </div>

          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <form className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}